export interface Program {
  id: string;
  parcours: string;
  name: string;
  description: string;
  debouche: string;
  duration: string;
  category: string;
  cycle: string;
  registrationInfo?: {
    process: string;
    requirements: string[];
    deadline: string;
    fees: string;
  };
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
  video?: string;
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
    logo: "../Images/Miage/images.jpeg",
    address: "64, Rue Allal Ben Abdellah 20000 Casablanca",
    video: "https://www.youtube.com/watch?v=vov6mA_YcyU",
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
        parcours: "Technicien",
        name: "Gestion Informatisée",
        description: "Initiation aux outils informatiques de gestion pour assurer la bonne tenue des opérations administratives et comptables.",
        debouche: "assistant administratif, opérateur de saisie, agent de gestion informatisée.",
        duration: "2 ans",
        category: "Gestion Informatisée",
        cycle: "Technicien",
        registrationInfo: {
          deadline: "15 Septembre 2025",
          requirements: [
            "Diplôme de niveau bac",
            "4 Photos d'identité",
            "Extrait de naissance",
            "Copie de la CIN"
          ],
          fees: "15 000 DH / an",
          process: "Dossier de candidature et entretien de motivation"
        }
      },
      {
        id: "prog-1-2",
        parcours: "Technicien Spécialisé",
        name: "Finance et Comptable",
        description: "Ce programme permet d'acquérir des compétences solides en gestion financière, analyse comptable, fiscalité et audit pour travailler efficacement dans divers environnements financiers.",
        debouche: "comptable, assistant financier, auditeur junior, gestionnaire de paie.",
        duration: "2 ans",
        category: "Gestion Comptable",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-1-3",
        parcours: "Technicien Spécialisé",
        name: "Développement Informatique",
        description: "Formation complète en programmation, bases de données, génie logiciel et création de sites web et applications interactives.",
        debouche: "développeur web, développeur logiciel, analyste programmeur, intégrateur front-end.",
        duration: "2 ans",
        category: "Informatique",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-1-4",
        parcours: "Technicien Spécialisé",
        name: "Systèmes et Réseaux Informatique",
        description: "Apprentissage approfondi de la gestion des réseaux, de la sécurité informatique et de l’administration système.",
        debouche: "administrateur réseau, technicien systèmes, support IT, spécialiste cybersécurité junior.",
        duration: "2 ans",
        category: "Informatique",
        cycle: "Cycle Initial"
      },     
      {
        id: "prog-1-5",
        parcours: "Licence Professionnelle",
        name: "Informatique (Développement BD, Web, Réseaux et Sécurité)",
        description: "Maîtrise des environnements de développement informatique, systèmes, réseaux et sécurité pour répondre aux besoins des entreprises.",
        debouche: "développeur full stack, administrateur systèmes et réseaux, ingénieur sécurité junior.",
        duration: "3 ans",
        category: "Informatique",
        cycle: "Licence",
        registrationInfo: {
          deadline: "31 Août 2025",
          requirements: [
            "Baccalauréat scientifique ou technique",
            "Dossier académique",
            "Lettre de motivation",
            "2 lettres de recommandation",
            "5 Photos d'identité récentes"
          ],
          fees: "Contactez l'école",
          process: "Dossier de candidature, test d'aptitude et entretien technique"
        }
      },
      {
        id: "prog-1-6",
        parcours: "Licence Professionnelle",
        name: "Management et Gestion de PME",
        description: "Préparation aux fonctions clés de gestion, comptabilité, stratégie et développement des PME.",
        debouche: "manager de PME, chargé d'affaires, chef de projet, assistant de direction.",
        duration: "3 ans",
        category: "Gestion d'Entreprise",
        cycle: "Licence"
      },
      {
        id: "prog-1-7",
        parcours: "Licence Professionnelle",
        name: "Marketing Finance et Ressources Humaines",
        description: "Formation hybride intégrant les bases du marketing, des finances et de la gestion RH pour des fonctions transversales.",
        debouche: "responsable RH, chargé marketing RH, conseiller en organisation.",
        duration: "3 ans",
        category: "Gestion des Ressources Humaines",
        cycle: "Licence"
      },
      {
        id: "prog-1-8",
        parcours: "Licence Professionnelle",
        name: "Transport et Logistique",
        description: "Maîtrise des méthodes logistiques, de gestion des flux et de la chaîne d'approvisionnement.",
        debouche: "responsable logistique, planificateur transport, gestionnaire des flux.",
        duration: "3 ans",
        category: "Logistique",
        cycle: "Licence"
      },
      {
        id: "prog-1-9",
        parcours: "Master Europeen",
        name: "Management et Stratégie d'Entreprise (ME MSE)",
        description: "Préparation à la gestion stratégique, à la conduite du changement et au pilotage d’entreprise à haut niveau.",
        debouche: "directeur de stratégie, consultant en organisation, chef d'entreprise.",
        duration: "5 ans",
        category: "Gestion d'Entreprise",
        cycle: "Master"
      },
      {
        id: "prog-1-10",
        parcours: "Master Europeen",
        name: "Management et Stratégie Financière (ME MSF)",
        description: "Approfondissement des outils financiers pour piloter la performance et maîtriser les risques d’entreprise.",
        debouche: "directeur financier, auditeur, analyste financier, contrôleur de gestion.",
        duration: "5 ans",
        category: "Gestion Financière",
        cycle: "Master"
      },
      {
        id: "prog-1-11",
        parcours: "Master Europeen",
        name: "Management des Ressources Humaines (ME MRH)",
        description: "Formation au pilotage des talents, à la stratégie RH et au dialogue social dans l’entreprise.",
        debouche: "responsable RH, gestionnaire de carrières, consultant RH.",
        duration: "5 ans",
        category: "Gestion des Ressources Humaines",
        cycle: "Master"
      },
      {
        id: "prog-1-12",
        parcours: "Master Europeen",
        name: "Logistique (ME LOG)",
        description: "Gestion avancée de la chaîne logistique, des stocks, du transport et des outils numériques logistiques.",
        debouche: "supply chain manager, responsable entrepôt, coordinateur logistique.",
        duration: "5 ans",
        category: "Logistique",
        cycle: "Master"
      },
      {
        id: "prog-1-13",
        parcours: "Master Europeen",
        name: "Management Digital (ME MD)",
        description: "Formation stratégique au pilotage de la transformation digitale, CRM, e-commerce et outils web innovants.",
        debouche: "chef de projet digital, responsable e-commerce, consultant numérique.",
        duration: "5 ans",
        category: "Informatique",
        cycle: "Master"
      },
      {
        id: "prog-1-14",
        parcours: "Master Europeen",
        name: "Management Environnemental et Énergétique (ME MEE)",
        description: "Acquisition de compétences en gestion durable, normes environnementales et transition énergétique.",
        debouche: "consultant environnement, responsable développement durable, chef de projet énergies renouvelables.",
        duration: "5 ans",
        category: "Environnement et Energie",
        cycle: "Master"
      },
      {
        id: "prog-1-15",
        parcours: "Master Europeen",
        name: "Communication et Marketing Numérique (ME CMN)",
        description: "Maîtrise des outils numériques, communication digitale et campagnes marketing multicanal.",
        debouche: "community manager, chef de projet marketing digital, responsable communication web.",
        duration: "5 ans",
        category: "Marketing Digital",
        cycle: "Master"
      },
      {
        id: "prog-1-16",
        parcours: "Master Europeen",
        name: "Informatique (ME INFO)",
        description: "Approche complète du développement, systèmes, cybersécurité et bases de données en entreprise.",
        debouche: "ingénieur logiciel, administrateur système, expert cybersécurité.",
        duration: "5 ans",
        category: "Informatique",
        cycle: "Master"
      },
      {
        id: "prog-1-17",
        parcours: "Master Europeen",
        name: "Expert IT Applications Intelligentes et Big Data (ME EIT-AIBD)",
        description: "Spécialisation dans les domaines de l’intelligence artificielle, du big data et des technologies émergentes.",
        debouche: "data analyst, ingénieur IA, expert big data, architecte cloud.",
        duration: "5 ans",
        category: "Cyber Sécurité",
        cycle: "Master"
      },
      {
        id: "prog-1-18",
        parcours: "Master Europeen",
        name: "Juriste d’entreprise (ME-JE)",
        description: "Formation juridique orientée entreprise : droit des affaires, contrats, fiscalité et conformité.",
        debouche: "juriste d’entreprise, conseiller juridique, responsable conformité.",
        duration: "5 ans",
        category: "Droit",
        cycle: "Master"
      },
      {
        id: "prog-1-19",
        parcours: "Master Europeen",
        name: "Banque privée internationale (ME-BPI)",
        description: "Expertise en gestion de patrimoine, placements internationaux et conseil financier personnalisé.",
        debouche: "conseiller clientèle privée, gestionnaire de portefeuille, analyste financier.",
        duration: "5 ans",
        category: "Banque et Assurance",
        cycle: "Master"
      },
      {
        id: "prog-1-20",
        parcours: "Master Europeen",
        name: "Communication-publicité (ME-PUB)",
        description: "Création publicitaire, stratégie de marque, campagnes média et marketing créatif.",
        debouche: "concepteur-rédacteur, chargé de communication, chef de publicité.",
        duration: "5 ans",
        category: "Communication",
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
    video: "https://www.youtube.com/embed/G9TdA8d5aaU",
    contact: {
      phone: "+212 522-541547",
      email: "contact@bestinstitut.com",
      website: "bestinstitut.com"
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
        parcours: "Technicien",
        name: "🖥️ Technicien en  Action Commerciale et Marketing",
        description: "Ce programme forme des professionnels capables de participer à la mise en œuvre des actions commerciales et marketing d’une entreprise. Il couvre les techniques de vente, la prospection, la gestion de la relation client, l’analyse de marché et la promotion des produits/services.",
        debouche: "Commercial, assistant marketing, chargé de prospection, conseiller clientèle, responsable de rayon, télévendeur.",
        duration: "2 ans",
        category: "Commerce",
        cycle: "Technicien"
      },
      {
        id: "prog-2-2",
        parcours: "Technicien",
        name: "🖥️ Technicien en Infographie",
        description: "Cette formation vise à développer les compétences techniques et créatives des étudiants dans les domaines du graphisme, de la mise en page, de la retouche photo et de la création visuelle pour les supports imprimés et numériques. Les apprenants maîtrisent les logiciels professionnels comme Photoshop, Illustrator et InDesign, ainsi que les bases du design web.",
        debouche: "Infographiste, maquettiste, illustrateur digital, designer graphique, opérateur PAO.",
        duration: "2 ans",
        category: "Infographie",
        cycle: "Technicien"
      },
      {
        id: "prog-2-3",
        parcours: "Technicien",
        name: "🖥️ Technicien en gestion informatisée",
        description: "Cette formation polyvalente combine informatique de gestion, bases de données et outils bureautiques. Elle prépare à gérer les systèmes d’information d’une entreprise.",
        debouche: "Technicien informatique, gestionnaire de base de données, assistant ERP.",
        duration: "2 ans",
        category: "Gestion Informatisée",
        cycle: "Technicien"
      },
      {
        id: "prog-2-4",
        parcours: "Technicien spécialisé",
        name: "💻 Technicien spécialisé développement Multimédia",
        description: "Axé sur le web et le digital, ce cursus permet d’acquérir des compétences en création de contenus interactifs (sites web, animations, vidéos), en design graphique et en développement front-end.",
        debouche : "développeur multimédia, intégrateur web, designer UX/UI, animateur digital.",
        duration: "2 ans",
        category: "Multimédia",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-2-5",
        parcours: "Technicien spécialisé",
        name: "🌍 Technicien spécialisé commerce international",
        description: "Ce programme prépare les étudiants aux opérations d’import-export, à la logistique internationale, à la négociation interculturelle et au droit du commerce international.",
        debouche : "assistant import-export, agent commercial international, logisticien, technicien douanier.",        
        duration: "2 ans",
        category: "Commerce",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-2-6",
        parcours: "Technicien spécialisé",
        name: "🔧 Technicien spécialisé finance et comptabilité",
        description: "Cette formation forme des professionnels capables de gérer les opérations comptables, fiscales et financières d’une entreprise. Elle développe des compétences en analyse financière, en gestion budgétaire et en utilisation des logiciels comptables.",
        debouche: "Comptable, assistant financier, technicien comptable, gestionnaire de paie.",
        duration: "2 ans",
        category: "Comptabilité",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-2-7",
        parcours: "Bachelor Européen",
        name: "🎓 Multimédia et Technologies du Web",
        description: "Cette formation prépare les étudiants aux métiers du numérique, du design interactif et du développement web. Elle couvre le développement front-end et back-end, l’UX/UI design, la gestion de projets web et la création de contenus multimédias.",
        debouche: "Développeur web, webdesigner, intégrateur multimédia, UX/UI designer, chef de projet digital",
        duration: "3 ans",
        category: "Informatique",
        cycle: "Bachelor",
        registrationInfo: {
          deadline: "15 Octobre 2025",
          requirements: [
            "Baccalauréat ou diplôme équivalent",
            "Portfolio de créations numériques",
            "Entretien de motivation",
            "4 Photos d'identité"
          ],
          fees: "38 000 DH / an",
          process: "Étude du dossier, test technique et entretien de motivation"
        }
      },
      {
        id: "prog-2-8",
        parcours: "Bachelor Européen",
        name: "🎓 Management des Organisations",
        description: "Ce programme forme les futurs managers aux méthodes de gestion d'entreprise, aux techniques de leadership, à la stratégie d'entreprise et aux ressources humaines. Il met l’accent sur l’analyse, la prise de décision et le pilotage d’équipes.",
        debouche: "Assistant manager, chef de projet, responsable de service, coordinateur d’équipe, adjoint de direction.",
        duration: "3 ans",
        category: "Management & Gestion",
        cycle: "Bachelor"
      },
      {
        id: "prog-2-9",
        parcours: "Bachelor Européen",
        name: "🎓 Technique Comptable et Financière",
        description: "Parfait pour les créatifs orientés business, ce Bachelor allie stratégie de communication et maîtrise des outils numériques (SEO, réseaux sociaux, content marketing).",
        debouche: "Comptable, assistant financier, contrôleur de gestion, analyste financier, technicien comptable.",
        duration: "3 ans",
        category: "Finances",
        cycle: "Bachelor"
      },
      {
        id: "prog-2-10",
        parcours: "Bachelor Européen",
        name: "🎓 Marketing et Communication",
        description: "Cette formation prépare aux métiers du marketing digital, de la communication d’entreprise et de la publicité. Elle aborde les stratégies de communication, l’étude de marché, le marketing opérationnel, le community management et le branding.",
        debouche: "Chargé de communication, chef de produit, responsable marketing, community manager, chargé d’études marketing.",
        duration: "3 ans",
        category: "Marketing",
        cycle: "Bachelor"
      },
      {
        id: "prog-2-11",
        parcours: "Bachelor Européen",
        name: "🎓 Ressources Humaines",
        description: "Le Bachelor RH forme à la gestion du personnel, au recrutement, à la formation, au droit du travail et à la gestion des carrières. Il prépare les étudiants aux métiers des RH dans un environnement digitalisé et en mutation constante.",
        debouche: "Assistant RH, chargé de recrutement, gestionnaire de paie, chargé de formation, coordinateur RH",
        duration: "3 ans",
        category: "Ressources Humaines",
        cycle: "Bachelor"
      },
      {
        id: "prog-2-12",
        parcours: "Bachelor Européen",
        name: "🎓 Ingénierie Systèmes, Réseaux et Sécurité",
        description: "Cette formation forme des experts capables de concevoir, administrer et sécuriser des infrastructures informatiques complexes. Elle couvre les systèmes d’exploitation, les architectures réseaux, la cybersécurité, la virtualisation et le cloud computing. Les étudiants apprennent à mettre en œuvre des politiques de sécurité, surveiller les flux réseau, et garantir la disponibilité des services informatiques.",
        debouche: "Administrateur systèmes et réseaux, ingénieur cybersécurité, architecte réseau, consultant en sécurité informatique, responsable infrastructure.",
        duration: "3 ans",
        category: "Ingénierie",
        cycle: "Ingénierie"
      },
      {
        id: "prog-2-13",
        parcours: "Bachelor Européen",
        name: "🎓 Ingénierie des Applications Mobiles",
        description: "Ce programme est dédié à la conception et au développement d’applications mobiles performantes et ergonomiques sur Android et iOS. Il englobe l’analyse des besoins, le design d’interface (UX/UI), le codage natif et hybride, ainsi que la publication sur les stores. La formation inclut aussi les notions de responsive design, sécurité mobile et gestion de bases de données embarquées.",
        debouche: "Développeur mobile, concepteur d'applications, ingénieur logiciel mobile, testeur mobile, chef de projet mobile.",
        duration: "3 ans",
        category: "Ingénierie",
        cycle: "Ingénierie"
      },
      {
        id: "prog-2-14",
        parcours: "Bachelor Européen",
        name: "🎓 Ingénierie de Conception et Développement d’Applications",
        description: "Cette formation complète permet de maîtriser les langages de programmation (Java, C#, Python, etc.), les frameworks (Angular, .NET, Spring…), les bases de données, et les architectures logicielles (MVC, microservices). Elle prépare à la conception, au développement et au déploiement d’applications web, desktop et cloud.",
        debouche: "Développeur full-stack, ingénieur logiciel, analyste programmeur, architecte logiciel, chef de projet technique.",
        duration: "3 ans",
        category: "Ingénierie",
        cycle: "Ingénierie"
      }
    ]
  },
  {
    id: "Ecole-des-Declarants-Douane",
    name: "Ecole des Déclaration en Douane",
    description: "L’EDD propose ainsi des programmes diversifiés et adaptés aux attentes des entreprises nationales et internationales, dans ces secteurs.",
    logo: "../Images/Edd/EDD.jpg",
    address: "30 Avenue des FAR 4éme étage (en dessus de PIZZA HUT) CASABLANCA – MAROC",
    video: "https://www.youtube.com/embed/elA-1SogEAY",
    contact: {
      phone: "+212 522-484751",
      email: "contact@edd.ma",
      website: "edd.ma"
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
      fees: "Voir le site officiel",
      process: "L’inscription n’est considéré valider qu’après se présenter en personne à EDD dans le délai de 2 jours pour la confirmation définitive et dans la limite des places disponibles."
    },
    programs: [
      {
        id: "prog-3-1",
        parcours: "Technicien",
        name: "🧾 Technicien Déclarant en Douane",
        description: "Formation axée sur la réglementation douanière, les techniques de dédouanement, la nomenclature tarifaire, la fiscalité douanière et la gestion des documents de transit.",
        debouche: "Déclarant en douane, agent de transit, assistant logistique, responsable d’expédition, gestionnaire import/export.",
        duration: "2 ans",
        category: "Douane",
        cycle: "Technicien"
      },
      {
        id: "prog-3-2",
        parcours: "Technicien Spécialisé",
        name: "🚚 Technicien Spécialisé en Gestion de Transport et Logistique",
        description: "Développe des compétences en planification du transport, optimisation des flux, gestion d’entrepôt et utilisation de logiciels spécialisés en logistique.",
        debouche: "Planificateur de transport, gestionnaire de stock, technicien logistique, agent d’exploitation, coordinateur supply chain.",
        duration: "2 ans",
        category: "Transport et Logistique",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-3-3",
        parcours: "Licence Professionnelle",
        name: "🎓 Licence Professionnelle en Transport et Logistique",
        description: "Cette formation initie aux techniques de prise de vue, au traitement de l’image, à la composition visuelle et à la narration photographique. Elle allie pratique artistique et compétences techniques en photographie numérique et argentique.",
        debouche: "Responsable logistique, superviseur transport, coordinateur logistique, chef d’équipe entrepôt.",
        duration: "3 ans",
        category: "Transport et Logistique",
        cycle: "Licence"
      },
      {
        id: "prog-3-4",
        parcours: "Master Européen",
        name: "🏗️ Master en Logistique",
        description: "Formation stratégique et managériale sur la logistique globale, les systèmes ERP, la digitalisation de la chaîne d’approvisionnement et les pratiques durables.",
        debouche: "Directeur logistique, consultant supply chain, chef de projet logistique, responsable des achats.",
        duration: "5 ans",
        category: "Transport et Logistique",
        cycle: "Master"
      },
      {
        id: "prog-3-5",
        parcours: "Formation Professionnelle",
        name: "🏢 Formation en Entreprise (Transport & Logistique)",
        description: "Centrée sur la pratique, elle permet aux salariés ou apprentis d’acquérir rapidement des compétences concrètes sur le terrain en environnement professionnel.",
        debouche: "Assistant logistique, gestionnaire de stock, agent de planning, opérateur logistique.",
        duration: "1 an",
        category: "Transport et Logistique",
        cycle: "Formation"
      },
      {
        id: "prog-3-6",
        parcours: "Formation Continue",
        name: "📜 Formation Continue : Déclarant en Douane",
        description: "Permet aux professionnels d’actualiser ou approfondir leurs compétences en législation douanière, conformité réglementaire et opérations internationales",
        debouche: "Déclarant en douane senior, expert en transit, conseiller douanier, responsable conformité import/export.",
        duration: "1 an",
        category: "Douane",
        cycle: "Formation"
      }
    ]
  },
  {
    id: "IBEGIS",
    name: "IBEGIS Ecole de Commerce et de Gestion",
    description: "l’Ecole IBEGIS s'est spécialisée dans des formations pour les métiers d'avenir. Nous assurons un suivi embauche des lauréats grâce à un réseau de plus de 70 entreprises partenaires. Notre mission est d'accompagner ceux qui veulent réussir.",
    logo: "../Images/Ibegis/ibegis.png",
    address: "66, allée des Sophoras, Ain Sebaâ 20350 Casablanca",
    video: "https://www.youtube.com/watch",
    contact: {
      phone: "+212 662-083646",
      email: "contact@ibegis.ma",
      website: "ibegis.ma"
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
      fees: "Prennez contacte avec l'Ecole",
      process: "Dossier académique et entretien de motivation."
    },
    programs: [
      {
        id: "prog-4-1",
        parcours: "Technicien",
        name: "📑 Technicien Assistant en Gestion Administrative et Comptable",
        description: "Formation sur la gestion quotidienne d’une entreprise : comptabilité, bureautique, suivi administratif et gestion documentaire.",
        debouche: "Assistant comptable, agent administratif, aide-comptable, gestionnaire de dossiers.",
        duration: "2 ans",
        category: "Gestion Comptable",
        cycle: "Technicien"
      },
      {
        id: "prog-4-2",
        parcours: "Technicien",
        name: "💻 Technicien en Gestion Informatisée",
        description: "Apprend la digitalisation des tâches administratives, la gestion des bases de données et l’utilisation de logiciels professionnels.",
        debouche: "Opérateur de saisie, assistant informatique, technicien support, gestionnaire de fichiers clients.",
        duration: "2 ans",
        category: "Gestion Informatisée",
        cycle: "Technicien"
      },
      {
        id: "prog-4-3",
        parcours: "Technicien",
        name: "🎨 Technicien Infographiste",
        description: "Formation axée sur la création visuelle, la retouche photo, la mise en page, l’édition numérique et les outils Adobe.",
        debouche: "Infographiste, maquettiste, web designer junior, illustrateur digital.",
        duration: "2 ans",
        category: "Infographie",
        cycle: "Technicien"
      },
      {
        id: "prog-4-4",
        parcours: "Technicien",
        name: "📈 Technicien en Action Commerciale et Marketing",
        description: "Développe des compétences commerciales, en techniques de vente, communication marketing et gestion client.",
        debouche: "Assistant marketing, commercial terrain, chargé de prospection, télévendeur",
        duration: "2 ans",
        category: "Commerce",
        cycle: "Technicien"
      },
      {
        id: "prog-4-5",
        parcours: "Technicien Spécialisé",
        name: "💰 Technicien Spécialisé Financier Comptable",
        description: "Maîtrise des outils de gestion comptable, des normes fiscales, des logiciels spécialisés et des déclarations financières.",
        debouche: "Comptable, assistant financier, responsable facturation, analyste junior.",
        duration: "5 ans",
        category: "Gestion Comptable",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-4-6",
        parcours: "Technicien Spécialisé",
        name: "🌍 Technicien Spécialisé en Commerce International",
        description: "Formation aux opérations d’import-export, négociation à l’international, incoterms et douane.",
        debouche: "Agent commercial export, assistant import/export, responsable clientèle internationale.",
        duration: "2 ans",
        category: "Commerce",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-4-7",
        parcours: "Technicien Spécialisé",
        name: "👨‍💻 Technicien Spécialisé en Développement Informatique",
        description: "Apprentissage des langages de programmation, création d’applications, conception de bases de données.",
        debouche: "Développeur junior, testeur logiciel, assistant chef de projet IT, intégrateur web.",
        duration: "2 ans",
        category: "Informatique",
        cycle: "Cycle Initial"
      },
      {
        id: "prog-4-8",
        parcours: "Licence Professionnelle",
        name: "🏢 Licence Pro en Management et Gestion des Entreprises",
        description: "Forme aux fondements du management, gestion budgétaire, droit des affaires et stratégie.",
        debouche: "Manager de service, assistant de direction, chef d'équipe opérationnel.",
        duration: "3 ans",
        category: "Management & Gestion",
        cycle: "Licence"
      },
      {
        id: "prog-4-9",
        parcours: "Licence Professionnelle",
        name: "💹 Licence Pro en Finance",
        description: "Expertise en gestion financière, analyse financière, investissements, et contrôle de gestion",
        debouche: "Analyste financier, gestionnaire de portefeuille, assistant contrôleur de gestion",
        duration: "3 ans",
        category: "Finances",
        cycle: "Licence"
      },
      {
        id: "prog-4-10",
        parcours: "Licence Professionnelle",
        name: "👥 Licence Pro en Ressources Humaines",
        description: "Maîtrise du recrutement, droit social, gestion des carrières et paie.",
        debouche: "Chargé RH, gestionnaire de paie, assistant en développement RH.",
        duration: "3 ans",
        category: "Ressources Humaines",
        cycle: "Licence"
      },
      {
        id: "prog-4-11",
        parcours: "Licence Professionnelle",
        name: "📱 Licence Pro en Développement d’Applications Mobiles",
        description: "Apprend le développement sur iOS/Android, UX mobile, tests et publication sur stores",
        debouche: "Développeur mobile, testeur applicatif, intégrateur mobile.",
        duration: "3 ans",
        category: "Informatique",
        cycle: "Licence"
      },
      {
        id: "prog-4-12",
        parcours: "Licence Professionnelle",
        name: "📢 Licence Pro en Marketing Digital",
        description: "Focus sur le SEO, SEA, réseaux sociaux, emailing, et stratégie digitale.",
        debouche: "Community manager, webmarketeur, chargé de communication digitale.",
        duration: "3 ans",
        category: "Marketing",
        cycle: "Licence"
      },
      {
        id: "prog-4-13",
        parcours: "Licence Professionnelle",
        name: "🖧 Licence Pro en Informatique Réseau et Sécurité",
        description: "Formation à la gestion de réseaux, cybersécurité, systèmes et protocoles sécurisés.",
        debouche: "Administrateur réseau, technicien sécurité IT, support systèmes.",
        duration: "3 ans",
        category: "Sécurité Informatique",
        cycle: "Licence"
      },
      {
        id: "prog-4-14",
        parcours: "Licence Professionnelle",
        name: "🚛 Licence Pro Logistique et Supply Chain",
        description: "Gestion des flux, achats, entrepôts, outils ERP et optimisation logistique",
        debouche: "Coordinateur supply chain, gestionnaire logistique, superviseur entrepôt.",
        duration: "3 ans",
        category: "Logistique",
        cycle: "Licence"
      },
      {
        id: "prog-4-15",
        parcours: "Licence Professionnelle",
        name: "🗣️ Licence Pro en Communication",
        description: "Stratégies de communication, relation presse, médias et rédaction professionnelle.",
        debouche: "Chargé de com’, attaché de presse, assistant relations publiques.",
        duration: "3 ans",
        category: "Communication",
        cycle: "Licence"
      },
      {
        id: "prog-4-16",
        parcours: "Master Européen",
        name: "Management et Stratégie d'Entreprise (ME MSE)",
        description: "Préparation à la gestion stratégique, à la conduite du changement et au pilotage d’entreprise à haut niveau.",
        debouche: "directeur de stratégie, consultant en organisation, chef d'entreprise.",
        duration: "5 ans",
        category: "Management & Gestion",
        cycle: "Master"
      },
      {
        id: "prog-4-17",
        parcours: "Master Européen",
        name: "Management Digital (ME MD)",
        description: "Formation centrée sur la transformation numérique, les stratégies digitales et la gouvernance IT dans les entreprises modernes.",
        debouche: "chief digital officer, responsable digital, consultant e-business.",
        duration: "5 ans",
        category: "Digital",
        cycle: "Master"
      },
      {
        id: "prog-4-18",
        parcours: "Master Européen",
        name: "Communication Stratégique et Publicité Numérique (ME CSPN)",
        description: "Développement de stratégies de communication avancées, publicité digitale et création de campagnes performantes.",
        debouche: "responsable communication, média planner, directeur artistique.",
        duration: "5 ans",
        category: "Communication",
        cycle: "Master"
      },
      {
        id: "prog-4-19",
        parcours: "Master Européen",
        name: "Management de Projet Informatique (ME MPI)",
        description: "Maîtrise de la gestion de projets IT, développement logiciel, encadrement d’équipes techniques et pilotage agile.",
        debouche: "chef de projet informatique, consultant digital, product owner.",
        duration: "5 ans",
        category: "Management Informatique",
        cycle: "Master"
      },
      {
        id: "prog-4-20",
        parcours: "Master Européen",
        name: "Management et Stratégie Financière (ME MSF)",
        description: "Formation axée sur la finance stratégique, l’analyse des risques, les décisions d’investissement et l’optimisation budgétaire.",
        debouche: "directeur financier, auditeur senior, analyste stratégique.",
        duration: "5 ans",
        category: "Finance",
        cycle: "Master"
      },
      {
        id: "prog-4-21",
        parcours: "Master Européen",
        name: "Management et Ressources Humaines (ME MRH)",
        description: "Gestion du capital humain, politique RH, conduite du changement et développement organisationnel.",
        debouche: "responsable RH, gestionnaire des talents, consultant RH.",
        duration: "5 ans",
        category: "Ressources Humaines",
        cycle: "Master"
      },
      {
        id: "prog-4-22",
        parcours: "Master Européen",
        name: "Logistique et Supply Chain (ME LSC)",
        description: "Optimisation des flux logistiques, gestion de la chaîne d’approvisionnement et pilotage de plateformes internationales.",
        debouche: "directeur logistique, supply chain manager, consultant logistique.",
        duration: "5 ans",
        category: "Logistique",
        cycle: "Master"
      }
    ]
  }
];
