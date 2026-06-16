import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import c1 from "@/assets/c1.jpg";
import { submitToCRM } from "@/lib/crm";
import c2 from "@/assets/c2.jpg";
import c3 from "@/assets/c3.jpg";
import c5 from "@/assets/c5.jpg";
import c6 from "@/assets/c6.jpg";
import c8 from "@/assets/c8.jpg";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Investor Access Registration — Le Capital Moderne" },
      { name: "description", content: "Create your free investor account to access market analysis, crypto research reports, and digital asset insights." },
      { property: "og:title", content: "Investor Access Registration" },
      { property: "og:description", content: "Create your free investor account." },
    ],
  }),
  component: RegisterPage,
});

const COVERAGE = [
  { tag: "Bitcoin", title: "Institutional flows continue to dominate spot BTC", desc: "Inside the desks moving size into bitcoin ETFs.", img: c1 },
  { tag: "Ethereum", title: "ETH staking yields and the institutional bid", desc: "Why pension capital is rotating into Ethereum.", img: c2 },
  { tag: "Treasury", title: "Tesla's bitcoin position, three years on", desc: "Reading the latest 10-Q line by line.", img: c3 },
  { tag: "Dogecoin", title: "Dogecoin: the long, strange Musk trade", desc: "How a meme coin held its market structure.", img: c5 },
];

const STATS = [
  ["260K+", "Daily readers"],
  ["50+", "Crypto analysts"],
  ["12yr", "Editorial history"],
  ["140", "Countries served"],
];

const PERKS = [
  "Daily crypto and macro briefings",
  "On-chain analytics dashboard",
  "Premium research reports",
  "Live institutional flow tracker",
  "Exclusive investor webinars",
  "Saved articles and watchlists",
];

const TICKERS = [
  ["BTC", "$110,482", "+2.34%"],
  ["ETH", "$5,812", "+1.18%"],
  ["SOL", "$284.10", "+3.92%"],
  ["DOGE", "$0.418", "+5.71%"],
  ["XRP", "$2.68", "+0.84%"],
  ["BNB", "$712.40", "+1.07%"],
];

const FAQ = [
  { q: "Is the account really free?", a: "Yes. A free investor account unlocks daily market briefings, our core crypto research and the on-chain dashboard. Premium reports are optional." },
  { q: "How is my data protected?", a: "We do not sell personal data. All registration data is encrypted in transit and at rest, and stored on infrastructure aligned with ISO 27001 controls." },
  { q: "Can I unsubscribe at any time?", a: "Yes. Every email includes a one-click unsubscribe and you can delete your account from settings at any time." },
];

function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    const res = await submitToCRM({
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      country_name: "cy",
      description: message,
      source_id: "registration_page",
      how_much_invested: "0",
      outline_your_case: message
    });

    setLoading(false);
    if (res.success) {
      setSubmitted(true);
    } else {
      setError(res.error || "Failed to submit. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#FAFAFA", fontFamily: "var(--font-sans)" }}>
      {/* Header */}
      <header className="border-b border-[#E5E5E5] bg-white sticky top-0 z-20">
        <div className="container-edit flex items-center justify-between py-5">
          <a href="/" className="font-serif text-xl tracking-tight text-[#111111]">
            Le Capital <span className="italic text-[#B8860B]">Moderne</span>
          </a>
          <span className="text-xs uppercase tracking-[0.18em] text-[#555555]">Investor Access</span>
        </div>
        {/* Live ticker */}
        <div className="border-t border-[#E5E5E5] bg-[#FAFAF7]">
          <div className="container-edit flex items-center gap-6 py-2 overflow-x-auto text-[12px]">
            <span className="uppercase tracking-[0.2em] text-[#B8860B] whitespace-nowrap">Live</span>
            {TICKERS.map(([s, p, c]) => (
              <span key={s} className="flex items-center gap-2 whitespace-nowrap">
                <span className="font-semibold text-[#111111]">{s}</span>
                <span className="text-[#111111]">{p}</span>
                <span className="text-[#138636]">{c}</span>
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO + FORM (form is the primary surface) */}
        <section className="container-edit py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fade-up">
          {/* Left column: context */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#B8860B]">Investor Access</p>
            <h1 className="font-serif text-[44px] md:text-[52px] leading-[1.05] text-[#111111] mt-4">
              Join the global desk reading Le Capital Moderne on crypto.
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-[#555555]">
              Free access to our daily briefings, on-chain analytics and the crypto research that institutional desks read first.
            </p>

            <ul className="mt-8 space-y-3">
              {PERKS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] text-[#222222]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B8860B] shrink-0" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#E5E5E5] pt-8">
              {STATS.map(([n, l]) => (
                <div key={l}>
                  <p className="font-serif text-3xl text-[#111111]">{n}</p>
                  <p className="text-[12px] uppercase tracking-[0.18em] text-[#555555] mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: registration form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl shadow-[0_8px_40px_rgba(17,17,17,0.08)] border border-[#EEEEEE] p-8 sm:p-10 mx-auto" style={{ maxWidth: 560 }}>
              <div className="text-center mb-8">
                <h2 className="font-serif text-[34px] leading-[1.15] text-[#111111]">Create Your Free Investor Account</h2>
                <p className="mt-3 text-[15px] text-[#555555]">Access market analysis, crypto research reports, and digital asset insights.</p>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto w-12 h-12 rounded-full bg-[#FFF8E5] flex items-center justify-center mb-4">
                    <span className="text-[#B8860B] text-xl">✓</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#111111]">Welcome aboard</h3>
                  <p className="mt-2 text-sm text-[#555555]">Your investor account request has been received. Check your inbox to confirm your email.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {error && (
                    <div className="p-3 bg-red-50 text-red-600 rounded-md text-sm text-center font-medium border border-red-100">
                      {error}
                    </div>
                  )}
                  <Field label="Name" name="name" />
                  <Field label="Email" name="email" type="email" />
                  <Field label="Number" name="phone" type="tel" />
                  <div>
                    <label className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">Msg</label>
                    <textarea
                      name="message"
                      required
                      rows={3}
                      placeholder="Msg"
                      className="w-full p-3 bg-white border border-[#E5E5E5] rounded-md text-[15px] text-[#111111] outline-none focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/15 transition resize-none"
                    />
                  </div>
                  <label className="flex items-start gap-2 text-[12px] text-[#555555] leading-relaxed animate-pulse-slow">
                    <input type="checkbox" defaultChecked className="mt-0.5 accent-[#B8860B]" />
                    Send me the weekly Le Capital Moderne Crypto Briefing.
                  </label>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 rounded-md bg-[#111111] text-white text-[14px] font-medium tracking-wide hover:bg-[#B8860B] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Registering...
                      </>
                    ) : (
                      "Create Investor Account"
                    )}
                  </button>
                  <p className="text-[12px] text-[#555555] text-center leading-relaxed">
                    By registering, you agree to the Le Capital Moderne Terms and Privacy Policy.
                  </p>
                </form>
              )}
            </div>

            <p className="text-center text-[12px] text-[#555555] mt-6">
              Already a subscriber? <a href="/loggedin" className="text-[#B8860B] hover:underline">Sign in</a>
            </p>
          </div>
        </section>

        {/* Crypto coverage strip */}
        <section className="bg-white border-y border-[#E5E5E5]">
          <div className="container-edit py-16">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#B8860B]">Crypto Coverage</p>
                <h3 className="font-serif text-[32px] text-[#111111] mt-2">What members are reading today</h3>
              </div>
              <a href="/" className="hidden md:inline-block text-[12px] uppercase tracking-[0.2em] border-b border-[#111111] pb-1 hover:text-[#B8860B] hover:border-[#B8860B]">Back to article</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {COVERAGE.map((r) => (
                <a key={r.title} href="/" className="group block">
                  <div className="overflow-hidden">
                    <img src={r.img} alt={r.title} width={800} height={500} loading="lazy" className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-[#B8860B]">{r.tag}</p>
                  <h4 className="font-serif text-[19px] leading-snug mt-2 text-[#111111] group-hover:text-[#B8860B] transition-colors">{r.title}</h4>
                  <p className="mt-2 text-[14px] text-[#555555] leading-relaxed">{r.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* What's inside */}
        <section className="container-edit py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#B8860B]">Inside Your Account</p>
            <h3 className="font-serif text-[36px] text-[#111111] mt-3">Built for the way crypto investors actually work</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { img: c6, t: "Live Markets Desk", d: "Streaming spot and derivatives data across the top fifty digital assets." },
              { img: c8, t: "On-Chain Intelligence", d: "Flows, whale tracking and exchange reserves — refreshed every block." },
              { img: c2, t: "Research Library", d: "Sector deep-dives on bitcoin, ethereum, stablecoins, DeFi and tokenisation." },
            ].map((f) => (
              <div key={f.t} className="bg-white border border-[#EEEEEE] rounded-xl overflow-hidden">
                <img src={f.img} alt={f.t} width={800} height={400} loading="lazy" className="w-full h-40 object-cover" />
                <div className="p-6">
                  <h4 className="font-serif text-[22px] text-[#111111]">{f.t}</h4>
                  <p className="mt-2 text-[14px] text-[#555555] leading-relaxed">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#111111] text-white">
          <div className="container-edit py-20">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#D4AF37] text-center">Trusted By Investors Worldwide</p>
            <h3 className="font-serif text-[34px] text-center mt-3 mb-12">Read by allocators, traders and founders</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                ["The cleanest macro-meets-crypto coverage on the desk. Required morning reading.", "— Portfolio Manager, London"],
                ["Their on-chain briefings catch things our internal dashboards miss. Worth every minute.", "— Head of Digital Assets, Singapore"],
                ["The only crypto publication my compliance team is happy with me reading.", "— Family Office Principal, New York"],
              ].map(([q, a]) => (
                <blockquote key={a} className="border-l-2 border-[#D4AF37] pl-5">
                  <p className="font-serif italic text-[18px] leading-relaxed">{q}</p>
                  <footer className="mt-4 text-[11px] uppercase tracking-[0.2em] text-white/60">{a}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container-edit py-20 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#B8860B]">Common Questions</p>
          <h3 className="font-serif text-[36px] text-[#111111] mt-3 mb-10">Before you register</h3>
          <div className="divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer flex items-center justify-between font-serif text-[20px] text-[#111111] list-none">
                  {f.q}
                  <span className="text-[#B8860B] text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[15px] text-[#555555] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E5E5E5]">
        <div className="container-edit py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#555555]">
          <p>© {new Date().getFullYear()} Le Capital Moderne · Editorial &amp; Research</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#B8860B]">Privacy</a>
            <a href="#" className="hover:text-[#B8860B]">Terms</a>
            <a href="#" className="hover:text-[#B8860B]">Cookies</a>
            <a href="#" className="hover:text-[#B8860B]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="w-full h-11 px-3 bg-white border border-[#E5E5E5] rounded-md text-[15px] text-[#111111] outline-none focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/15 transition"
      />
    </div>
  );
}