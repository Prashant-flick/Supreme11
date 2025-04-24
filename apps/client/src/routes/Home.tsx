import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/UseAuth";
import { ChevronRight, Trophy, Zap, Shield, Coins, CircleDollarSign } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Image = ({
  src,
  width,
  height,
  alt,
  className,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  className: string;
}) => {
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
};

export default function LandingPage() {
  const { isLogin } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (isLogin) {
      navigate("/dashboard");
    } else {
      navigate("/auth");
    }
  };

  return (
    <div className="flex w-full min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          {/* Replace the existing header logo section with this */}
          <div className="flex items-center gap-2">
            <Trophy className="h-8 w-8 text-[#b91c1c]" />
            <span className="text-xl font-bold text-[#b91c1c]">Supreme 11</span>
            <div className="flex items-center ml-2 bg-gradient-to-r from-[#14F195] to-[#9945FF] text-white text-xs px-2 py-1 rounded-full">
              <span>on Solana</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link to="#features" className="text-sm font-medium text-gray-700 hover:text-[#b91c1c]">
              Features
            </Link>
            <Link
              to="#how-it-works"
              className="text-sm font-medium text-gray-700 hover:text-[#b91c1c]"
            >
              How It Works
            </Link>
            <Link to="#rewards" className="text-sm font-medium text-gray-700 hover:text-[#b91c1c]">
              Rewards
            </Link>
            <Link to="#faq" className="text-sm font-medium text-gray-700 hover:text-[#b91c1c]">
              FAQ
            </Link>
          </nav>
          {isLogin ? (
            <div className="flex items-center gap-4">
              <Button className="bg-[#b91c1c] hover:bg-[#a11818] text-white">User</Button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/auth">
                <Button
                  variant="outline"
                  className="hidden outline-1 sm:flex border-[#b91c1c] text-[#b91c1c] hover:bg-[#b91c1c]/10"
                >
                  Log in
                </Button>
              </Link>
              <Link to="/auth">
                <Button className="bg-[#b91c1c] hover:bg-[#a11818] text-white">Sign up</Button>
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-red-50 py-20 md:py-32">
        <div className="container relative z-10">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900">
                Fantasy Cricket <span className="text-[#b91c1c]">Reimagined</span> on Solana
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Create your dream team, compete with friends, and win real rewards with Supreme 11's
                blockchain-powered fantasy cricket platform.
              </p>
              {/* Replace the existing hero button section with this */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleGetStarted}
                  className="bg-[#b91c1c] hover:bg-[#a11818] text-white h-12 px-8"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-[#b91c1c] text-[#b91c1c] hover:bg-[#b91c1c]/10 h-12 px-8"
                >
                  How It Works
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <div className="flex items-center gap-2 bg-gradient-to-r from-[#14F195]/10 to-[#9945FF]/10 px-3 py-2 rounded-full">
                  <div className="w-5 h-5 bg-gradient-to-r from-[#14F195] to-[#9945FF] rounded-full"></div>
                  <span className="text-sm font-medium">Powered by Solana Blockchain</span>
                </div>
              </div>
            </div>
            <div className="relative mx-auto max-w-sm md:max-w-none">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#b91c1c]/20 to-[#b91c1c]/40 opacity-75 blur-xl"></div>
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  width={500}
                  height={600}
                  alt="Supreme 11 App Interface"
                  className="relative rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
              Why Choose <span className="text-[#b91c1c]">Supreme 11</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              Experience fantasy cricket like never before with our Solana-powered platform
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-[#b91c1c]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Lightning Fast</h3>
              <p className="text-gray-600">
                Powered by Solana's high-performance blockchain for instant transactions and
                real-time updates.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-[#b91c1c]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Secure & Transparent</h3>
              <p className="text-gray-600">
                All transactions and team selections are recorded on the blockchain, ensuring
                complete fairness.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                <Coins className="h-6 w-6 text-[#b91c1c]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Real Rewards</h3>
              <p className="text-gray-600">
                Win SOL tokens and exclusive NFTs that have real value in the Solana ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-red-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
              How <span className="text-[#b91c1c]">Supreme 11</span> Works
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              Get started in just a few simple steps
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#b91c1c] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4 text-gray-900">Create Your Account</h3>
                <p className="text-gray-600">
                  Sign up and connect your Solana wallet to get started with Supreme 11.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#b91c1c] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4 text-gray-900">Build Your Dream Team</h3>
                <p className="text-gray-600">
                  Select your players from upcoming cricket matches to create your fantasy team.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#b91c1c] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4 text-gray-900">Compete & Win</h3>
                <p className="text-gray-600">
                  Join contests, climb the leaderboard, and win SOL tokens based on your team's
                  performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solana Integration Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
              Powered by <span className="text-[#b91c1c]">Solana</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              Experience the speed and security of the Solana blockchain
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#14F195]/10 rounded-full flex items-center justify-center">
                    <CircleDollarSign className="h-5 w-5 text-[#14F195]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Low Transaction Fees</h3>
                </div>
                <p className="text-gray-600 pl-14">
                  Enjoy minimal gas fees when creating teams, joining contests, and withdrawing
                  winnings.
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#14F195]/10 rounded-full flex items-center justify-center">
                    <Zap className="h-5 w-5 text-[#14F195]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Lightning Fast Transactions</h3>
                </div>
                <p className="text-gray-600 pl-14">
                  Experience sub-second finality with Solana's high-performance blockchain.
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#14F195]/10 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-[#14F195]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Secure & Transparent</h3>
                </div>
                <p className="text-gray-600 pl-14">
                  All transactions are recorded on the blockchain, ensuring complete fairness and
                  transparency.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-[#14F195]/20 to-[#9945FF]/30 opacity-70 blur-xl"></div>
              <div className="relative bg-white p-8 rounded-xl border border-gray-100 shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#14F195] to-[#9945FF] rounded-full flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      width="32"
                      height="32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path
                        d="M21.3333 12.0001C21.3333 17.1547 17.1546 21.3334 12 21.3334C6.84535 21.3334 2.66666 17.1547 2.66666 12.0001C2.66666 6.84542 6.84535 2.66675 12 2.66675C17.1546 2.66675 21.3333 6.84542 21.3333 12.0001Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M7.33334 12.0001L10.6667 15.3334L16.6667 9.33342"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-gray-900">
                  Connect Your Solana Wallet
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  Seamlessly connect your Phantom, Solflare, or other Solana wallets to start
                  playing.
                </p>
                <div className="flex justify-center">
                  <Button className="bg-gradient-to-r from-[#14F195] to-[#9945FF] hover:opacity-90 text-white border-0">
                    Connect Wallet
                  </Button>
                </div>
                <div className="mt-6 flex justify-center gap-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="Phantom Wallet"
                    className="rounded-full"
                  />
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="Solflare Wallet"
                    className="rounded-full"
                  />
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="Sollet Wallet"
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 md:p-12 lg:p-16">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 mb-4">
                  Ready to Play?
                </h2>
                <p className="text-gray-600 mb-6 max-w-md">
                  Join thousands of cricket fans already winning on Supreme 11. Sign up now and get
                  0.1 SOL as a welcome bonus!
                </p>
                <Button className="bg-[#b91c1c] hover:bg-[#a11818] text-white h-12 px-8">
                  Get Started Now
                </Button>
              </div>
              <div className="relative mx-auto max-w-sm md:max-w-none">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Cricket Trophy"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
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
                <li>
                  <Link href="#" className="text-sm hover:text-[#ff6b6b]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-sm hover:text-[#ff6b6b]">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-sm hover:text-[#ff6b6b]">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-[#ff6b6b]">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-[#ff6b6b]">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-[#ff6b6b]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-[#ff6b6b]">
                    Responsible Gaming
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-[#ff6b6b]">
                    KYC Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <Link href="#" className="text-gray-400 hover:text-white">
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
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
              <p className="text-sm text-gray-400">Download our app:</p>
              <div className="flex space-x-3 mt-2">
                <Link href="#" className="block">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    width={120}
                    height={40}
                    alt="App Store"
                    className="h-10"
                  />
                </Link>
                <Link href="#" className="block">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    width={120}
                    height={40}
                    alt="Google Play"
                    className="h-10"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Replace the existing footer copyright section with this */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Supreme 11. All rights reserved.
            </p>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <span className="text-sm text-gray-400">Powered by</span>
              <div className="bg-gradient-to-r from-[#14F195] to-[#9945FF] text-white text-xs px-2 py-1 rounded-full">
                Solana
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
