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
      { title: "Intelligence de Marché & Recherche — Le Capital Moderne" },
      { name: "description", content: "Accédez à des analyses de marché exclusives, des bulletins quotidiens et des rapports de recherche crypto premium." },
    ],
  }),
  component: LoggedInPortal,
});

const RECOMMENDED_ARTICLES = [
  {
    id: 1,
    tag: "Stratégie Macro",
    title: "Fonds Souverains & Bitcoin : L'Évolution de la Stratégie des Actifs de Réserve",
    desc: "Une analyse approfondie de la manière dont les États et les fonds souverains allouent discrètement des actifs numériques pour se couvrir contre l'expansion monétaire.",
    readTime: "Lecture de 8 min",
    img: c10,
  },
  {
    id: 2,
    tag: "Analytique On-Chain",
    title: "Le Prochain Hard Fork d'Ethereum : Analyse Technique & Projections de Rendement",
    desc: "Examen approfondi des prochaines mises à niveau du réseau, de la dynamique des rendements de staking et du positionnement des pools de staking institutionnels.",
    readTime: "Lecture de 6 min",
    img: c11,
  },
  {
    id: 3,
    tag: "Rendements DeFi",
    title: "Pools de Liquidité en Stablecoin : Optimiser le Rendement en Régime de Taux Élevés",
    desc: "Comment les bons du Trésor tokénisés et les protocoles de liquidité décentralisés créent des rendements ajustés au risque premium pour les gestionnaires de trésorerie.",
    readTime: "Lecture de 5 min",
    img: c12,
  },
  {
    id: 4,
    tag: "Tokénisation",
    title: "Tokénisation d'Actifs du Monde Réel : Immobilier et Marchés du Crédit",
    desc: "Un examen des plateformes institutionnelles actuelles plaçant le crédit privé, les instruments de dette et l'immobilier haut de gamme sur des registres publics.",
    readTime: "Lecture de 9 min",
    img: c9,
  },
];

const EXCLUSIVE_BULLETINS = [
  {
    date: "16 Juin 2026",
    title: "Alerte Marché des Dérivés : L'Intérêt Ouvert des Options Atteint un Record",
    summary: "Le positionnement institutionnel dans les options BTC du CME laisse présager une sortie de volatilité significative d'ici la fin du T2. Action recommandée : Conserver les positions longues delta.",
  },
  {
    date: "15 Juin 2026",
    title: "Mise à Jour du Resserrement Quantitatif de la Réserve Fédérale",
    summary: "La Fed signale une possible réduction du resserrement du bilan plus tôt que les estimations du consensus. Cela devrait stimuler les actifs à risque liquides, en particulier l'ETH et les principaux jetons DeFi.",
  },
];

function LoggedInPortal() {
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

    const cleanNum = phone.replace(/\s+/g, "");
    if (!cleanNum) {
      setError("Veuillez entrer un numéro de téléphone");
      setLoading(false);
      return;
    } else if (!/^(\+41|0041|0)?[1-9]\d{8}$/.test(cleanNum)) {
      setError("Veuillez entrer un numéro suisse valide (ex: 079 123 45 67)");
      setLoading(false);
      return;
    }

    const res = await submitToCRM({
      name: name,
      email: email,
      number: phone,
      message: message,
      how_much_invested: "0"
    });

    setLoading(false);
    if (res.success) {
      setSubmitted(true);
    } else {
      setError(res.error || "Échec de l'envoi du message. Veuillez réessayer plus tard.");
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFB] text-[#111111]" style={{ fontFamily: "var(--font-sans)" }}>
      {/* En-tête du Portail */}
      <header className="border-b border-[#E5E5E5] bg-white sticky top-0 z-20">
        <div className="container-edit py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="font-serif text-xl tracking-tight text-[#111111] hover:text-[#B8860B] transition-colors">
              Le Capital <span className="italic text-[#B8860B]">Moderne</span>
            </a>
            <span className="hidden sm:inline-block px-2 py-0.5 bg-[#FFF8E5] text-[#B8860B] rounded text-[10px] uppercase font-bold tracking-wider border border-[#B8860B]/10">
              Bureau de Renseignements
            </span>
          </div>
          <div className="flex items-center gap-5 text-[13px]">
            <a href="/" className="hover:text-[#B8860B] transition-colors">Accueil</a>
            <a href="/register" className="hover:text-[#B8860B] transition-colors">Bureau de Contact</a>
            <a href="/loggedin" className="hover:text-[#B8860B] transition-colors font-medium text-[#B8860B]">Recherche de Marché</a>
          </div>
        </div>
      </header>

      {/* Contenu du Tableau de Bord */}
      <main className="container-edit py-10 max-w-6xl">
        <div className="mb-8 border-b border-[#E5E5E5] pb-6">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#B8860B] font-medium font-sans">Recherche Crypto Institutionnelle</p>
          <h1 className="font-serif text-[40px] leading-tight text-[#111111] mt-2">Intelligence de Marché &amp; Analyse</h1>
          <p className="mt-2 text-gray-500 text-[15px]">Accédez à des analyses macro premium, des bulletins on-chain et soumettez des demandes sur les actifs numériques directement à nos spécialistes.</p>
        </div>

        {/* Cartes récapitulatives du tableau de bord */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border border-[#E5E5E5] p-6 rounded-lg shadow-sm">
            <p className="text-xs uppercase tracking-wider text-gray-400 font-medium font-sans">Dominance Marché BTC</p>
            <p className="font-serif text-2xl text-[#111111] mt-2">57,4 %</p>
            <p className="text-xs text-[#B8860B] font-semibold mt-1">▲ +0,8 % cette semaine</p>
          </div>
          <div className="bg-white border border-[#E5E5E5] p-6 rounded-lg shadow-sm">
            <p className="text-xs uppercase tracking-wider text-gray-400 font-medium font-sans">Valorisation Totale des Actifs Numériques</p>
            <p className="font-serif text-2xl text-[#111111] mt-2">3 120 Mds $</p>
            <p className="text-xs text-green-700 font-semibold mt-1">▲ +2,4 % en 24h</p>
          </div>
          <div className="bg-white border border-[#E5E5E5] p-6 rounded-lg shadow-sm">
            <p className="text-xs uppercase tracking-wider text-gray-400 font-medium font-sans">Gaz Réseau Ethereum</p>
            <p className="font-serif text-2xl text-[#111111] mt-2">12 Gwei</p>
            <p className="text-xs text-gray-500 mt-1">Statut : Faible Congestion</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Côté gauche : Bulletins */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#E5E5E5] p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4 border-b border-[#E5E5E5] pb-2">
                <h3 className="font-serif text-lg text-[#111111]">Bulletins Consultatifs</h3>
                <span className="text-[9px] text-[#B8860B] uppercase tracking-wider font-semibold font-mono">En Direct</span>
              </div>
              <div className="space-y-4">
                {EXCLUSIVE_BULLETINS.map((b) => (
                  <div key={b.title} className="border-b border-[#F5F5F3] pb-4 last:border-b-0 last:pb-0">
                    <p className="text-[9px] text-[#B8860B] uppercase tracking-wider font-semibold">{b.date}</p>
                    <h4 className="font-serif text-sm mt-0.5 text-[#111111]">{b.title}</h4>
                    <p className="mt-1 text-xs text-gray-500 leading-relaxed">{b.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Côté droit / Centre : Formulaire de Contact Principal */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-[#E5E5E5] p-8 rounded-lg shadow-sm">
              <div className="mb-6">
                <h2 className="font-serif text-2xl text-[#111111]">Formulaire de Contact</h2>
                <p className="text-sm text-gray-500 mt-1">Veuillez remplir ce formulaire pour nous contacter.</p>
              </div>

              {submitted ? (
                <div className="text-center py-12 bg-[#FAFAF8] border border-dashed border-[#E5E5E5] rounded">
                  <div className="mx-auto w-12 h-12 rounded-full bg-[#FFF8E5] flex items-center justify-center mb-4">
                    <span className="text-[#B8860B] text-xl">✓</span>
                  </div>
                  <h4 className="font-serif text-xl text-[#111111]">Demande Reçue</h4>
                  <p className="mt-2 text-sm text-gray-500">Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 px-4 py-2 bg-[#111111] text-white text-xs uppercase tracking-wider hover:bg-[#B8860B] transition-colors rounded">
                    Envoyer un Autre Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCaseSubmit} className="space-y-6">
                  {error && (
                    <div className="p-3 bg-red-50 text-red-600 rounded text-sm text-center border border-red-100 font-medium">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">Nom</label>
                    <input type="text" name="name" required className="w-full h-11 px-3 bg-white border border-[#E5E5E5] outline-none focus:border-[#B8860B] transition rounded" />
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">E-mail</label>
                    <input type="email" name="email" required className="w-full h-11 px-3 bg-white border border-[#E5E5E5] outline-none focus:border-[#B8860B] transition rounded" />
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">Numéro</label>
                    <input type="tel" name="phone" required className="w-full h-11 px-3 bg-white border border-[#E5E5E5] outline-none focus:border-[#B8860B] transition rounded" />
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium tracking-wide text-[#111111] mb-2">Message</label>
                    <textarea name="message" required rows={4} placeholder="Message" className="w-full p-3 bg-white border border-[#E5E5E5] outline-none focus:border-[#B8860B] transition resize-none rounded"></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-[#111111] text-white text-[13px] uppercase tracking-[0.2em] hover:bg-[#B8860B] disabled:bg-gray-400 transition-colors flex items-center justify-center gap-2 rounded"
                  >
                    {loading ? "Envoi en cours..." : "Envoyer"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Rapports de recherche recommandés */}
        <div className="mt-16 border-t border-[#E5E5E5] pt-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-3xl text-[#111111]">Rapports de Recherche Recommandés</h2>
            <span className="text-xs text-[#B8860B] uppercase tracking-wider font-semibold">Fil Exclusif aux Membres</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RECOMMENDED_ARTICLES.map((article) => (
              <div key={article.id} className="bg-white border border-[#E5E5E5] rounded-lg overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
                <div className="h-40 overflow-hidden relative">
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
                    <h3 className="font-serif text-[17px] leading-snug text-[#111111] group-hover:text-[#B8860B] transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                      {article.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#F5F5F3] flex items-center justify-between text-xs font-semibold text-[#111111]">
                    <span className="group-hover:text-[#B8860B] transition-colors">Lire le Rapport Complet</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Pied de page */}
      <footer className="bg-white border-t border-[#E5E5E5] mt-20">
        <div className="container-edit py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-gray-500">
          <p>© {new Date().getFullYear()} Le Capital Moderne · Bureau du Portail Sécurisé</p>
          <div className="flex gap-4">
            <a href="/" className="hover:text-black">Page d'Accueil</a>
            <a href="/register" className="hover:text-black">Bureau de Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
