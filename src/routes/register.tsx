import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Investor Access Registration — Market Frontier Journal" },
      { name: "description", content: "Create your free investor account to access market analysis, research reports, and investment insights." },
      { property: "og:title", content: "Investor Access Registration" },
      { property: "og:description", content: "Create your free investor account." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#FAFAFA", fontFamily: "var(--font-sans)" }}>
      <header className="border-b border-[#E5E5E5] bg-white">
        <div className="container-edit flex items-center justify-between py-5">
          <a href="/" className="font-serif text-xl tracking-tight text-[#111111]">
            Market Frontier <span className="italic text-[#B8860B]">Journal</span>
          </a>
          <span className="text-xs uppercase tracking-[0.18em] text-[#555555]">Investor Access</span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-16 animate-fade-up">
        <div className="w-full" style={{ maxWidth: 520 }}>
          <div className="text-center mb-8">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#B8860B] mb-3">Registration</p>
            <h1 className="font-serif text-[36px] leading-[1.15] text-[#111111]">Create Your Free Investor Account</h1>
            <p className="mt-3 text-[15px] text-[#555555]">Access market analysis, research reports, and investment insights.</p>
          </div>

          <div className="bg-white rounded-xl shadow-[0_2px_24px_rgba(17,17,17,0.06)] border border-[#EEEEEE] p-8 sm:p-10">
            {submitted ? (
              <div className="text-center py-8">
                <div className="mx-auto w-12 h-12 rounded-full bg-[#FFF8E5] flex items-center justify-center mb-4">
                  <span className="text-[#B8860B] text-xl">✓</span>
                </div>
                <h2 className="font-serif text-2xl text-[#111111]">Welcome aboard</h2>
                <p className="mt-2 text-sm text-[#555555]">Your investor account request has been received.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-2 gap-4">
                  <Field label="First Name" name="firstName" />
                  <Field label="Last Name" name="lastName" />
                </div>
                <Field label="Email Address" name="email" type="email" />
                <Field label="Phone Number" name="phone" type="tel" />
                <Field label="Country" name="country" />
                <div>
                  <label className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">Investment Interest</label>
                  <select
                    required
                    defaultValue=""
                    className="w-full h-11 px-3 bg-white border border-[#E5E5E5] rounded-md text-[15px] text-[#111111] outline-none focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/15 transition"
                  >
                    <option value="" disabled>Select an interest</option>
                    <option>Technology</option>
                    <option>Digital Assets</option>
                    <option>AI</option>
                    <option>Markets</option>
                    <option>Business</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full h-12 rounded-md bg-[#111111] text-white text-[14px] font-medium tracking-wide hover:bg-[#B8860B] transition-colors duration-300"
                >
                  Create Investor Account
                </button>
                <p className="text-[12px] text-[#555555] text-center leading-relaxed">
                  By registering, you agree to the Market Frontier Journal Terms and Privacy Policy.
                </p>
              </form>
            )}
          </div>

          <p className="text-center text-[12px] text-[#555555] mt-6">
            © {new Date().getFullYear()} Market Frontier Journal · Editorial &amp; Research
          </p>
        </div>
      </main>
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