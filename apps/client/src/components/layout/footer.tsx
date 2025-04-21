// import Link from "next/link";
import { Trophy } from "lucide-react";
import { SolanaBadge } from "@/components/ui/solana-badge";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
  minimal?: boolean;
}
const Link = ({ href, className, children }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export function Footer({ className, minimal = false }: FooterProps) {
  const currentYear = new Date().getFullYear();

  if (minimal) {
    return (
      <footer className={cn("bg-white border-t py-6", className)}>
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Trophy className="h-6 w-6 text-[#b91c1c]" />
              <span className="text-lg font-bold text-[#b91c1c]">Supreme 11</span>
              <SolanaBadge className="ml-2" size="sm" />
            </div>
            <p className="text-sm text-gray-500">
              © {currentYear} Supreme 11. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={cn("bg-gray-900 text-gray-300 py-12", className)}>
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">Supreme 11</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              The next generation fantasy cricket platform powered by Solana blockchain.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Features", "How It Works", "About Us"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-[#ff6b6b]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Terms of Service", "Privacy Policy", "Responsible Gaming", "KYC Policy"].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm hover:text-[#ff6b6b]">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              {["facebook", "twitter", "instagram", "discord"].map((social) => (
                <Link key={social} href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">{social}</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-800 mt-4 pt-4 flex items-center gap-2">
              <span className="text-sm text-gray-400">Powered by</span>
              <SolanaBadge />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {currentYear} Supreme 11. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
