import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { submitToCRM } from "@/lib/crm";

export const Route = createFileRoute("/loggedin")({
  head: () => ({
    meta: [
      { title: "Partner & Investor Portal — Le Capital Moderne" },
      { name: "description", content: "Access your private investor desk, manage allocations, and submit new investment cases directly to our CRM." },
    ],
  }),
  component: LoggedInPortal,
});

function LoggedInPortal() {
  // Mock logged-in user profile details (can be updated by the form)
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
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
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const country = formData.get("country") as string;
    const sourceId = formData.get("sourceId") as string;
    const investedAmount = formData.get("investedAmount") as string;
    const caseDetails = formData.get("caseDetails") as string;

    // Update local profile state as well to show persistence
    setProfile({
      firstName,
      lastName,
      email,
      phone,
      country
    });

    const res = await submitToCRM({
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      country_name: country,
      description: `Partner Portal Case Outline: ${caseDetails}`,
      source_id: sourceId || "partner_portal",
      how_much_invested: investedAmount,
      outline_your_case: caseDetails
    });

    setLoading(false);
    if (res.success) {
      setSubmitted(true);
    } else {
      setError(res.error || "Failed to log case in CRM. Please verify credentials or network connection.");
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
            <span className="text-gray-500">Welcome, <strong>{profile.firstName}</strong></span>
            <a href="/" className="px-3 py-1.5 border border-[#E5E5E5] text-gray-700 hover:text-black hover:border-black transition-colors rounded">
              Log Out
            </a>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="container-edit py-10 max-w-6xl">
        <div className="mb-8">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#B8860B]">Private Desk Dashboard</p>
          <h1 className="font-serif text-[42px] leading-tight text-[#111111] mt-2">Secure Partner Environment</h1>
          <p className="mt-2 text-gray-500 text-[15px]">Manage digital asset submissions, track CRM entries, and request allocations.</p>
        </div>

        {/* Top summary row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border border-[#E5E5E5] p-6 rounded-lg shadow-sm">
            <p className="text-xs uppercase tracking-wider text-gray-400">Account Tier</p>
            <p className="font-serif text-2xl text-[#111111] mt-2">Premium Affiliate</p>
            <p className="text-xs text-green-600 font-semibold mt-1">✓ API Token Verified (Alex-TC24)</p>
          </div>
          <div className="bg-white border border-[#E5E5E5] p-6 rounded-lg shadow-sm">
            <p className="text-xs uppercase tracking-wider text-gray-400">Connected CRM Target</p>
            <p className="font-serif text-[15px] truncate text-[#111111] mt-2">inwo.crmcore.me</p>
            <p className="text-xs text-gray-500 mt-2 font-mono truncate">/api/lead_management/api/affiliates</p>
          </div>
          <div className="bg-white border border-[#E5E5E5] p-6 rounded-lg shadow-sm">
            <p className="text-xs uppercase tracking-wider text-gray-400">Affiliate Status</p>
            <p className="font-serif text-2xl text-green-700 mt-2">Operational</p>
            <p className="text-xs text-gray-500 mt-1">Last CRM sync: Just now</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left profile detail display */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#E5E5E5] p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl border-b border-[#E5E5E5] pb-3 mb-4">Your Identity Data</h3>
              <div className="space-y-4 text-[14px]">
                <div>
                  <span className="block text-xs text-gray-400 uppercase tracking-wide">Full Name</span>
                  <span className="font-medium text-[#111111]">{profile.firstName} {profile.lastName}</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-400 uppercase tracking-wide">Secure Email</span>
                  <span className="font-medium text-[#111111]">{profile.email}</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-400 uppercase tracking-wide">Phone Registered</span>
                  <span className="font-medium text-[#111111]">{profile.phone}</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-400 uppercase tracking-wide">Tax Residency</span>
                  <span className="font-medium text-[#111111] uppercase">{profile.country}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#111111] text-white p-6 rounded-lg">
              <p className="text-[10px] uppercase tracking-widest text-[#D4AF37]">Integration Metadata</p>
              <h4 className="font-serif text-lg mt-2">Active API Session</h4>
              <p className="text-xs text-white/70 mt-2 leading-relaxed">
                Form submissions on this portal invoke a secure webhook directly to the lead ingestion system.
              </p>
              <div className="mt-4 p-3 bg-white/5 rounded font-mono text-[10px] break-all border border-white/10">
                AUTH: AFF_1_92cbc1bc7628...
              </div>
            </div>
          </div>

          {/* Right Case submission form */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-[#E5E5E5] p-8 rounded-lg shadow-sm">
              <div className="mb-6">
                <h2 className="font-serif text-2xl text-[#111111]">CRM Case Logging &amp; Update Form</h2>
                <p className="text-sm text-gray-500 mt-1">Submit new allocations or project cases to update your partner profile in the core CRM database.</p>
              </div>

              {submitted ? (
                <div className="text-center py-12 bg-[#FAFAF8] border border-dashed border-[#E5E5E5] rounded">
                  <div className="mx-auto w-12 h-12 rounded-full bg-[#FFF8E5] flex items-center justify-center mb-4">
                    <span className="text-[#B8860B] text-xl">✓</span>
                  </div>
                  <h4 className="font-serif text-xl text-[#111111]">Allocation Case Registered</h4>
                  <p className="mt-2 text-sm text-gray-500">Your details have been posted and validated by the lead management CRM.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 px-4 py-2 bg-[#111111] text-white text-xs uppercase tracking-wider hover:bg-[#B8860B] transition-colors rounded">
                    Submit Another Case
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCaseSubmit} className="space-y-6">
                  {error && (
                    <div className="p-3 bg-red-50 text-red-600 rounded text-sm text-center border border-red-100 font-medium">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">First Name</label>
                      <input type="text" name="firstName" defaultValue={profile.firstName} required className="w-full h-11 px-3 bg-white border border-[#E5E5E5] outline-none focus:border-[#B8860B] transition rounded" />
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">Last Name</label>
                      <input type="text" name="lastName" defaultValue={profile.lastName} required className="w-full h-11 px-3 bg-white border border-[#E5E5E5] outline-none focus:border-[#B8860B] transition rounded" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">Email Address</label>
                      <input type="email" name="email" defaultValue={profile.email} required className="w-full h-11 px-3 bg-white border border-[#E5E5E5] outline-none focus:border-[#B8860B] transition rounded" />
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">Phone Number</label>
                      <input type="tel" name="phone" defaultValue={profile.phone} required className="w-full h-11 px-3 bg-white border border-[#E5E5E5] outline-none focus:border-[#B8860B] transition rounded" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">Residency (Country ISO Code)</label>
                      <input type="text" name="country" defaultValue={profile.country} placeholder="cy" required className="w-full h-11 px-3 bg-white border border-[#E5E5E5] outline-none focus:border-[#B8860B] transition rounded" />
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">Case Allocation / Investment Limit ($)</label>
                      <input type="number" name="investedAmount" defaultValue="50000" placeholder="10000" required className="w-full h-11 px-3 bg-white border border-[#E5E5E5] outline-none focus:border-[#B8860B] transition rounded" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">Source ID</label>
                      <input type="text" name="sourceId" defaultValue="partner_portal" placeholder="portal" required className="w-full h-11 px-3 bg-white border border-[#E5E5E5] outline-none focus:border-[#B8860B] transition rounded" />
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">Campaign Channel</label>
                      <input type="text" name="campaign" defaultValue="direct" className="w-full h-11 px-3 bg-white border border-[#E5E5E5] outline-none focus:border-[#B8860B] transition rounded" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">Outline Case Scope &amp; Details</label>
                    <textarea name="caseDetails" required rows={4} placeholder="Describe the new digital asset allocation requirements or general project case profile..." className="w-full p-3 bg-white border border-[#E5E5E5] outline-none focus:border-[#B8860B] transition resize-none rounded"></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-[#111111] text-white text-[13px] uppercase tracking-[0.2em] hover:bg-[#B8860B] disabled:bg-gray-400 transition-colors flex items-center justify-center gap-2 rounded"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Syncing with CRM...
                      </>
                    ) : (
                      "Post to Partner CRM Ingestion"
                    )}
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
            <a href="/register" className="hover:text-black">Register</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
