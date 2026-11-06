"use client";

import { useState, useRef } from "react";

interface FileUploadProps {
  label: string;
  accept?: string;
  multiple?: boolean;
  onChange?: (fileData: { name: string; data: string }[] | null) => void;
}

export function FileUpload({ label, accept = "image/*", multiple = true, onChange }: FileUploadProps) {
  const [uploadedFiles, setUploadedFiles] = useState<{name: string, data: string}[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const processFiles = async (files: FileList) => {
    const filePromises = Array.from(files).map((file) => {
      return new Promise<{ name: string; data: string } | null>((resolve) => {
        // Block non-images
        if (!file.type.startsWith("image/")) {
          alert(`Skipped "${file.name}": Only images are allowed.`);
          return resolve(null);
        }
        // Block large files (4MB limit per image)
        if (file.size > 4 * 1024 * 1024) {
          alert(`Skipped "${file.name}": File exceeds 4MB limit.`);
          return resolve(null);
        }

        const reader = new FileReader();
        reader.onloadend = () => {
          resolve({ name: file.name, data: reader.result as string });
        };
        reader.readAsDataURL(file);
      });
    });

    // Wait for all files to be processed
    const results = await Promise.all(filePromises);
    const validResults = results.filter((r): r is {name: string, data: string} => r !== null);
    
    // Add new files to the existing array
    const newTotalFiles = [...uploadedFiles, ...validResults];
    setUploadedFiles(newTotalFiles);
    
    if (onChange) {
      onChange(newTotalFiles.length > 0 ? newTotalFiles : null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files);
    }
  };

  const removeFile = (indexToRemove: number) => {
    const updated = uploadedFiles.filter((_, i) => i !== indexToRemove);
    setUploadedFiles(updated);
    if (onChange) onChange(updated.length > 0 ? updated : null);
  };

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-[var(--foreground)]">{label}</p>
      
      <div 
        className="relative border-2 border-dashed border-[var(--border)] rounded-[var(--radius-md)] p-8 text-center hover:border-[var(--accent)] transition-colors cursor-pointer"
        onClick={() => inputRef.current?.click()} 
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple} // Allows selecting multiple files in the window
          onChange={handleChange}
          className="hidden" 
        />
        
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--surface-soft)] flex items-center justify-center text-[var(--accent)]">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
          </div>
          <p className="text-sm font-medium text-[var(--primary)]">
            Click to upload images
          </p>
          <p className="text-xs text-[var(--foreground-soft)] mt-1">
            PNG, JPG, or WEBP only (max. 4MB per image)
          </p>
        </div>
      </div>

      {/* Render the list of uploaded files */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-2 mt-4">
          <p className="text-xs font-semibold text-[var(--foreground-soft)] uppercase tracking-wider">
            Evidence Attached ({uploadedFiles.length})
          </p>
          <div className="flex flex-col gap-2 max-h-40 overflow-y-auto pr-2">
            {uploadedFiles.map((file, i) => (
              <div key={i} className="flex items-center justify-between bg-[var(--surface-soft)] p-3 rounded-md border border-[var(--border)]">
                <span className="text-sm text-[var(--primary)] truncate max-w-[85%]">{file.name}</span>
                <button 
                  type="button" 
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    removeFile(i); 
                  }}
                  className="text-[var(--error)] hover:text-red-700"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}