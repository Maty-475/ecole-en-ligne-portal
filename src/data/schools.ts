
export interface Program {
  id: string;
  name: string;
  description: string;
  duration: string;
  category: string;
  cycle: string; // Ajout du cycle au programme
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
  "Commerce",
  "Arts",
  "Sciences",
  "Ingénierie",
  "Santé",
  "Langues",
  "Droit"
];

export const cycles = [
  "Cycle Initial",
  "Cycle Supérieur",
  "Classes Préparatoires",
  "Master",
  "Doctorat"
];

export const schools: School[] = [
  {
    id: "ecole-1",
    name: "Institut Supérieur de Technologie",
    description: "Un établissement d'excellence dédié à l'enseignement technologique avec des programmes innovants et des partenariats industriels.",
    logo: "/placeholder.svg",
    address: "123 Avenue de la Technologie, 75001 Paris",
    contact: {
      phone: "+33 1 23 45 67 89",
      email: "contact@ist-paris.fr",
      website: "www.ist-paris.fr"
    },
    registrationInfo: {
      deadline: "30 juin 2025",
      requirements: [
        "Baccalauréat scientifique ou technologique",
        "Lettre de motivation",
        "Entretien de sélection"
      ],
      fees: "5000€ par an",
      process: "Inscription en ligne suivie d'un entretien et d'un test d'aptitude."
    },
    programs: [
      {
        id: "prog-1-1",
        name: "Génie Informatique",
        description: "Formation complète en développement logiciel, cybersécurité et réseaux.",
        duration: "3 ans",
        category: "Informatique",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-1-2",
        name: "Électronique Embarquée",
        description: "Spécialisation dans la conception et programmation de systèmes embarqués.",
        duration: "3 ans",
        category: "Ingénierie",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-1-3",
        name: "Intelligence Artificielle",
        description: "Programme avancé en data science et développement d'algorithmes d'IA.",
        duration: "2 ans",
        category: "Informatique",
        cycle: "Cycle Supérieur"
      }
    ]
  },
  {
    id: "ecole-2",
    name: "École de Commerce International",
    description: "Formation d'excellence en commerce, management et marketing international avec un accent sur les langues étrangères.",
    logo: "/placeholder.svg",
    address: "45 Boulevard du Commerce, 69002 Lyon",
    contact: {
      phone: "+33 4 56 78 90 12",
      email: "info@eci-lyon.fr",
      website: "www.eci-lyon.fr"
    },
    registrationInfo: {
      deadline: "15 mai 2025",
      requirements: [
        "Baccalauréat général ou technologique",
        "Niveau B2 en anglais minimum",
        "Dossier de candidature complet"
      ],
      fees: "7500€ par an",
      process: "Dossier de candidature, tests écrits et entretien de motivation."
    },
    programs: [
      {
        id: "prog-2-1",
        name: "Management International",
        description: "Formation complète en gestion d'entreprise dans un contexte mondial.",
        duration: "3 ans",
        category: "Commerce",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-2-2",
        name: "Marketing Digital",
        description: "Spécialisation dans les stratégies marketing en ligne et l'analyse de données.",
        duration: "3 ans",
        category: "Commerce",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-2-3",
        name: "Finance d'Entreprise",
        description: "Programme axé sur la gestion financière et l'investissement international.",
        duration: "2 ans",
        category: "Commerce",
        cycle: "Cycle Supérieur"
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
        name: "Design Graphique",
        description: "Formation aux techniques de communication visuelle et design d'interface.",
        duration: "3 ans",
        category: "Arts",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-3-2",
        name: "Animation 3D",
        description: "Apprentissage des logiciels et techniques d'animation numérique.",
        duration: "3 ans",
        category: "Arts",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-3-3",
        name: "Photographie Artistique",
        description: "Développement d'une pratique photographique professionnelle et artistique.",
        duration: "2 ans",
        category: "Arts",
        cycle: "Classes Préparatoires"
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
        name: "Biologie Moléculaire",
        description: "Formation approfondie sur l'étude des mécanismes biologiques à l'échelle moléculaire.",
        duration: "3 ans",
        category: "Sciences",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-4-2",
        name: "Sciences Environnementales",
        description: "Programme axé sur l'étude des écosystèmes et le développement durable.",
        duration: "3 ans",
        category: "Sciences",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-4-3",
        name: "Physique Appliquée",
        description: "Formation en physique avec applications dans divers domaines industriels.",
        duration: "2 ans",
        category: "Sciences",
        cycle: "Master"
      }
    ]
  }
];
