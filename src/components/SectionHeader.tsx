
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  number: string;
  title: string;
  className?: string;
}

export function SectionHeader({ number, title, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center mb-8", className)}>
      <span className="font-code text-primary mr-3 text-lg">{number}.</span>
      <h2 className="text-foreground text-2xl font-semibold tracking-tight uppercase">
        {title}
      </h2>
      <div className="ml-4 h-[1px] bg-border flex-grow max-w-xs" />
    </div>
  );
}
