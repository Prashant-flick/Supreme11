import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: ReactNode;
  navItems: Array<{ href: string; label: string; isActive?: boolean }>;
  userInitials?: string;
  userName?: string;
  showAuthButtons?: boolean;
  minimalFooter?: boolean;
  className?: string;
}

export function PageLayout({
  children,
  navItems,
  userInitials,
  userName,
  showAuthButtons = true,
  minimalFooter = false,
  className,
}: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar
        navItems={navItems}
        userInitials={userInitials}
        userName={userName}
        showAuthButtons={showAuthButtons}
      />

      <main className={cn("flex-1", className)}>{children}</main>

      <Footer minimal={minimalFooter} />
    </div>
  );
}
