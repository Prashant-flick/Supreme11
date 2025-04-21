import { cn } from "@/lib/utils";

interface SolanaBadgeProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function SolanaBadge({ className, size = "md" }: SolanaBadgeProps) {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-xs px-2 py-1",
    lg: "text-sm px-3 py-1.5",
  };

  return (
    <div
      className={cn(
        "flex items-center bg-gradient-to-r from-[#14F195] to-[#9945FF] text-white rounded-full",
        sizeClasses[size],
        className
      )}
    >
      <span>on Solana</span>
    </div>
  );
}
