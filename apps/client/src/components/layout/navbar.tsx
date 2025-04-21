// import Link from "next/link";
import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SolanaBadge } from "@/components/ui/solana-badge";
import { cn } from "@/lib/utils";
const Link = ({ href, className, children }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

interface NavItem {
  href: string;
  label: string;
  isActive?: boolean;
}

interface NavbarProps {
  navItems: NavItem[];
  showAuthButtons?: boolean;
  userInitials?: string;
  userName?: string;
  className?: string;
}

export function Navbar({
  navItems,
  showAuthButtons = true,
  userInitials,
  userName,
  className,
}: NavbarProps) {
  const isLoggedIn = !!userInitials;

  return (
    <header className={cn("sticky top-0 z-40 w-full border-b bg-white", className)}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="h-8 w-8 text-[#b91c1c]" />
          <span className="text-xl font-bold text-[#b91c1c]">Supreme 11</span>
          <SolanaBadge className="ml-2" />
        </div>

        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium",
                item.isActive
                  ? "text-[#b91c1c] border-b-2 border-[#b91c1c]"
                  : "text-gray-700 hover:text-[#b91c1c]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <div className="bg-red-50 rounded-full p-2">
                <svg
                  className="h-5 w-5 text-[#b91c1c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-[#b91c1c]">{userInitials}</span>
                </div>
                {userName && (
                  <span className="hidden md:inline text-sm font-medium">{userName}</span>
                )}
              </div>
            </>
          ) : (
            showAuthButtons && (
              <>
                <Button
                  variant="outline"
                  className="hidden sm:flex border-[#b91c1c] text-[#b91c1c] hover:bg-[#b91c1c]/10"
                >
                  Log in
                </Button>
                <Button className="bg-[#b91c1c] hover:bg-[#a11818] text-white">Sign up</Button>
              </>
            )
          )}
        </div>
      </div>
    </header>
  );
}
