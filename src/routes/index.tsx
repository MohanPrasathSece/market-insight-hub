import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import author from "@/assets/author.jpg";
import c1 from "@/assets/c1.jpg";
import c2 from "@/assets/c2.jpg";
import c3 from "@/assets/c3.jpg";
import c4 from "@/assets/c4.jpg";
import c5 from "@/assets/c5.jpg";
import c6 from "@/assets/c6.jpg";
import c7 from "@/assets/c7.jpg";
import c8 from "@/assets/c8.jpg";
import c9 from "@/assets/c9.jpg";
import c10 from "@/assets/c10.jpg";
import c11 from "@/assets/c11.jpg";
import c12 from "@/assets/c12.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Swiss Maestro's Digital Playbook: Why Roger Federer is Quietly Venturing Into Crypto — Le Capital Moderne" },
      { name: "description", content: "Roger Federer remains arguably the most universally liked Swiss figure, even after his retirement. Inside the private digital asset allocations and views on blockchain that are defining his post-court legacy." },
      { property: "og:title", content: "The Swiss Maestro's Digital Playbook: Why Roger Federer is Quietly Venturing Into Crypto" },
      { property: "og:description", content: "Inside the digital asset allocations behind Roger Federer's Swiss portfolio." },
    ],
  }),
  component: Index,
});

const R = "/register";
const openProps = { href: R, target: "_blank", rel: "noopener noreferrer" } as const;

const NAV = ["Markets", "Business", "Technology", "Innovation", "Investing", "Digital Assets", "Economy", "Opinion", "Research", "Analysis", "Latest News", "Trending"];

const TICKER = [
  "Bitcoin reclaims $110K as institutional flows accelerate",
  "Swiss National Bank explores SNB-backed digital currency pilots",
  "Switzerland's Crypto Valley sees 24% surge in venture capital funding",
  "Spot Ethereum ETFs cross $30B in net inflows",
  "Stablecoin market cap pushes past $260B",
  "Roger Federer podcast appearance sparks digital trust discussion",
  "AI trading desks now account for 41% of crypto spot volume",
];

const SIDEBAR = [
  ["Trending", ["Inside Switzerland's quiet crypto rise", "How Federer became the face of digital trust", "The Zug payments roadmap explained", "Why Federer's family office holds bitcoin", "The Swiss maestro effect: measuring trust in crypto"]],
  ["Editor's Picks", ["The billionaire crypto playbook — five lessons", "A field guide to corporate treasury bitcoin", "How retail followed Federer into digital assets", "When public markets stop setting the price", "The infrastructure layer no one is pricing"]],
  ["Most Read", ["Bitcoin at $110K: what changes for portfolios", "Switzerland's quiet institutional moment", "The new economics of digital trust", "Stablecoins and the future of Swiss franc dominance", "What family offices are buying this quarter"]],
  ["Research Briefings", ["Digital asset allocation models, Q4", "Swiss treasury crypto report", "Macro outlook and rate trajectory", "On-chain flows: institutional dashboard", "Cross-border crypto settlement quarterly"]],
];

const RELATED = [
  { cat: "Bitcoin", img: c1, title: "Bitcoin At $110K: The Quiet Rerating Of A Reserve Asset", sum: "Institutional flows have rewritten the demand side of the bitcoin market." },
  { cat: "Ethereum", img: c2, title: "Ethereum's Institutional Moment Has Finally Arrived", sum: "Spot ETFs, restaking and tokenised assets are reshaping the network's investor base." },
  { cat: "Switzerland", img: c3, title: "Why Switzerland Is Still The Hub Of Crypto Wealth", sum: "Three years after its first regulatory framework, the nation's balance sheet remains a benchmark." },
  { cat: "Philanthropy", img: c4, title: "Inside Federer's Quiet Position In Blockchain", sum: "What Swiss filings reveal — and conceal — about the tennis star's digital assets." },
  { cat: "Trust", img: c5, title: "How Federer's Endorsement Defines Long-Duration Value", sum: "The assets Federer has championed have quietly outperformed expectations." },
  { cat: "Trading", img: c6, title: "Crypto Trading Desks Are Now Run Like Macro Funds", sum: "Inside the institutional turn at the world's largest digital asset venues." },
  { cat: "AI", img: c7, title: "How AI Models Are Reshaping Crypto Market Structure", sum: "Algorithmic flows now drive a majority of spot volume on top exchanges." },
  { cat: "Exchanges", img: c8, title: "The New Generation Of Regulated Crypto Venues", sum: "How custody, surveillance and compliance became the real moat." },
  { cat: "Blockchain", img: c9, title: "Programmable Settlement Comes For Capital Markets", sum: "Tokenisation is finally moving from pilots to live institutional rails." },
  { cat: "Markets", img: c10, title: "Bulls, Bears And Bitcoin: Reading The New Cycle", sum: "Why the 2026 cycle looks structurally different from the last." },
  { cat: "NFTs", img: c11, title: "After The Hype: Where NFTs Quietly Found Real Use", sum: "From ticketing to brand loyalty, on-chain collectibles found a second act." },
  { cat: "Retail", img: c12, title: "How Retail Investors Are Trading Crypto In 2026", sum: "Mobile-first platforms, copy trading and the new face of digital investing." },
];

const SOCIAL = ["LinkedIn", "X", "Facebook", "YouTube", "Telegram", "Instagram"];

const FOOTER_COLS: Array<[string, string[]]> = [
  ["Sections", ["Markets", "Business", "Technology", "Innovation", "Investing", "Digital Assets", "Economy", "Opinion", "Research", "Analysis"]],
  ["Crypto Coverage", ["Bitcoin", "Ethereum", "Stablecoins", "Dogecoin", "DeFi", "NFTs", "Tokenisation", "On-Chain Data", "Exchanges", "Mining"]],
  ["Markets & Data", ["Live Quotes", "Crypto Heatmap", "ETF Tracker", "Corporate Treasuries", "Macro Calendar", "Earnings Calendar", "Commodities", "Rates & Bonds", "FX", "Indices"]],
  ["Research", ["2026 Outlook", "Weekly Briefing", "Premium Reports", "Sector Models", "Allocation Tools", "Whitepapers", "Methodology", "Glossary", "Investor Education", "Webinars"]],
  ["Company", ["About", "Editorial Team", "Newsroom", "Careers", "Press Office", "Investor Relations", "Editorial Standards", "Corrections", "Diversity Report", "Contact"]],
  ["Account", ["Sign In", "Register", "Subscribe", "Newsletter", "Manage Subscription", "Group Subscriptions", "Student Access", "Gift Articles", "Apps", "RSS Feeds"]],
  ["Partners", ["Advertise", "Sponsored Content", "Events & Summits", "Awards", "Syndication", "Licensing", "Affiliate Program", "Brand Studio", "Newsletters For Business", "Custom Research"]],
  ["Legal", ["Privacy Policy", "Terms Of Service", "Cookie Settings", "Disclosures", "Accessibility", "Modern Slavery Statement", "Code Of Conduct", "Whistleblower", "Sitemap", "Help Centre"]],
];



function Index() {
  return (
    <div className="bg-white text-[#111111]" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Top utility bar */}
      <div className="border-b border-[#E5E5E5] text-[12px] text-[#555555]">
        <div className="container-edit flex items-center justify-between py-2">
          <span className="tracking-wide">Tuesday, June 16, 2026 · International Edition</span>
          <div className="hidden md:flex items-center gap-5">
            <a href="/register" className="hover:text-[#B8860B] transition-colors">Contact Desk</a>
            <a href="/loggedin" className="hover:text-[#B8860B] transition-colors font-medium text-[#B8860B]">Sign In</a>
            <a href="/register" className="hover:text-[#B8860B] transition-colors">Newsletter</a>
          </div>
        </div>
      </div>

      {/* Masthead */}
      <header className="border-b border-[#E5E5E5]">
        <div className="container-edit py-8 text-center">
          <a {...openProps} className="inline-block">
            <h1 className="font-serif text-[44px] md:text-[64px] leading-[1.05] tracking-tight text-[#111111]">
              Le Capital <span className="italic text-[#B8860B]">Moderne</span>
            </h1>
          </a>
          <p className="mt-3 text-[12px] uppercase tracking-[0.32em] text-[#555555]">
            Financial Intelligence For The Modern Investor
          </p>
        </div>
        <nav className="border-t border-[#E5E5E5]">
          <div className="container-edit flex flex-wrap items-center justify-center gap-x-7 gap-y-2 py-3 text-[13px] font-medium tracking-wide">
            {NAV.map((n) => (
              <a key={n} {...openProps} className="text-[#111111] hover:text-[#B8860B] transition-colors">
                {n}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Breaking news ticker */}
      <div className="bg-[#111111] text-white overflow-hidden">
        <div className="container-edit flex items-center gap-4 py-2.5 text-[12px]">
          <span className="bg-[#B8860B] text-white px-2 py-0.5 uppercase tracking-[0.18em] text-[10px] whitespace-nowrap">Live · Markets</span>
          <div className="relative flex-1 overflow-hidden">
            <div className="flex gap-12 whitespace-nowrap animate-marquee">
              {[...TICKER, ...TICKER].map((t, i) => (
                <a key={i} {...openProps} className="hover:text-[#D4AF37]">
                  · {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <section className="container-edit pt-8 pb-20 animate-fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: Categories, LCM ePaper Box, Lifestyle, Health */}
          <aside className="hidden lg:block lg:col-span-3 xl:col-span-2.5 border-r border-[#E5E5E5] pr-6 space-y-8">
            {/* Lifestyle category */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 block mb-2 font-sans">Life Style</span>
              <a {...openProps} className="block font-serif text-[15px] font-bold leading-snug text-[#111111] hover:text-[#B8860B] transition-colors mb-2">
                The new Alpine chalets bought entirely with digital asset earnings. Inside Switzerland's luxury crypto properties.
              </a>
              <p className="text-[13px] text-[#555555] leading-relaxed">
                As wealth structures evolve in Zug and Geneva, luxury real estate is matching the shift.
              </p>
            </div>

            {/* Health category */}
            <div className="pt-6 border-t border-[#E5E5E5]">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 block mb-2 font-sans">Health</span>
              <a {...openProps} className="block font-serif text-[15px] font-bold leading-snug text-[#111111] hover:text-[#B8860B] transition-colors mb-2">
                Swiss clinics integrate blockchain for medical history portability.
              </a>
              <p className="text-[13px] text-[#555555] leading-relaxed">
                Decentralised ledger technology is finding an unexpected foothold in premium alpine wellness.
              </p>
            </div>

            {/* LCM ePaper Card */}
            <div className="pt-6 border-t border-[#E5E5E5]">
              <div className="bg-red-600 text-white font-bold text-[9px] tracking-[0.2em] uppercase py-1 px-2.5 inline-block rounded mb-2.5 font-sans">
                Flat 40% OFF
              </div>
              <h5 className="font-serif text-[17px] font-bold text-[#111111] leading-tight">Le Capital Moderne ePaper</h5>
              <p className="text-[12px] text-[#555555] mt-1.5 leading-relaxed">
                Read the daily digital edition of Le Capital Moderne on your tablet.
              </p>
              <div className="my-4 flex justify-center">
                <div className="w-24 h-32 bg-white border border-[#E5E5E5] rounded p-2 flex flex-col justify-between shadow-md">
                  <div className="border-b border-[#E5E5E5] pb-1 text-[6px] font-serif text-center font-bold tracking-tighter">
                    Le Capital Moderne
                  </div>
                  <div className="flex-1 flex flex-col justify-center gap-1">
                    <div className="h-1 bg-gray-200 w-full"></div>
                    <div className="h-1 bg-gray-200 w-5/6"></div>
                    <div className="h-1 bg-gray-200 w-4/6"></div>
                  </div>
                  <div className="text-[5px] text-[#B8860B] text-center font-semibold uppercase">
                    ePaper PDF
                  </div>
                </div>
              </div>
              <a href="/register" className="block w-full py-2 bg-[#111111] hover:bg-[#B8860B] text-white text-[11px] uppercase tracking-[0.2em] font-medium transition-colors rounded text-center font-sans">
                Subscribe Now
              </a>
            </div>
          </aside>

          {/* MIDDLE COLUMN: Hero Image, Main Title, Dialogue Conversation Transcript */}
          <main className="col-span-12 lg:col-span-6 xl:col-span-6.5 lg:border-r lg:border-[#E5E5E5] lg:px-6 space-y-6">
            
            {/* Title Section */}
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#B8860B] font-semibold block font-sans">Special Feature · Switzerland</span>
              <h2 className="font-serif text-[32px] md:text-[44px] leading-[1.1] tracking-tight text-[#111111]">
                The 250€ Experiment: Swiss Influencer Details 10x Returns in Crypto Portfolio
              </h2>
              <p className="text-[17px] leading-relaxed text-[#555555] font-serif italic">
                Eleanor Whitfield sits down with a leading Swiss blockchain influencer to discuss why starting small is the best way to underwrite digital asset volatility.
              </p>
              <div className="flex items-center gap-3 text-[11px] text-[#777777] tracking-wide pt-1 font-sans">
                <span>Eleanor Whitfield</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5E5E5]" />
                <span>June 16, 2026</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5E5E5]" />
                <span>8 min read</span>
              </div>
            </div>

            {/* Hero Image */}
            <a {...openProps} className="block group overflow-hidden rounded-lg">
              <img
                src={hero}
                alt="Swiss Crypto Influencer discussing digital assets"
                width={1200}
                height={675}
                className="w-full h-auto object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
              />
              <p className="mt-3 text-[11px] text-[#555555] italic text-center leading-normal">
                A Swiss digital assets influencer detailing how he turned a 250€ trial into 10x profits in Zug's Crypto Valley. Photograph for Le Capital Moderne.
              </p>
            </a>

            {/* Dialogue Conversation Section */}
            <div className="border-t border-[#E5E5E5] pt-6 space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-[12px] uppercase font-sans">
                  EW
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#555555] font-bold font-sans">Eleanor Whitfield</p>
                  <p className="mt-1 text-[16px] leading-[1.6] text-[#222222]">
                    Let’s start with the basics. A lot of retail investors are intimidated by crypto's volatility. How should they begin?
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#B8860B] text-white flex items-center justify-center font-bold text-[12px] uppercase font-sans">
                  SI
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#B8860B] font-bold font-sans">Swiss Influencer</p>
                  <p className="mt-1 text-[16px] leading-[1.6] text-[#222222]">
                    I tell people to keep it simple and easy. Don't throw your life savings in. I ran a test recently: I invested exactly <strong className="text-black">250€</strong> into Swiss-regulated retail digital baskets. Within a few weeks, that position returned a <strong className="text-[#B8860B]">10x profit</strong>—valuing it at <strong className="text-black">2,500€</strong>.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-[12px] uppercase font-sans">
                  EW
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#555555] font-bold font-sans">Eleanor Whitfield</p>
                  <p className="mt-1 text-[16px] leading-[1.6] text-[#222222]">
                    A 10x return is remarkable, but isn’t that level of return typical of high-risk speculative tokens? How was this achieved on compliant Swiss rails?
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#B8860B] text-white flex items-center justify-center font-bold text-[12px] uppercase font-sans">
                  SI
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#B8860B] font-bold font-sans">Swiss Influencer</p>
                  <p className="mt-1 text-[16px] leading-[1.6] text-[#222222]">
                    It was structured. By routing the 250€ into a mix of Layer-1 infrastructure tokens and tokenized real-world assets (RWAs) in Zug's Crypto Valley, we captured momentum while staying protected by Switzerland's strict digital banking framework. The key is using compliant, secure CRM endpoints and regulated private banks.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-[12px] uppercase font-sans">
                  EW
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#555555] font-bold font-sans">Eleanor Whitfield</p>
                  <p className="mt-1 text-[16px] leading-[1.6] text-[#222222]">
                    What is the main takeaway for retail investors watching this space?
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#B8860B] text-white flex items-center justify-center font-bold text-[12px] uppercase font-sans">
                  SI
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#B8860B] font-bold font-sans">Swiss Influencer</p>
                  <p className="mt-1 text-[16px] leading-[1.6] text-[#222222]">
                    Start small, keep it simple, and use secure platforms. If you can test the waters with 250€, you can learn how the rails work without risking significant capital. The Swiss model is proving that compliance and high performance can coexist.
                  </p>
                </div>
              </div>
            </div>

            {/* Author box */}
            <div className="mt-12 pt-8 border-t border-[#E5E5E5] flex gap-4 items-start">
              <a {...openProps}>
                <img src={author} alt="Eleanor Whitfield" className="w-16 h-16 rounded-full object-cover shadow-sm animate-fade-up" />
              </a>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#555555] font-bold font-sans">Senior Markets Correspondent</p>
                <a {...openProps}><h4 className="font-serif text-lg font-bold text-[#111111] hover:text-[#B8860B] transition-colors mt-0.5">Eleanor Whitfield</h4></a>
                <p className="mt-1.5 text-[14px] text-[#555555] leading-relaxed">
                  Eleanor writes on capital markets, digital assets and the institutions reshaping global finance. Previously a markets editor in London and Hong Kong.
                </p>
              </div>
            </div>
          </main>

          {/* RIGHT COLUMN: Video Cards, Premium research, Editor picks */}
          <aside className="col-span-12 lg:col-span-3 space-y-8">
            
            {/* TOI+ Inspired Featured Video block */}
            <div className="space-y-6">
              <h4 className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#B8860B] pb-2 border-b border-[#E5E5E5] font-sans">
                Featured Video
              </h4>
              
              <div className="space-y-6">
                {[
                  {
                    category: "SWISS CRYPTO VALLEY SUMMIT",
                    title: "Zug Summit: Global Influencers Reveal 10x Profit Portfolio Strategies",
                    img: c1,
                    duration: "10:38"
                  },
                  {
                    category: "GENEVA FINANCIAL DESK",
                    title: "How Compliance Rails Let Swiss Banks Route Digital Assets Safely",
                    img: c2,
                    duration: "09:30"
                  },
                  {
                    category: "ZUG BANKING PIPELINE",
                    title: "Inside the New Retail Blockchain Infrastructure Changing Private Banking",
                    img: c3,
                    duration: "05:15"
                  }
                ].map((v, idx) => (
                  <a key={idx} {...openProps} className="group block space-y-2.5">
                    <div className="relative overflow-hidden bg-black aspect-video rounded-md shadow-sm">
                      <img
                        src={v.img}
                        alt={v.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                      />
                      {/* Play Icon and Duration badge */}
                      <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-[10px] text-white flex items-center gap-1 font-medium font-sans">
                        <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        {v.duration}
                      </div>
                    </div>
                    <div className="space-y-1">
                      {/* Red label header */}
                      <span className="inline-block text-[9px] font-bold tracking-[0.1em] text-red-600 uppercase font-sans">
                        {v.category}
                      </span>
                      <h5 className="font-serif text-[15px] font-bold leading-snug text-[#111111] group-hover:text-[#B8860B] transition-colors">
                        {v.title}
                      </h5>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Premium Research Box */}
            <div className="bg-[#111111] text-white p-6 rounded-lg">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#D4AF37] font-bold font-sans">Premium Research</p>
              <p className="font-serif text-[20px] leading-snug mt-2 font-bold">The 2026 Investor Intelligence Briefing</p>
              <a {...openProps} className="inline-block mt-4 text-[12px] uppercase tracking-[0.2em] border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] font-medium transition-colors font-sans">
                Request Access
              </a>
            </div>

            {/* Editor's Picks / Most Read list from original sidebar */}
            {SIDEBAR.slice(0, 2).map(([title, items]) => (
              <div key={title as string} className="pt-6 border-t border-[#E5E5E5]">
                <h4 className="text-[11px] uppercase tracking-[0.24em] text-[#B8860B] pb-3 mb-4 border-b border-[#E5E5E5] font-bold font-sans">{title as string}</h4>
                <ul className="space-y-4">
                  {(items as string[]).map((it, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="font-serif text-[18px] text-[#D4AF37] leading-none w-5 font-bold">{String(idx + 1).padStart(2, "0")}</span>
                      <a {...openProps} className="font-serif text-[15px] leading-snug text-[#111111] hover:text-[#B8860B] transition-colors">{it}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-[#E5E5E5] bg-[#FAFAF7]">
        <div className="container-edit py-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#B8860B]">Related Coverage</p>
              <h3 className="font-serif text-[36px] mt-2">More From Le Capital Moderne</h3>
            </div>
            <a {...openProps} className="hidden md:inline-block text-[12px] uppercase tracking-[0.2em] border-b border-[#111111] pb-1 hover:text-[#B8860B] hover:border-[#B8860B]">
              View All Coverage
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {RELATED.map((r, i) => (
              <a key={i} {...openProps} className="group block">
                <div className="overflow-hidden">
                  <img src={r.img} alt={r.title} width={800} height={500} loading="lazy" className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-[#B8860B]">{r.cat}</p>
                <h4 className="font-serif text-[22px] leading-snug mt-2 text-[#111111] group-hover:text-[#B8860B] transition-colors">{r.title}</h4>
                <p className="mt-2 text-[15px] text-[#555555] leading-relaxed">{r.sum}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-y border-[#E5E5E5]">
        <div className="container-edit py-20 text-center max-w-2xl mx-auto animate-fade-up">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#B8860B]">The Briefing</p>
          <h3 className="font-serif text-[44px] leading-tight mt-3">Stay Ahead Of Market Trends</h3>
          <p className="mt-4 text-[17px] text-[#555555] leading-relaxed mb-8">
            Receive weekly insights and market analysis from the Le Capital Moderne editorial desk.
          </p>
          <a href="/register" className="inline-block h-12 px-8 bg-[#111111] text-white text-[13px] uppercase tracking-[0.2em] hover:bg-[#B8860B] transition-colors leading-[48px] text-center font-medium">
            Get In Touch
          </a>
          <div className="mt-10 flex justify-center gap-6 text-[12px] uppercase tracking-[0.2em] text-[#555555]">
            {SOCIAL.map((s) => (
              <a key={s} {...openProps} className="hover:text-[#B8860B]">{s}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white">
        <div className="container-edit py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 mb-12 border-b border-white/10">
            <div className="md:col-span-2">
              <h4 className="font-serif text-3xl">
                Le Capital <span className="italic text-[#D4AF37]">Moderne</span>
              </h4>
              <p className="mt-4 text-[14px] text-white/65 leading-relaxed max-w-xl">
                Financial intelligence for the modern investor. Editorial, research and analysis from a global newsroom covering markets, technology and the digital asset economy.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.2em] text-white/60">
                <span className="px-3 py-1 border border-white/15 rounded-full">ISO 27001 Certified</span>
                <span className="px-3 py-1 border border-white/15 rounded-full">Editorial Trust Charter</span>
                <span className="px-3 py-1 border border-white/15 rounded-full">Member · WAN-IFRA</span>
              </div>
            </div>
            <div>
              <h5 className="text-[11px] uppercase tracking-[0.24em] text-[#D4AF37] mb-4">Download Our App</h5>
              <div className="flex flex-col gap-3">
                <a {...openProps} className="px-4 py-3 border border-white/15 rounded-md text-[13px] hover:border-[#D4AF37] transition-colors">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/50">Available on</span>
                  <span className="block mt-0.5 font-serif text-lg">App Store</span>
                </a>
                <a {...openProps} className="px-4 py-3 border border-white/15 rounded-md text-[13px] hover:border-[#D4AF37] transition-colors">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/50">Get it on</span>
                  <span className="block mt-0.5 font-serif text-lg">Google Play</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-10">
            {FOOTER_COLS.map(([t, items]) => (
              <div key={t}>
                <h5 className="text-[11px] uppercase tracking-[0.24em] text-[#D4AF37] mb-4">{t}</h5>
                <ul className="space-y-2.5 text-[14px] text-white/70">
                  {items.map((it) => (
                    <li key={it}><a {...openProps} className="hover:text-white">{it}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-white/60">
              <span className="uppercase tracking-[0.2em] text-[#D4AF37]">Global Editions</span>
              {["United States", "United Kingdom", "European Union", "Asia", "Middle East", "Australia", "Latin America"].map((r) => (
                <a key={r} {...openProps} className="hover:text-white">{r}</a>
              ))}
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-white/50">
            <p>© {new Date().getFullYear()} Le Capital Moderne. All rights reserved.</p>
            <div className="flex gap-5">
              {SOCIAL.map((s) => (
                <a key={s} {...openProps} className="hover:text-[#D4AF37]">{s}</a>
              ))}
            </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
