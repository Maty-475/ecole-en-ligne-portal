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
  "Droit",
  "Environnement et Energie",
  "Marketing Digital",
  "Gestion d'Entreprise",
  "Gestion Financière",
  "Gestion des Ressources Humaines",
  "Banque et Assurance"
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
  "Doctorat",
  "Formation Continue"
];

export const schools: School[] = [
  {
    id: "Groupe-Miage",
    name: "Groupe Miage Etablissement Privé",
    description: "Un établissement d'excellence dédié à l'enseignement technologique avec des programmes innovants et des partenariats industriels.",
    logo: "/logos/miage.png", 
    address: "64, Rue Allal Ben Abdellah 20000 Casablanca",
    video: "https://www.youtube.com/watch?v=c8jZRuMTiDQ&list=PLwenwdaZUv6J1BLlVcI6xF44EBaWtsHh3",
    contact: {
      phone: "+212 5 22 27 96 00",
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
        name: "Réseaux et Systèmes Informatiques",
        description: "Formation approfondie aux technologies des réseaux et systèmes informatiques pour administrer et sécuriser les infrastructures IT.",
        category: "Réseaux et Télécommunications",
        parcours: "Réseaux et Systèmes",
        niveau: "Technicien Spécialisé",
        cycle: "Technicien",
        duration: "2 ans",
        diploma: "Diplôme de Technicien Spécialisé en Réseaux et Systèmes Informatiques",
        admissionRequirements: ["Baccalauréat scientifique ou technique", "Test d'admission", "Entretien de motivation"],
        objectives: ["Configurer des équipements réseau", "Administrer des serveurs et systèmes", "Sécuriser les infrastructures IT", "Optimiser les performances réseau"],
        skillsDeveloped: ["Administration réseau", "Gestion de systèmes Windows et Linux", "Virtualisation", "Protocoles réseau", "Sécurité informatique"],
        opportunities: ["Administrateur réseau", "Technicien systèmes", "Responsable infrastructure IT", "Consultant en infrastructure"]
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
        name: "Management des Systèmes d'Information",
        description: "Formation avancée pour gérer stratégiquement les systèmes d'information et aligner les technologies avec les objectifs d'affaires.",
        category: "Management Informatique",
        parcours: "Management SI",
        niveau: "Master",
        cycle: "Master",
        duration: "2 ans",
        diploma: "Master en Management des Systèmes d'Information",
        admissionRequirements: ["Licence en informatique ou gestion", "Dossier de candidature", "Test d'admission", "Entretien de motivation"],
        objectives: ["Aligner les SI avec la stratégie d'entreprise", "Gérer la gouvernance IT", "Piloter les projets de transformation numérique", "Optimiser les investissements IT"],
        skillsDeveloped: ["Gouvernance IT", "Planification stratégique", "Gestion de la transformation numérique", "Business Intelligence", "Management des équipes IT"],
        opportunities: ["Directeur des systèmes d'information", "Responsable SI", "Consultant en transformation numérique", "Architecte d'entreprise"]
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
      },
      {
        name: "Certification Cybersécurité",
        description: "Programme de certification spécialisée en cybersécurité pour les professionnels IT déjà en poste.",
        category: "Cyber Sécurité",
        parcours: "Certification Professionnelle",
        niveau: "Certification",
        cycle: "Formation Continue",
        duration: "6 mois",
        diploma: "Certification Professionnelle en Cybersécurité",
        admissionRequirements: ["Diplôme en informatique ou expérience professionnelle", "Entretien technique"],
        objectives: ["Maîtriser les techniques avancées de sécurité", "Détecter et contrer les cyberattaques", "Mettre en place des politiques de sécurité"],
        skillsDeveloped: ["Ethical hacking", "Analyse forensique", "Gestion de crise", "Tests d'intrusion"],
        opportunities: ["Expert en cybersécurité", "Pentester", "Analyste SOC", "Consultant en sécurité"]
      }
    ]
  },
  {
    id: "Best-Institut",
    name: "Best Institut Formation Professionnelle Privée",
    description: "Formation d'excellence en commerce, Comptabilité, marketing international Infographie, Multimédia, Programmation etc avec un accent sur un bonne application.",
    logo: "/logos/best.png", 
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
        name: "Technicien en Comptabilité",
        description: "Formation technique aux principes fondamentaux de la comptabilité et aux logiciels de gestion comptable.",
        category: "Comptabilité",
        parcours: "Comptabilité",
        niveau: "Technicien",
        cycle: "Technicien",
        duration: "2 ans",
        diploma: "Diplôme de Technicien en Comptabilité",
        admissionRequirements: ["Niveau Baccalauréat", "Test d'admission"],
        objectives: ["Maîtriser les principes comptables", "Utiliser les logiciels de comptabilité", "Préparer les états financiers de base"],
        skillsDeveloped: ["Comptabilité générale", "Fiscalité de base", "Logiciels comptables", "Gestion administrative"],
        opportunities: ["Assistant comptable", "Aide-comptable", "Gestionnaire administratif"]
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
        name: "Master Finance et Audit",
        description: "Formation avancée en finance d'entreprise et audit financier pour les futurs experts-comptables et auditeurs.",
        category: "Finances",
        parcours: "Finance et Audit",
        niveau: "Master",
        cycle: "Master",
        duration: "2 ans",
        diploma: "Master en Finance et Audit",
        admissionRequirements: ["Licence en comptabilité ou finance", "Dossier académique", "Entretien"],
        objectives: ["Maîtriser les normes d'audit internationales", "Élaborer des stratégies financières", "Évaluer les risques financiers"],
        skillsDeveloped: ["Audit financier", "Consolidation", "Normes IFRS", "Contrôle interne", "Finance d'entreprise avancée"],
        opportunities: ["Auditeur financier", "Contrôleur financier", "Expert-comptable stagiaire", "Consultant financier"]
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
      },
      {
        name: "Transformation Digitale des Entreprises",
        description: "Formation continue pour cadres souhaitant piloter la transformation numérique de leur organisation.",
        category: "Management Informatique",
        parcours: "Transformation Digitale",
        niveau: "Formation Professionnelle",
        cycle: "Formation Continue",
        duration: "1 an (temps partiel)",
        diploma: "Certificat de Formation en Transformation Digitale",
        admissionRequirements: ["Expérience professionnelle", "Poste de management", "Entretien"],
        objectives: ["Comprendre les enjeux de la digitalisation", "Élaborer une stratégie de transformation", "Gérer le changement organisationnel"],
        skillsDeveloped: ["Stratégie digitale", "Change management", "Innovation digitale", "Leadership transformationnel"],
        opportunities: ["Chief Digital Officer", "Responsable transformation digitale", "Consultant en transformation"]
      }
    ]
  },
  {
    id: "CESA",
    name: "CESA Établissement Supérieur de Commerce",
    description: "Un établissement de premier plan spécialisé dans les formations commerciales, marketing et management, offrant des programmes adaptés aux exigences du marché.",
    logo: "/logos/cesa.png", 
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
        name: "Techniques Commerciales",
        description: "Formation pratique aux techniques de vente et négociation commerciale pour futurs commerciaux et responsables des ventes.",
        category: "Commerce",
        parcours: "Commercial",
        niveau: "Technicien",
        cycle: "Technicien",
        duration: "2 ans",
        diploma: "Diplôme de Technicien en Techniques Commerciales",
        admissionRequirements: ["Niveau Baccalauréat", "Entretien de motivation"],
        objectives: ["Maîtriser les techniques de vente", "Gérer un portefeuille clients", "Négocier efficacement"],
        skillsDeveloped: ["Prospection commerciale", "Techniques de vente", "CRM", "Communication commerciale"],
        opportunities: ["Commercial", "Représentant", "Assistant commercial", "Conseiller de vente"]
      },
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
      },
      {
        name: "Mini MBA en Management",
        description: "Formation intensive pour cadres et dirigeants souhaitant renforcer leurs compétences en management général.",
        category: "Management & Gestion",
        parcours: "Executive Education",
        niveau: "Formation Professionnelle",
        cycle: "Formation Continue",
        duration: "6 mois",
        diploma: "Certificat Mini MBA",
        admissionRequirements: ["5 ans d'expérience professionnelle", "Position managériale", "Entretien"],
        objectives: ["Renforcer les compétences de leadership", "Développer une vision stratégique", "Maîtriser les fondamentaux du management"],
        skillsDeveloped: ["Leadership", "Stratégie", "Finance pour managers", "Management d'équipe"],
        opportunities: ["Évolution vers des postes de direction", "Transition professionnelle", "Entrepreneuriat"]
      }
    ]
  },
  {
    id: "EDD",
    name: "EDD École de Design",
    description: "Une école innovante spécialisée dans les arts graphiques, le design et les disciplines créatives, formant les talents de demain.",
    logo: "/logos/edd.png", 
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
        name: "Design Produit",
        description: "Formation technique aux principes fondamentaux de conception de produits et prototypage pour futurs designers.",
        category: "Arts",
        parcours: "Design Produit",
        niveau: "Technicien Spécialisé",
        cycle: "Technicien",
        duration: "2 ans",
        diploma: "Diplôme de Technicien Spécialisé en Design Produit",
        admissionRequirements: ["Niveau Baccalauréat", "Portfolio", "Test créatif"],
        objectives: ["Concevoir des objets fonctionnels", "Réaliser des prototypes", "Comprendre les contraintes matérielles"],
        skillsDeveloped: ["Dessin technique", "Modélisation 3D", "Prototypage", "Connaissance des matériaux"],
        opportunities: ["Designer produit junior", "Prototypiste", "Assistant designer", "Maquettiste"]
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
      },
      {
        name: "Design Thinking et Innovation",
        description: "Formation spécialisée pour professionnels souhaitant intégrer la méthodologie design thinking dans leurs projets.",
        category: "Arts",
        parcours: "Innovation par le Design",
        niveau: "Formation Professionnelle",
        cycle: "Formation Continue",
        duration: "4 mois",
        diploma: "Certificat en Design Thinking et Innovation",
        admissionRequirements: ["Expérience professionnelle", "Lettre de motivation"],
        objectives: ["Maîtriser la méthodologie design thinking", "Faciliter les ateliers d'idéation", "Mener des recherches utilisateurs"],
        skillsDeveloped: ["Design thinking", "Co-création", "Prototypage rapide", "Test utilisateur", "Gestion de l'innovation"],
        opportunities: ["Facilitateur design thinking", "Innovation manager", "Chef de projet innovation", "Consultant en design thinking"]
      }
    ]
  },
  {
    id: "IBEGIS",
    name: "IBEGIS Institut des Hautes Études de Gestion",
    description: "Un institut dédié à l'excellence académique en gestion, économie et administration des entreprises, formant les futurs cadres dirigeants.",
    logo: "/logos/ibegis.png", 
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
        name: "Assistanat de Direction",
        description: "Formation pratique aux compétences essentielles d'un assistant de direction performant et polyvalent.",
        category: "Gestion d'Entreprise",
        parcours: "Assistanat",
        niveau: "Technicien Spécialisé",
        cycle: "Technicien",
        duration: "2 ans",
        diploma: "Diplôme de Technicien Spécialisé en Assistanat de Direction",
        admissionRequirements: ["Niveau Baccalauréat", "Test de langue", "Entretien"],
        objectives: ["Gérer l'agenda et la communication", "Organiser réunions et déplacements", "Rédiger des documents professionnels"],
        skillsDeveloped: ["Communication écrite et orale", "Outils bureautiques avancés", "Gestion administrative", "Organisation"],
        opportunities: ["Assistant(e) de direction", "Assistant(e) de manager", "Office manager", "Secrétaire de direction"]
      },
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
        name: "Gestion Commerciale",
        description: "Formation complète aux méthodes et outils modernes de gestion commerciale et développement des ventes.",
        category: "Commerce",
        parcours: "Gestion Commerciale",
        niveau: "Licence",
        cycle: "Licence",
        duration: "3 ans",
        diploma: "Licence en Gestion Commerciale",
        admissionRequirements: ["Baccalauréat", "Test d'admission", "Entretien"],
        objectives: ["Développer un portefeuille commercial", "Élaborer une stratégie commerciale", "Gérer une équipe de vente"],
        skillsDeveloped: ["Techniques de vente avancées", "Management commercial", "CRM", "Négociation B2B"],
        opportunities: ["Responsable commercial", "Chargé d'affaires", "Manager d'équipe de vente", "Business developer"]
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
      },
      {
        name: "Leadership et Management Stratégique",
        description: "Programme exécutif intensif destiné aux cadres dirigeants pour renforcer leurs capacités de leadership et vision stratégique.",
        category: "Management & Gestion",
        parcours: "Executive Education",
        niveau: "Formation Exécutive",
        cycle: "Formation Continue",
        duration: "8 mois (part-time)",
        diploma: "Executive Certificate en Leadership et Management Stratégique",
        admissionRequirements: ["Minimum 8 ans d'expérience dont 3 en management", "Poste de direction", "Entretien approfondi"],
        objectives: ["Développer son leadership", "Affiner sa vision stratégique", "Conduire le changement organisationnel"],
        skillsDeveloped: ["Leadership transformationnel", "Pensée stratégique", "Prise de décision complexe", "Management interculturel"],
        opportunities: ["Évolution vers comité de direction", "Direction générale", "Conseil d'administration"]
      }
    ]
  }
];
