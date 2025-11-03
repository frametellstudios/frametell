import { ReactNode } from "react";

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
}

export function HorizontalScroll({ children, className = "" }: HorizontalScrollProps) {
  return (
    <div className={`md:hidden ${className}`}>
      <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
        <div className="flex gap-4 pb-4">
          {children}
        </div>
      </div>
    </div>
  );
}
