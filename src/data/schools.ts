export interface School {
  id: string;
  name: string;
  description: string;
  logo: string;
  address: string;
  video?: string;
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  registrationInfo: {
    [parcours: string]: {
      description: string;
      procedure: string[];
      fees: number;
      scholarships: boolean;
      contact: {
        phone: string;
        email: string;
      };
    };
  };
  programs: Program[];
}

export interface Program {
  name: string;
  description: string;
  category: string;
  parcours: string;
  niveau: string;
  cycle: string;
  duration: string;
  diploma: string;
  admissionRequirements: string[];
  objectives: string[];
  skillsDeveloped: string[];
  opportunities: string[];
}

export const categories = [
  "Informatique",
  "Informatique & Digital",
  "Cyber Sécurité",
  "Sécurité Informatique",
  "Management Informatique",
  "Réseaux et Télécommunications",
  "Gestion Informatisée",
  "Multimédia",
  "Infographie",
  "Arts",
  "Finances",
  "Economie",
  "Comptabilité",
  "Gestion Comptable",  
  "Commerce",  
  "Sciences",
  "Ingénierie",
  "Santé",  
  "Management & Gestion",
  "Ressources Humaines",
  "Transport et Logistique",
  "Logistique",
  "Langues",
  "Communication",
  "Marketing",
  "Douane",
  "Droit"
];

export const niveau = [
  "Technicien Spécialisé",
  "Technicien",
  "Licence",
  "Bachelor",
  "Master",
  "Ingénierie",
  "Doctorat"
];

export const cycles = [
  "Cycle Initial",
  "Technicien",
  "Formation",
  "Licence",
  "Bachelor",
  "Master",
  "Ingénierie",
  "Doctorat"
];

export const schools: School[] = [
  {
    id: "Groupe-Miage",
    name: "Groupe Miage Etablissement Privé",
    description: "Un établissement d'excellence dédié à l'enseignement technologique avec des programmes innovants et des partenariats industriels.",
    logo: "Images/images.jpeg", // Mise à jour du chemin
    address: "64, Rue Allal Ben Abdellah 20000 Casablanca",
    video: "https://www.youtube.com/watch?v=c8jZRuMTiDQ&list=PLwenwdaZUv6J1BLlVcI6xF44EBaWtsHh3",
    contact: {
      phone: "+212 522-279600",
      email: "miagecasa@groupemiage.net",
      website: "www.groupemiage.net"
    },
    registrationInfo: {
      "Tous les parcours": {
        description: "Les inscriptions sont ouvertes à partir du 1er juin jusqu'au 30 septembre. Les dossiers peuvent être soumis en ligne ou directement au bureau des admissions.",
        procedure: [
          "Remplir le formulaire de candidature en ligne",
          "Soumettre les relevés de notes des années précédentes",
          "Lettre de motivation expliquant votre intérêt pour le programme",
          "Passer un entretien avec le responsable du programme"
        ],
        fees: 45000,
        scholarships: true,
        contact: {
          phone: "+212 5 22 27 96 00",
          email: "miagecasa@groupemiage.net"
        }
      }
    },
    programs: [
      {
        name: "Développement Web et Mobile",
        description: "Formation complète pour devenir un développeur web et mobile compétent, maîtrisant les dernières technologies et frameworks.",
        category: "Informatique",
        parcours: "Développement",
        niveau: "Technicien Spécialisé",
        cycle: "Cycle Initial",
        duration: "2 ans",
        diploma: "Diplôme de Technicien Spécialisé en Développement Web et Mobile",
        admissionRequirements: ["Baccalauréat scientifique ou technique", "Test d'admission", "Entretien de motivation"],
        objectives: ["Maîtriser les langages de programmation web (HTML, CSS, JavaScript)", "Développer des applications mobiles pour iOS et Android", "Concevoir des bases de données robustes", "Déployer des applications web sur des serveurs"],
        skillsDeveloped: ["Programmation web front-end et back-end", "Développement mobile natif et hybride", "Gestion de bases de données", "Utilisation de frameworks web (React, Angular, Vue.js)", "Travail en équipe et gestion de projet"],
        opportunities: ["Développeur web", "Développeur mobile", "Intégrateur web", "Chef de projet web", "Consultant en développement web et mobile"]
      },
      {
        name: "Gestion de Projet Informatique",
        description: "Formation pour acquérir les compétences nécessaires pour gérer efficacement des projets informatiques, de la planification à la réalisation.",
        category: "Management Informatique",
        parcours: "Gestion de Projet",
        niveau: "Licence",
        cycle: "Licence",
        duration: "3 ans",
        diploma: "Licence en Gestion de Projet Informatique",
        admissionRequirements: ["Baccalauréat toutes séries", "Dossier de candidature", "Test d'admission", "Entretien de motivation"],
        objectives: ["Planifier et organiser des projets informatiques", "Gérer les ressources humaines et financières", "Assurer la qualité et le respect des délais", "Communiquer efficacement avec les parties prenantes", "Utiliser les outils de gestion de projet"],
        skillsDeveloped: ["Gestion de projet (PMI, Agile)", "Analyse des besoins", "Conception de solutions", "Gestion des risques", "Communication et leadership"],
        opportunities: ["Chef de projet informatique", "Assistant chef de projet", "Consultant en gestion de projet", "Responsable de la qualité", "Scrum Master"]
      },
      {
        name: "Sécurité des Systèmes d'Information",
        description: "Formation spécialisée dans la protection des systèmes d'information contre les menaces et les attaques, avec une approche pratique et théorique.",
        category: "Sécurité Informatique",
        parcours: "Sécurité",
        niveau: "Master",
        cycle: "Master",
        duration: "2 ans",
        diploma: "Master en Sécurité des Systèmes d'Information",
        admissionRequirements: ["Licence en informatique ou équivalent", "Dossier de candidature", "Test d'admission", "Entretien de motivation"],
        objectives: ["Identifier les risques et les vulnérabilités des systèmes d'information", "Mettre en place des mesures de sécurité (pare-feu, antivirus, chiffrement)", "Réagir aux incidents de sécurité", "Effectuer des audits de sécurité", "Connaître les normes et les réglementations en matière de sécurité"],
        skillsDeveloped: ["Analyse de risques", "Sécurité des réseaux", "Sécurité des applications", "Cryptographie", "Gestion des incidents de sécurité"],
        opportunities: ["Responsable de la sécurité des systèmes d'information (RSSI)", "Auditeur de sécurité", "Consultant en sécurité", "Analyste de la sécurité", "Ingénieur en sécurité"]
      }
    ]
  },
  {
    id: "Best-Institut",
    name: "Best Institut Formmation Professionnelle Privée",
    description: "Formation d'excellence en commerce, Comptabilité, marketing international Infographie, Multimédia, Programmation etc avec un accent sur un bonne application.",
    logo: "Images/Best.png", // Mise à jour du chemin
    address: "45 Boulevard du Commerce, 20000 Casablanca",
    video: "https://www.youtube.com/watch?v=c8jZRuMTiDQ&list=PLwenwdaZUv6J1BLlVcI6xF44EBaWtsHh3",
    contact: {
      phone: "+212 5 22 44 88 00",
      email: "contact@best-institut.ma",
      website: "www.best-institut.ma"
    },
    registrationInfo: {
      "Tous les parcours": {
        description: "Les inscriptions sont ouvertes toute l'année, mais il est conseillé de s'inscrire avant le début des sessions pour garantir une place. Les dossiers peuvent être soumis en ligne ou directement au bureau des admissions.",
        procedure: [
          "Remplir le formulaire de candidature en ligne",
          "Soumettre les copies certifiées conformes des diplômes",
          "Fournir une pièce d'identité",
          "Payer les frais d'inscription"
        ],
        fees: 30000,
        scholarships: false,
        contact: {
          phone: "+212 5 22 44 88 00",
          email: "contact@best-institut.ma"
        }
      }
    },
    programs: [
      {
        name: "Techniques de Commerce International",
        description: "Formation pratique pour maîtriser les techniques du commerce international, de l'import-export à la gestion des douanes.",
        category: "Commerce",
        parcours: "Commerce International",
        niveau: "Technicien Spécialisé",
        cycle: "Cycle Initial",
        duration: "2 ans",
        diploma: "Diplôme de Technicien Spécialisé en Commerce International",
        admissionRequirements: ["Baccalauréat toutes séries", "Test d'admission", "Entretien de motivation"],
        objectives: ["Connaître les réglementations du commerce international", "Gérer les opérations d'import-export", "Négocier avec les fournisseurs et les clients étrangers", "Utiliser les outils du commerce international"],
        skillsDeveloped: ["Commerce international", "Marketing international", "Gestion des douanes", "Négociation", "Langues étrangères"],
        opportunities: ["Agent commercial international", "Responsable import-export", "Assistant commercial international", "Consultant en commerce international"]
      },
      {
        name: "Comptabilité et Finance d'Entreprise",
        description: "Formation pour acquérir les compétences nécessaires pour gérer la comptabilité et les finances d'une entreprise, de la tenue des comptes à l'analyse financière.",
        category: "Comptabilité",
        parcours: "Comptabilité et Finance",
        niveau: "Licence",
        cycle: "Licence",
        duration: "3 ans",
        diploma: "Licence en Comptabilité et Finance d'Entreprise",
        admissionRequirements: ["Baccalauréat scientifique ou économique", "Dossier de candidature", "Test d'admission", "Entretien de motivation"],
        objectives: ["Tenir la comptabilité d'une entreprise", "Établir les états financiers", "Analyser les performances financières", "Gérer la trésorerie", "Contrôler les coûts"],
        skillsDeveloped: ["Comptabilité générale", "Comptabilité analytique", "Analyse financière", "Gestion de la trésorerie", "Contrôle de gestion"],
        opportunities: ["Comptable", "Assistant comptable", "Contrôleur de gestion", "Analyste financier", "Auditeur financier"]
      },
      {
        name: "Infographie et Multimédia",
        description: "Formation pour maîtriser les outils de création graphique et multimédia, de la conception visuelle à la réalisation de projets interactifs.",
        category: "Multimédia",
        parcours: "Infographie et Multimédia",
        niveau: "Technicien Spécialisé",
        cycle: "Cycle Initial",
        duration: "2 ans",
        diploma: "Diplôme de Technicien Spécialisé en Infographie et Multimédia",
        admissionRequirements: ["Baccalauréat toutes séries", "Dossier de candidature", "Test d'admission", "Entretien de motivation"],
        objectives: ["Concevoir des supports visuels (logos, affiches, brochures)", "Réaliser des animations 2D et 3D", "Créer des sites web interactifs", "Monter des vidéos", "Utiliser les logiciels de création graphique (Photoshop, Illustrator, InDesign)"],
        skillsDeveloped: ["Conception graphique", "Web design", "Animation", "Montage vidéo", "Utilisation des logiciels de création graphique"],
        opportunities: ["Infographiste", "Web designer", "Animateur", "Monteur vidéo", "Directeur artistique"]
      }
    ]
  },
  {
    id: "CESA",
    name: "CESA Établissement Supérieur de Commerce",
    description: "Un établissement de premier plan spécialisé dans les formations commerciales, marketing et management, offrant des programmes adaptés aux exigences du marché.",
    logo: "Images/Cesa.jpg", // Mise à jour du chemin
    address: "25 Avenue Hassan II, 20000 Casablanca",
    video: "https://www.youtube.com/watch?v=c8jZRuMTiDQ&list=PLwenwdaZUv6J1BLlVcI6xF44EBaWtsHh3",
    contact: {
      phone: "+212 5 22 26 54 98",
      email: "contact@cesa.ma",
      website: "www.cesa.ma"
    },
    registrationInfo: {
      "Tous les parcours": {
        description: "Les inscriptions sont ouvertes de mars à juillet. Les dossiers peuvent être soumis en ligne ou directement au service des admissions.",
        procedure: [
          "Remplir le formulaire d'inscription",
          "Fournir les copies des diplômes et relevés de notes",
          "Passer un test d'aptitude",
          "Participer à un entretien de motivation"
        ],
        fees: 50000,
        scholarships: true,
        contact: {
          phone: "+212 5 22 26 54 98",
          email: "contact@cesa.ma"
        }
      }
    },
    programs: [
      {
        name: "Marketing et Communication",
        description: "Formation pour maîtriser les techniques du marketing et de la communication, de la stratégie à la mise en œuvre des campagnes.",
        category: "Marketing",
        parcours: "Marketing et Communication",
        niveau: "Licence",
        cycle: "Licence",
        duration: "3 ans",
        diploma: "Licence en Marketing et Communication",
        admissionRequirements: ["Baccalauréat toutes séries", "Dossier de candidature", "Test d'admission", "Entretien de motivation"],
        objectives: ["Élaborer des stratégies marketing", "Mettre en œuvre des campagnes de communication", "Gérer la relation client", "Analyser les données marketing", "Utiliser les outils du marketing digital"],
        skillsDeveloped: ["Marketing stratégique", "Marketing opérationnel", "Communication", "Marketing digital", "Gestion de la relation client"],
        opportunities: ["Chargé de marketing", "Chargé de communication", "Chef de produit", "Responsable marketing", "Consultant en marketing"]
      },
      {
        name: "Management des Ressources Humaines",
        description: "Formation pour acquérir les compétences nécessaires pour gérer les ressources humaines d'une entreprise, du recrutement à la formation en passant par la gestion des carrières.",
        category: "Ressources Humaines",
        parcours: "Management des RH",
        niveau: "Master",
        cycle: "Master",
        duration: "2 ans",
        diploma: "Master en Management des Ressources Humaines",
        admissionRequirements: ["Licence en gestion ou équivalent", "Dossier de candidature", "Test d'admission", "Entretien de motivation"],
        objectives: ["Recruter les meilleurs talents", "Former et développer les compétences des collaborateurs", "Gérer les carrières", "Mettre en place une politique de rémunération", "Gérer les relations sociales"],
        skillsDeveloped: ["Recrutement", "Formation", "Gestion des carrières", "Rémunération", "Relations sociales"],
        opportunities: ["Responsable des ressources humaines", "Chargé de recrutement", "Responsable formation", "Consultant en ressources humaines", "Directeur des ressources humaines"]
      },
      {
        name: "Finance et Contrôle de Gestion",
        description: "Formation pour maîtriser les outils de la finance et du contrôle de gestion, de l'analyse financière à la gestion budgétaire.",
        category: "Finances",
        parcours: "Finance et Contrôle",
        niveau: "Master",
        cycle: "Master",
        duration: "2 ans",
        diploma: "Master en Finance et Contrôle de Gestion",
        admissionRequirements: ["Licence en économie ou gestion", "Dossier de candidature", "Test d'admission", "Entretien de motivation"],
        objectives: ["Analyser les états financiers", "Élaborer des budgets", "Contrôler les coûts", "Gérer la trésorerie", "Évaluer les investissements"],
        skillsDeveloped: ["Analyse financière", "Contrôle de gestion", "Gestion budgétaire", "Gestion de la trésorerie", "Évaluation des investissements"],
        opportunities: ["Contrôleur de gestion", "Analyste financier", "Auditeur interne", "Directeur financier", "Consultant en finance"]
      }
    ]
  },
  {
    id: "EDD",
    name: "EDD École de Design",
    description: "Une école innovante spécialisée dans les arts graphiques, le design et les disciplines créatives, formant les talents de demain.",
    logo: "Images/EDD.jpg", // Mise à jour du chemin
    address: "12 Rue des Arts, 20000 Casablanca",
    video: "https://www.youtube.com/watch?v=c8jZRuMTiDQ&list=PLwenwdaZUv6J1BLlVcI6xF44EBaWtsHh3",
    contact: {
      phone: "+212 5 22 22 00 44",
      email: "contact@edd.ma",
      website: "www.edd.ma"
    },
    registrationInfo: {
      "Tous les parcours": {
        description: "Les inscriptions sont ouvertes de janvier à juin. Les dossiers peuvent être soumis en ligne ou déposés au service des admissions.",
        procedure: [
          "Remplir le formulaire de pré-inscription",
          "Joindre un portfolio de travaux artistiques",
          "Passer un entretien de motivation",
          "Participer à un atelier créatif"
        ],
        fees: 60000,
        scholarships: true,
        contact: {
          phone: "+212 5 22 22 00 44",
          email: "contact@edd.ma"
        }
      }
    },
    programs: [
      {
        name: "Design Graphique",
        description: "Formation pour maîtriser les outils du design graphique, de la création de logos à la conception de supports de communication.",
        category: "Arts",
        parcours: "Design Graphique",
        niveau: "Licence",
        cycle: "Licence",
        duration: "3 ans",
        diploma: "Licence en Design Graphique",
        admissionRequirements: ["Baccalauréat toutes séries", "Dossier de candidature", "Entretien de motivation", "Portfolio de travaux artistiques"],
        objectives: ["Concevoir des logos et des identités visuelles", "Créer des supports de communication (affiches, brochures, packaging)", "Maîtriser les logiciels de création graphique (Photoshop, Illustrator, InDesign)", "Comprendre les principes de la typographie et de la couleur", "Développer un sens esthétique"],
        skillsDeveloped: ["Design graphique", "Identité visuelle", "Communication visuelle", "Typographie", "Logiciels de création graphique"],
        opportunities: ["Designer graphique", "Directeur artistique", "Concepteur de logos", "Illustrateur", "Responsable de communication visuelle"]
      },
      {
        name: "Architecture d'Intérieur",
        description: "Formation pour concevoir et aménager des espaces intérieurs, de la planification à la réalisation des projets.",
        category: "Arts",
        parcours: "Architecture Intérieure",
        niveau: "Licence",
        cycle: "Licence",
        duration: "3 ans",
        diploma: "Licence en Architecture d'Intérieur",
        admissionRequirements: ["Baccalauréat toutes séries", "Dossier de candidature", "Entretien de motivation", "Portfolio de travaux artistiques"],
        objectives: ["Concevoir des plans d'aménagement", "Choisir les matériaux et les couleurs", "Créer des ambiances", "Gérer les projets d'aménagement", "Connaître les normes de sécurité"],
        skillsDeveloped: ["Conception d'espaces", "Dessin technique", "Choix des matériaux", "Gestion de projet", "Normes de sécurité"],
        opportunities: ["Architecte d'intérieur", "Décorateur", "Concepteur d'espaces", "Chef de projet aménagement", "Consultant en aménagement"]
      },
      {
        name: "Design Digital",
        description: "Formation pour concevoir des interfaces numériques innovantes et intuitives, de la conception à la réalisation des projets.",
        category: "Arts",
        parcours: "Design Digital",
        niveau: "Licence",
        cycle: "Licence",
        duration: "3 ans",
        diploma: "Licence en Design Digital",
        admissionRequirements: ["Baccalauréat toutes séries", "Dossier de candidature", "Entretien de motivation", "Portfolio de travaux artistiques"],
        objectives: ["Concevoir des interfaces utilisateur (UI)", "Créer des expériences utilisateur (UX)", "Maîtriser les outils de prototypage", "Comprendre les principes de l'ergonomie", "Développer un sens esthétique"],
        skillsDeveloped: ["Design d'interface utilisateur", "Expérience utilisateur", "Prototypage", "Ergonomie", "Logiciels de création digitale"],
        opportunities: ["Designer UI", "Designer UX", "Chef de projet digital", "Consultant en design digital", "Directeur artistique digital"]
      }
    ]
  },
  {
    id: "IBEGIS",
    name: "IBEGIS Institut des Hautes Études de Gestion",
    description: "Un institut dédié à l'excellence académique en gestion, économie et administration des entreprises, formant les futurs cadres dirigeants.",
    logo: "Images/ibegis.png", // Mise à jour du chemin
    address: "8 Boulevard Mohammed V, 20250 Casablanca",
    video: "https://www.youtube.com/watch?v=c8jZRuMTiDQ&list=PLwenwdaZUv6J1BLlVcI6xF44EBaWtsHh3",
    contact: {
      phone: "+212 5 22 20 20 60",
      email: "contact@ibegis.ma",
      website: "www.ibegis.ma"
    },
    registrationInfo: {
      "Tous les parcours": {
        description: "Les inscriptions sont ouvertes de février à juillet. Les dossiers peuvent être soumis en ligne ou déposés au service des admissions.",
        procedure: [
          "Remplir le formulaire de candidature",
          "Fournir les copies des diplômes et relevés de notes",
          "Passer un test d'aptitude",
          "Participer à un entretien de motivation"
        ],
        fees: 55000,
        scholarships: true,
        contact: {
          phone: "+212 5 22 20 20 60",
          email: "contact@ibegis.ma"
        }
      }
    },
    programs: [
      {
        name: "Gestion des Entreprises",
        description: "Formation pour acquérir les compétences nécessaires pour gérer une entreprise, de la stratégie à la gestion opérationnelle.",
        category: "Management & Gestion",
        parcours: "Gestion des Entreprises",
        niveau: "Master",
        cycle: "Master",
        duration: "2 ans",
        diploma: "Master en Gestion des Entreprises",
        admissionRequirements: ["Licence en économie ou gestion", "Dossier de candidature", "Test d'aptitude", "Entretien de motivation"],
        objectives: ["Élaborer des stratégies d'entreprise", "Gérer les ressources humaines", "Gérer les finances", "Gérer la production", "Gérer la commercialisation"],
        skillsDeveloped: ["Stratégie d'entreprise", "Gestion des ressources humaines", "Gestion financière", "Gestion de la production", "Gestion commerciale"],
        opportunities: ["Directeur général", "Directeur des ressources humaines", "Directeur financier", "Directeur de production", "Directeur commercial"]
      },
      {
        name: "Finance d'Entreprise",
        description: "Formation pour maîtriser les outils de la finance d'entreprise, de l'analyse financière à la gestion des investissements.",
        category: "Finances",
        parcours: "Finance d'Entreprise",
        niveau: "Master",
        cycle: "Master",
        duration: "2 ans",
        diploma: "Master en Finance d'Entreprise",
        admissionRequirements: ["Licence en économie ou gestion", "Dossier de candidature", "Test d'aptitude", "Entretien de motivation"],
        objectives: ["Analyser les états financiers", "Évaluer les entreprises", "Gérer les investissements", "Financer les entreprises", "Gérer les risques financiers"],
        skillsDeveloped: ["Analyse financière", "Évaluation d'entreprises", "Gestion des investissements", "Financement des entreprises", "Gestion des risques financiers"],
        opportunities: ["Analyste financier", "Gestionnaire de portefeuille", "Conseiller financier", "Directeur financier", "Consultant en finance"]
      },
      {
        name: "Marketing Digital",
        description: "Formation pour maîtriser les outils du marketing digital, de la stratégie à la mise en œuvre des campagnes.",
        category: "Marketing",
        parcours: "Marketing Digital",
        niveau: "Master",
        cycle: "Master",
        duration: "2 ans",
        diploma: "Master en Marketing Digital",
        admissionRequirements: ["Licence en marketing ou communication", "Dossier de candidature", "Test d'aptitude", "Entretien de motivation"],
        objectives: ["Élaborer des stratégies de marketing digital", "Mettre en œuvre des campagnes de marketing digital", "Gérer les réseaux sociaux", "Analyser les données marketing", "Utiliser les outils du marketing digital"],
        skillsDeveloped: ["Marketing digital", "Marketing des réseaux sociaux", "Analyse des données marketing", "Publicité en ligne", "Référencement"],
        opportunities: ["Chargé de marketing digital", "Responsable des réseaux sociaux", "Chef de projet digital", "Consultant en marketing digital", "Directeur marketing digital"]
      }
    ]
  }
];
