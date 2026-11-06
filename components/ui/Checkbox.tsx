import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  description?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, id, ...props }, ref) => {
    return (
      <div className="flex items-start gap-3">
        <div className="relative flex items-center justify-center mt-0.5">
          <input
            type="checkbox"
            id={id}
            ref={ref}
            className={cn(
              "peer h-5 w-5 appearance-none rounded-[var(--radius-sm)] border border-[var(--border-dark)] bg-[var(--surface)]",
              "checked:bg-[var(--primary)] checked:border-[var(--primary)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2",
              "transition-all duration-[var(--transition-fast)] cursor-pointer",
              "disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            {...props}
          />
          <svg
            className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-[var(--transition-fast)]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        
        {(label || description) && (
          <div className="flex flex-col gap-1">
            {label && (
              <label htmlFor={id} className="text-sm font-medium text-[var(--foreground)] cursor-pointer">
                {label}
              </label>
            )}
            {description && (
              <p className="text-sm text-[var(--foreground-soft)]">
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";