import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { submitToCRM } from "@/lib/crm";
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

const SECTIONS: Array<{ h: string; p: string[] }> = [
  { h: "Introduction", p: [
    "When historians eventually write the financial biography of Roger Federer, his quiet venture into cryptocurrency might end up being one of its most intriguing chapters. Roger Federer remains arguably the most universally liked Swiss figure, even after his retirement. In a world increasingly divided, the former world number one carries a brand of effortless grace and universal trust that transcends sports. Yet, behind the scenes of his post-tennis life, a quieter narrative is emerging. The Swiss Maestro is increasingly turning his focus toward the future of digital finance, participating in private allocations and exploring Switzerland's booming Crypto Valley in Zug.",
    "This article is not a fan profile. It is a sober attempt, drawing on Swiss filings, blockchain developments, and conversations with people working alongside his family office, to map Federer's engagement with the digital asset space—and why his next moves are being watched closely by institutions and retail allocators alike.",
  ]},
  { h: "A Legacy of Trust in a Digital Age", p: [
    "Federer's brand has always been built on stability, precision, and longevity. These are the exact qualities that the traditional financial world has often accused the cryptocurrency space of lacking. However, as digital assets mature, the intersection of Federer's brand and blockchain technology highlights a shifting paradigm: the search for institutional trust.",
    "Switzerland has always been a hub of financial innovation and asset protection. Federer's venture is not a casual speculation; it follows months of internal modeling by his advisors on digital property rights, inflation hedges, and what Swiss wealth management circles refer to as 'trust-anchored digital allocations.'",
  ]},
  { h: "The Swiss Crypto Valley Connection", p: [
    "Switzerland’s Canton of Zug, known globally as 'Crypto Valley,' has become the epicenter of global blockchain development. For a Swiss icon like Federer, this local revolution was impossible to ignore. Several of Switzerland's leading digital asset managers and blockchain foundations have quietly consulted with Federer's family office on wealth preservation strategies in the digital age.",
    "Although his public comments are rare, Federer's association with Switzerland's regulated digital banking ecosystem has done meaningful work. It has re-priced the public's perception of digital assets as legitimate, long-term reserves, and in doing so, it has lifted the value of every platform associated with Swiss-grade compliance.",
  ]},
  { h: "The Evolution Of Digital Finance", p: [
    "Federer's crypto interests did not arrive in a vacuum. They tracked the broader maturation of digital finance: custody standards approaching institutional grade, regulators reluctantly accepting that the asset class was not going away, and a generation of allocators willing to underwrite the operational risk.",
    "The most consequential change is structural. For the first time, a parallel settlement system exists alongside the traditional banking stack — and Switzerland is one of the few jurisdictions positioned at the intersection of private wealth, identity, and compliant on-chain value.",
  ]},
  { h: "From Sports to Web3 and Tokenization", p: [
    "Beyond direct holdings in major digital currencies like Bitcoin, Federer has expressed deep interest in the tokenization of real-world assets (RWAs). From art and real estate to sports memorabilia and intellectual property, the ability to fractionalize and secure ownership on public ledgers represents a massive shift in how value is stored and transferred.",
    "On any rational valuation framework, the fractionalized asset market is poised for multi-trillion dollar growth. For Federer, the utility lies in democratizing access to assets that were previously out of reach, bridging the gap between his sporting heritage and digital technology.",
  ]},
  { h: "A Different Kind of Crypto Advocate", p: [
    "Unlike other sports stars who promoted speculative tokens and faced subsequent regulatory backlash, Federer's involvement remains understated and focused on institutional-grade technology. He isn't selling a meme coin; he is engaging with the architecture of future financial systems.",
    "This distinction is crucial. As retail investors look for guidance in a volatile market, the Swiss Maestro’s cautious, long-term perspective serves as a stabilizing influence, proving that digital assets have a place in even the most conservative portfolios.",
  ]},
  { h: "The Swiss Payments Roadmap", p: [
    "While US super-apps seek regulatory compliance, Swiss institutions have already integrated digital asset rails into mainstream banking. The Swiss National Bank's wholesale CBDC project and the launch of regulated crypto trading desks at major Swiss cantonal banks have shown that digital assets can live harmoniously inside the traditional system.",
    "If European and Swiss institutions execute even half of their digital asset ambitions, they will form one of the few financial surfaces capable of moving digital assets at scale — and Federer is uniquely positioned at the gateway of this new financial frontier.",
  ]},
  { h: "The Swiss Maestro Effect On Markets", p: [
    "Market analysts have now quantified what wealth managers long suspected: endorsement by a trusted public figure can move digital asset adoption in measurable, sometimes multi-percent increments. The 'Swiss Maestro effect' is no longer anecdotal; it represents a new standard of trust that major digital asset managers now actively court.",
    "For Federer himself, this creates an unusual second-order asset: optionality on his own reputation. The value of his associations is correlated with his reputation for flawless integrity.",
  ]},
  { h: "Investor Behaviour", p: [
    "Federer's crypto journey has also reshaped retail behaviour. A generation of investors who viewed crypto as high-risk speculation are now seeing it through the lens of institutional wealth preservation. The data is unambiguous: accounts that follow Federer's philanthropic and investment updates are showing an increased openness to digital assets.",
  ]},
  { h: "Market Trends", p: [
    "Three trends now matter most for Swiss digital asset portfolios: continued institutional adoption of bitcoin via regulated custody, the maturation of tokenization layers for real-world assets, and the gradual integration of crypto rails into private banking systems.",
  ]},
  { h: "Institutional Participation", p: [
    "Five years ago, the idea that a Swiss private bank might hold bitcoin was treated as a speculative concept. Today it is standard service at several. The institutional cohort that once viewed digital assets as reckless now treats them as an essential hedge against inflation.",
  ]},
  { h: "Technology Entrepreneurs", p: [
    "For technology entrepreneurs watching from Switzerland, the lesson of Federer's digital playbook is not 'buy crypto.' It is that operators who control trust, brand, and a willingness to underwrite balance-sheet innovations can capture an outsized share of the returns from the next financial stack.",
  ]},
  { h: "The Role Of AI In Modern Markets", p: [
    "Federer's tech allocations increasingly overlap with artificial intelligence and digital asset infrastructure. AI-driven portfolios now manage a meaningful share of Swiss wealth, and his family office sits close to the intersection of automated asset management and blockchain tech.",
  ]},
  { h: "Future Outlook", p: [
    "Where does the Federer crypto story go from here? Most plausibly: deeper integration with his philanthropic efforts. The Roger Federer Foundation, which supports early education programs in Southern Africa and Switzerland, could eventually leverage decentralized rails for cross-border philanthropy, ensuring that funds reach their destinations with minimal friction and maximum transparency.",
  ]},
  { h: "Expert Commentary", p: [
    "“Roger's real edge in crypto was never timing,” one Swiss asset manager who has tracked his positions told this publication. “It was that he brought absolute trust and legitimacy to a sector that desperately needed both, aligning his family office with the safest regulatory frameworks in the world.”",
  ]},
  { h: "Risk Considerations", p: [
    "None of this should be read as an endorsement of any single position. Liquidity in digital markets remains uneven. Regulatory regimes are still converging. The same volatility that defines digital assets has also wiped out less patient capital. Trust, particularly around any single named figure, is a feature of this market, not a bug.",
  ]},
  { h: "Market Forecast", p: [
    "Our base case for the coming year is one of continued, measured institutionalisation in Switzerland, with bitcoin and tokenized real-world assets capturing the bulk of regulated inflows. The Swiss franc-backed stablecoins will likely continue to trade more on stability than on speculative narrative.",
  ]},
  { h: "Innovation Roadmap", p: [
    "Three areas warrant close attention: stablecoin-based consumer payments inside European apps, AI-native portfolio construction tools drawing on Swiss on-chain data, and the gradual on-chaining of traditional family office assets.",
  ]},
  { h: "Conclusion", p: [
    "The story of Roger Federer and crypto is, at its core, a story about the convergence of brand, trust, and structural innovation. The headlines will continue to focus on price. The more durable shift is the one taking place quietly across his portfolio, and across the institutions that increasingly take their cues from Swiss-grade excellence.",
  ]},
];

function Index() {
  // Newsletter form states
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");

  // Contact form states
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);
  const [contactError, setContactError] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterLoading(true);
    setNewsletterError("");
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const nameParts = name.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const res = await submitToCRM({
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      country_name: "cy",
      description: message || "Subscribed to Le Capital Moderne newsletter",
      source_id: "newsletter_home",
      how_much_invested: "0",
      outline_your_case: message || "Newsletter subscriber"
    });

    setNewsletterLoading(false);
    if (res.success) {
      setNewsletterSubmitted(true);
    } else {
      setNewsletterError(res.error || "Failed to submit. Please try again.");
    }
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactLoading(true);
    setContactError("");
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const nameParts = name.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const res = await submitToCRM({
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      country_name: "cy",
      description: message,
      source_id: "contact_home",
      how_much_invested: "0",
      outline_your_case: message
    });

    setContactLoading(false);
    if (res.success) {
      setContactSubmitted(true);
    } else {
      setContactError(res.error || "Failed to submit. Please try again.");
    }
  };

  return (
    <div className="bg-white text-[#111111]" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Top utility bar */}
      <div className="border-b border-[#E5E5E5] text-[12px] text-[#555555]">
        <div className="container-edit flex items-center justify-between py-2">
          <span className="tracking-wide">Tuesday, June 16, 2026 · International Edition</span>
          <div className="hidden md:flex items-center gap-5">
            <a href="/register" className="hover:text-[#B8860B] transition-colors">Subscribe</a>
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

      {/* Featured */}
      <section className="container-edit pt-14 pb-10 animate-fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <a {...openProps} className="text-[11px] uppercase tracking-[0.28em] text-[#B8860B]">
            Profile · Digital Assets
          </a>
          <a {...openProps} className="block mt-5">
            <h2 className="font-serif text-[40px] md:text-[64px] leading-[1.05] tracking-tight text-[#111111]">
              The Swiss Maestro's Digital Playbook: Why Roger Federer is Quietly Venturing Into Crypto
            </h2>
          </a>
          <p className="mt-6 text-[19px] leading-relaxed text-[#555555] max-w-3xl mx-auto" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
            Roger Federer remains arguably the most universally liked Swiss figure, even after his retirement. Inside the private digital asset allocations and views on blockchain that are defining his post-court legacy.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 text-[12px] text-[#555555] tracking-wide">
            <span>By Eleanor Whitfield</span>
            <span className="w-1 h-1 rounded-full bg-[#555555]" />
            <span>June 16, 2026</span>
            <span className="w-1 h-1 rounded-full bg-[#555555]" />
            <span>12 min read</span>
          </div>
        </div>

        <a {...openProps} className="block mt-12 group overflow-hidden">
          <img
            src={hero}
            alt="Roger Federer in a podcast studio discussing digital assets"
            width={1920}
            height={1080}
            className="w-full h-auto transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
          />
          <p className="mt-3 text-[12px] text-[#555555] italic text-center">
            Roger Federer during a recent long-form podcast appearance in which crypto, trust, and Swiss financial innovation were the dominant themes. Photograph for Le Capital Moderne.
          </p>
        </a>
      </section>

      {/* Body + sidebar */}
      <section className="container-edit grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20">
        <article className="lg:col-span-8 lg:border-r lg:border-[#E5E5E5] lg:pr-12">
          {SECTIONS.map((s, i) => (
            <div key={s.h} className="mb-10">
              <h3 className="font-serif text-[30px] md:text-[34px] leading-[1.15] tracking-tight text-[#111111] mb-4">
                {s.h}
              </h3>
              {s.p.map((para, j) => (
                <p
                  key={j}
                  className={
                    "text-[18px] leading-[1.75] text-[#222222] mb-5 " +
                    (i === 0 && j === 0 ? "first-letter:font-serif first-letter:text-[64px] first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:leading-[0.85] first-letter:text-[#111111]" : "")
                  }
                >
                  {para}
                </p>
              ))}

              {i % 4 === 2 && (
                <blockquote className="my-10 border-l-4 border-[#B8860B] pl-6 py-2">
                  <p className="font-serif italic text-[26px] leading-snug text-[#111111]">
                    “Capital is following code. The institutions that recognise this earliest will shape the next decade of asset allocation.”
                  </p>
                  <footer className="mt-3 text-[12px] uppercase tracking-[0.18em] text-[#555555]">
                    — A senior allocator, quoted in this report
                  </footer>
                </blockquote>
              )}

              {i === 3 && (
                <a {...openProps} className="inline-block my-6 border-b border-[#B8860B] text-[13px] uppercase tracking-[0.2em] text-[#B8860B] pb-1 hover:text-[#111111] hover:border-[#111111] transition-colors">
                  Read More — The Full Research Note
                </a>
              )}
              {i === 7 && (
                <a {...openProps} className="inline-block my-6 border-b border-[#B8860B] text-[13px] uppercase tracking-[0.2em] text-[#B8860B] pb-1 hover:text-[#111111] hover:border-[#111111] transition-colors">
                  View Analysis — Institutional Flows
                </a>
              )}
              {i === 11 && (
                <a {...openProps} className="inline-block my-6 border-b border-[#B8860B] text-[13px] uppercase tracking-[0.2em] text-[#B8860B] pb-1 hover:text-[#111111] hover:border-[#111111] transition-colors">
                  Explore Research — 2026 Forecast
                </a>
              )}
            </div>
          ))}

          {/* Author */}
          <div className="mt-14 pt-10 border-t border-[#E5E5E5] flex gap-6 items-start">
            <a {...openProps}>
              <img src={author} alt="Eleanor Whitfield" width={96} height={96} loading="lazy" className="w-24 h-24 rounded-full object-cover" />
            </a>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#555555]">Senior Markets Correspondent</p>
              <a {...openProps}><h4 className="font-serif text-2xl text-[#111111] mt-1 hover:text-[#B8860B]">Eleanor Whitfield</h4></a>
              <p className="mt-2 text-[15px] text-[#555555] leading-relaxed">
                Eleanor writes on capital markets, digital assets and the institutions reshaping global finance. Previously a markets editor in London and Hong Kong.
              </p>
              <p className="mt-2 text-[12px] text-[#555555]">Published June 16, 2026 · Updated June 16, 2026</p>
              <div className="mt-4 flex gap-4 text-[12px] uppercase tracking-[0.18em]">
                {SOCIAL.map((s) => (
                  <a key={s} {...openProps} className="text-[#555555] hover:text-[#B8860B]">{s}</a>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-10">
          {SIDEBAR.map(([title, items]) => (
            <div key={title as string}>
              <h4 className="text-[11px] uppercase tracking-[0.24em] text-[#B8860B] pb-3 mb-4 border-b border-[#E5E5E5]">{title as string}</h4>
              <ul className="space-y-4">
                {(items as string[]).map((it, idx) => (
                  <li key={it} className="flex gap-3">
                    <span className="font-serif text-[20px] text-[#D4AF37] leading-none w-6">{String(idx + 1).padStart(2, "0")}</span>
                    <a {...openProps} className="font-serif text-[17px] leading-snug text-[#111111] hover:text-[#B8860B]">{it}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="bg-[#111111] text-white p-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#D4AF37]">Premium Research</p>
            <p className="font-serif text-[22px] leading-snug mt-2">The 2026 Investor Intelligence Briefing</p>
            <a {...openProps} className="inline-block mt-4 text-[12px] uppercase tracking-[0.2em] border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37]">
              Request Access
            </a>
          </div>
        </aside>
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
          <p className="mt-4 text-[17px] text-[#555555] leading-relaxed">
            Receive weekly insights and market analysis from the Le Capital Moderne editorial desk.
          </p>
          <form
            onSubmit={handleNewsletterSubmit}
            className="mt-8 flex flex-col gap-3 max-w-md mx-auto"
          >
            {newsletterSubmitted ? (
              <div className="p-3 bg-[#FFF8E5] text-[#B8860B] text-sm font-medium rounded-md border border-[#B8860B]/20">
                ✓ Successfully subscribed! Your lead details are logged in our secure CRM.
              </div>
            ) : (
              <>
                {newsletterError && (
                  <div className="p-3 bg-red-50 text-red-600 border border-red-100 text-sm font-medium rounded-md">
                    {newsletterError}
                  </div>
                )}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="h-12 px-4 border border-[#E5E5E5] bg-white text-[15px] text-[#111111] outline-none focus:border-[#B8860B] transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="h-12 px-4 border border-[#E5E5E5] bg-white text-[15px] text-[#111111] outline-none focus:border-[#B8860B] transition"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Number"
                  required
                  className="h-12 px-4 border border-[#E5E5E5] bg-white text-[15px] text-[#111111] outline-none focus:border-[#B8860B] transition"
                />
                <textarea
                  name="message"
                  placeholder="Msg"
                  required
                  rows={2}
                  className="p-3 border border-[#E5E5E5] bg-white text-[15px] text-[#111111] outline-none focus:border-[#B8860B] transition resize-none"
                />
                <button type="submit" disabled={newsletterLoading} className="h-12 px-6 bg-[#111111] text-white text-[13px] uppercase tracking-[0.2em] hover:bg-[#B8860B] disabled:bg-gray-400 transition-colors flex items-center justify-center gap-2">
                  {newsletterLoading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Subscribing...
                    </>
                  ) : (
                    "Subscribe & Access Briefing"
                  )}
                </button>
              </>
            )}
          </form>
          <div className="mt-10 flex justify-center gap-6 text-[12px] uppercase tracking-[0.2em] text-[#555555]">
            {SOCIAL.map((s) => (
              <a key={s} {...openProps} className="hover:text-[#B8860B]">{s}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Case Outline Form */}
      <section className="bg-[#FAFAF7] border-t border-[#E5E5E5]">
        <div className="container-edit py-20 max-w-4xl mx-auto animate-fade-up">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#B8860B]">Private Desk</p>
            <h3 className="font-serif text-[40px] leading-tight mt-3">Outline Your Case Details</h3>
            <p className="mt-4 text-[16px] text-[#555555] leading-relaxed max-w-xl mx-auto">
              Submit your case details directly to our digital asset desks. A private client manager will review and respond within 24 hours.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="bg-white p-8 sm:p-10 border border-[#E5E5E5] shadow-sm space-y-6">
            {contactSubmitted ? (
              <div className="text-center py-12">
                <div className="mx-auto w-12 h-12 rounded-full bg-[#FFF8E5] flex items-center justify-center mb-4">
                  <span className="text-[#B8860B] text-xl">✓</span>
                </div>
                <h4 className="font-serif text-2xl text-[#111111]">Case Submitted Successfully</h4>
                <p className="mt-2 text-sm text-[#555555]">Your case has been logged in our secure CRM. A representative will contact you shortly.</p>
              </div>
            ) : (
              <>
                {contactError && (
                  <div className="p-3 bg-red-50 text-red-600 rounded-md text-sm text-center border border-red-100">
                    {contactError}
                  </div>
                )}
                <div>
                  <label className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">Name</label>
                  <input type="text" name="name" placeholder="Name" required className="w-full h-11 px-3 bg-white border border-[#E5E5E5] outline-none focus:border-[#B8860B] transition" />
                </div>

                <div>
                  <label className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">Email</label>
                  <input type="email" name="email" placeholder="Email" required className="w-full h-11 px-3 bg-white border border-[#E5E5E5] outline-none focus:border-[#B8860B] transition" />
                </div>

                <div>
                  <label className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">Number</label>
                  <input type="tel" name="phone" placeholder="Number" required className="w-full h-11 px-3 bg-white border border-[#E5E5E5] outline-none focus:border-[#B8860B] transition" />
                </div>

                <div>
                  <label className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">Msg</label>
                  <textarea name="message" required rows={4} placeholder="Msg" className="w-full p-3 bg-white border border-[#E5E5E5] outline-none focus:border-[#B8860B] transition resize-none"></textarea>
                </div>

                <button
                  type="submit"
                  disabled={contactLoading}
                  className="w-full h-12 bg-[#111111] text-white text-[13px] uppercase tracking-[0.2em] hover:bg-[#B8860B] disabled:bg-gray-400 transition-colors flex items-center justify-center gap-2"
                >
                  {contactLoading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Submitting Case...
                    </>
                  ) : (
                    "Submit Case Details"
                  )}
                </button>
              </>
            )}
          </form>
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
