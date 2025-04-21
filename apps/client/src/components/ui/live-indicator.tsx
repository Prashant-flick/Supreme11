import { cn } from "@/lib/utils";

interface LiveIndicatorProps {
  className?: string;
  label?: string;
}

export function LiveIndicator({ className, label = "Live" }: LiveIndicatorProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
      <span className="text-sm text-red-500 font-medium">{label}</span>
    </div>
  );
}
