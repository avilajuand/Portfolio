"use client";

import React, { useState } from "react";
import { Mail, ArrowUpRight, Compass, NotebookPen, GraduationCap, Briefcase, Smartphone, AlertCircle, Palette } from "lucide-react";

/**
 * Living Notebook 4.2 - Quadrilingual
 * Updated translations for EN, ES, FR, KR.
 * Removed "What I Work On" section.
 */

const translations = {
  en: {
    meta: "Professional Portfolio",
    hero: {
      name: "Juan Avila",
      headline: "Strategy, systems, and emerging technology",
      subtext: "I explore how organizations adopt new technologies; and why those systems succeed, bend, or fail in practice.\n\nMy work sits at the intersection of strategy, operations, and emerging technology, with a focus on translating complexity into clear decisions. I’m particularly interested in how incentives, regulation, and human behavior shape the real-world impact of AI and digital systems.\n\nI value clarity over buzzwords, and structure over speculation.",
    },
    nav: { mail: "Correspondence", medium: "Reflections", art: "Art" },
    sections: {
      experience: "Experience",
      education: "Education & Learning",
      projects: "Selected Projects",
      now: "Current Focus",
      note: "Digital Note",
      art: "Art Projects"
    },
    experience: [
      {
        company: "Enpath.co",
        location: "Remote",
        role: "Business Development & Strategy Lead (Independent Venture)",
        period: "2024 – 2025",
        description: [
          "Founded and developed an early-stage initiative exploring trust, transparency, and adoption challenges in AI-driven systems.",
          "Conducted market research and opportunity analysis around AI governance, legal accessibility, and user trust.",
          "Developed value propositions, positioning, and early go-to-market hypotheses aligned with customer needs and regulatory constraints.",
          "Collaborated with technical contributors to translate market insights into product concepts, pilots, and partnership ideas.",
          "Used Enpath as a learning vehicle to study how abstract principles (ethics, regulation, fairness) translate into real products.",
          "This project remains exploratory by design — focused on learning, structure, and systems rather than scale."
        ],
      },
      {
        company: "ManpowerGroup",
        location: "Remote",
        role: "Talent Acquisition Specialist",
        period: "2023",
        description: [
          "Supported multinational clients including Tesla, JP Morgan, and Schindler across technology, finance, and industrial roles.",
          "Conducted talent and market mapping to align sourcing strategies with client business needs.",
          "Worked in a metrics-driven environment, consistently meeting performance targets.",
          "Gained exposure to how automation, specialization, and labor markets interact at scale.",
          "This role strengthened my understanding of workforce dynamics and operational discipline."
        ],
      },
      {
        company: "Rappi",
        location: "Bogotá",
        role: "Operations Analyst",
        period: "2019",
        description: [
          "Supported the launch and rollout of RappiPay, a fintech product operating within complex on-the-ground conditions.",
          "Contributed to distribution and execution strategy during early market expansion.",
          "Coordinated and supervised a team of 10 field professionals across assigned regions.",
          "Worked closely with internal teams to identify execution gaps and support process improvements.",
          "This experience shaped my interest in the friction between digital ambition and physical reality."
        ],
      },
    ],
    education: [
      {
        school: "EAN University — Colombia",
        degree: "Bachelor of Business Management",
        period: "Focus on organizational management, strategy, and business fundamentals."
      },
      {
        school: "Platzi",
        degree: "School of Artificial Intelligence",
        period: "Applied training in AI concepts, tooling, and business use cases, with attention to limitations and responsible adoption."
      },
      {
        school: "University of Helsinki",
        degree: "Ethics of AI",
        period: "Coursework covering accountability, fairness, transparency, human rights, and real-world application of ethical frameworks in AI systems."
      }
    ],
    projects: [
      {
        title: "Paco — Justice Architecture",
        description: "An experimental AI “ally” designed to help Colombians understand their legal rights by translating complex legal language into accessible explanations. This project served as a case study in: Human-centered design for high-stakes information; Trust and accountability in AI interfaces; Translating regulation into usable systems.",
        threads: ["AI", "UX", "Social Impact"]
      },
      {
        title: "iOS Ecosystem Design",
        description: "Designed a small suite of iOS applications focused on high-utility, low-friction user experiences. My approach emphasizes “invisible technology” — tools that solve problems without adding cognitive load.",
        threads: ["Product Design", "Swift", "UX"]
      },
    ],
    now: [
      "Conducting independent research on AI governance and regulatory trends to understand how organizations can translate policy into operational practices.",
      "Analyzing market signals and use cases for enterprise AI systems, with a focus on data sovereignty, trust, and adoption barriers.",
      "Prototyping strategic frameworks for human–AI collaboration, drawing from market research, case studies, and early-stage venture exploration.",
    ],
    disclaimer: "This website is a living document, updated intermittently as I explore new systems and frameworks. Some project descriptions or reflections may be incomplete, and a few links may be inactive. I value clarity over completeness, if something here resonates, feel free to reach out."
  },
  es: {
    meta: "Portafolio Profesional",
    hero: {
      name: "Juan Avila",
      headline: "Estrategia, sistemas y tecnología emergente",
      subtext: "Exploro cómo las organizaciones adoptan nuevas tecnologías y por qué esos sistemas tienen éxito, se adaptan o fallan en la práctica.\n\nMi trabajo se sitúa en la intersección de la estrategia, las operaciones y la tecnología emergente, con un enfoque en traducir la complejidad en decisiones claras. Me interesa especialmente cómo los incentivos, la regulación y el comportamiento humano moldean el impacto real de la IA y los sistemas digitales.\n\nValoro la claridad sobre las palabras de moda y la estructura sobre la especulación.",
    },
    nav: { mail: "Correspondencia", medium: "Reflexiones", art: "Arte" },
    sections: {
      experience: "Experiencia",
      education: "Educación y Aprendizaje",
      projects: "Proyectos Seleccionados",
      now: "Enfoque Actual",
      note: "Nota Digital",
      art: "Proyectos de Arte"
    },
    experience: [
      {
        company: "Enpath.co",
        location: "Remoto",
        role: "Líder de Estrategia y Desarrollo de Negocios (Venture Independiente)",
        period: "2024 – 2025",
        description: [
          "Fundé y desarrollé una iniciativa en etapa temprana explorando los desafíos de confianza, transparencia y adopción en sistemas impulsados por IA.",
          "Realicé investigaciones de mercado y análisis de oportunidades sobre gobernanza de IA, accesibilidad legal y confianza del usuario.",
          "Desarrollé propuestas de valor, posicionamiento e hipótesis de mercado alineadas con las necesidades del cliente y las restricciones regulatorias.",
          "Colaboré con colaboradores técnicos para traducir insights de mercado en conceptos de producto, pilotos e ideas de asociación.",
          "Usé Enpath como vehículo de aprendizaje para estudiar cómo los principios abstractos (ética, regulación, equidad) se traducen en productos reales.",
          "Este proyecto sigue siendo exploratorio por diseño: enfocado en el aprendizaje, la estructura y los sistemas en lugar de la escala."
        ],
      },
      {
        company: "ManpowerGroup",
        location: "Remoto",
        role: "Especialista en Adquisición de Talento",
        period: "2023",
        description: [
          "Apoyé a clientes multinacionales, incluidos Tesla, JP Morgan y Schindler, en roles tecnológicos, financieros e industriales.",
          "Realicé mapeo de talento y mercado para alinear las estrategias de búsqueda con las necesidades comerciales del cliente.",
          "Trabajé en un entorno impulsado por métricas, cumpliendo consistentemente con los objetivos de desempeño.",
          "Gané exposición a cómo la automatización, la especialización y los mercados laborales interactúan a escala.",
          "Este rol fortaleció mi comprensión de la dinámica de la fuerza laboral y la disciplina operativa."
        ],
      },
      {
        company: "Rappi",
        location: "Bogotá",
        role: "Analista de Operaciones",
        period: "2019",
        description: [
          "Apoyé el lanzamiento y despliegue de RappiPay, un producto fintech que opera en condiciones complejas sobre el terreno.",
          "Contribuí a la estrategia de distribución y ejecución durante la expansión temprana del mercado.",
          "Coordiné y supervisé un equipo de 10 profesionales de campo en las regiones asignadas.",
          "Trabajé en estrecha colaboración con equipos internos para identificar brechas de ejecución y apoyar mejoras en los procesos.",
          "Esta experiencia moldeó mi interés en la fricción entre la ambición digital y la realidad física."
        ],
      },
    ],
    education: [
      {
        school: "Universidad EAN — Colombia",
        degree: "Pregrado en Administración de Empresas",
        period: "Enfoque en gestión organizacional, estrategia y fundamentos de negocios."
      },
      {
        school: "Platzi",
        degree: "Escuela de Inteligencia Artificial",
        period: "Capacitación aplicada en conceptos de IA, herramientas y casos de uso empresarial, con atención a las limitaciones y la adopción responsable."
      },
      {
        school: "Universidad de Helsinki",
        degree: "Ética de la IA",
        period: "Cursos que cubren responsabilidad, equidad, transparencia, derechos humanos y aplicación en el mundo real de marcos éticos en sistemas de IA."
      }
    ],
    projects: [
      {
        title: "Paco — Arquitectura de Justicia",
        description: "Un \"aliado\" de IA experimental diseñado para ayudar a los colombianos a comprender sus derechos legales traduciendo un lenguaje legal complejo en explicaciones accesibles. Este proyecto sirvió como caso de estudio en: Diseño centrado en el humano para información crítica; Confianza y responsabilidad en interfaces de IA.",
        threads: ["IA", "UX", "Impacto Social"]
      },
      {
        title: "Diseño de Ecosistema iOS",
        description: "Diseñé un pequeño conjunto de aplicaciones iOS enfocadas en experiencias de usuario de alta utilidad y baja fricción. Mi enfoque enfatiza la \"tecnología invisible\": herramientas que resuelven problemas sin agregar carga cognitiva.",
        threads: ["Diseño de Producto", "Swift", "UX"]
      },
    ],
    now: [
      "Realización de investigaciones independientes sobre gobernanza de la IA y tendencias regulatorias para comprender cómo las organizaciones pueden traducir la política en prácticas operativas.",
      "Análisis de señales de mercado y casos de uso para sistemas de IA empresarial, con un enfoque en la soberanía de los datos, la confianza y las barreras de adopción.",
      "Creación de prototipos de marcos estratégicos para la colaboración humano-IA, basándose en la investigación de mercado, estudios de casos y exploración de empresas en etapa temprana."
    ],
    disclaimer: "Este sitio web es un documento vivo, actualizado intermitentemente a medida que exploro nuevos sistemas y marcos. Algunas descripciones de proyectos o reflexiones pueden estar incompletas y algunos enlaces pueden estar inactivos. Valoro la claridad sobre la integridad, si algo aquí resuena, no dude en comunicarse."
  },
  fr: {
    meta: "Portfolio Professionnel",
    hero: {
      name: "Juan Avila",
      headline: "Stratégie, systèmes et technologies émergentes",
      subtext: "J'explore comment les organisations adoptent les nouvelles technologies ; et pourquoi ces systèmes réussissent, fléchissent ou échouent dans la pratique.\n\nMon travail se situe à l'intersection de la stratégie, des opérations et des technologies émergentes, en mettant l'accent sur la traduction de la complexité en décisions claires. Je m'intéresse particulièrement à la manière dont les incitations, la réglementation et le comportement humain façonnent l'impact réel de l'IA et des systèmes numériques.\n\nJe privilégie la clarté aux mots à la mode, et la structure à la spéculation.",
    },
    nav: { mail: "Correspondance", medium: "Réflexions", art: "Art" },
    sections: {
      experience: "Expérience",
      education: "Éducation et Apprentissage",
      projects: "Projets Sélectionnés",
      now: "Focus Actuel",
      note: "Note Digitale",
      art: "Projets Artistiques"
    },
    experience: [
      {
        company: "Enpath.co",
        location: "À distance",
        role: "Lead Business Development & Stratégie (Venture Indépendante)",
        period: "2024 – 2025",
        description: [
          "Fondation et développement d'une initiative en phase de démarrage explorant les défis de confiance, de transparence et d'adoption des systèmes pilotés par l'IA.",
          "Réalisation d'études de marché et d'analyses d'opportunités autour de la gouvernance de l'IA, de l'accessibilité juridique et de la confiance des utilisateurs.",
          "Développement de propositions de valeur, de positionnement et d'hypothèses de mise sur le marché alignées sur les besoins des clients et les contraintes réglementaires.",
          "Collaboration avec des contributeurs techniques pour traduire les informations du marché en concepts de produits, pilotes et idées de partenariat.",
          "Utilisation d'Enpath comme véhicule d'apprentissage pour étudier comment les principes abstraits (éthique, réglementation, équité) se traduisent en produits réels.",
          "Ce projet reste exploratoire par conception — axé sur l'apprentissage, la structure et les systèmes plutôt que sur l'échelle."
        ],
      },
      {
        company: "ManpowerGroup",
        location: "À distance",
        role: "Spécialiste en Acquisition de Talents",
        period: "2023",
        description: [
          "Soutien aux clients multinationaux, dont Tesla, JP Morgan et Schindler, dans les secteurs technologique, financier et industriel.",
          "Réalisation d'une cartographie des talents et du marché pour aligner les stratégies de sourcing sur les besoins commerciaux du client.",
          "Travail dans un environnement axé sur les métriques, atteignant constamment les objectifs de performance.",
          "Exposition à la manière dont l'automatisation, la spécialisation et les marchés du travail interagissent à grande échelle.",
          "Ce rôle a renforcé ma compréhension de la dynamique de la main-d'œuvre et de la discipline opérationnelle."
        ],
      },
      {
        company: "Rappi",
        location: "Bogotá",
        role: "Analyste des Opérations",
        period: "2019",
        description: [
          "Soutien au lancement et au déploiement de RappiPay, un produit fintech opérant dans des conditions complexes sur le terrain.",
          "Contribution à la stratégie de distribution et d'exécution lors de l'expansion initiale du marché.",
          "Coordination et supervision d'une équipe de 10 professionnels de terrain dans les régions assignées.",
          "Travail en étroite collaboration avec les équipes internes pour identifier les lacunes d'exécution et soutenir l'amélioration des processus.",
          "Cette expérience a façonné mon intérêt pour la friction entre l'ambition numérique et la réalité physique."
        ],
      },
    ],
    education: [
      {
        school: "Université EAN — Colombie",
        degree: "Licence en Gestion d'Entreprise",
        period: "Concentration sur la gestion organisationnelle, la stratégie et les fondamentaux des affaires."
      },
      {
        school: "Platzi",
        degree: "École d'Intelligence Artificielle",
        period: "Formation appliquée aux concepts de l'IA, aux outils et aux cas d'utilisation commerciale, avec une attention particulière aux limites et à l'adoption responsable."
      },
      {
        school: "Université d'Helsinki",
        degree: "Éthique de l'IA",
        period: "Cours couvrant la responsabilité, l'équité, la transparence, les droits de l'homme et l'application réelle des cadres éthiques dans les systèmes d'IA."
      }
    ],
    projects: [
      {
        title: "Paco — Architecture de Justice",
        description: "Un \"allié\" IA expérimental conçu pour aider les Colombiens à comprendre leurs droits légaux en traduisant un langage juridique complexe en explications accessibles. Ce projet a servi d'étude de cas sur : La conception centrée sur l'humain pour les informations à enjeux élevés ; La confiance et la responsabilité dans les interfaces d'IA.",
        threads: ["IA", "UX", "Impact Social"]
      },
      {
        title: "Design de l'Écosystème iOS",
        description: "Conception d'une petite suite d'applications iOS axées sur des expériences utilisateur à haute utilité et à faible friction. Mon approche met l'accent sur la \"technologie invisible\" — des outils qui résolvent des problèmes sans ajouter de charge cognitive.",
        threads: ["Design Produit", "Swift", "UX"]
      },
    ],
    now: [
      "Mener des recherches indépendantes sur la gouvernance de l'IA et les tendances réglementaires pour comprendre comment les organisations peuvent traduire les politiques en pratiques opérationnelles.",
      "Analyser les signaux du marché et les cas d'utilisation des systèmes d'IA d'entreprise, en mettant l'accent sur la souveraineté des données, la confiance et les obstacles à l'adoption.",
      "Prototyper des cadres stratégiques pour la collaboration homme-IA, en s'appuyant sur des études de marché, des études de cas et l'exploration d'entreprises en phase de démarrage."
    ],
    disclaimer: "Ce site web est un document vivant, mis à jour par intermittence à mesure que j'explore de nouveaux systèmes et cadres. Certaines descriptions de projets ou réflexions peuvent être incomplètes, et quelques liens peuvent être inactifs. Je privilégie la clarté à l'exhaustivité, si quelque chose ici résonne, n'hésitez pas à me contacter."
  },
  kr: {
    meta: "전문 포트폴리오",
    hero: {
      name: "Juan Avila",
      headline: "전략, 시스템, 그리고 신기술",
      subtext: "조직이 신기술을 채택하는 방식과 그 과정에서 시스템이 성공하거나 실패하는 이유를 탐구합니다.\n\n저의 작업은 전략, 운영, 신기술의 교차점에 있으며 복잡성을 명확한 의사결정으로 전환하는 데 중점을 둡니다. 특히 인센티브, 규제, 인간 행동이 AI와 디지털 시스템의 실제 영향력을 어떻게 형성하는지에 관심이 많습니다.\n\n유행어보다 명확성을, 추측보다 구조를 가치 있게 생각합니다.",
    },
    nav: { mail: "문의", medium: "성찰", art: "예술" },
    sections: {
      experience: "경력",
      education: "교육 및 학습",
      projects: "주요 프로젝트",
      now: "현재의 초점",
      note: "디지털 노트",
      art: "예술 프로젝트"
    },
    experience: [
      {
        company: "Enpath.co",
        location: "원격 (Remote)",
        role: "비즈니스 개발 및 전략 리드 (독립 벤처)",
        period: "2024 – 2025",
        description: [
          "AI 시스템의 신뢰, 투명성 및 채택 문제를 탐구하는 초기 단계 이니셔티브를 설립하고 개발했습니다.",
          "AI 거버넌스, 법적 접근성 및 사용자 신뢰에 대한 시장 조사 및 기회 분석을 수행했습니다.",
          "고객 요구 사항 및 규제 제약 조건에 부합하는 가치 제안, 포지셔닝 및 초기 시장 진입 가설을 개발했습니다.",
          "시장 통찰력을 제품 개념, 파일럿 및 파트너십 아이디어로 전환하기 위해 기술 기여자들과 협력했습니다.",
          "Enpath를 학습 도구로 사용하여 추상적인 원칙(윤리, 규제, 공정성)이 실제 제품으로 어떻게 전환되는지 연구했습니다.",
          "이 프로젝트는 규모보다는 학습, 구조 및 시스템에 중점을 둔 탐색적 성격을 띠고 있습니다."
        ],
      },
      {
        company: "ManpowerGroup",
        location: "원격 (Remote)",
        role: "인재 확보 전문가",
        period: "2023",
        description: [
          "Tesla, JP Morgan, Schindler를 포함한 다국적 고객을 대상으로 기술, 금융 및 산업 분야의 역할을 지원했습니다.",
          "소싱 전략을 고객의 비즈니스 요구 사항에 맞추기 위해 인재 및 시장 매핑을 수행했습니다.",
          "지표 중심 환경에서 근무하며 성과 목표를 지속적으로 달성했습니다.",
          "자동화, 전문화 및 노동 시장이 규모에 따라 어떻게 상호 작용하는지에 대한 경험을 쌓았습니다.",
          "이 역할은 인력 역학 및 운영 규율에 대한 이해를 강화했습니다."
        ],
      },
      {
        company: "Rappi",
        location: "보고타 (Bogotá)",
        role: "운영 분석가",
        period: "2019",
        description: [
          "복잡한 현장 조건에서 운영되는 핀테크 제품인 RappiPay의 출시 및 롤아웃을 지원했습니다.",
          "초기 시장 확장 기간 동안 유통 및 실행 전략에 기여했습니다.",
          "할당된 지역에서 10명의 현장 전문가 팀을 조정하고 감독했습니다.",
          "내부 팀과 긴밀히 협력하여 실행 격차를 파악하고 프로세스 개선을 지원했습니다.",
          "디지털 야망과 물리적 현실 사이의 마찰에 대한 저의 관심은 이 경험에서 비롯되었습니다."
        ],
      },
    ],
    education: [
      {
        school: "EAN 대학교 — 콜롬비아",
        degree: "경영학 학사",
        period: "조직 관리, 전략 및 비즈니스 기초에 중점."
      },
      {
        school: "Platzi",
        degree: "인공지능 학교",
        period: "AI 개념, 도구 및 비즈니스 사용 사례에 대한 실무 교육, 한계 및 책임 있는 채택에 주의."
      },
      {
        school: "헬싱키 대학교",
        degree: "AI 윤리",
        period: "책임성, 공정성, 투명성, 인권 및 AI 시스템에서 윤리적 프레임워크의 실제 적용을 다루는 과정."
      }
    ],
    projects: [
      {
        title: "Paco — 사법 아키텍처",
        description: "복잡한 법률 용어를 이해하기 쉬운 설명으로 번역하여 콜롬비아 인들이 법적 권리를 이해하도록 돕기 위해 설계된 실험적 AI \"동맹\"입니다. 이 프로젝트는 다음의 사례 연구로 활용되었습니다: 고위험 정보를 위한 인간 중심 디자인; AI 인터페이스의 신뢰와 책임.",
        threads: ["AI", "UX", "사회적 영향"]
      },
      {
        title: "iOS 에코시스템 디자인",
        description: "높은 효용성과 낮은 마찰의 사용자 경험에 초점을 맞춘 소규모 iOS 애플리케이션 제품군을 설계했습니다. 저의 접근 방식은 인지 부하를 추가하지 않고 문제를 해결하는 도구인 \"보이지 않는 기술\"을 강조합니다.",
        threads: ["제품 디자인", "Swift", "UX"]
      },
    ],
    now: [
      "조직이 정책을 운영 관행으로 전환하는 방법을 이해하기 위해 AI 거버넌스 및 규제 동향에 대한 독립적인 연구를 수행합니다.",
      "데이터 주권, 신뢰 및 채택 장벽에 중점을 두고 엔터프라이즈 AI 시스템에 대한 시장 신호 및 사용 사례를 분석합니다.",
      "시장 조사, 사례 연구 및 초기 단계 벤처 탐색을 바탕으로 인간-AI 협업을 위한 전략적 프레임워크를 프로토타입화합니다."
    ],
    disclaimer: "이 웹사이트는 새로운 시스템과 프레임워크를 탐색함에 따라 간헐적으로 업데이트되는 살아있는 문서입니다. 일부 프로젝트 설명이나 성찰은 불완전할 수 있으며 일부 링크는 비활성 상태일 수 있습니다. 저는 완전성보다 명확성을 중시합니다. 여기에 공감하는 내용이 있다면 언제든지 연락주세요."
  }
};

type Language = keyof typeof translations;

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#334139] font-sans selection:bg-[#2A7066]/10 selection:text-[#2A7066] pb-12 transition-colors duration-500">
      
      {/* Floating Language Switcher */}
      <div className="fixed top-6 right-6 z-50 flex gap-2 overflow-x-auto max-w-[calc(100vw-48px)] pb-2 no-scrollbar">
      {(['en', 'es', 'fr', 'kr'] as Language[]).map((l) => (
          <button 
            key={l}
            onClick={() => setLang(l)}
            className={`px-4 py-2 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest shadow-sm transition-all active:scale-95 border ${
              lang === l 
              ? 'bg-[#2A7066] text-white border-[#2A7066]' 
              : 'bg-white/80 backdrop-blur-sm text-[#2A7066] border-[#E2E8E5] hover:bg-white'
            }`}
          >
            {l === 'kr' ? '한국어' : l === 'fr' ? 'Français' : l === 'es' ? 'Español' : 'English'}
          </button>
        ))}
      </div>

      <div className="max-w-2xl mx-auto py-24 px-8 md:px-6">
        
        {/* --- HEADER --- */}
        <header className="space-y-10 pb-20 border-b border-[#E2E8E5]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2A7066]/5 border border-[#2A7066]/10 text-[#2A7066] text-[10px] font-mono uppercase tracking-[0.2em] font-semibold">
               {t.meta}
            </div>
            <h1 className="text-5xl md:text-6xl font-light font-serif tracking-tight text-[#1E2923]">{t.hero.name}</h1>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl text-[#334139] font-serif leading-snug max-w-xl italic">
              {t.hero.headline}
            </h2>
            <p className="text-base text-[#64746B] leading-relaxed max-w-xl whitespace-pre-line">
              {t.hero.subtext}
            </p>
          </div>

          <div className="flex flex-wrap gap-8 pt-4">
            <a href="mailto:jdavilag8@gmail.com" className="group flex items-center gap-2 text-sm text-[#2A7066] hover:text-[#1E2923] transition-all">
              <Mail size={16} /> 
              <span className="border-b border-[#2A7066]/20 group-hover:border-[#1E2923] font-medium">{t.nav.mail}</span>
            </a>
            <a href="https://medium.com/@jdgav_" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm text-[#2A7066] hover:text-[#1E2923] transition-all">
              <NotebookPen size={16} /> 
              <span className="border-b border-[#2A7066]/20 group-hover:border-[#1E2923] font-medium">{t.nav.medium}</span>
            </a>
            <a href="#art" className="group flex items-center gap-2 text-sm text-[#2A7066] hover:text-[#1E2923] transition-all">
              <Palette size={16} /> 
              <span className="border-b border-[#2A7066]/20 group-hover:border-[#1E2923] font-medium">{t.nav.art}</span>
            </a>
          </div>
        </header>

        {/* --- EXPERIENCE --- */}
        <section className="py-20 border-b border-[#E2E8E5]">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#64746B] mb-12 flex items-center gap-3 font-bold">
            <Briefcase size={14} className="opacity-60" /> {t.sections.experience}
          </h3>
          <div className="space-y-12">
            {t.experience.map((exp, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white border border-[#E2E8E5] hover:shadow-xl hover:shadow-[#2A7066]/5 transition-all duration-500">
                <div className="flex justify-between items-baseline mb-1 gap-4">
                  <h4 className="text-xl font-bold font-serif text-[#1E2923]">{exp.company}</h4>
                  <span className="text-[10px] font-mono text-[#2A7066] font-bold tracking-widest shrink-0">{exp.period}</span>
                </div>
                <div className="flex flex-wrap justify-between items-baseline mb-6 gap-2">
                  <p className="text-sm text-[#2A7066] font-semibold italic">{exp.role}</p>
                  {exp.location && <p className="text-[10px] text-[#64746B] uppercase tracking-wider font-bold">{exp.location}</p>}
                </div>
                <ul className="space-y-5">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="text-sm text-[#4A5D54] leading-relaxed flex gap-4">
                       <span className="text-[#2A7066]/40 font-serif">/</span>
                       {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section className="py-20 border-b border-[#E2E8E5]">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#64746B] mb-12 flex items-center gap-3 font-bold">
            <Smartphone size={14} className="opacity-60" /> {t.sections.projects}
          </h3>
          <div className="grid grid-cols-1 gap-8">
            {t.projects.map((p, i) => (
              <div key={i} className="group relative p-8 rounded-[2rem] bg-[#E2E8E5]/20 border border-[#E2E8E5] hover:bg-white transition-all duration-500">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-bold font-serif text-[#1E2923] group-hover:text-[#2A7066] transition-colors">{p.title}</h4>
                    <ArrowUpRight size={20} className="text-[#2A7066] opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                  <p className="text-sm text-[#64746B] leading-relaxed mb-6 italic">"{p.description}"</p>
                  <div className="flex flex-wrap gap-3">
                    {p.threads.map((t, idx) => (
                      <span key={idx} className="text-[9px] font-mono px-3 py-1 bg-white text-[#2A7066] border border-[#E2E8E5] rounded-full tracking-widest uppercase font-bold">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- EDUCATION --- */}
        <section className="py-20 border-b border-[#E2E8E5]">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#64746B] mb-12 flex items-center gap-3 font-bold">
            <GraduationCap size={14} className="opacity-60" /> {t.sections.education}
          </h3>
          <div className="space-y-12">
            {t.education.map((edu, i) => (
              <div key={i} className="relative pl-6 border-l-2 border-[#E2E8E5] hover:border-[#2A7066] transition-colors group">
                <h4 className="text-lg font-bold text-[#1E2923] font-serif">{edu.school}</h4>
                <p className="text-sm text-[#2A7066] font-semibold italic mb-2">{edu.degree}</p>
                <p className="text-sm text-[#64746B] leading-relaxed max-w-prose group-hover:text-[#334139] transition-colors">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- STRATEGIC FOCUS (NOW) --- */}
        <section className="mt-20 relative p-12 md:p-16 rounded-[3rem] bg-[#1E2923] text-[#F8FAF9] shadow-2xl overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#2A7066]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
           <div className="relative z-10">
             <div className="flex items-center gap-3 mb-12 border-b border-white/10 pb-8">
               <Compass size={20} className="text-[#2A7066]" />
               <p className="text-[#94A3B8] font-mono text-[10px] uppercase tracking-[0.4em] font-bold">{t.sections.now}</p>
             </div>
             <ul className="space-y-12">
                {t.now.map((item, i) => (
                  <li key={i} className="flex gap-8 items-start group">
                    <span className="text-2xl font-serif text-[#2A7066] opacity-60 group-hover:opacity-100 transition-opacity leading-none">0{i+1}</span>
                    <p className="text-lg font-serif leading-relaxed text-white/90 group-hover:text-white transition-colors">{item}</p>
                  </li>
                ))}
             </ul>
           </div>
        </section>

        {/* --- DISCLAIMER --- */}
        <section className="mt-24 pt-12 border-t border-[#E2E8E5]">
          <div className="flex items-start gap-5 p-8 rounded-3xl bg-[#E2E8E5]/30 border border-[#E2E8E5]">
            <AlertCircle size={20} className="text-[#2A7066]/60 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="text-[10px] font-mono text-[#64746B] uppercase tracking-widest font-bold">{t.sections.note}</p>
              <p className="text-sm text-[#64746B] leading-relaxed italic">
                {t.disclaimer}
              </p>
            </div>
          </div>
        </section>

        {/* --- ART PLACEHOLDER --- */}
        <section id="art" className="mt-24 py-12 text-center opacity-40 hover:opacity-100 transition-opacity">
           <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#64746B] font-bold mb-4">{t.sections.art}</h4>
           <p className="font-serif italic text-[#2A7066]">Coming Soon</p>
        </section>

        <footer className="pt-20 text-center">
          <p className="text-[10px] font-mono text-[#64746B]/40 uppercase tracking-[0.4em] font-bold">
            Clarity matters more than purity · {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
}