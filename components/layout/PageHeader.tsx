import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
}

export function PageHeader({ title, subtitle, description, className, children }: PageHeaderProps) {
  return (
    <div className={cn("border-b bg-muted/50", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {subtitle && (
          <p className="text-sm font-medium text-muted-foreground mb-2">{subtitle}</p>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-lg text-muted-foreground max-w-3xl">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
}

