import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  centered?: boolean;
}

const SectionTitle = ({ 
  children, 
  className,
  centered = false,
  ...props 
}: SectionTitleProps) => {
  return (
    <h2 
      className={cn(
        "section-title text-3xl md:text-4xl font-merriweather font-bold text-primary mb-6",
        centered && "text-center",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
