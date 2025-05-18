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
  "Arts",
  "Banque et Assurance",
  "Commerce",  
  "Communication",
  "Comptabilité",
  "Cyber Sécurité",
  "Douane",
  "Droit",
  "Economie",
  "Environnement et Energie",
  "Finances",
  "Gestion Comptable",  
  "Gestion d'Entreprise",
  "Gestion Financière",
  "Gestion Informatisée",
  "Infographie",
  "Informatique & Digital",
  "Informatique",
  "Ingénierie",
  "Langues",
  "Logistique",
  "Management & Gestion",
  "Management Informatique",
  "Marketing Digital",
  "Marketing",
  "Multimédia",
  "Réseaux et Télécommunications",
  "Ressources Humaines",
  "Santé",  
  "Sciences",
  "Sécurité Informatique",
  "Transport et Logistique"
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
    logo: "Images/images.jpeg", 
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
           "Formulaire de candidature en ligne dûment complété",
          "Baccalauréat original + copies certifiées conformes",
          "Relevés de notes du baccalauréat",
          "Copie de la carte d’identité ou passeport",
          "Curriculum vitæ (facultatif mais recommandé)",
          "Lettre de motivation précisant votre projet professionnel",
          "Frais de dossier",
          "Entretien de sélection avec le coordinateur pédagogique"
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

      /* ─────────────── Technicien Specialisé (Bac + 2) ─────────────── */
      {
        name: "Développement Informatique",
        description: "Prépare des développeurs polyvalents capables de concevoir, coder et maintenir des applications web, mobiles et desktop en respectant les bonnes pratiques de qualité logicielle.",
        category: "Informatique",
        parcours: "Technicien Spécialisé Développement",
        niveau: "Technicien Spécialisé",
        cycle: "Cycle Initial",
        duration: "2 ans",
        diploma: "Diplôme de Technicien Spécialisé en Développement Informatique",
        admissionRequirements: ["Baccalauréat scientifique ou technique", "Dossier de candidature", "Test logique & motivation", "Entretien"], objectives: ["Maîtriser les langages front-end et back-end", "Concevoir des bases de données", "Utiliser frameworks MVC & API REST", "Déployer et maintenir des applications"], skillsDeveloped: ["Programmation orientée objet", "Frameworks (Laravel, Spring, .NET)", "SQL / NoSQL", "Versioning (Git)", "Tests unitaires"], opportunities: ["Développeur full-stack", "Intégrateur web", "Testeur logiciel", "Assistant chef de projet IT"]
      },
      {
        name: "Systèmes & Réseaux Informatiques",
        description: "Forme des spécialistes capables de déployer, administrer et sécuriser des infrastructures réseau et des systèmes d’exploitation hétérogènes.",
        category: "Informatique",
        parcours: "Technicien Spécialisé Réseaux",
        niveau: "Technicien Spécialisé",
        cycle: "Cycle Initial",
        duration: "2 ans",
        diploma: "Diplôme de Technicien Spécialisé en Systèmes & Réseaux",
        admissionRequirements: ["Baccalauréat scientifique/technique", "Dossier + entretien", "Test réseau de base"], objectives: ["Installer et configurer serveurs Windows/Linux", "Déployer des réseaux LAN/WAN sécurisés", "Gérer AD, DNS, DHCP", "Mettre en place sauvegarde & cybersécurité"], skillsDeveloped: ["TCP/IP & routage", "Virtualisation", "Firewall & VLAN", "Monitoring réseau", "Scripts d’automatisation"], opportunities: ["Administrateur systèmes", "Technicien réseau", "Support IT N2", "Assistant ingénieur sécurité"]
      },
      {
        name: "Finance & Comptabilité",
        description: "Prépare des professionnels capables de tenir la comptabilité, de réaliser l’analyse financière et d’appuyer la gestion budgétaire d’une PME ou d’un cabinet comptable.",
        category: "Gestion Financière",
        parcours: "Technicien Spécialisé Finance-Comptabilité",
        niveau: "Technicien Spécialisé",
        cycle: "Cycle Initial",
        duration: "2 ans",
        diploma: "Diplôme de Technicien Spécialisé en Finance & Comptabilité",
        admissionRequirements: ["Bac économique ou scientifique", "Dossier scolaire", "Test de math financières", "Entretien"], objectives: ["Tenir la comptabilité générale et analytique", "Établir bilans et comptes de résultat", "Réaliser déclarations fiscales", "Assister contrôle de gestion"], skillsDeveloped: ["Plan comptable marocain & IFRS", "ERP (Sage…)", "Analyse financière", "Gestion de trésorerie", "Paie"], opportunities: ["Comptable", "Assistant financier", "Gestionnaire de paie", "Aide-contrôleur de gestion"]
      },

      /* ─────────────── Technicien (Bac + 2) ─────────────── */

      {
        name: "Infographiste",
        description: "Apprend à créer des supports visuels print et web, à maîtriser la chaîne graphique et à produire des contenus multimédias attractifs.",
        category: "Arts & Multimédia",
        parcours: "Technicien Infographiste",
        niveau: "Technicien",
        cycle: "Technicien",
        duration: "2 ans",
        diploma: "Diplôme de Technicien Infographiste",
        admissionRequirements: ["Baccalauréat toutes séries", "Portfolio ou test de dessin", "Entretien"], objectives: ["Maîtriser Photoshop, Illustrator, InDesign", "Réaliser mises en page print & web", "Gérer colorimétrie et impression", "Produire animations simples"], skillsDeveloped: ["Design graphique", "Typographie", "Retouche photo", "Maquettes UI", "Pré-presse"], opportunities: ["Graphiste", "Maquettiste PAO", "Webdesigner junior", "Assistant créatif"]
      },
      {
        name: "Gestion Informatisée",
        description: "Combine informatique de gestion, bureautique avancée et bases de données pour automatiser les processus administratifs d’une entreprise.",
        category: "Gestion Informatisée",
        parcours: "Technicien Gestion Informatisée",
        niveau: "Technicien",
        cycle: "Technicien",
        duration: "2 ans",
        diploma: "Diplôme de Technicien en Gestion Informatisée",
        admissionRequirements: ["Bac sciences économiques ou techniques", "Dossier + entretien"], objectives: ["Concevoir applications de gestion simples", "Administrer bases de données PME", "Automatiser tableaux de bord Excel", "Assurer support bureautique"], skillsDeveloped: ["Modélisation de données", "VBA/SQL de base", "ERP PME", "Dashboards avancés", "Support utilisateur"], opportunities: ["Technicien bureautique", "Assistant ERP", "Gestionnaire BD", "Support administratif IT"]
      },

  /* ─────────────── Bachelors Européens (Licence Professionnelle) ─────────────── */

      {
        name: "Transport & Logistique",
        description: "Couvre la planification des flux, la gestion d’entrepôt, le transport multimodal et la logistique durable afin d’optimiser la chaîne d’approvisionnement.",
        category: "Logistique",
        parcours: "Transport et Logistique",
        niveau: "Licence",
        cycle: "Bachelor européen",
        duration: "3 ans",
        diploma: "Bachelor Européen Transport & Logistique",
        admissionRequirements: ["Baccalauréat (toutes séries)", "Dossier académique", "Entretien de motivation"],
        objectives: ["Maîtriser les opérations de transport multimodal", "Gérer les stocks et les entrepôts", "Piloter la chaîne logistique à l’international", "Intégrer les pratiques de logistique verte"],
        skillsDeveloped: ["Gestion des flux", "Incoterms & douanes", "Outils WMS/TMS", "Planification & APS", "Lean logistics"],
        opportunities: ["Coordinateur logistique", "Agent d’exploitation transport", "Gestionnaire d’entrepôt", "Acheteur transport"]
      },
      {
        name: "Management & Gestion des PME",
        description: "Forme des cadres intermédiaires capables de gérer les fonctions clés (finance, marketing, RH) et d’accompagner la croissance des petites et moyennes entreprises.",
        category: "Gestion d’Entreprise",
        parcours: "Management des PME",
        niveau: "Licence",
        cycle: "Bachelor européen",
        duration: "3 ans",
        diploma: "Bachelor Européen Management & Gestion des PME",
        admissionRequirements: ["Baccalauréat économique ou scientifique", "Dossier + entretien"],
        objectives: ["Piloter la performance financière d’une PME", "Développer la stratégie marketing", "Superviser la gestion RH", "Assurer la conformité juridique"],
        skillsDeveloped: ["Tableaux de bord", "Marketing opérationnel", "Comptabilité PME", "RH de proximité", "Gestion de projet"],
        opportunities: ["Assistant manager", "Adjoint de direction", "Chef de projet PME", "Responsable administratif"]
      },
      {
        name: "Assistant de Gestion Ressources Humaines",
        description: "Prépare à la gestion administrative du personnel, au recrutement et à la formation dans des environnements digitaux et en mutation.",
        category: "Ressources Humaines",
        parcours: "Gestion RH",
        niveau: "Licence",
        cycle: "Bachelor européen",
        duration: "3 ans",
        diploma: "Bachelor Européen Assistant de Gestion RH",
        admissionRequirements: ["Baccalauréat", "Dossier", "Entretien"],
        objectives: ["Administrer les dossiers du personnel", "Participer au recrutement", "Mettre en œuvre la formation", "Gérer la paie et la veille sociale"],
        skillsDeveloped: ["SIRH", "Techniques d’entretien", "Droit du travail", "Gestion de la paie", "Communication interne"],
        opportunities: ["Assistant RH", "Gestionnaire de paie", "Chargé de formation junior", "Assistant recrutement"]
      },
      {
        name: "Finance",
        description: "Spécialise en comptabilité financière, analyse de performance et gestion de trésorerie pour accompagner la prise de décision des organisations.",
        category: "Finance",
        parcours: "Finance d’Entreprise",
        niveau: "Licence",
        cycle: "Bachelor européen",
        duration: "3 ans",
        diploma: "Bachelor Européen Finance",
        admissionRequirements: ["Bac ES, S ou équivalent", "Test quantitatif", "Entretien"],
        objectives: ["Établir et analyser les états financiers", "Gérer la trésorerie", "Contrôler les coûts", "Participer aux décisions d’investissement"],
        skillsDeveloped: ["Comptabilité générale & analytique", "Analyse financière", "Budget & prévisions", "Fiscalité de base", "ERP finance"],
        opportunities: ["Assistant financier", "Analyste crédit", "Comptable", "Contrôleur de gestion junior"]
      },
      {
        name: "Informatique Réseau & Sécurité",
        description: "Donne les bases solides pour installer, administrer et sécuriser des réseaux et des systèmes, répondant aux besoins des entreprises connectées.",
        category: "Informatique & Réseaux",
        parcours: "Réseau & Sécurité",
        niveau: "Licence",
        cycle: "Bachelor européen",
        duration: "3 ans",
        diploma: "Bachelor Européen Informatique Réseau & Sécurité",
        admissionRequirements: ["Bac scientifique/technique", "Dossier + test technique"],
        objectives: ["Installer des infrastructures réseau", "Configurer services TCP/IP", "Mettre en place des politiques de sécurité", "Superviser la disponibilité des systèmes"],
        skillsDeveloped: ["Cisco/HP switching", "Linux & Windows Server", "Pare-feu & VPN", "Scripts Bash/PowerShell", "Supervision Nagios/Zabbix"],
        opportunities: ["Administrateur réseau junior", "Technicien sécurité", "Support système", "Opérateur NOC"]
      },
      {
        name: "Marketing Digital",
        description: "Couvre les leviers web (SEO, SEA, social media, email) pour concevoir et piloter des campagnes marketing performantes orientées ROI.",
        category: "Marketing",
        parcours: "Marketing Digital",
        niveau: "Licence",
        cycle: "Bachelor européen",
        duration: "3 ans",
        diploma: "Bachelor Européen Marketing Digital",
        admissionRequirements: ["Bac toutes séries", "Dossier + entretien", "Portfolio digital (souhaité)"],
        objectives: ["Élaborer une stratégie digitale", "Gérer la présence social media", "Optimiser le référencement SEO/SEA", "Mesurer la performance via analytics"],
        skillsDeveloped: ["Google Analytics/GA4", "SEO on-page/off-page", "Facebook Ads/Google Ads", "Content marketing", "Automatisation marketing"],
        opportunities: ["Community manager", "Chargé e-marketing", "Traffic manager", "Assistant SEO/SEA"]
      },
      {
        name: "Marketing",
        description: "Initie aux études de marché, au mix-marketing et au développement produit pour répondre aux attentes d’un marché concurrentiel.",
        category: "Marketing",
        parcours: "Marketing Opérationnel",
        niveau: "Licence",
        cycle: "Bachelor européen",
        duration: "3 ans",
        diploma: "Bachelor Européen Marketing",
        admissionRequirements: ["Bac ES, STMG ou équivalent", "Dossier + entretien"],
        objectives: ["Réaliser des études de marché", "Concevoir une stratégie produit", "Définir la politique prix", "Mettre en place la communication"],
        skillsDeveloped: ["Analyse de données marketing", "Techniques de vente", "Branding", "Plan d’action commerciale", "CRM"],
        opportunities: ["Assistant chef de produit", "Chargé d’études", "Responsable merchandising junior", "Assistant communication"]
      },
      {
        name: "Informatique & Réseau – Option B Administration Système & Réseau",
        description: "Approfondit l’administration des serveurs, la virtualisation et la sécurité pour assurer la haute disponibilité des infrastructures.",
        category: "Informatique & Réseaux",
        parcours: "Administration Système & Réseau",
        niveau: "Licence",
        cycle: "Bachelor européen",
        duration: "3 ans",
        diploma: "Bachelor Européen ASR",
        admissionRequirements: ["Bac scientifique/technique", "Dossier + test réseau/système"],
        objectives: ["Déployer services réseau avancés", "Administrer serveurs Linux/Windows", "Mettre en place solutions de virtualisation", "Gérer backups & disaster recovery"],
        skillsDeveloped: ["VMware/Proxmox", "Active Directory", "Shell scripting", "Sécurité réseau", "Surveillance & alerting"],
        opportunities: ["Administrateur système", "Administrateur réseau", "Technicien support N2/N3", "Ingénieur infrastructure junior"]
      },
      {
        name: "Informatique & Réseau – Option A Développement de Bases de Données",
        description: "Spécialise en conception, optimisation et administration de bases de données relationnelles et NoSQL au service des applications.",
        category: "Informatique & BDD",
        parcours: "Développement Bases de Données",
        niveau: "Licence",
        cycle: "Bachelor européen",
        duration: "3 ans",
        diploma: "Bachelor Européen BDD",
        admissionRequirements: ["Bac scientifique/technique", "Dossier + test SQL", "Entretien"],
        objectives: ["Modéliser des schémas de données", "Créer et optimiser requêtes SQL", "Mettre en œuvre procédures stockées", "Assurer la sécurité et la sauvegarde"],
        skillsDeveloped: ["UML & Merise", "SQL Server / MySQL / PostgreSQL", "Indexation & tuning", "NoSQL (MongoDB)", "ETL & reporting"],
        opportunities: ["Développeur SQL", "Administrateur BDD junior", "Data analyst junior", "Support BI"]
      },
      {
        name: "Développement Web",
        description: "Forme des développeurs capables de réaliser des sites et applications web responsive, performantes et sécurisées.",
        category: "Informatique",
        parcours: "Développement Web",
        niveau: "Licence",
        cycle: "Bachelor européen",
        duration: "3 ans",
        diploma: "Bachelor Européen Développement Web",
        admissionRequirements: ["Bac scientifique/technique ou équivalent", "Dossier + test de code", "Entretien"],
        objectives: ["Coder en HTML, CSS, JavaScript", "Utiliser frameworks front-end et back-end", "Concevoir APIs REST", "Assurer accessibilité et sécurité"],
        skillsDeveloped: ["HTML5/CSS3", "JavaScript (React/Vue)", "Node.js / PHP / Python", "Git & CI-CD", "Tests unitaires"],
        opportunities: ["Développeur front-end", "Développeur back-end", "Intégrateur web", "Webmaster technique"]
      },

  /* ─────────────── Masters Européens (Master Professionnelle) ─────────────── */

      {
    name: "Manager de Projet Informatique",
    description: "Formation de haut niveau pour piloter des projets IT complexes : cadrage des besoins, planification, gestion d’équipes techniques et déploiement de solutions numériques.",
    category: "Informatique & Management",
    parcours: "Management de Projet IT",
    niveau: "Master",
    cycle: "Master",
    duration: "5 ans",
    diploma: "Master Européen Manager de Projet Informatique",
    admissionRequirements: ["Licence ou équivalent en informatique ou gestion", "Dossier académique", "Entretien de motivation", "Niveau B2 en anglais recommandé"],
    objectives: ["Maîtriser les méthodologies Agile/Scrum et Waterfall", "Planifier, suivre et livrer des projets IT", "Gérer les risques et les budgets", "Animer et coordonner des équipes pluridisciplinaires"],
    skillsDeveloped: ["Gestion de projet (Gantt, PERT, Kanban)", "Leadership & communication", "Pilotage budgétaire", "Outils DevOps / CI-CD", "Management de la qualité logicielle"],
    opportunities: ["Chef de projet informatique", "Product owner", "Consultant PMO", "Scrum master", "IT program manager"]
  },
  {
    name: "Expert IT Cybersécurité",
    description: "Programme spécialisé pour prévenir, détecter et contrer les menaces numériques : audit de sécurité, cryptographie, réponse à incident et conformité réglementaire.",
    category: "Cybersécurité",
    parcours: "Expertise Cybersécurité",
    niveau: "Master",
    cycle: "Master",
    duration: "5 ans",
    diploma: "Master Européen Expert IT Cybersécurité",
    admissionRequirements: ["Licence en informatique, réseaux ou équivalent", "Connaissances réseaux/OS", "Dossier + entretien", "Test technique de sécurité"],
    objectives: ["Élaborer une politique de sécurité", "Mettre en œuvre des architectures sécurisées", "Superviser les SIEM et SOC", "Réagir aux incidents et réaliser des forensics"],
    skillsDeveloped: ["Pentest & ethical hacking", "Gestion des vulnérabilités", "Cryptographie avancée", "Normes ISO 27001 / RGPD", "Analyse forensique & réponse à incident"],
    opportunities: ["Ingénieur sécurité", "Analyste SOC", "Consultant cybersécurité", "Architecte sécurité", "CISO"]
  },
  {
    name: "Expert IT Applications Intelligence Artificielle & Big Data",
    description: "Formation pointue sur la data science, le machine learning et les architectures Big Data pour concevoir des solutions basées sur l’IA et exploiter des volumes massifs de données.",
    category: "Data & Intelligence Artificielle",
    parcours: "Big Data & IA",
    niveau: "Master",
    cycle: "Master",
    duration: "5 ans",
    diploma: "Master Européen Expert IA & Big Data",
    admissionRequirements: ["Licence en informatique, mathématiques ou statistique", "Compétences Python/SQL", "Dossier + entretien + test de logique", "Projet data apprécié"],
    objectives: ["Concevoir des pipelines Big Data", "Développer et déployer des modèles IA", "Optimiser le stockage et la gouvernance des données", "Traduire les analyses en recommandations business"],
    skillsDeveloped: ["Machine learning", "Deep learning", "Écosystème Hadoop/Spark", "Data engineering & ETL", "Visualisation avancée"],
    opportunities: ["Data scientist", "Ingénieur ML", "Architecte Big Data", "Consultant IA", "Chief Data Officer"]
  },
  {
    name: "Management Environnemental & Énergie",
    description: "Prépare des cadres capables de concilier performance économique et développement durable : audits environnementaux, transition énergétique, normes ISO 14001 et stratégie RSE.",
    category: "Environnement & Énergie",
    parcours: "Management Durable",
    niveau: "Master",
    cycle: "Master",
    duration: "5 ans",
    diploma: "Master Européen Management Environnemental & Énergétique",
    admissionRequirements: ["Licence scientifique ou ingénierie", "Dossier + projet professionnel", "Entretien de motivation", "Niveau B2 en anglais"],
    objectives: ["Élaborer une stratégie environnementale", "Gérer l’efficacité énergétique", "Mettre en place des systèmes de management ISO 14001", "Conduire des projets d’économie circulaire"],
    skillsDeveloped: ["Bilan carbone & ACV", "Gestion des déchets", "Énergies renouvelables", "Veille réglementaire", "Reporting développement durable"],
    opportunities: ["Consultant RSE", "Energy manager", "Responsable HSE", "Chef de projet environnement", "Auditeur ISO 14001"]
  },
  {
    name: "Management et Stratégie d'Entreprise",
    description: "Forme des dirigeants capables de définir et piloter la stratégie globale d’une organisation, d’analyser les marchés et de conduire le changement.",
    category: "Management & Stratégie",
    parcours: "Management Global",
    niveau: "Master",
    cycle: "Master",
    duration: "5 ans",
    diploma: "Master Européen Management & Stratégie d’Entreprise",
    admissionRequirements: ["Licence en gestion, économie ou équivalent", "Dossier + entretien", "Test de management"],
    objectives: ["Diagnostiquer l’environnement concurrentiel", "Définir des plans stratégiques", "Piloter la performance et le changement", "Manager des équipes pluridisciplinaires"],
    skillsDeveloped: ["Analyse stratégique", "Contrôle de gestion avancé", "Leadership & négociation", "Gestion du changement", "Intelligence économique"],
    opportunities: ["Consultant en stratégie", "Directeur de business unit", "Chef d’entreprise", "PMO", "Analyste organisation"]
  },
  {
    name: "Communication & Marketing Numérique",
    description: "Couvre le branding, la publicité digitale, les médias sociaux et l’analyse de données pour élaborer des campagnes 360° performantes.",
    category: "Communication & Marketing",
    parcours: "Digital Communication",
    niveau: "Master",
    cycle: "Master",
    duration: "5 ans",
    diploma: "Master Européen Communication & Marketing Numérique",
    admissionRequirements: ["Licence communication, marketing ou équivalent", "Portfolio ou projet digital", "Dossier + entretien"],
    objectives: ["Définir une stratégie de communication digitale", "Gérer la présence multicanale d’une marque", "Mesurer l’efficacité des campagnes", "Optimiser l’engagement et la conversion"],
    skillsDeveloped: ["SEO/SEA & content marketing", "Social media management", "Data analytics & KPI", "Brand storytelling", "Gestion de budget publicitaire"],
    opportunities: ["Responsable com’ digitale", "Chef de produit digital", "Media planner", "Community manager senior", "Consultant e-marketing"]
  },
  {
    name: "Management et Stratégie Financière",
    description: "Prépare des experts à la décision financière stratégique, à la gestion des risques, au contrôle interne et aux fusions-acquisitions.",
    category: "Finance",
    parcours: "Finance Stratégique",
    niveau: "Master",
    cycle: "Master",
    duration: "5 ans",
    diploma: "Master Européen Management & Stratégie Financière",
    admissionRequirements: ["Licence finance, économie ou gestion", "Test quantitatif", "Dossier académique solide", "Entretien"],
    objectives: ["Élaborer des politiques financières", "Optimiser la structure de capital", "Piloter la gestion des risques", "Superviser les opérations M&A"],
    skillsDeveloped: ["Analyse financière avancée", "Évaluation d’entreprise", "Gestion de trésorerie", "Risk management", "Contrôle interne & audit"],
    opportunities: ["Directeur financier", "Analyste M&A", "Contrôleur de gestion senior", "Consultant stratégie financière", "Risk manager"]
  },
  {
    name: "Management des Ressources Humaines",
    description: "Développe les compétences pour attirer, fidéliser et développer les talents, gérer la relation sociale et accompagner la transformation des organisations.",
    category: "Ressources Humaines",
    parcours: "RH Stratégique",
    niveau: "Master",
    cycle: "Master",
    duration: "5 ans",
    diploma: "Master Européen Management des Ressources Humaines",
    admissionRequirements: ["Licence RH, psychologie ou gestion", "Dossier + entretien", "Test de personnalité / mise en situation"],
    objectives: ["Définir la politique RH", "Conduire le dialogue social", "Mettre en œuvre la gestion des talents", "Piloter la transformation organisationnelle"],
    skillsDeveloped: ["Talent management", "Compensation & benefits", "Droit du travail", "Change management", "Analytics RH"],
    opportunities: ["Responsable RH", "Talent acquisition manager", "Consultant RH", "HR business partner", "Responsable formation"]
  },
  {
    name: "Logistique et Supply Chain",
    description: "Forme des experts capables d’optimiser les flux physiques et d’information, d’intégrer les technologies 4.0 et de piloter des réseaux logistiques internationaux.",
    category: "Logistique & Supply Chain",
    parcours: "Supply Chain Management",
    niveau: "Master",
    cycle: "Master",
    duration: "5 ans",
    diploma: "Master Européen Logistique & Supply Chain",
    admissionRequirements: ["Licence logistique, ingénierie ou gestion", "Connaissances de base en statistiques", "Dossier + entretien"],
    objectives: ["Concevoir des chaînes logistiques efficaces", "Mettre en place des systèmes ERP et WMS", "Maîtriser la gestion des stocks et la prévision", "Intégrer la logistique durable"],
    skillsDeveloped: ["Planification avancée (APS)", "Lean & Six Sigma", "ERP (SAP, Oracle)", "Transport multimodal", "Analyse des données supply chain"],
    opportunities: ["Supply chain manager", "Consultant logistique", "Responsable entrepôt", "Acheteur international", "Directeur opérations"]
  }
    ]
  },
  {
    id: "Best-Institut",
    name: "Best Institut Formation Professionnelle Privée",
    description: "Formation d'excellence en commerce, Comptabilité, marketing international Infographie, Multimédia, Programmation etc avec un accent sur un bonne application.",
    logo: "Images/Best.png", 
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
    logo: "Images/Cesa.jpg", 
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
    logo: "Images/EDD.jpg", 
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
    logo: "Images/ibegis.png", 
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
