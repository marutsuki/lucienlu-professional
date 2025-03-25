import React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface SectionProps {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
}

export function Section({ id, title, className, children, fullHeight = false }: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "w-full py-16 scroll-mt-16",
        fullHeight && "min-h-[calc(100vh-4rem)]",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <Separator className="mb-8" />
        {children}
      </div>
    </section>
  );
}
