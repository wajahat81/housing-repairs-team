import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ title, subtitle, align = "left", className }: SectionHeadingProps) {
  return (
    <div 
      className={cn(
        "mb-12 md:mb-16 flex flex-col", 
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <h2 className="text-4xl md:text-5xl text-[var(--primary)] mb-5 leading-tight">
        {title}
      </h2>
      
      {subtitle && (
        <p className={cn(
          "text-lg md:text-xl text-[var(--foreground-soft)] font-light leading-relaxed max-w-3xl",
          align === "center" && "text-center"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}