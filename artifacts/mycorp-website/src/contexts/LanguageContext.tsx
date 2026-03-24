import { createContext, useContext, useState, type ReactNode } from "react";

export type Language = "en" | "te";

const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_all_services: "All Services",
    nav_careers: "Careers",
    nav_get_started: "Get Started",
    cta_free_consultation: "Get a Free Consultation",
    cta_explore_services: "Explore Services",
    cta_learn_more: "Learn more",
    cta_explore_service: "Explore Service",
    cta_contact_us: "Contact Us",
    cta_schedule: "Schedule a Free Consultation",
    cta_request: "Request a Consultation",
    cta_all_services: "All Services",
    cta_get_started: "Get Started",
    home_hero_badge: "Your Trusted Partner in IT & Healthcare",
    home_hero_line1: "Empowering Business.",
    home_hero_line2: "Enabling Growth.",
    home_hero_sub: "We deliver innovative IT staffing, software solutions, and healthcare revenue cycle management to help global enterprises scale efficiently.",
    home_services_title: "Comprehensive Solutions for Modern Business",
    home_services_sub: "End-to-end services tailored to bridge the gap between talent and technology.",
    services_badge: "What We Do",
    services_hero_line1: "Four Service Lines.",
    services_hero_line2: "One Trusted Partner.",
    services_hero_sub: "Staffing, hiring support, project delivery, and healthcare billing — everything your enterprise needs to grow, operate, and compete.",
    services_cards_title: "Our Services",
    services_cards_sub: "Choose a service to explore how MyCorp can help your business.",
    services_why_title: "Why MyCorp Solutions?",
    services_why_sub: "We don't just provide services — we become an extension of your team. Our people embed in your workflows, align to your goals, and stay accountable to outcomes.",
    services_cta_title: "Not Sure Where to Start?",
    services_cta_sub: "Let's talk. We'll identify the right service mix and build a custom plan for your business — at no cost.",
    detail_about: "About This Service",
    detail_how_we_work: "How We Work",
    detail_how_sub: "A clear, repeatable process that delivers results from day one.",
    detail_industries: "Industries We Serve",
    detail_industries_sub: "Proven experience across a diverse range of sectors and business environments.",
    detail_specialties: "Specialties & Expertise",
    detail_specialties_sub: "Practitioner-level depth across every area of this service.",
    detail_faq: "Frequently Asked Questions",
    detail_related: "Explore Other Services",
    detail_related_sub: "See how MyCorp can help across more areas of your business.",
    detail_cta_title: "Ready to get started?",
    detail_cta_body: "Talk to our team — we'll build a plan that fits your timeline and budget.",
    detail_prev: "Previous",
    detail_next: "Next",
    footer_tagline: "Empowering Business. Enabling Growth. Your trusted global partner in IT staffing, software solutions, and healthcare RCM.",
    footer_services: "Our Services",
    footer_company: "Company",
    footer_contact: "Contact",
    footer_rights: "All rights reserved.",
  },
  te: {
    nav_home: "హోమ్",
    nav_about: "మా గురించి",
    nav_services: "సేవలు",
    nav_all_services: "అన్ని సేవలు",
    nav_careers: "కెరీర్స్",
    nav_get_started: "ప్రారంభించండి",
    cta_free_consultation: "ఉచిత సలహా పొందండి",
    cta_explore_services: "సేవలు అన్వేషించండి",
    cta_learn_more: "మరింత తెలుసుకోండి",
    cta_explore_service: "సేవ అన్వేషించండి",
    cta_contact_us: "మాతో సంప్రదించండి",
    cta_schedule: "ఉచిత సలహాను షెడ్యూల్ చేయండి",
    cta_request: "సలహా అభ్యర్థించండి",
    cta_all_services: "అన్ని సేవలు",
    cta_get_started: "ప్రారంభించండి",
    home_hero_badge: "IT మరియు హెల్త్‌కేర్‌లో మీ విశ్వసనీయ భాగస్వామి",
    home_hero_line1: "వ్యాపారాన్ని శక్తివంతం చేయడం.",
    home_hero_line2: "వృద్ధిని సాధ్యం చేయడం.",
    home_hero_sub: "ప్రపంచ సంస్థలు సమర్థంగా వృద్ధి చెందడానికి మేము IT స్టాఫింగ్, సాఫ్ట్‌వేర్ పరిష్కారాలు మరియు హెల్త్‌కేర్ రెవెన్యూ సైకిల్ మేనేజ్‌మెంట్ అందిస్తాము.",
    home_services_title: "ఆధునిక వ్యాపారానికి సమగ్ర పరిష్కారాలు",
    home_services_sub: "టాలెంట్ మరియు టెక్నాలజీ మధ్య అంతరాన్ని తగ్గించడానికి అనుకూలీకరించిన సేవలు.",
    services_badge: "మేము ఏమి చేస్తాము",
    services_hero_line1: "నాలుగు సేవా విభాగాలు.",
    services_hero_line2: "ఒక నమ్మకమైన భాగస్వామి.",
    services_hero_sub: "స్టాఫింగ్, హైరింగ్ సహాయం, ప్రాజెక్ట్ డెలివరీ మరియు హెల్త్‌కేర్ బిల్లింగ్ — మీ సంస్థకు అవసరమైన అన్నీ.",
    services_cards_title: "మా సేవలు",
    services_cards_sub: "MyCorp మీకు ఎలా సహాయపడగలదో తెలుసుకోవడానికి సేవను ఎంచుకోండి.",
    services_why_title: "MyCorp Solutions ఎందుకు?",
    services_why_sub: "మేము కేవలం సేవలు అందించమని — మేము మీ జట్టులో భాగంగా మారతాము.",
    services_cta_title: "ఎక్కడ నుండి ప్రారంభించాలో తెలియట్లేదా?",
    services_cta_sub: "మాతో మాట్లాడండి. మేము మీ వ్యాపారానికి అనుకూలమైన ప్రణాళికను ఉచితంగా రూపొందిస్తాము.",
    detail_about: "ఈ సేవ గురించి",
    detail_how_we_work: "మేము ఎలా పని చేస్తాము",
    detail_how_sub: "మొదటి రోజు నుండి ఫలితాలు అందించే స్పష్టమైన, పునరావృత ప్రక్రియ.",
    detail_industries: "మేము సేవలు అందించే పరిశ్రమలు",
    detail_industries_sub: "విభిన్న రంగాలలో నిరూపితమైన అనుభవం.",
    detail_specialties: "ప్రత్యేకతలు మరియు నైపుణ్యం",
    detail_specialties_sub: "ఈ సేవలోని ప్రతి అంశంలో నిపుణ స్థాయి లోతు.",
    detail_faq: "తరచుగా అడిగే ప్రశ్నలు",
    detail_related: "ఇతర సేవలు అన్వేషించండి",
    detail_related_sub: "మీ వ్యాపారంలో మరిన్ని రంగాలలో MyCorp ఎలా సహాయపడగలదో చూడండి.",
    detail_cta_title: "ప్రారంభించడానికి సిద్ధంగా ఉన్నారా?",
    detail_cta_body: "మా జట్టుతో మాట్లాడండి — మేము మీ టైమ్‌లైన్ మరియు బడ్జెట్‌కు అనుకూలమైన ప్రణాళికను రూపొందిస్తాము.",
    detail_prev: "మునుపటి",
    detail_next: "తదుపరి",
    footer_tagline: "వ్యాపారాన్ని శక్తివంతం చేయడం. వృద్ధిని సాధ్యం చేయడం. IT స్టాఫింగ్ మరియు హెల్త్‌కేర్ RCM లో మీ విశ్వసనీయ భాగస్వామి.",
    footer_services: "మా సేవలు",
    footer_company: "సంస్థ",
    footer_contact: "సంప్రదించండి",
    footer_rights: "అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",
  },
} as const;

type TranslationKey = keyof typeof translations.en;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
  t: (key) => translations.en[key],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem("mycorp-lang") as Language | null;
      if (stored === "en" || stored === "te") return stored;
    } catch {}
    return "en";
  });

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "en" ? "te" : "en";
      try { localStorage.setItem("mycorp-lang", next); } catch {}
      return next;
    });
  };

  const t = (key: TranslationKey): string =>
    (translations[language] as Record<string, string>)[key] ?? translations.en[key];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
