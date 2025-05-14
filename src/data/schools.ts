
export interface Program {
  id: string;
  parcours: string;
  name: string;
  description: string;
  debouche: string;
  duration: string;
  category: string;
  cycle: string;
}

export interface School {
  id: string;
  name: string;
  description: string;
  logo: string;
  address: string;
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  registrationInfo: {
    deadline: string;
    requirements: string[];
    fees: string;
    process: string;
  };
  programs: Program[];
}

export const categories = [
  "Informatique",
  "Cyber Sécurité",
  "Réseaux et Télécommunications",
  "Economie",
  "Comptabilité",
  "Multimédia",
  "Infographie",
  "Commerce",
  "Arts",
  "Sciences",
  "Ingénierie",
  "Santé",
  "Gestion Financière",
  "Gestion Informatisée",
  "Langues",
  "Droit"
];

export const niveau = [
  "Technicien Spécialisé",
  "Technicien",
  "Licence",
  "Bachelor",
  "Master",
  "Doctorat"
];

export const cycles = [
  "Cycle Initial",
  "Technicien",
  "Licence",
  "Bachelor",
  "Master",
  "Doctorat"
];

export const schools: School[] = [
  {
    id: "Groupe-Miage",
    name: "Groupe Miage Etablissement Privé",
    description: "Un établissement d'excellence dédié à l'enseignement technologique avec des programmes innovants et des partenariats industriels.",
    logo: "../Images/Miage/images.jpeg",
    address: "64, Rue Allal Ben Abdellah 20000 Casablanca",
    contact: {
      phone: "+212 5 22 27 96 00",
      email: "miagecasa@groupemiage.net",
      website: "www.groupemiage.net"
    },
    registrationInfo: {
      deadline: "30 Septembre 2025",
      requirements: [
        "3 Copies du diplôme de Baccalauréat ou Diplôme de Technicien",
        "Rélevé de note du Baccalauréat ou DT",
        "4 Photos d'identité",
        "Un attestation d'Authentification",
        "1 Extrait de naissance ou copie d'acte de naissance",
        "2 copie légalisées du passeport"
      ],
      fees: "Veuillez contacter le service administratif",
      process: "Inscription en ligne suivie d'un entretien et d'un test d'aptitude."
    },
    programs: [
        {
        id: "prog-1-1",
        parcours: "Technicien Spécialisé",
        name: "Finance et Comptable",
        description: "Ce programme permet d’acquérir des compétences solides en gestion financière, analyse comptable, fiscalité et audit pour travailler efficacement dans divers environnements financiers.",
        debouche: "comptable, assistant financier, auditeur junior, gestionnaire de paie.",
        duration: "2 ans",
        category: "Gestion Financière",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-1-2",
        parcours: "Technicien Spécialisé",
        name: "Développement Informatique",
        description: "Formation complète en programmation, bases de données, génie logiciel et création de sites web et applications interactives.",
        debouche: "développeur web, développeur logiciel, analyste programmeur, intégrateur front-end.",
        duration: "2 ans",
        category: "Informatique",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-1-3",
        parcours: "Technicien Spécialisé",
        name: "Systèmes et Réseaux Informatique",
        description: "Apprentissage approfondi de la gestion des réseaux, de la sécurité informatique et de l’administration système.",
        debouche: "administrateur réseau, technicien systèmes, support IT, spécialiste cybersécurité junior.",
        duration: "2 ans",
        category: "Informatique",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-1-4",
        parcours: "Technicien",
        name: "Gestion Informatisée",
        description: "Initiation aux outils informatiques de gestion pour assurer la bonne tenue des opérations administratives et comptables.",
        debouche: "assistant administratif, opérateur de saisie, agent de gestion informatisée.",
        duration: "2 ans",
        category: "Gestion Informatisée",
        cycle: "Technicien"
      },
      {
        id: "prog-2-1",
        parcours: "Licence Professionnelle",
        name: "Informatique (Développement BD, Web, Réseaux et Sécurité)",
        description: "Maîtrise des environnements de développement informatique, systèmes, réseaux et sécurité pour répondre aux besoins des entreprises.",
        debouche: "développeur full stack, administrateur systèmes et réseaux, ingénieur sécurité junior.",
        duration: "3 ans",
        category: "Informatique",
        cycle: "Licence"
      },
      {
        id: "prog-2-2",
        parcours: "Licence Professionnelle",
        name: "Management et Gestion de PME",
        description: "Préparation aux fonctions clés de gestion, comptabilité, stratégie et développement des PME.",
        debouche: "manager de PME, chargé d'affaires, chef de projet, assistant de direction.",
        duration: "3 ans",
        category: "Gestion d'Entreprise",
        cycle: "Licence"
      },
      {
        id: "prog-2-3",
        parcours: "Licence Professionnelle",
        name: "Marketing Finance et Ressources Humaines",
        description: "Formation hybride intégrant les bases du marketing, des finances et de la gestion RH pour des fonctions transversales.",
        debouche: "responsable RH, chargé marketing RH, conseiller en organisation.",
        duration: "3 ans",
        category: "Gestion des Ressources Humaines",
        cycle: "Licence"
      },
      {
        id: "prog-2-4",
        parcours: "Licence Professionnelle",
        name: "Transport et Logistique",
        description: "Maîtrise des méthodes logistiques, de gestion des flux et de la chaîne d'approvisionnement.",
        debouche: "responsable logistique, planificateur transport, gestionnaire des flux.",
        duration: "3 ans",
        category: "Logistique",
        cycle: "Licence"
      },
      {
        id: "prog-4-1",
        parcours: "Master Europeen",
        name: "Management et Stratégie d'Entreprise (ME MSE)",
        description: "Préparation à la gestion stratégique, à la conduite du changement et au pilotage d’entreprise à haut niveau.",
        debouche: "directeur de stratégie, consultant en organisation, chef d'entreprise.",
        duration: "2 ans",
        category: "Gestion d'Entreprise",
        cycle: "Master"
      },
      {
        id: "prog-4-2",
        parcours: "Master Europeen",
        name: "Management et Stratégie Financière (ME MSF)",
        description: "Approfondissement des outils financiers pour piloter la performance et maîtriser les risques d’entreprise.",
        debouche: "directeur financier, auditeur, analyste financier, contrôleur de gestion.",
        duration: "2 ans",
        category: "Gestion Financière",
        cycle: "Master"
      },
      {
        id: "prog-4-3",
        parcours: "Master Europeen",
        name: "Management des Ressources Humaines (ME MRH)",
        description: "Formation au pilotage des talents, à la stratégie RH et au dialogue social dans l’entreprise.",
        debouche: "responsable RH, gestionnaire de carrières, consultant RH.",
        duration: "2 ans",
        category: "Gestion des Ressources Humaines",
        cycle: "Master"
      },
      {
        id: "prog-4-4",
        parcours: "Master Europeen",
        name: "Logistique (ME LOG)",
        description: "Gestion avancée de la chaîne logistique, des stocks, du transport et des outils numériques logistiques.",
        debouche: "supply chain manager, responsable entrepôt, coordinateur logistique.",
        duration: "2 ans",
        category: "Logistique",
        cycle: "Master"
      },
      {
        id: "prog-4-5",
        parcours: "Master Europeen",
        name: "Management Digital (ME MD)",
        description: "Formation stratégique au pilotage de la transformation digitale, CRM, e-commerce et outils web innovants.",
        debouche: "chef de projet digital, responsable e-commerce, consultant numérique.",
        duration: "2 ans",
        category: "Informatique",
        cycle: "Master"
      },
      {
        id: "prog-4-6",
        parcours: "Master Europeen",
        name: "Management Environnemental et Énergétique (ME MEE)",
        description: "Acquisition de compétences en gestion durable, normes environnementales et transition énergétique.",
        debouche: "consultant environnement, responsable développement durable, chef de projet énergies renouvelables.",
        duration: "2 ans",
        category: "Environnement et Energie",
        cycle: "Master"
      },
      {
        id: "prog-4-7",
        parcours: "Master Europeen",
        name: "Communication et Marketing Numérique (ME CMN)",
        description: "Maîtrise des outils numériques, communication digitale et campagnes marketing multicanal.",
        debouche: "community manager, chef de projet marketing digital, responsable communication web.",
        duration: "2 ans",
        category: "Marketing Digital",
        cycle: "Master"
      },
      {
        id: "prog-4-8",
        parcours: "Master Europeen",
        name: "Informatique (ME INFO)",
        description: "Approche complète du développement, systèmes, cybersécurité et bases de données en entreprise.",
        debouche: "ingénieur logiciel, administrateur système, expert cybersécurité.",
        duration: "2 ans",
        category: "Informatique",
        cycle: "Master"
      },
      {
        id: "prog-4-9",
        parcours: "Master Europeen",
        name: "Expert IT Applications Intelligentes et Big Data (ME EIT-AIBD)",
        description: "Spécialisation dans les domaines de l’intelligence artificielle, du big data et des technologies émergentes.",
        debouche: "data analyst, ingénieur IA, expert big data, architecte cloud.",
        duration: "2 ans",
        category: "Cyber Sécurité",
        cycle: "Master"
      },
      {
        id: "prog-4-10",
        parcours: "Master Europeen",
        name: "Juriste d’entreprise (ME-JE)",
        description: "Formation juridique orientée entreprise : droit des affaires, contrats, fiscalité et conformité.",
        debouche: "juriste d’entreprise, conseiller juridique, responsable conformité.",
        duration: "2 ans",
        category: "Droit",
        cycle: "Master"
      },
      {
        id: "prog-4-11",
        parcours: "Master Europeen",
        name: "Banque privée internationale (ME-BPI)",
        description: "Expertise en gestion de patrimoine, placements internationaux et conseil financier personnalisé.",
        debouche: "conseiller clientèle privée, gestionnaire de portefeuille, analyste financier.",
        duration: "2 ans",
        category: "Banque et Assurance",
        cycle: "Master"
      },
      {
        id: "prog-4-12",
        parcours: "Master Europeen",
        name: "Communication-publicité (ME-PUB)",
        description: "Création publicitaire, stratégie de marque, campagnes média et marketing créatif.",
        debouche: "concepteur-rédacteur, chargé de communication, chef de publicité.",
        duration: "2 ans",
        category: "Multi-Média",
        cycle: "Master"
      }

    ]
  },
  {
    id: "Best-Institut",
    name: "Best Institut Formmation Professionnelle Privée",
    description: "Formation d'excellence en commerce, Comptabilité, marketing international Infographie, Multimédia, Programmation etc avec un accent sur un bonne application.",
    logo: "../Images/BestIn/Best.png",
    address: "45 Boulevard du Commerce, 20000 Casablanca",
    contact: {
      phone: "+212 522-541547",
      email: "contact@bestinstitut.com",
      website: "www.bestinstitut.com"
    },
    registrationInfo: {
      deadline: "30 Septembre 2025",
      requirements: [
        "Un attestation d'Authentification",
        "1 Extrait de naissance ou copie d'acte de naissance",
        "3 Copies du diplôme de Baccalauréat ou Diplôme de Technicien",
        "Rélevé de note du Baccalauréat ou DT",
        "4 Photos d'identité",
        "2 copie légalisées du passeport"
      ],
      fees: "Veillez prendre contact avec l'Etablissement",
      process: "Dossier de candidature, la procedure se fait en ligne ou en présentielle."
    },
    programs: [
       {
        id: "prog-12-1",
        parcours: "Technicien spécialisé",
        name: "💻 Technicien spécialisé développement Multimédia",
        description: "Axé sur le web et le digital, ce cursus permet d’acquérir des compétences en création de contenus interactifs (sites web, animations, vidéos), en design graphique et en développement front-end.",
        debouche : "développeur multimédia, intégrateur web, designer UX/UI, animateur digital.",
        duration: "2 ans",
        category: "Multimédia",
        cycle: "Cycle Initial"
      },
        {
        id: "prog-12-2",
        parcours: "Technicien spécialisé",
        name: "🌍 Technicien spécialisé commerce international",
        description: "Ce programme prépare les étudiants aux opérations d’import-export, à la logistique internationale, à la négociation interculturelle et au droit du commerce international.",
        debouche : "assistant import-export, agent commercial international, logisticien, technicien douanier.",        
        duration: "2 ans",
        category: "Commerce",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-13-3",
        parcours: "Technicien spécialisé",
        name: "🔧 Technicien spécialisé finance et comptabilité",
        description: "Cette formation forme des professionnels capables de gérer les opérations comptables, fiscales et financières d’une entreprise. Elle développe des compétences en analyse financière, en gestion budgétaire et en utilisation des logiciels comptables.",
        debouche: "Comptable, assistant financier, technicien comptable, gestionnaire de paie.",
        duration: "2 ans",
        category: "Gestion Financière",
        cycle: "Technicien Spécialisé"
      },
      {
        id: "prog-4-4",
        parcours: "Technicien",
        name: "🖥️ Technicien en gestion informatisée",
        description: "Cette formation polyvalente combine informatique de gestion, bases de données et outils bureautiques. Elle prépare à gérer les systèmes d’information d’une entreprise.",
        debouche: "Technicien informatique, gestionnaire de base de données, assistant ERP.",
        duration: "2 ans",
        category: "Gestion Informatisée",
        cycle: "Technicien"
      },
      {
        id: "prog-4-5",
        parcours: "Technicien spécialisé",
        name: "Management Digital (ME MD)",
        description: "Ce master permet d'acquérir une forte culture numérique et des compétences en transformation digitale, outils web, CRM et e-business. Il prépare à des postes comme chef de projet digital, consultant en transformation numérique ou responsable e-commerce.",
        debouche: "",
        duration: "5 ans",
        category: "Informatique",
        cycle: "Master"
      },
      {
        id: "prog-4-6",
        parcours: "Master Européen",
        name: "Management Environnemental et Énergétique (ME MEE)",
        description: "Cette formation est idéale pour ceux qui souhaitent concilier performance économique et développement durable. Elle prépare à gérer les problématiques environnementales et énergétiques des entreprises.",
        debouche: "",
        duration: "5 ans",
        category: "Environnement et Energie",
        cycle: "Master"
      },
      {
        id: "prog-4-7",
        parcours: "Master Européen",
        name: "Communication et Marketing Numérique (ME CMN)",
        description: "Parfait pour les créatifs orientés business, ce master allie stratégie de communication et maîtrise des outils numériques (SEO, réseaux sociaux, content marketing).",
        debouche: "",
        duration: "5 ans",
        category: "Marketing Digital",
        cycle: "Master"
      },
      {
        id: "prog-4-8",
        parcours: "Master Européen",
        name: "Informatique (ME INFO)",
        description: "Cette formation couvre l’ensemble des domaines clés de l’informatique : développement, systèmes, réseaux, sécurité et bases de données. Elle permet d’accéder à des métiers techniques très recherchés.",
        debouche: "",
        duration: "5 ans",
        category: "Informatique",
        cycle: "Master"
      },
      {
        id: "prog-4-9",
        parcours: "Master Européen",
        name: "Expert IT Applications Intelligentes et Big Data (ME EIT-AIBD)",
        description: "Axée sur l’intelligence artificielle, la data science et les technologies avancées, cette formation prépare aux métiers d’avenir tels que data analyst, ingénieur IA ou expert Big Data.",
        debouche: "",
        duration: "5 ans",
        category: "Cyber Sécurité",
        cycle: "Master"
      },
      {
        id: "prog-4-10",
        parcours: "Master Européen",
        name: "Juriste d’entreprise (ME-JE)",
        description: "Destiné à ceux qui souhaitent exercer dans le domaine juridique au sein d’une entreprise, ce programme offre une solide base en droit des affaires, contrats et droit social.",
        debouche: "",
        duration: "5 ans",
        category: "Droit",
        cycle: "Master"
      },
      {
        id: "prog-2-3",
        parcours: "Master Européen",
        name: "Finance d'Entreprise",
        description: "Programme axé sur la gestion financière et l'investissement international.",
        debouche: "",
        duration: "5 ans",
        category: "Commerce",
        cycle: "Master"
      }
    ]
  },
  {
    id: "ecole-3",
    name: "Académie des Arts Visuels",
    description: "École spécialisée dans les arts graphiques, le design et les techniques audiovisuelles.",
    logo: "/placeholder.svg",
    address: "78 Rue des Artistes, 33000 Bordeaux",
    contact: {
      phone: "+33 5 67 89 01 23",
      email: "contact@aav-bordeaux.fr",
      website: "www.aav-bordeaux.fr"
    },
    registrationInfo: {
      deadline: "31 mars 2025",
      requirements: [
        "Baccalauréat (tous types)",
        "Portfolio artistique",
        "Entretien avec présentation de travaux"
      ],
      fees: "6000€ par an",
      process: "Soumission d'un portfolio, examen artistique et entretien individuel."
    },
   programs: [
  {
    id: "prog-3-1",
    parcours: "Technicien Spécialisé",
    name: "🎨 Design Graphique",
    description: "Cette formation développe des compétences en communication visuelle, création d’identités visuelles, mise en page, illustration numérique et conception d’interfaces web. Elle combine créativité et maîtrise des outils professionnels tels qu’Adobe Photoshop, Illustrator et InDesign.",
    debouche: "Graphiste, directeur artistique junior, maquettiste, web designer, infographiste.",
    duration: "2 ans",
    category: "Arts",
    cycle: "Cycle Initial"
  },
  {
    id: "prog-3-2",
    parcours: "Technicien Spécialisé",
    name: "🎥 Animation 3D",
    description: "Ce programme forme aux métiers de l’animation numérique 2D et 3D, incluant la modélisation, le rigging, le texturing, l’éclairage et le rendu. Il intègre des logiciels comme Maya, Blender, After Effects et Unity pour une formation complète et professionnelle.",
    debouche: "Animateur 3D, modeleur 3D, infographiste 3D, concepteur d'effets spéciaux, technicien en jeux vidéo.",
    duration: "2 ans",
    category: "Arts",
    cycle: "Cycle Initial"
  },
  {
    id: "prog-3-3",
    parcours: "Technicien Spécialisé",
    name: "📸 Photographie Artistique",
    description: "Cette formation initie aux techniques de prise de vue, au traitement de l’image, à la composition visuelle et à la narration photographique. Elle allie pratique artistique et compétences techniques en photographie numérique et argentique.",
    debouche: "Photographe professionnel, assistant photographe, retoucheur d'image, reporter photo, créateur visuel.",
    duration: "2 ans",
    category: "Arts",
    cycle: "Technicien"
  }
]
  },
  {
    id: "ecole-4",
    name: "Institut des Sciences Naturelles",
    description: "Centre de formation spécialisé dans les sciences environnementales et la recherche.",
    logo: "/placeholder.svg",
    address: "56 Rue de la Science, 44000 Nantes",
    contact: {
      phone: "+33 2 34 56 78 90",
      email: "contact@isn-nantes.fr",
      website: "www.isn-nantes.fr"
    },
    registrationInfo: {
      deadline: "30 avril 2025",
      requirements: [
        "Baccalauréat scientifique",
        "Lettre de motivation",
        "Entretien de sélection"
      ],
      fees: "4500€ par an",
      process: "Dossier académique et entretien de motivation."
    },
    programs: [
      {
        id: "prog-4-1",
         parcours: "Technicien Spécialisé",
        name: "Biologie Moléculaire",
        description: "Formation approfondie sur l'étude des mécanismes biologiques à l'échelle moléculaire.",
        debouche: "",
        duration: "5 ans",
        category: "Sciences",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-4-2",
         parcours: "Technicien Spécialisé",
        name: "Sciences Environnementales",
        description: "Programme axé sur l'étude des écosystèmes et le développement durable.",
        debouche: "",
        duration: "5 ans",
        category: "Sciences",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-4-3",
         parcours: "Technicien Spécialisé",
        name: "Physique Appliquée",
        description: "Formation en physique avec applications dans divers domaines industriels.",
        debouche: "",
        duration: "2 ans",
        category: "Sciences",
        cycle: "Master"
      }
    ]
  }
];
