import { cn } from "@/lib/utils";


interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}


export function Container({
  children,
  className,
  wide = false,
}: ContainerProps) {

  return (

    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",

        wide
          ? "max-w-[1600px]"
          : "max-w-[1440px]",

        className
      )}
    >

      {children}

    </div>

  );

}