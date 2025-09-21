import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const InteractiveHoverButton = React.forwardRef(({ children, className, as: Component = "button", ...props }, ref) => {
  return (
    <Component
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-white dark:bg-transparent p-2 px-6 text-center font-semibold text-black dark:text-white",
        className
      )}
      {...props}>
      <div className="flex items-center gap-2">
        <div
          className="h-2 w-2 rounded-full bg-black dark:bg-white transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span
          className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div
        className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white dark:text-black opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </Component>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
