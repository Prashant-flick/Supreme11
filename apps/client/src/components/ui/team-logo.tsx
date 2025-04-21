import Image from "next/image";
import { cn } from "@/lib/utils";

interface TeamLogoProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function TeamLogo({ src, alt, size = "md", className }: TeamLogoProps) {
  const sizeMap = {
    sm: { container: "h-8 w-8", image: 20 },
    md: { container: "h-10 w-10", image: 24 },
    lg: { container: "h-12 w-12", image: 32 },
  };

  const { container, image } = sizeMap[size];

  return (
    <div
      className={cn(
        container,
        "bg-white rounded-full flex items-center justify-center shadow-sm",
        className
      )}
    >
      <image
        src={src || `/placeholder.svg?height=${image}&width=${image}`}
        width={image}
        height={image}
        alt={alt}
        className="rounded-full"
      />
    </div>
  );
}
