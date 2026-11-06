import { cn } from "@/lib/utils";

interface FormProgressProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export function FormProgress({ steps, currentStep, className }: FormProgressProps) {
  return (
    <div className={cn("w-full mb-8 md:mb-12", className)}>
      <div className="flex justify-between items-center relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-[var(--border)] z-0" />
        
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-[var(--accent)] z-0 transition-all duration-500 ease-in-out"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          
          return (
            <div key={step} className="relative z-10 flex flex-col items-center gap-2">
              <div 
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300 border-2",
                  isCompleted ? "bg-[var(--accent)] border-[var(--accent)] text-[var(--primary)]" : 
                  isCurrent ? "bg-[var(--surface)] border-[var(--accent)] text-[var(--primary)]" : 
                  "bg-[var(--surface)] border-[var(--border)] text-[var(--foreground-muted)]"
                )}
              >
                {isCompleted ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6667 3.5L5.25001 9.91667L2.33334 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              <span className={cn(
                "text-xs md:text-sm absolute top-10 whitespace-nowrap hidden md:block",
                isCurrent ? "text-[var(--primary)] font-medium" : "text-[var(--foreground-muted)]"
              )}>
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}