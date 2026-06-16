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
      { title: "How Elon Musk Quietly Got Rich On Crypto — Market Frontier Journal" },
      { name: "description", content: "Inside the unconventional crypto bets that turned the world's most public entrepreneur into one of digital finance's biggest winners." },
      { property: "og:title", content: "How Elon Musk Quietly Got Rich On Crypto" },
      { property: "og:description", content: "Inside the unconventional crypto bets behind Elon Musk's digital asset fortune." },
    ],
  }),
  component: Index,
});

const R = "/register";
const openProps = { href: R, target: "_blank", rel: "noopener noreferrer" } as const;

const NAV = ["Markets", "Business", "Technology", "Innovation", "Investing", "Digital Assets", "Economy", "Opinion", "Research", "Analysis", "Latest News", "Trending"];

const TICKER = [
  "Bitcoin reclaims $110K as institutional flows accelerate",
  "Elon Musk's Tesla still holds 9,720 BTC on its balance sheet",
  "Dogecoin jumps 14% after fresh Musk podcast comments",
  "Spot Ethereum ETFs cross $30B in net inflows",
  "Stablecoin market cap pushes past $260B",
  "SpaceX rumoured to retain undisclosed BTC position since 2021",
  "AI trading desks now account for 41% of crypto spot volume",
];

const SIDEBAR = [
  ["Trending", ["Inside Tesla's quiet bitcoin reaccumulation", "How Dogecoin became Musk's longest crypto bet", "The Twitter / X payments roadmap explained", "Why SpaceX is the most secretive whale on chain", "The Musk effect: measuring a tweet in basis points"]],
  ["Editor's Picks", ["The billionaire crypto playbook — five lessons", "A field guide to corporate treasury bitcoin", "How retail followed Musk into Dogecoin", "When public markets stop setting the price", "The infrastructure layer no one is pricing"]],
  ["Most Read", ["Bitcoin at $110K: what changes for portfolios", "Ethereum's quiet institutional moment", "The new economics of meme coins", "Stablecoins and the future of dollar dominance", "What family offices are buying this quarter"]],
  ["Research Briefings", ["Digital asset allocation models, Q4", "Corporate treasury crypto report", "Macro outlook and rate trajectory", "On-chain flows: institutional dashboard", "Cross-border crypto settlement quarterly"]],
];

const RELATED = [
  { cat: "Bitcoin", img: c1, title: "Bitcoin At $110K: The Quiet Rerating Of A Reserve Asset", sum: "Institutional flows have rewritten the demand side of the bitcoin market." },
  { cat: "Ethereum", img: c2, title: "Ethereum's Institutional Moment Has Finally Arrived", sum: "Spot ETFs, restaking and tokenised assets are reshaping the network's investor base." },
  { cat: "Tesla", img: c3, title: "Why Tesla Is Still The Most Watched Crypto Treasury", sum: "Three years after its first BTC purchase, Tesla's balance sheet remains a benchmark." },
  { cat: "SpaceX", img: c4, title: "Inside SpaceX's Long, Quiet Position In Bitcoin", sum: "What public filings reveal — and conceal — about Musk's most secretive bet." },
  { cat: "Dogecoin", img: c5, title: "Dogecoin: How A Meme Became A Long-Duration Trade", sum: "The asset Musk has championed longest has quietly outperformed expectations." },
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
    "When historians eventually write the financial biography of Elon Musk, the chapter on cryptocurrency may end up being the most surprising. For all of the public attention paid to Tesla's share price and SpaceX's private valuation, a quieter story has been unfolding on chain — one in which the world's most photographed entrepreneur has compounded a parallel digital asset fortune through a mixture of corporate treasury moves, personal positions and an unmatched ability to move markets with a single sentence.",
    "This article is not a fan profile. It is a sober attempt, drawing on filings, on-chain analytics and conversations with people who have worked alongside him, to map how Musk became one of the largest indirect beneficiaries of the last crypto cycle — and why his next moves are being watched as closely as any central bank's.",
  ]},
  { h: "From Skeptic To Whale", p: [
    "Musk's public posture on cryptocurrency has shifted more than once. In 2018 he dismissed bitcoin as a curiosity. By early 2021 Tesla had committed $1.5 billion of corporate cash to BTC, briefly making it the most-followed corporate treasury position in the world. The reversal was not casual; it followed months of internal modelling on inflation, dollar debasement and what Musk's finance team began referring to in slide decks as 'optionality on a non-sovereign reserve.'",
    "Although Tesla later sold a portion of that position, the residual holding — most recently disclosed at 9,720 BTC — has done most of the work. At today's prices, that single line item is worth more than the company's entire Q1 2021 net income.",
  ]},
  { h: "The Tesla Treasury Trade", p: [
    "The Tesla bitcoin purchase was, in retrospect, less a punt than a balance-sheet experiment. It tested whether a S&P 500 company could custody, mark and disclose a volatile digital asset without losing investor trust. The answer, eventually, was yes — and that quiet operational success has since been replicated by a growing list of corporate treasuries.",
    "For Musk personally, the trade had a second-order benefit. It re-priced the public's perception of bitcoin as a legitimate corporate asset, and in doing so it lifted the value of every digital asset associated with him.",
  ]},
  { h: "The Evolution Of Digital Finance", p: [
    "Musk's crypto bets did not arrive in a vacuum. They tracked the broader maturation of digital finance: custody standards approaching institutional grade, regulators reluctantly accepting that the asset class was not going away, and a generation of allocators willing to underwrite the operational risk.",
    "The most consequential change is structural. For the first time, a parallel settlement system exists alongside the traditional banking stack — and Musk, through SpaceX and X, is one of the few operators positioned at the intersection of payments, identity and on-chain value.",
  ]},
  { h: "The Dogecoin Position", p: [
    "If bitcoin was the institutional trade, Dogecoin has been the cultural one. Musk's affinity for DOGE — repeatedly disclosed, often joked about, never quite walked back — has turned a meme coin into a long-duration narrative asset.",
    "On any rational valuation framework Dogecoin should not exist. Yet the asset's market capitalisation has held within a remarkably stable band, and Musk's personal holdings (the subject of multiple class action settlements he ultimately prevailed in) have compounded with it.",
  ]},
  { h: "SpaceX And The Quietest Whale On Chain", p: [
    "SpaceX is privately held and discloses little. What it has disclosed, in passing, is that it acquired bitcoin in 2021 and wrote down a portion in 2022. On-chain analysts have long suspected the residual position is meaningful; some estimates place it above 8,000 BTC.",
    "If those estimates are even directionally correct, SpaceX is one of the largest non-exchange holders of bitcoin in the world — a quiet whale moving in lockstep with the personal convictions of its founder.",
  ]},
  { h: "The Twitter / X Payments Roadmap", p: [
    "The 2022 acquisition of Twitter, since rebranded as X, gave Musk something more valuable than a megaphone: a regulated payments rail. The company has spent the last eighteen months quietly accumulating money transmitter licences across U.S. states, and has signalled that crypto rails will form part of its eventual settlement stack.",
    "If X executes even half of its payments ambitions, it becomes one of the few consumer surfaces capable of moving digital assets at scale — and Musk one of the few founders to own both the asset and the distribution.",
  ]},
  { h: "The Musk Effect On Markets", p: [
    "Academic studies have now quantified what traders long suspected: a single Musk tweet can move bitcoin and dogecoin prices in measurable, sometimes multi-percent, increments. The 'Musk effect' is no longer anecdotal. It is a documented feature of market microstructure that desks at major venues now actively hedge.",
    "For Musk himself, this creates an unusual second-order asset: optionality on his own voice. The value of his personal book is correlated with his willingness to comment.",
  ]},
  { h: "Investor Behaviour", p: [
    "Musk's crypto journey has also reshaped retail behaviour. A generation of investors who came of age trading Tesla on Robinhood made the natural jump to Coinbase, and from there to dogecoin and beyond. The data is unambiguous: brokerage accounts that hold TSLA are dramatically more likely to also hold BTC, ETH or DOGE than the market average.",
  ]},
  { h: "Market Trends", p: [
    "Three trends now matter most for Musk's digital asset portfolio: continued institutional adoption of bitcoin via spot ETFs, the maturation of ethereum as a settlement layer for tokenised assets, and the gradual integration of crypto rails into mainstream consumer payments.",
  ]},
  { h: "Institutional Participation", p: [
    "Five years ago, the idea that a sovereign wealth fund might hold bitcoin was treated as a thought experiment. Today it is policy at several. The institutional cohort that once viewed Musk's Tesla treasury experiment as reckless now treats it as a precedent.",
  ]},
  { h: "Technology Entrepreneurs", p: [
    "For technology entrepreneurs watching from the sidelines, the lesson of Musk's crypto returns is not 'buy bitcoin.' It is that operators who control distribution, brand and a willingness to underwrite balance-sheet experiments can capture an outsized share of the returns from a new asset class.",
  ]},
  { h: "The Role Of AI In Modern Markets", p: [
    "Musk's parallel investments in artificial intelligence — xAI, the rebuilt compute clusters at Tesla, and the lingering equity stake from his early role at OpenAI — increasingly overlap with the crypto stack. AI-driven trading desks now handle a meaningful share of digital asset volume, and Musk sits closer than any other founder to both ends of that trade.",
  ]},
  { h: "Future Outlook", p: [
    "Where does the Musk crypto story go from here? Most plausibly: deeper integration. The payments rails inside X, the treasury policies at Tesla, the unspoken position at SpaceX, and the AI infrastructure at xAI are converging on a single thesis — that programmable money will be the substrate of the next generation of consumer and capital markets technology.",
  ]},
  { h: "Expert Commentary", p: [
    "“Elon's real edge in crypto was never timing,” one fund manager who has tracked his positions since 2021 told this publication. “It was that he was willing to put a public balance sheet behind a private conviction at a moment when nobody else would.”",
  ]},
  { h: "Risk Considerations", p: [
    "None of this should be read as an endorsement of any single position. Liquidity in digital markets remains uneven. Regulatory regimes are still converging. The same volatility that has rewarded Musk's positions has also wiped out less patient capital. Concentration risk — particularly around any single named founder — is a feature of this market, not a bug.",
  ]},
  { h: "Market Forecast", p: [
    "Our base case for the coming year is one of continued, measured institutionalisation, with bitcoin and ethereum capturing the bulk of regulated inflows. Dogecoin, the asset most directly tied to Musk personally, will likely continue to trade more on narrative than on fundamentals.",
  ]},
  { h: "Innovation Roadmap", p: [
    "Three areas warrant close attention: stablecoin-based consumer payments inside super-apps such as X, AI-native portfolio construction tools that draw on on-chain data, and the gradual on-chaining of corporate treasuries beyond the early Tesla template.",
  ]},
  { h: "Conclusion", p: [
    "The story of Elon Musk and crypto is, at its core, a story about the convergence of brand, balance sheet and conviction. The headlines will continue to focus on price. The more durable shift is the one taking place quietly across his portfolio, and across the institutions that increasingly take their cues from it.",
  ]},
];

function Index() {
  return (
    <div className="bg-white text-[#111111]" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Top utility bar */}
      <div className="border-b border-[#E5E5E5] text-[12px] text-[#555555]">
        <div className="container-edit flex items-center justify-between py-2">
          <span className="tracking-wide">Tuesday, June 16, 2026 · International Edition</span>
          <div className="hidden md:flex items-center gap-5">
            <a {...openProps} className="hover:text-[#B8860B]">Subscribe</a>
            <a {...openProps} className="hover:text-[#B8860B]">Sign In</a>
            <a {...openProps} className="hover:text-[#B8860B]">Newsletter</a>
          </div>
        </div>
      </div>

      {/* Masthead */}
      <header className="border-b border-[#E5E5E5]">
        <div className="container-edit py-8 text-center">
          <a {...openProps} className="inline-block">
            <h1 className="font-serif text-[44px] md:text-[64px] leading-none tracking-tight">
              Market Frontier <span className="italic text-[#B8860B]">Journal</span>
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
            Markets &amp; Innovation
          </a>
          <a {...openProps} className="block mt-5">
            <h2 className="font-serif text-[40px] md:text-[64px] leading-[1.05] tracking-tight text-[#111111]">
              How Digital Assets Created New Wealth Opportunities For Technology Entrepreneurs
            </h2>
          </a>
          <p className="mt-6 text-[19px] leading-relaxed text-[#555555] max-w-3xl mx-auto" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
            A closer look at how emerging digital asset markets and technology investments transformed modern wealth creation.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 text-[12px] text-[#555555] tracking-wide">
            <span>By Eleanor Whitfield</span>
            <span className="w-1 h-1 rounded-full bg-[#555555]" />
            <span>June 16, 2026</span>
            <span className="w-1 h-1 rounded-full bg-[#555555]" />
            <span>14 min read</span>
          </div>
        </div>

        <a {...openProps} className="block mt-12 group overflow-hidden">
          <img
            src={hero}
            alt="Manhattan skyline at dusk with overlaid market data"
            width={1920}
            height={1080}
            className="w-full h-auto transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
          />
          <p className="mt-3 text-[12px] text-[#555555] italic text-center">
            The intersection of capital and code: lower Manhattan at dusk. Photograph for Market Frontier Journal.
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
              <h3 className="font-serif text-[36px] mt-2">More From Market Frontier</h3>
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
            Receive weekly insights and market analysis from the Market Frontier Journal editorial desk.
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); window.open(R, "_blank", "noopener,noreferrer"); }}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 h-12 px-4 border border-[#E5E5E5] bg-white text-[15px] text-[#111111] outline-none focus:border-[#B8860B] transition"
            />
            <button type="submit" className="h-12 px-6 bg-[#111111] text-white text-[13px] uppercase tracking-[0.2em] hover:bg-[#B8860B] transition-colors">
              Subscribe
            </button>
          </form>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div>
              <h4 className="font-serif text-2xl">
                Market Frontier <span className="italic text-[#D4AF37]">Journal</span>
              </h4>
              <p className="mt-3 text-[13px] text-white/60 leading-relaxed">
                Financial intelligence for the modern investor. Editorial, research and analysis from a global newsroom.
              </p>
            </div>
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
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-white/50">
            <p>© {new Date().getFullYear()} Market Frontier Journal. All rights reserved.</p>
            <div className="flex gap-5">
              {SOCIAL.map((s) => (
                <a key={s} {...openProps} className="hover:text-[#D4AF37]">{s}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
