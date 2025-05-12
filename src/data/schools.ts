
export interface Program {
  id: string;
  name: string;
  description: string;
  duration: string;
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
        duration: "3 ans"
      },
      {
        id: "prog-1-2",
        name: "Électronique Embarquée",
        description: "Spécialisation dans la conception et programmation de systèmes embarqués.",
        duration: "3 ans"
      },
      {
        id: "prog-1-3",
        name: "Intelligence Artificielle",
        description: "Programme avancé en data science et développement d'algorithmes d'IA.",
        duration: "2 ans (Master)"
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
        duration: "3 ans"
      },
      {
        id: "prog-2-2",
        name: "Marketing Digital",
        description: "Spécialisation dans les stratégies marketing en ligne et l'analyse de données.",
        duration: "3 ans"
      },
      {
        id: "prog-2-3",
        name: "Finance d'Entreprise",
        description: "Programme axé sur la gestion financière et l'investissement international.",
        duration: "3 ans"
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
        duration: "3 ans"
      },
      {
        id: "prog-3-2",
        name: "Animation 3D",
        description: "Apprentissage des logiciels et techniques d'animation numérique.",
        duration: "3 ans"
      },
      {
        id: "prog-3-3",
        name: "Photographie Artistique",
        description: "Développement d'une pratique photographique professionnelle et artistique.",
        duration: "2 ans"
      }
    ]
  }
];
