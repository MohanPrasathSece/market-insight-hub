import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import c1 from "@/assets/c1.jpg";
import { submitToCRM } from "@/lib/crm";
import c2 from "@/assets/c2.jpg";
import c3 from "@/assets/c3.jpg";
import c5 from "@/assets/c5.jpg";
import c6 from "@/assets/c6.jpg";
import c8 from "@/assets/c8.jpg";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const COUNTRY_PHONE_PATTERNS: Record<string, { code: string; pattern: RegExp; example: string }> = {
  IE: { code: "353", pattern: /^8\d{8}$/, example: "87 123 4567" },
  CH: { code: "41", pattern: /^(0)?[1-9]\d{8}$/, example: "079 123 45 67" },
  FR: { code: "33", pattern: /^(0)?[1-9]\d{8}$/, example: "06 12 34 56 78" },
  BE: { code: "32", pattern: /^(0)?[1-9]\d{7,8}$/, example: "0470 12 34 56" },
  CA: { code: "1", pattern: /^[2-9]\d{9}$/, example: "416 123 4567" },
  US: { code: "1", pattern: /^[2-9]\d{9}$/, example: "212 123 4567" },
  GB: { code: "44", pattern: /^(0)?[7-9]\d{9}$/, example: "07700 900000" },
  DE: { code: "49", pattern: /^(0)?[1-9]\d{10,11}$/, example: "0151 12345678" },
  ES: { code: "34", pattern: /^[679]\d{8}$/, example: "612 345 678" },
  IT: { code: "39", pattern: /^[3]\d{8,9}$/, example: "312 345 6789" },
  NL: { code: "31", pattern: /^(0)?[6]\d{8}$/, example: "06 12345678" },
  SE: { code: "46", pattern: /^(0)?[7]\d{8}$/, example: "070 123 45 67" },
  AU: { code: "61", pattern: /^(0)?[4]\d{8}$/, example: "0412 345 678" },
  IN: { code: "91", pattern: /^[6-9]\d{9}$/, example: "98765 43210" },
  AE: { code: "971", pattern: /^(0)?[5]\d{8}$/, example: "050 123 4567" },
  SG: { code: "65", pattern: /^[89]\d{7}$/, example: "8123 4567" },
  ZA: { code: "27", pattern: /^(0)?[6-8]\d{8}$/, example: "082 123 4567" },
  BR: { code: "55", pattern: /^[1-9]{2}9\d{8}$/, example: "11 91234-5678" },
  MX: { code: "52", pattern: /^[1-9]\d{9}$/, example: "55 1234 5678" },
  JP: { code: "81", pattern: /^(0)?[7-9]0\d{8}$/, example: "090 1234 5678" },
  CY: { code: "357", pattern: /^[9]\d{7}$/, example: "99 123456" }
};

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Contactez Notre Bureau de Conseil Privé — Le Capital Moderne" },
      { name: "description", content: "Soumettez une demande de dossier sécurisée à notre bureau de conseil privé. Un représentant examinera et répondra en toute confidentialité." },
      { property: "og:title", content: "Formulaire de Contact du Bureau de Conseil Privé" },
      { property: "og:description", content: "Soumettez une demande de dossier sécurisée au Capital Moderne." },
    ],
  }),
  component: RegisterPage,
});

const COVERAGE = [
  { tag: "Bitcoin", title: "Les flux institutionnels continuent de dominer le BTC au comptant", desc: "À l'intérieur des bureaux qui déplacent des volumes importants dans les ETF bitcoin.", img: c1 },
  { tag: "Ethereum", title: "Rendements de staking ETH et la demande institutionnelle", desc: "Pourquoi les capitaux des fonds de pension se tournent vers Ethereum.", img: c2 },
  { tag: "Trésorerie", title: "La position bitcoin de Tesla, trois ans plus tard", desc: "Lire le dernier rapport 10-Q ligne par ligne.", img: c3 },
  { tag: "Dogecoin", title: "Dogecoin : le long et étrange pari Musk", desc: "Comment une pièce de mème a maintenu sa structure de marché.", img: c5 },
];

const STATS = [
  ["24h", "Délai de réponse cible"],
  ["100%", "Sécurisé & confidentiel"],
  ["ISO 27001", "Contrôles appliqués"],
  ["Chypre/Suisse", "Bureaux actifs"],
];

const PERKS = [
  "Examen consultatif confidentiel",
  "Connexion directe aux spécialistes",
  "Aucune distribution de données à des tiers",
  "Normes strictes de confidentialité des données",
  "Canaux de support téléphonique direct",
  "Alignement total avec les réglementations locales",
];

const TICKERS = [
  ["BTC", "110 482\u00a0$", "+2,34\u00a0%"],
  ["ETH", "5\u00a0812\u00a0$", "+1,18\u00a0%"],
  ["SOL", "284,10\u00a0$", "+3,92\u00a0%"],
  ["DOGE", "0,418\u00a0$", "+5,71\u00a0%"],
  ["XRP", "2,68\u00a0$", "+0,84\u00a0%"],
  ["BNB", "712,40\u00a0$", "+1,07\u00a0%"],
];

const FAQ = [
  { q: "Le compte est-il vraiment gratuit ?", a: "Oui. Un compte investisseur gratuit donne accès aux bulletins de marché quotidiens, à notre recherche crypto principale et au tableau de bord on-chain. Les rapports premium sont optionnels." },
  { q: "Comment mes données sont-elles protégées ?", a: "Nous ne vendons pas les données personnelles. Toutes les données d'inscription sont chiffrées en transit et au repos, et stockées sur une infrastructure conforme aux contrôles ISO 27001." },
  { q: "Puis-je me désabonner à tout moment ?", a: "Oui. Chaque e-mail contient un lien de désabonnement en un clic et vous pouvez supprimer votre compte depuis les paramètres à tout moment." },
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
    const countryCode = formData.get("countryCode") as string || "CH";
    const message = formData.get("message") as string;

    const cleanNum = phone.replace(/\s+/g, "");
    const patternInfo = COUNTRY_PHONE_PATTERNS[countryCode] || COUNTRY_PHONE_PATTERNS.CH;
    
    if (!cleanNum) {
      setError("Veuillez entrer un numéro de téléphone");
      setLoading(false);
      return;
    } else if (!patternInfo.pattern.test(cleanNum)) {
      setError(`Veuillez entrer un numéro valide (ex: ${patternInfo.example})`);
      setLoading(false);
      return;
    }

    const res = await submitToCRM({
      name: name,
      email: email,
      countryCode: countryCode,
      number: phone,
      message: message,
      how_much_invested: "0",
      leadType: "signup"
    });

    setLoading(false);
    if (res.success) {
      setSubmitted(true);
    } else {
      setError(res.error || "Échec de l'envoi. Veuillez réessayer.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#FAFAFA", fontFamily: "var(--font-sans)" }}>
      {/* En-tête */}
      <header className="border-b border-[#E5E5E5] bg-white sticky top-0 z-20">
        <div className="container-edit flex items-center justify-between py-5">
          <a href="/" className="font-serif text-xl tracking-tight text-[#111111]">
            Le Capital <span className="italic text-[#B8860B]">Moderne</span>
          </a>
          <span className="text-xs uppercase tracking-[0.18em] text-[#555555]">Bureau Confidentiel</span>
        </div>
        {/* Fil de cotations en direct */}
        <div className="border-t border-[#E5E5E5] bg-[#FAFAF7]">
          <div className="container-edit flex items-center gap-6 py-2 overflow-x-auto text-[12px]">
            <span className="uppercase tracking-[0.2em] text-[#B8860B] whitespace-nowrap">En Direct</span>
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
        {/* HÉROS + FORMULAIRE */}
        <section className="container-edit py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fade-up">
          {/* Colonne gauche : contexte */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#B8860B]">Contact Bureau Privé</p>
            <h1 className="font-serif text-[44px] md:text-[52px] leading-[1.05] text-[#111111] mt-4">
              Soumettez une Demande de Dossier Sécurisée
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-[#555555]">
              Décrivez votre demande ou la portée de votre projet. Toutes les données sont transmises de manière sécurisée directement à notre CRM de gestion clients sous des contrôles d'accès stricts.
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

          {/* Colonne droite : formulaire d'inscription */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl shadow-[0_8px_40px_rgba(17,17,17,0.08)] border border-[#EEEEEE] p-8 sm:p-10 mx-auto" style={{ maxWidth: 560 }}>
              <div className="text-center mb-8">
                <h2 className="font-serif text-[34px] leading-[1.15] text-[#111111]">Formulaire de Contact</h2>
                <p className="mt-3 text-[15px] text-[#555555]">Veuillez remplir ce formulaire pour nous contacter.</p>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto w-12 h-12 rounded-full bg-[#FFF8E5] flex items-center justify-center mb-4">
                    <span className="text-[#B8860B] text-xl">✓</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#111111]">Demande Reçue</h3>
                  <p className="mt-2 text-sm text-[#555555]">Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.</p>
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
                  <Field label="Nom" name="name" />
                  <Field label="E-mail" name="email" type="email" />
                  
                  <div>
                    <label className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">Numéro</label>
                    <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
                      <select
                        name="countryCode"
                        defaultValue="CH"
                        className="w-[110px] h-11 bg-[rgba(0,0,0,0.03)] border border-[#E5E5E5] text-[#111] rounded-md outline-none transition-colors"
                      >
                        {Object.entries(COUNTRY_PHONE_PATTERNS).map(([code, info]) => (
                          <option key={code} value={code}>{code} +{info.code}</option>
                        ))}
                      </select>
                      <input type="tel" name="phone" required className="w-full h-11 px-3 bg-white border border-[#E5E5E5] outline-none focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/15 transition rounded-md text-[15px] text-[#111111]" style={{ flex: 1 }} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Message"
                      className="w-full p-3 bg-white border border-[#E5E5E5] rounded-md text-[15px] text-[#111111] outline-none focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/15 transition resize-none"
                    />
                  </div>
                  <label className="flex items-start gap-2 text-[12px] text-[#555555] leading-relaxed animate-pulse-slow">
                    <input type="checkbox" defaultChecked className="mt-0.5 accent-[#B8860B]" />
                    Envoyez-moi le Bulletin Crypto Hebdomadaire du Capital Moderne.
                  </label>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 rounded-md bg-[#111111] text-white text-[14px] font-medium tracking-wide hover:bg-[#B8860B] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Envoi en cours...
                      </>
                    ) : (
                      "Envoyer"
                    )}
                  </button>
                  <p className="text-[12px] text-[#555555] text-center leading-relaxed">
                    En soumettant, vous acceptez les Conditions et la Politique de Confidentialité du Capital Moderne.
                  </p>
                </form>
              )}
            </div>

            <p className="text-center text-[12px] text-[#555555] mt-6">
              Déjà abonné ? <a href="/loggedin" className="text-[#B8860B] hover:underline">Se connecter</a>
            </p>
          </div>
        </section>

        {/* Bande de couverture crypto */}
        <section className="bg-white border-y border-[#E5E5E5]">
          <div className="container-edit py-16">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#B8860B]">Couverture Crypto</p>
                <h3 className="font-serif text-[32px] text-[#111111] mt-2">Ce que les membres lisent aujourd'hui</h3>
              </div>
              <a href="/" className="hidden md:inline-block text-[12px] uppercase tracking-[0.2em] border-b border-[#111111] pb-1 hover:text-[#B8860B] hover:border-[#B8860B]">Retour à l'article</a>
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

        {/* Ce qui est inclus */}
        <section className="container-edit py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#B8860B]">Dans Votre Compte</p>
            <h3 className="font-serif text-[36px] text-[#111111] mt-3">Conçu pour la façon dont les investisseurs crypto travaillent réellement</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { img: c6, t: "Bureau des Marchés en Direct", d: "Données de spot et dérivés en streaming sur les cinquante principaux actifs numériques." },
              { img: c8, t: "Renseignements On-Chain", d: "Flux, suivi des baleines et réserves des bourses — actualisés à chaque bloc." },
              { img: c2, t: "Bibliothèque de Recherche", d: "Analyses sectorielles approfondies sur le bitcoin, l'ethereum, les stablecoins, la DeFi et la tokénisation." },
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

        {/* Témoignages */}
        <section className="bg-[#111111] text-white">
          <div className="container-edit py-20">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#D4AF37] text-center">Approuvé par des Investisseurs du Monde Entier</p>
            <h3 className="font-serif text-[34px] text-center mt-3 mb-12">Lu par des allocataires, des traders et des fondateurs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                ["La couverture macro-crypto la plus claire sur le bureau. Lecture matinale obligatoire.", "— Gestionnaire de Portefeuille, Londres"],
                ["Leurs bulletins on-chain saisissent des choses que nos tableaux de bord internes manquent. Ça vaut chaque minute.", "— Responsable des Actifs Numériques, Singapour"],
                ["La seule publication crypto avec laquelle mon équipe de conformité est à l'aise.", "— Directeur de Family Office, New York"],
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
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#B8860B]">Questions Fréquentes</p>
          <h3 className="font-serif text-[36px] text-[#111111] mt-3 mb-10">Avant de vous inscrire</h3>
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

      {/* Pied de page */}
      <footer className="bg-white border-t border-[#E5E5E5]">
        <div className="container-edit py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#555555]">
          <p>© {new Date().getFullYear()} Le Capital Moderne · Éditorial &amp; Recherche</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#B8860B]">Confidentialité</a>
            <a href="#" className="hover:text-[#B8860B]">Conditions</a>
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