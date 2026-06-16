import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { submitToCRM } from "@/lib/crm";
import c9 from "@/assets/c9.jpg";
import c10 from "@/assets/c10.jpg";
import c11 from "@/assets/c11.jpg";
import c12 from "@/assets/c12.jpg";

export const Route = createFileRoute("/loggedin")({
  head: () => ({
    meta: [
      { title: "Partner & Investor Portal — Le Capital Moderne" },
      { name: "description", content: "Access your private investor desk, view exclusive market analysis, and premium research reports." },
    ],
  }),
  component: LoggedInPortal,
});

const RECOMMENDED_ARTICLES = [
  {
    id: 1,
    tag: "Macro Strategy",
    title: "Sovereign Wealth Funds & Bitcoin: The Shift in Reserve Asset Strategy",
    desc: "An in-depth analysis of how nation-states and sovereign funds are quietly allocating into digital assets to hedge against monetary expansion.",
    readTime: "8 min read",
    img: c10,
  },
  {
    id: 2,
    tag: "On-Chain Analytics",
    title: "Ethereum's Next Hard Fork: Technical Analysis & Yield Projections",
    desc: "Looking closely at the upcoming network upgrades, staking yield dynamics, and how institutional staking pools are positioning.",
    readTime: "6 min read",
    img: c11,
  },
  {
    id: 3,
    tag: "DeFi Yields",
    title: "Stablecoin Liquidity Pools: Optimising Yield in High-Interest Regimes",
    desc: "How tokenised treasury bills and decentralized liquidity protocols are creating premium risk-adjusted returns for treasury managers.",
    readTime: "5 min read",
    img: c12,
  },
  {
    id: 4,
    tag: "Tokenisation",
    title: "Real-World Asset Tokenisation: Real Estate and Credit Markets",
    desc: "A review of current institutional platforms putting private credit, debt instruments, and high-end real estate onto public ledgers.",
    readTime: "9 min read",
    img: c9,
  },
];

const EXCLUSIVE_BULLETINS = [
  {
    date: "June 16, 2026",
    title: "Derivatives Market Alert: Options Open Interest Hits Record High",
    summary: "Institutional positioning in CME BTC options points towards a significant volatility break-out by end of Q2. Recommended action: Hold long delta positions.",
  },
  {
    date: "June 15, 2026",
    title: "Federal Reserve Quantitative Tightening Update",
    summary: "Fed signals potential tapering of balance sheet reduction earlier than consensus estimates. Expected to boost liquid risk assets, particularly ETH and major DeFi tokens.",
  },
];

function LoggedInPortal() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "partner.doe@gmail.com",
    phone: "+44 7911 123456",
    country: "cy"
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCaseSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const nameParts = name.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    // Update local profile state to show persistence
    setProfile({
      name,
      email,
      phone,
      country: "cy"
    });

    const res = await submitToCRM({
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      country_name: "cy",
      description: message,
      source_id: "partner_portal",
      how_much_invested: "0",
      outline_your_case: message
    });

    setLoading(false);
    if (res.success) {
      setSubmitted(true);
    } else {
      setError(res.error || "Failed to submit message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFB] text-[#111111]" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Portal Top Header */}
      <header className="border-b border-[#E5E5E5] bg-white sticky top-0 z-20">
        <div className="container-edit py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="font-serif text-xl tracking-tight text-[#111111] hover:text-[#B8860B] transition-colors">
              Le Capital <span className="italic text-[#B8860B]">Moderne</span>
            </a>
            <span className="hidden sm:inline-block px-2 py-0.5 bg-[#FFF8E5] text-[#B8860B] rounded text-[10px] uppercase font-bold tracking-wider border border-[#B8860B]/10">
              Investor Portal
            </span>
          </div>
          <div className="flex items-center gap-4 text-[13px]">
            <span className="text-gray-500">Welcome, <strong>{profile.name}</strong></span>
            <a href="/" className="px-3 py-1.5 border border-[#E5E5E5] text-gray-700 hover:text-black hover:border-black transition-colors rounded">
              Log Out
            </a>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="container-edit py-10 max-w-6xl">
        <div className="mb-8 border-b border-[#E5E5E5] pb-6">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#B8860B] font-medium">Private Investor Desk</p>
          <h1 className="font-serif text-[40px] leading-tight text-[#111111] mt-2">Welcome Back, {profile.name}</h1>
          <p className="mt-2 text-gray-500 text-[15px]">Access your premium research reports, check live market insights, and manage your private advisor communications.</p>
        </div>

        {/* Dashboard summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border border-[#E5E5E5] p-6 rounded-lg shadow-sm">
            <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">Membership Level</p>
            <p className="font-serif text-2xl text-[#111111] mt-2">Private Client</p>
            <p className="text-xs text-green-700 font-semibold mt-1">✓ Premium Briefings Active</p>
          </div>
          <div className="bg-white border border-[#E5E5E5] p-6 rounded-lg shadow-sm">
            <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">Dedicated Advisory Desk</p>
            <p className="font-serif text-[18px] text-[#111111] mt-2">Swiss & Geneva Desk</p>
            <p className="text-xs text-gray-500 mt-1">Contact: Alexander V. R.</p>
          </div>
          <div className="bg-white border border-[#E5E5E5] p-6 rounded-lg shadow-sm">
            <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">Access Status</p>
            <p className="font-serif text-2xl text-[#B8860B] mt-2">Fully Unlocked</p>
            <p className="text-xs text-gray-500 mt-1">Premium Research Feed Active</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Recommended Articles & Bulletins */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <div className="flex items-center justify-between mb-6 border-b border-[#E5E5E5] pb-3">
                <h2 className="font-serif text-2xl text-[#111111]">Recommended Research Reports</h2>
                <span className="text-xs text-[#B8860B] uppercase tracking-wider font-semibold">Exclusive Member Feed</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {RECOMMENDED_ARTICLES.map((article) => (
                  <div key={article.id} className="bg-white border border-[#E5E5E5] rounded-lg overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
                    <div className="h-44 overflow-hidden relative">
                      <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <span className="absolute top-3 left-3 bg-[#111111] text-white text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded">
                        {article.tag}
                      </span>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-2">
                          <span>{article.readTime}</span>
                        </div>
                        <h3 className="font-serif text-[18px] leading-snug text-[#111111] group-hover:text-[#B8860B] transition-colors">
                          {article.title}
                        </h3>
                        <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                          {article.desc}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-[#F5F5F3] flex items-center justify-between text-xs font-semibold text-[#111111]">
                        <span className="group-hover:text-[#B8860B] transition-colors">Read Full Report</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6 border-b border-[#E5E5E5] pb-3">
                <h2 className="font-serif text-2xl text-[#111111]">Exclusive Advisory Bulletins</h2>
                <span className="text-xs text-[#B8860B] uppercase tracking-wider font-semibold font-mono">Live Briefings</span>
              </div>
              <div className="space-y-4">
                {EXCLUSIVE_BULLETINS.map((b) => (
                  <div key={b.title} className="bg-white border border-[#E5E5E5] p-5 rounded-lg">
                    <p className="text-[10px] text-[#B8860B] uppercase tracking-wider font-semibold">{b.date}</p>
                    <h3 className="font-serif text-[17px] mt-1 text-[#111111]">{b.title}</h3>
                    <p className="mt-2 text-xs text-gray-500 leading-relaxed">{b.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Profile & Contact Form */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#E5E5E5] p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-lg border-b border-[#E5E5E5] pb-3 mb-4">Account Information</h3>
              <div className="space-y-4 text-[14px]">
                <div>
                  <span className="block text-[11px] text-gray-400 uppercase tracking-wide font-medium">Name</span>
                  <span className="font-medium text-[#111111]">{profile.name}</span>
                </div>
                <div>
                  <span className="block text-[11px] text-gray-400 uppercase tracking-wide font-medium">Email</span>
                  <span className="font-medium text-[#111111]">{profile.email}</span>
                </div>
                <div>
                  <span className="block text-[11px] text-gray-400 uppercase tracking-wide font-medium">Number</span>
                  <span className="font-medium text-[#111111]">{profile.phone}</span>
                </div>
                <div>
                  <span className="block text-[11px] text-gray-400 uppercase tracking-wide font-medium">Primary Registry</span>
                  <span className="font-medium text-[#111111] uppercase">{profile.country}</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E5E5E5] p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-lg border-b border-[#E5E5E5] pb-3 mb-4">Message Advisory Desk</h3>
              {submitted ? (
                <div className="text-center py-6 bg-[#FAFAF8] border border-dashed border-[#E5E5E5] rounded">
                  <div className="mx-auto w-10 h-10 rounded-full bg-[#FFF8E5] flex items-center justify-center mb-3">
                    <span className="text-[#B8860B] text-lg">✓</span>
                  </div>
                  <p className="text-sm font-serif text-[#111111] font-medium">Inquiry Received</p>
                  <p className="mt-1 text-xs text-gray-500">We will respond within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-4 px-3 py-1.5 bg-[#111111] text-white text-[11px] uppercase tracking-wider hover:bg-[#B8860B] transition-colors rounded">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCaseSubmit} className="space-y-4">
                  {error && (
                    <div className="p-2 bg-red-50 text-red-600 rounded text-xs text-center border border-red-100 font-medium">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] font-medium tracking-wide text-[#111111] mb-1">Name</label>
                    <input type="text" name="name" required className="w-full h-9 px-3 bg-white border border-[#E5E5E5] text-[13px] outline-none focus:border-[#B8860B] transition rounded" />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium tracking-wide text-[#111111] mb-1">Email</label>
                    <input type="email" name="email" required className="w-full h-9 px-3 bg-white border border-[#E5E5E5] text-[13px] outline-none focus:border-[#B8860B] transition rounded" />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium tracking-wide text-[#111111] mb-1">Number</label>
                    <input type="tel" name="phone" required className="w-full h-9 px-3 bg-white border border-[#E5E5E5] text-[13px] outline-none focus:border-[#B8860B] transition rounded" />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium tracking-wide text-[#111111] mb-1">Message</label>
                    <textarea name="message" required rows={3} placeholder="Message" className="w-full p-2 bg-white border border-[#E5E5E5] text-[13px] outline-none focus:border-[#B8860B] transition resize-none rounded"></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-10 bg-[#111111] text-white text-[12px] uppercase tracking-[0.2em] hover:bg-[#B8860B] disabled:bg-gray-400 transition-colors flex items-center justify-center gap-2 rounded"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E5E5E5] mt-20">
        <div className="container-edit py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-gray-500">
          <p>© {new Date().getFullYear()} Le Capital Moderne · Secure Portal Desk</p>
          <div className="flex gap-4">
            <a href="/" className="hover:text-black">Home Page</a>
            <a href="/register" className="hover:text-black">Contact Desk</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
