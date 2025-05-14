
export interface Program {
  id: string;
  parcours: string;
  name: string;
  description: string;
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
  "Commerce",
  "Arts",
  "Sciences",
  "Ingénierie",
  "Santé",
  "Gestion",
  "Langues",
  "Droit"
];

export const niveau = [
  "Technicien Spécialisé",
  "Technicien",
  "Licence",
  "Master",
  "Doctorat"
];

export const cycles = [
  "Cycle Initial",
  "Technicien",
  "Licence",
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
        description: "Formation complète en finance et comptabilité.",
        duration: "2 ans",
        category: "Gestion Financière",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-1-2",
        parcours: "Technicien Spécialisé",
        name: "Développement Informatique",
        description: "Spécialisation dans la conception et programmation de logiciel et site web.",
        duration: "2 ans",
        category: "Informatique",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-1-3",
        parcours: "Technicien Spécialisé",
        name: "Systèmes et Réseaux Informatique",
        description: "Spécialisation dans l'administration réseau : Installation et conception.",
        duration: "2 ans",
        category: "Informatique",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-1-4",
        parcours: "Technicien",
        name: "Gestion Informatisée",
        description: "Apprendre la Base sur la Gestion Informatique.",
        duration: "2 ans",
        category: "Informatique",
        cycle: "Technicien"
      },
      {
        id: "prog-2-1",
        parcours: "Licence Professionnelle",
        name: "Informatique (Développement BD, Web, Réseaux et Sécurité)",
        description: "Formation complète en Développement et programmation informatique.",
        duration: "5 ans",
        category: "Informatique",
        cycle: "Licence"
      },
      {
        id: "prog-2-2",
        parcours: "Licence Professionnelle",
        name: "Management et Gestion de PME",
        description: "Prépare aux responsabilités de gestion et de management au sein des petites et moyennes entreprises.",
        duration: "5 ans",
        category: "Gestion d'Entreprise",
        cycle: "Licence"
      },
      {
        id: "prog-2-3",
        parcours: "Licence Professionnelle",
        name: "Marketing Finance et Ressources Humaines",
        description: "Le responsable marketing RH utilise les techniques du marketing pour améliorer la marque employeur.",
        duration: "5 ans",
        category: "Gestion des Ressources Humaines",
        cycle: "Licence"
      },
      {
        id: "prog-2-4",
        parcours: "Licence Professionnelle",
        name: "Transport et Logistique",
        description: "La logistique et le transport englobent les méthodes et moyens d'organisation des services ou entreprises",
        duration: "3 ans",
        category: "Logistique",
        cycle: "Licence"
      },    
       {
        id: "prog-4-1",
        parcours: "Master Europeen",
        name: "Management et Stratégie d'Entreprise (ME MSE)",
        description: "Ce master forme des futurs dirigeants capables d’élaborer et de piloter la stratégie globale d’une entreprise. Il permet d’acquérir des compétences en gestion, en pilotage d’équipe et en prise de décision stratégique, offrant une grande polyvalence pour évoluer vers des postes de cadre supérieur ou de consultant en organisation.",
        duration: "5 ans",
        category: "Gestion d'Entreprise",
        cycle: "Master"
      },
        {
        id: "prog-4-2",
        parcours: "Master Europeen",
        name: "Management et Stratégie Financière (ME MSF)",
        description: "Idéal pour ceux qui souhaitent maîtriser la finance d’entreprise, ce programme offre une expertise pointue en gestion budgétaire, évaluation des risques, audit et investissement. Il prépare à des postes clés comme directeur financier, contrôleur de gestion ou analyste financier, dans un secteur très porteur.",
        duration: "5 ans",
        category: "Gestion Financière",
        cycle: "Master"
      },
      {
        id: "prog-4-3",
       parcours: "Master Europeen",
        name: "Management des Ressources Humaines (ME MRH)",
        description: "Ce master développe les compétences nécessaires pour gérer le capital humain d’une organisation, du recrutement à la formation, en passant par la gestion des conflits et la stratégie RH. Il prépare à des carrières de responsable RH, chargé de recrutement ou consultant en gestion du personnel.",
        duration: "5 ans",
        category: "Gestion de Ressources Humaines",
       cycle: "Master"
      },
      {
        id: "prog-4-4",
       parcours: "Master Europeen",
        name: "Logistique (ME LOG)",
        description: "Axée sur la gestion des flux physiques et d’informations, cette formation forme des experts capables d’optimiser les chaînes d’approvisionnement. Elle est très recherchée dans les secteurs du transport, de l’industrie et de la grande distribution, avec des débouchés comme responsable logistique ou supply chain manager.",
        duration: "5 ans",
        category: "Logistique",
       cycle: "Master"
      },
      {
        id: "prog-4-5",
       parcours: "Master Europeen",
        name: "Management Digital (ME MD)",
        description: "Ce master permet d'acquérir une forte culture numérique et des compétences en transformation digitale, outils web, CRM et e-business. Il prépare à des postes comme chef de projet digital, consultant en transformation numérique ou responsable e-commerce, dans un marché en pleine croissance.",
        duration: "5 ans",
        category: "Informatique",
        cycle: "Master"
      },
      {
        id: "prog-4-6",
        parcours: "Master Europeen",
        name: "Management Environnemental et Énergétique (ME MEE)",
        description: "Cette formation est idéale pour ceux qui souhaitent concilier performance économique et développement durable. Elle prépare à gérer les problématiques environnementales et énergétiques des entreprises, ouvrant la voie à des carrières dans le conseil, l’industrie verte ou la gestion de projets durables.",
        duration: "5 ans",
        category: "Environnement et Energie",
        cycle: "Master"
      },
      {
        id: "prog-4-7",
        parcours: "Master Europeen",
        name: "Communication et Marketing Numérique (ME CMN)",
        description: "Parfait pour les créatifs orientés business, ce master allie stratégie de communication et maîtrise des outils numériques (SEO, réseaux sociaux, content marketing). Il forme des profils très demandés comme community manager, responsable marketing digital ou chargé de communication digitale.",
        duration: "5 ans",
        category: "Marketing Digital",
        cycle: "Master"
      },
      {
        id: "prog-4-8",
        parcours: "Master Europeen",
        name: "Informatique (ME INFO)",
        description: "Cette formation couvre l’ensemble des domaines clés de l’informatique : développement, systèmes, réseaux, sécurité et bases de données. Elle permet d’accéder à des métiers techniques très recherchés, comme développeur, ingénieur logiciel ou administrateur systèmes",
        duration: "5 ans",
        category: "Informatique",
        cycle: "Master"
      },
      {
        id: "prog-4-9",
        parcours: "Master Europeen",
        name: "Expert IT Applications Intelligentes et Big Data (ME EIT-AIBD)",
        description: "Axée sur l’intelligence artificielle, la data science et les technologies avancées, cette formation prépare aux métiers d’avenir tels que data analyst, ingénieur IA ou expert Big Data. Elle combine compétences techniques et analytiques pour répondre aux enjeux de l’économie numérique.",
        duration: "5 ans",
        category: "Cyber Sécurité",
        cycle: "Master"
      },
        {
        id: "prog-4-10",
        parcours: "Master Europeen",
        name: "Juriste d’entreprise (ME-JE)",
        description: "Destiné à ceux qui souhaitent exercer dans le domaine juridique au sein d’une entreprise, ce programme offre une solide base en droit des affaires, contrats et droit social. Il prépare à des fonctions telles que juriste d’entreprise, conseiller juridique ou responsable conformité.",
        duration: "5 ans",
        category: "Droit",
        cycle: "Master"
      },
      {
        id: "prog-4-11",
        parcours: "Master Europeen",
        name: "Banque privée internationale (ME-BPI)",
        description: "Ce master forme des experts en gestion de fortune, conseil patrimonial et placements financiers internationaux. Il ouvre des portes dans le secteur bancaire haut de gamme, notamment comme conseiller clientèle privée ou gestionnaire de portefeuille.",
        duration: "5 ans",
        category: "Banque et Assurance",
        cycle: "Master"
      },
      {
        id: "prog-4-12",
        parcours: "Master Europeen",
        name: "Communication-publicité (ME-PUB)",
        description: "Cette formation met l’accent sur la créativité, la stratégie de marque et les campagnes publicitaires. Elle prépare à travailler dans les agences de communication, les médias ou les départements marketing, avec des postes comme concepteur-rédacteur, chargé de communication ou chef de publicité.",
        duration: "5 ans",
        category: "Multi-Média",
        cycle: "Master"
      }  
    ]
  },
  {
    id: "Best-Institut",
    name: "Best Institut Formmation Professionnelle Privée",
    description: "Formation d'excellence en commerce, Comptabilité, marketing international Infographie, Multimédia, Programmation etc avec un accent sur un bonne application.",
    logo: "/placeholder.svg",
    address: "45 Boulevard du Commerce, 20000 Casablanca",
    contact: {
      phone: "+212 664-402051",
      email: "info@bestinstitut.com",
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
        id: "prog-2-1",
        parcours: "Master Europeen",
        name: "Management International",
        description: "Formation complète en gestion d'entreprise dans un contexte mondial.",
        duration: "5 ans",
        category: "Commerce",
       cycle: "Master"
      },
      {
        id: "prog-2-2",
        parcours: "Master Europeen",
        name: "Marketing Digital",
        description: "Spécialisation dans les stratégies marketing en ligne et l'analyse de données.",
        duration: "5 ans",
        category: "Commerce",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-2-3",
        parcours: "Master Europeen",
        name: "Finance d'Entreprise",
        description: "Programme axé sur la gestion financière et l'investissement international.",
        duration: "5 ans",
        category: "Commerce",
        cycle: "Licence"
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
        name: "Design Graphique",
        description: "Formation aux techniques de communication visuelle et design d'interface.",
        duration: "5 ans",
        category: "Arts",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-3-2",
         parcours: "Technicien Spécialisé",
        name: "Animation 3D",
        description: "Apprentissage des logiciels et techniques d'animation numérique.",
        duration: "5 ans",
        category: "Arts",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-3-3",
         parcours: "Technicien Spécialisé",
        name: "Photographie Artistique",
        description: "Développement d'une pratique photographique professionnelle et artistique.",
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
        duration: "5 ans",
        category: "Sciences",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-4-2",
         parcours: "Technicien Spécialisé",
        name: "Sciences Environnementales",
        description: "Programme axé sur l'étude des écosystèmes et le développement durable.",
        duration: "5 ans",
        category: "Sciences",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-4-3",
         parcours: "Technicien Spécialisé",
        name: "Physique Appliquée",
        description: "Formation en physique avec applications dans divers domaines industriels.",
        duration: "2 ans",
        category: "Sciences",
        cycle: "Master"
      }
    ]
  }
];
