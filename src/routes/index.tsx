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
      { title: "Le Carnet Numérique du Maestro Suisse : Pourquoi Roger Federer S'Aventure Discrètement Dans La Crypto — Le Capital Moderne" },
      { name: "description", content: "Roger Federer reste sans doute la figure suisse la plus universellement appréciée, même après sa retraite. Découvrez les allocations privées en actifs numériques et ses vues sur la blockchain qui définissent son héritage après-tennis." },
      { property: "og:title", content: "Le Carnet Numérique du Maestro Suisse : Pourquoi Roger Federer S'Aventure Discrètement Dans La Crypto" },
      { property: "og:description", content: "Découvrez les allocations d'actifs numériques derrière le portefeuille suisse de Roger Federer." },
    ],
  }),
  component: Index,
});

const R = "/register";
const openProps = { href: R, target: "_blank", rel: "noopener noreferrer" } as const;

const NAV = ["Marchés", "Affaires", "Technologie", "Innovation", "Investissement", "Actifs Numériques", "Économie", "Opinion", "Recherche", "Analyse", "Dernières Nouvelles", "Tendances"];

const TICKER = [
  "Le Bitcoin repasse les 110K$ alors que les flux institutionnels s'accélèrent",
  "La Banque Nationale Suisse explore des pilotes de monnaie numérique adossés à la BNS",
  "La Crypto Valley suisse connaît une hausse de 24% du financement en capital-risque",
  "Les ETF Ethereum au comptant franchissent les 30 milliards de dollars d'entrées nettes",
  "La capitalisation boursière des stablecoins dépasse les 260 milliards de dollars",
  "L'apparition de Roger Federer dans un podcast suscite un débat sur la confiance numérique",
  "Les bureaux de trading par IA représentent désormais 41% du volume au comptant des cryptomonnaies",
];

const SIDEBAR = [
  ["Tendances", ["Dans les coulisses de la montée discrète de la crypto en Suisse", "Comment Federer est devenu le visage de la confiance numérique", "La feuille de route des paiements de Zoug expliquée", "Pourquoi le family office de Federer détient du bitcoin", "L'effet du maestro suisse : mesurer la confiance dans la crypto"]],
  ["Choix de la Rédaction", ["Le manuel crypto des milliardaires — cinq leçons", "Un guide pratique du bitcoin pour la trésorerie d'entreprise", "Comment les particuliers ont suivi Federer dans les actifs numériques", "Quand les marchés publics cessent de fixer le prix", "La couche d'infrastructure que personne n'évalue"]],
  ["Les Plus Lus", ["Le Bitcoin à 110K$ : ce qui change pour les portefeuilles", "Le moment institutionnel discret de la Suisse", "La nouvelle économie de la confiance numérique", "Les stablecoins et l'avenir de la domination du franc suisse", "Ce que les family offices achètent ce trimestre"]],
  ["Notes de Recherche", ["Modèles d'allocation d'actifs numériques, T4", "Rapport crypto de la trésorerie suisse", "Perspectives macroéconomiques et trajectoire des taux", "Flux on-chain : tableau de bord institutionnel", "Règlement transfrontalier en crypto trimestriel"]],
];

const RELATED = [
  { cat: "Bitcoin", img: c1, title: "Le Bitcoin à 110K$ : La Réévaluation Discrète d'un Actif de Réserve", sum: "Les flux institutionnels ont réécrit le côté demande du marché du bitcoin." },
  { cat: "Ethereum", img: c2, title: "Le Moment Institutionnel d'Ethereum Est Enfin Arrivé", sum: "Les ETF au comptant, le restaking et les actifs tokénisés remodèlent la base d'investisseurs du réseau." },
  { cat: "Suisse", img: c3, title: "Pourquoi la Suisse Est Toujours Le Pôle de la Richesse Crypto", sum: "Trois ans après son premier cadre réglementaire, le bilan de la nation reste une référence." },
  { cat: "Philanthropie", img: c4, title: "Dans la Position Discrète de Federer sur la Blockchain", sum: "Ce que les déclarations suisses révèlent — et cachent — sur les actifs numériques de la star du tennis." },
  { cat: "Confiance", img: c5, title: "Comment le Soutien de Federer Définit la Valeur à Long Terme", sum: "Les actifs que Federer a défendus ont discrètement dépassé les attentes." },
  { cat: "Trading", img: c6, title: "Les Bureaux de Trading Crypto Sont Désormais Gérés Comme Des Fonds Macro", sum: "Au cœur du tournant institutionnel des plus grandes plateformes d'actifs numériques au monde." },
  { cat: "IA", img: c7, title: "Comment les Modèles d'IA Remodèlent la Structure du Marché Crypto", sum: "Les flux algorithmiques génèrent désormais la majorité du volume au comptant sur les principales bourses." },
  { cat: "Bourses", img: c8, title: "La Nouvelle Génération de Plateformes Crypto Réglementées", sum: "Comment la garde, la surveillance et la conformité sont devenues le véritable rempart." },
  { cat: "Blockchain", img: c9, title: "Le Règlement Programmable Arrive Sur Les Marchés Des Capitaux", sum: "La tokénisation passe enfin des pilotes aux rails institutionnels en direct." },
  { cat: "Marchés", img: c10, title: "Haussiers, Baissiers Et Bitcoin : Lire Le Nouveau Cycle", sum: "Pourquoi le cycle 2026 semble structurellement différent du précédent." },
  { cat: "NFTs", img: c11, title: "Après L'Engouement : Où Les NFTs Ont Discrètement Trouvé Une Véritable Utilité", sum: "De la billetterie à la fidélité aux marques, les objets de collection on-chain ont trouvé un second souffle." },
  { cat: "Particuliers", img: c12, title: "Comment Les Investisseurs Particuliers Tradent La Crypto En 2026", sum: "Les plateformes axées sur le mobile, le copy trading et le nouveau visage de l'investissement numérique." },
];

const SOCIAL = ["LinkedIn", "X", "Facebook", "YouTube", "Telegram", "Instagram"];

const FOOTER_COLS: Array<[string, string[]]> = [
  ["Sections", ["Marchés", "Affaires", "Technologie", "Innovation", "Investissement", "Actifs Numériques", "Économie", "Opinion", "Recherche", "Analyse"]],
  ["Couverture Crypto", ["Bitcoin", "Ethereum", "Stablecoins", "Dogecoin", "DeFi", "NFTs", "Tokénisation", "Données On-Chain", "Bourses", "Minage"]],
  ["Marchés & Données", ["Cotations en Direct", "Carte Thermique Crypto", "Suivi des ETF", "Trésoreries d'Entreprises", "Calendrier Macro", "Calendrier des Résultats", "Matières Premières", "Taux & Obligations", "Forex", "Indices"]],
  ["Recherche", ["Perspectives 2026", "Note Hebdomadaire", "Rapports Premium", "Modèles Sectoriels", "Outils d'Allocation", "Livres Blancs", "Méthodologie", "Glossaire", "Éducation des Investisseurs", "Webinaires"]],
  ["Entreprise", ["À Propos", "Équipe Éditoriale", "Salle de Rédaction", "Carrières", "Bureau de Presse", "Relations Investisseurs", "Normes Éditoriales", "Corrections", "Rapport de Diversité", "Contact"]],
  ["Compte", ["Se Connecter", "S'inscrire", "S'abonner", "Newsletter", "Gérer l'Abonnement", "Abonnements de Groupe", "Accès Étudiant", "Offrir des Articles", "Applications", "Flux RSS"]],
  ["Partenaires", ["Faire de la Publicité", "Contenu Sponsorisé", "Événements & Sommets", "Récompenses", "Syndication", "Licences", "Programme d'Affiliation", "Studio de Marque", "Newsletters Pour Entreprises", "Recherche Personnalisée"]],
  ["Légal", ["Politique de Confidentialité", "Conditions de Service", "Paramètres des Cookies", "Divulgations", "Accessibilité", "Déclaration sur l'Esclavage Moderne", "Code de Conduite", "Lanceur d'Alerte", "Plan du Site", "Centre d'Aide"]],
];



function Index() {
  return (
    <div className="bg-white text-[#111111]" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Top utility bar */}
      <div className="border-b border-[#E5E5E5] text-[12px] text-[#555555]">
        <div className="container-edit flex items-center justify-between py-2">
          <span className="tracking-wide">Mardi, 16 Juin 2026 · Édition Internationale</span>
          <div className="hidden md:flex items-center gap-5">
            <a href="/register" className="hover:text-[#B8860B] transition-colors">Bureau de Contact</a>
            <a href="/loggedin" className="hover:text-[#B8860B] transition-colors font-medium text-[#B8860B]">Se Connecter</a>
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
            Intelligence Financière Pour L'Investisseur Moderne
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
          <span className="bg-[#B8860B] text-white px-2 py-0.5 uppercase tracking-[0.18em] text-[10px] whitespace-nowrap">En Direct · Marchés</span>
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
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 block mb-2 font-sans">Style de Vie</span>
              <a {...openProps} className="block font-serif text-[15px] font-bold leading-snug text-[#111111] hover:text-[#B8860B] transition-colors mb-2">
                Les nouveaux chalets alpins achetés entièrement avec les gains des actifs numériques. À l'intérieur des propriétés cryptographiques de luxe en Suisse.
              </a>
              <p className="text-[13px] text-[#555555] leading-relaxed">
                Alors que les structures de richesse évoluent à Zoug et Genève, l'immobilier de luxe accompagne ce changement.
              </p>
            </div>

            {/* Health category */}
            <div className="pt-6 border-t border-[#E5E5E5]">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 block mb-2 font-sans">Santé</span>
              <a {...openProps} className="block font-serif text-[15px] font-bold leading-snug text-[#111111] hover:text-[#B8860B] transition-colors mb-2">
                Les cliniques suisses intègrent la blockchain pour la portabilité des antécédents médicaux.
              </a>
              <p className="text-[13px] text-[#555555] leading-relaxed">
                La technologie des registres décentralisés trouve un point d'ancrage inattendu dans le bien-être alpin haut de gamme.
              </p>
            </div>

            {/* LCM ePaper Card */}
            <div className="pt-6 border-t border-[#E5E5E5]">
              <div className="bg-red-600 text-white font-bold text-[9px] tracking-[0.2em] uppercase py-1 px-2.5 inline-block rounded mb-2.5 font-sans">
                40% de Réduction Directe
              </div>
              <h5 className="font-serif text-[17px] font-bold text-[#111111] leading-tight">Journal Numérique Le Capital Moderne</h5>
              <p className="text-[12px] text-[#555555] mt-1.5 leading-relaxed">
                Lisez l'édition numérique quotidienne du Capital Moderne sur votre tablette.
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
                Abonnez-vous Maintenant
              </a>
            </div>
          </aside>

          {/* MIDDLE COLUMN: Hero Image, Main Title, Dialogue Conversation Transcript */}
          <main className="col-span-12 lg:col-span-6 xl:col-span-6.5 lg:border-r lg:border-[#E5E5E5] lg:px-6 space-y-6">
            
            {/* Title Section */}
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#B8860B] font-semibold block font-sans">Dossier Spécial · Suisse</span>
              <h2 className="font-serif text-[32px] md:text-[44px] leading-[1.1] tracking-tight text-[#111111]">
                L'Expérience de 250€ : Un Influenceur Suisse Détaille des Retours de 10x Dans un Portefeuille Crypto
              </h2>
              <p className="text-[17px] leading-relaxed text-[#555555] font-serif italic">
                Eleanor Whitfield s'entretient avec l'un des principaux influenceurs blockchain suisses pour discuter de la raison pour laquelle commencer petit est le meilleur moyen d'assumer la volatilité des actifs numériques.
              </p>
              <div className="flex items-center gap-3 text-[11px] text-[#777777] tracking-wide pt-1 font-sans">
                <span>Eleanor Whitfield</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5E5E5]" />
                <span>16 Juin 2026</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5E5E5]" />
                <span>Lecture de 8 min</span>
              </div>
            </div>

            {/* Hero Image */}
            <a {...openProps} className="block group overflow-hidden rounded-lg">
              <img
                src={hero}
                alt="Influenceur Crypto Suisse discutant d'actifs numériques"
                width={1200}
                height={675}
                className="w-full h-auto object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
              />
              <p className="mt-3 text-[11px] text-[#555555] italic text-center leading-normal">
                Un influenceur suisse en actifs numériques expliquant comment il a transformé un essai de 250€ en bénéfices multipliés par 10 dans la Crypto Valley de Zoug. Photographie pour Le Capital Moderne.
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
                    Commençons par les bases. De nombreux investisseurs particuliers sont intimidés par la volatilité des cryptomonnaies. Comment devraient-ils commencer ?
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#B8860B] text-white flex items-center justify-center font-bold text-[12px] uppercase font-sans">
                  IS
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#B8860B] font-bold font-sans">Influenceur Suisse</p>
                  <p className="mt-1 text-[16px] leading-[1.6] text-[#222222]">
                    Je dis aux gens de garder les choses simples et faciles. N'y jetez pas les économies de toute une vie. J'ai effectué un test récemment : j'ai investi exactement <strong className="text-black">250€</strong> dans des paniers numériques de détail réglementés en Suisse. En quelques semaines, cette position a généré un <strong className="text-[#B8860B]">profit de 10x</strong> — l'évaluant à <strong className="text-black">2 500€</strong>.
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
                    Un retour de 10x est remarquable, mais ce niveau de rendement n'est-il pas typique des jetons spéculatifs à haut risque ? Comment cela a-t-il été réalisé sur des rails suisses conformes ?
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#B8860B] text-white flex items-center justify-center font-bold text-[12px] uppercase font-sans">
                  IS
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#B8860B] font-bold font-sans">Influenceur Suisse</p>
                  <p className="mt-1 text-[16px] leading-[1.6] text-[#222222]">
                    C'était structuré. En dirigeant les 250€ vers un mélange de jetons d'infrastructure de couche 1 et d'actifs du monde réel tokénisés (RWA) dans la Crypto Valley de Zoug, nous avons capturé l'élan tout en restant protégés par le strict cadre bancaire numérique de la Suisse. La clé est d'utiliser des terminaux CRM sécurisés et conformes et des banques privées réglementées.
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
                    Quel est le principal enseignement pour les investisseurs particuliers qui observent cet espace ?
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#B8860B] text-white flex items-center justify-center font-bold text-[12px] uppercase font-sans">
                  IS
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#B8860B] font-bold font-sans">Influenceur Suisse</p>
                  <p className="mt-1 text-[16px] leading-[1.6] text-[#222222]">
                    Commencez petit, restez simple et utilisez des plateformes sécurisées. Si vous pouvez tester les eaux avec 250€, vous pouvez apprendre comment fonctionnent les rails sans risquer un capital important. Le modèle suisse prouve que conformité et haute performance peuvent coexister.
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
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#555555] font-bold font-sans">Correspondante Principale des Marchés</p>
                <a {...openProps}><h4 className="font-serif text-lg font-bold text-[#111111] hover:text-[#B8860B] transition-colors mt-0.5">Eleanor Whitfield</h4></a>
                <p className="mt-1.5 text-[14px] text-[#555555] leading-relaxed">
                  Eleanor écrit sur les marchés des capitaux, les actifs numériques et les institutions qui remodèlent la finance mondiale. Auparavant rédactrice des marchés à Londres et à Hong Kong.
                </p>
              </div>
            </div>
          </main>

          {/* RIGHT COLUMN: Video Cards, Premium research, Editor picks */}
          <aside className="col-span-12 lg:col-span-3 space-y-8">
            
            {/* TOI+ Inspired Featured Video block */}
            <div className="space-y-6">
              <h4 className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#B8860B] pb-2 border-b border-[#E5E5E5] font-sans">
                Vidéo en Vedette
              </h4>
              
              <div className="space-y-6">
                {[
                  {
                    category: "SOMMET DE LA CRYPTO VALLEY SUISSE",
                    title: "Sommet de Zoug : Des Influenceurs Mondiaux Révèlent des Stratégies de Portefeuille à Profit 10x",
                    img: c1,
                    duration: "10:38"
                  },
                  {
                    category: "BUREAU FINANCIER DE GENÈVE",
                    title: "Comment les Rails de Conformité Permettent aux Banques Suisses de Router les Actifs Numériques en Toute Sécurité",
                    img: c2,
                    duration: "09:30"
                  },
                  {
                    category: "PIPELINE BANCAIRE DE ZOUG",
                    title: "À l'Intérieur de la Nouvelle Infrastructure Blockchain de Détail Qui Change la Banque Privée",
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
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#D4AF37] font-bold font-sans">Recherche Premium</p>
              <p className="font-serif text-[20px] leading-snug mt-2 font-bold">Le Rapport Renseignements Investisseurs 2026</p>
              <a {...openProps} className="inline-block mt-4 text-[12px] uppercase tracking-[0.2em] border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] font-medium transition-colors font-sans">
                Demander l'Accès
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
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#B8860B]">Couverture Associée</p>
              <h3 className="font-serif text-[36px] mt-2">Plus Du Capital Moderne</h3>
            </div>
            <a {...openProps} className="hidden md:inline-block text-[12px] uppercase tracking-[0.2em] border-b border-[#111111] pb-1 hover:text-[#B8860B] hover:border-[#B8860B]">
              Voir Toute la Couverture
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
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#B8860B]">Le Bulletin</p>
          <h3 className="font-serif text-[44px] leading-tight mt-3">Gardez une Longueur d'Avance Sur Les Tendances Du Marché</h3>
          <p className="mt-4 text-[17px] text-[#555555] leading-relaxed mb-8">
            Recevez des analyses de marché et des informations hebdomadaires du bureau éditorial du Capital Moderne.
          </p>
          <a href="/register" className="inline-block h-12 px-8 bg-[#111111] text-white text-[13px] uppercase tracking-[0.2em] hover:bg-[#B8860B] transition-colors leading-[48px] text-center font-medium">
            Entrer en Contact
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
                Intelligence financière pour l'investisseur moderne. Éditorial, recherche et analyse d'une salle de rédaction mondiale couvrant les marchés, la technologie et l'économie des actifs numériques.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.2em] text-white/60">
                <span className="px-3 py-1 border border-white/15 rounded-full">Certifié ISO 27001</span>
                <span className="px-3 py-1 border border-white/15 rounded-full">Charte de Confiance Éditoriale</span>
                <span className="px-3 py-1 border border-white/15 rounded-full">Membre · WAN-IFRA</span>
              </div>
            </div>
            <div>
              <h5 className="text-[11px] uppercase tracking-[0.24em] text-[#D4AF37] mb-4">Téléchargez Notre Application</h5>
              <div className="flex flex-col gap-3">
                <a {...openProps} className="px-4 py-3 border border-white/15 rounded-md text-[13px] hover:border-[#D4AF37] transition-colors">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/50">Disponible sur</span>
                  <span className="block mt-0.5 font-serif text-lg">App Store</span>
                </a>
                <a {...openProps} className="px-4 py-3 border border-white/15 rounded-md text-[13px] hover:border-[#D4AF37] transition-colors">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/50">Obtenez-la sur</span>
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
              <span className="uppercase tracking-[0.2em] text-[#D4AF37]">Éditions Mondiales</span>
              {["États-Unis", "Royaume-Uni", "Union Européenne", "Asie", "Moyen-Orient", "Australie", "Amérique Latine"].map((r) => (
                <a key={r} {...openProps} className="hover:text-white">{r}</a>
              ))}
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-white/50">
            <p>© {new Date().getFullYear()} Le Capital Moderne. Tous droits réservés.</p>
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
