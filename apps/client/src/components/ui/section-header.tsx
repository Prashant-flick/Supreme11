import type React from "react";
import Link from "@/components/ui/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  viewAllLink?: string;
  viewAllLabel?: string;
  rightContent?: React.ReactNode;
  className?: string;
}

export function SectionHeader({
  title,
  viewAllLink,
  viewAllLabel = "View All",
  rightContent,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex justify-between items-center mb-4", className)}>
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>

      {rightContent ? (
        rightContent
      ) : viewAllLink ? (
        <Link href={viewAllLink} className="text-sm text-[#b91c1c] flex items-center">
          {viewAllLabel} <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      ) : null}
    </div>
  );
}
