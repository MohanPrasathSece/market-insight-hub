import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import author from "@/assets/author.jpg";
import thumb1 from "@/assets/thumb1.jpg";
import thumb2 from "@/assets/thumb2.jpg";
import thumb3 from "@/assets/thumb3.jpg";
import thumb4 from "@/assets/thumb4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "How Digital Assets Created New Wealth Opportunities — Market Frontier Journal" },
      { name: "description", content: "A closer look at how emerging digital asset markets and technology investments transformed modern wealth creation." },
      { property: "og:title", content: "How Digital Assets Created New Wealth Opportunities" },
      { property: "og:description", content: "Market analysis and investor research from Market Frontier Journal." },
    ],
  }),
  component: Index,
});

const R = "/register";
const openProps = { href: R, target: "_blank", rel: "noopener noreferrer" } as const;

const NAV = ["Markets", "Business", "Technology", "Innovation", "Investing", "Digital Assets", "Economy", "Opinion", "Research", "Analysis", "Latest News", "Trending"];

const TICKER = [
  "Bitcoin reaches new institutional adoption milestone",
  "AI trading platforms gain investor attention",
  "Digital asset funds see record inflows",
  "Global markets react to technology investments",
  "Tokenised treasuries cross $4B in assets under management",
  "Sovereign wealth funds expand AI portfolio allocations",
];

const SIDEBAR = [
  ["Trending", ["The new architecture of private wealth", "Why family offices are rotating into AI infrastructure", "Inside the rise of programmable capital markets", "The quiet boom in tokenised treasuries", "How algorithmic liquidity reshaped market structure"]],
  ["Editor's Picks", ["A field guide to the next decade of finance", "The economist who saw the digital pivot coming", "Five frameworks for evaluating frontier assets", "When public markets stop setting the price", "The infrastructure layer no one is pricing"]],
  ["Most Read", ["Why the next trillion is digital", "AI capex and the new industrial cycle", "Reading the curve: signals from the bond market", "The institutionalisation of alternative assets", "What pensions are buying in 2025"]],
  ["Research Briefings", ["Digital asset allocation models, Q4", "Generative AI: capital intensity report", "Macro outlook and rate trajectory", "Sector rotation playbook", "Cross-border capital flows quarterly"]],
];

const RELATED = [
  { cat: "Markets", img: thumb1, title: "Why Volatility Is Becoming The New Asset Class", sum: "Institutional desks are repositioning around structural volatility regimes." },
  { cat: "Technology", img: thumb2, title: "Inside The AI Capex Cycle Reshaping S&P Earnings", sum: "A look at how datacenter investment is rewriting margin expectations." },
  { cat: "Digital Assets", img: thumb3, title: "Tokenised Treasuries Cross A Quiet Milestone", sum: "On-chain treasury products are pulling capital from traditional money markets." },
  { cat: "Economy", img: thumb4, title: "The Long Decade: A New Macro Regime For Investors", sum: "Why the post-2024 cycle looks structurally different from the last fifteen years." },
  { cat: "Analysis", img: thumb1, title: "Liquidity, Reflexivity And The Modern Trading Desk", sum: "How algorithmic flows have rewired equity market behaviour." },
  { cat: "Innovation", img: thumb2, title: "The Quiet Reindustrialisation Of The American Economy", sum: "Capex, chips and the case for a manufacturing renaissance." },
  { cat: "Investing", img: thumb3, title: "What Endowments Are Doing Differently This Cycle", sum: "Inside the playbook of the largest university endowments." },
  { cat: "Markets", img: thumb4, title: "Private Credit's Coming Of Age — And Its Limits", sum: "The asset class that quietly became the third pillar of fixed income." },
  { cat: "Technology", img: thumb1, title: "Generative AI Is Eating Software Margins", sum: "A sober look at where the value really accrues in the AI stack." },
  { cat: "Research", img: thumb2, title: "Reading The Yield Curve In A Regime Of Fiscal Dominance", sum: "How sovereign issuance is overwhelming traditional macro signals." },
  { cat: "Opinion", img: thumb3, title: "The Quiet Revolution In Cross-Border Settlement", sum: "Stablecoins, real-time rails and the end of correspondent banking." },
  { cat: "Business", img: thumb4, title: "Why The Modern CFO Looks More Like A Portfolio Manager", sum: "Treasury, capital allocation and the new corporate playbook." },
];

const SOCIAL = ["LinkedIn", "X", "Facebook", "YouTube", "Telegram", "Instagram"];

const FOOTER_COLS: Array<[string, string[]]> = [
  ["Sections", ["Markets", "Technology", "Research", "Business", "Economy", "Digital Assets", "Investment Guides"]],
  ["Company", ["About", "Contact", "Newsletter", "Careers", "Advertise", "Editorial Standards"]],
  ["Legal", ["Privacy", "Terms", "Cookies", "Disclosures", "Accessibility"]],
];

const SECTIONS: Array<{ h: string; p: string[] }> = [
  { h: "Introduction", p: [
    "For most of the last decade, the conversation about wealth creation in technology was dominated by a familiar cast: venture capital, public equities, and the occasional founder-led IPO. That picture is beginning to look incomplete. Across institutional desks in London, New York and Singapore, a quieter shift is taking place — one in which digital assets, automated portfolios and artificial intelligence have moved from the fringes of finance to the centre of strategic asset allocation.",
    "This article is not a forecast. It is a survey of how a generation of entrepreneurs, allocators and policymakers came to treat digital markets as a serious component of the investment landscape, and what that means for the next phase of capital formation.",
  ]},
  { h: "The Evolution Of Digital Finance", p: [
    "Digital finance did not arrive in a single moment. It accumulated, in a series of overlapping cycles, each leaving behind durable infrastructure: payment rails, custody standards, regulatory frameworks. What once looked like speculative noise is now embedded in the plumbing of global markets.",
    "The most consequential change is structural. For the first time, a parallel set of settlement systems exists alongside the traditional banking stack, capable of moving value across borders in seconds and at marginal cost.",
  ]},
  { h: "How Technology Changed Investing", p: [
    "The retail investor of 2025 has tools that were available only to hedge funds a decade ago: real-time data, algorithmic execution, fractional ownership of nearly every public asset, and a growing menu of private market exposures.",
    "Institutions, in turn, have absorbed the lessons of the platform era. Allocation decisions that once took quarters now take days. Portfolios are rebalanced continuously. Risk is measured in seconds.",
  ]},
  { h: "The Rise Of Digital Assets", p: [
    "Digital assets are no longer a single category. They span tokenised treasuries, stablecoins, infrastructure tokens, and a long tail of programmable instruments that behave more like software than like securities.",
    "What unites them is a common technical substrate — and a growing willingness among institutional allocators to treat that substrate as investable.",
  ]},
  { h: "The Role Of AI In Modern Markets", p: [
    "Artificial intelligence has reshaped two layers of the investment process: research and execution. On the research side, large models are being used to parse filings, transcripts and alternative data sets at a scale that was previously impossible.",
    "On the execution side, AI-driven systems are quietly absorbing a growing share of order flow, particularly in equities and foreign exchange.",
  ]},
  { h: "Investor Behaviour", p: [
    "The behavioural shift is just as important as the technological one. A new generation of investors — many of whom began with digital assets — now expect transparency, programmability and twenty-four hour liquidity as baseline features of any financial product.",
    "Traditional firms have responded by rebuilding their client experience from the ground up.",
  ]},
  { h: "Market Trends", p: [
    "Three trends stand out. First, a steady migration of fixed income activity onto tokenised rails. Second, the institutionalisation of crypto-native instruments through regulated wrappers. Third, the quiet expansion of private credit into asset classes once dominated by banks.",
  ]},
  { h: "Institutional Participation", p: [
    "The institutional story is no longer about whether large allocators will engage with digital markets, but how. Pension funds, sovereign wealth vehicles and insurance balance sheets are now active participants in segments of the market that, only five years ago, they would have dismissed as uninvestable.",
  ]},
  { h: "Technology Entrepreneurs", p: [
    "For technology entrepreneurs, the implications are profound. Capital formation no longer follows a single template. A founder today can raise from venture investors, tokenise revenue streams, or access global pools of liquidity through structured digital instruments.",
  ]},
  { h: "Future Outlook", p: [
    "The next decade is likely to be defined less by the arrival of new assets than by the maturation of the infrastructure that supports them. Custody, compliance and settlement — the unglamorous middle of the stack — will determine which products scale and which remain niche.",
  ]},
  { h: "Expert Commentary", p: [
    "“We are at the point where the question is no longer whether digital assets belong in an institutional portfolio,” one chief investment officer told this publication, “but how to size the allocation responsibly.” That sentiment, once contrarian, is now broadly shared across the industry.",
  ]},
  { h: "Risk Considerations", p: [
    "None of this should be read as an absence of risk. Liquidity in digital markets remains uneven. Regulatory regimes are still converging. Operational risk — particularly around custody and key management — continues to be a meaningful concern for serious allocators.",
  ]},
  { h: "Market Forecast", p: [
    "Our base case for the coming year is one of continued, measured institutionalisation. Flows into regulated digital asset products are expected to accelerate, while the broader macro environment remains shaped by the trajectory of real rates and fiscal policy.",
  ]},
  { h: "Innovation Roadmap", p: [
    "Three areas warrant close attention: programmable money market instruments, AI-native portfolio construction tools, and the gradual on-chaining of traditional capital markets activity. Each is likely to compound over the next several cycles.",
  ]},
  { h: "Conclusion", p: [
    "The story of digital assets and technology-driven wealth is, at its core, a story about infrastructure. The headlines will continue to focus on price. The more durable shift is the one taking place beneath the surface, in the systems that now quietly move trillions of dollars between investors, institutions and ideas.",
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
