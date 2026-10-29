export type Lang = 'fr' | 'en';
export type L = Record<Lang, string>;

/* ---------- À MODIFIER : informations personnelles et services ---------- */
export const config = {
  name: 'Monhamad Ouedraogo',
  email: 'monhamad50@gmail.com',
  github: 'https://github.com/monhamad',
  linkedin: 'https://www.linkedin.com/in/monhamad-ouedraogo',
  // Chemin du CV (fichier à placer dans public/), ex. '/cv-monhamad-ouedraogo.pdf'. Vide = bouton masqué.
  cvUrl: '',
  // Point d’accès d’un service de formulaire (Formspree, Web3Forms…). Vide = formulaire remplacé par un lien e-mail.
  formEndpoint: '',
};

/* ---------- Compétences : status = practiced | learning | notions ---------- */
export type Status = 'practiced' | 'learning' | 'notions';
export const skills: { group: L; items: { name: string; status: Status; proof: string }[] }[] = [
  {
    group: { fr: 'Systèmes d’exploitation', en: 'Operating systems' },
    items: [
      { name: 'Windows Server 2022, Active Directory, DNS', status: 'practiced', proof: 'infracstructure-windows-serveur-2022' },
      { name: 'Linux (Ubuntu, Kali)', status: 'practiced', proof: 'RansomGuard' },
      { name: 'Cluster de basculement, iSCSI, SMB', status: 'practiced', proof: 'windows-server-failover-cluster-lab' },
    ],
  },
  {
    group: { fr: 'Réseaux', en: 'Networking' },
    items: [
      { name: 'Simulation réseau (GNS3, FortiGate)', status: 'practiced', proof: 'fortigate-gns3-lab' },
      { name: 'Administration réseau', status: 'notions', proof: '' },
      { name: 'Sécurité des réseaux', status: 'notions', proof: '' },
    ],
  },
  {
    group: { fr: 'Programmation et données', en: 'Programming and data' },
    items: [
      { name: 'Python', status: 'practiced', proof: 'feu rouge (Python, OpenCV)' },
      { name: 'C, Java', status: 'practiced', proof: 'tpcc' },
      { name: 'SQL, entrepôt de données', status: 'practiced', proof: 'Entrep-t-de-Donn-es-M-dicales' },
    ],
  },
  {
    group: { fr: 'Cybersécurité', en: 'Cybersecurity' },
    items: [
      { name: 'Détection comportementale sous Linux (fanotify)', status: 'practiced', proof: 'RansomGuard' },
      { name: 'Wazuh, Suricata, ELK Stack', status: 'learning', proof: '' },
      { name: 'Tests d’intrusion (pentest)', status: 'learning', proof: '' },
    ],
  },
  {
    group: { fr: 'Outils', en: 'Tools' },
    items: [
      { name: 'Git et GitHub', status: 'practiced', proof: 'github.com/monhamad' },
      { name: 'VMware Workstation', status: 'practiced', proof: 'windows-server-failover-cluster-lab' },
    ],
  },
];

/* ---------- Projets ---------- */
export const projects: { id: string; name: string; summary: L; result?: L; tech: string[]; repo?: string; detail?: boolean }[] = [
  {
    id: 'ransomguard', name: 'RansomGuard', detail: true,
    summary: {
      fr: 'Système de détection et de prévention des ransomwares pour un réseau universitaire. Approche comportementale : surveillance des fichiers, scoring pondéré, puis blocage du processus responsable.',
      en: 'Ransomware detection and prevention system for a university network. Behavioral approach: file monitoring, weighted scoring, then blocking of the offending process.',
    },
    result: {
      fr: '3 fichiers chiffrés sur 111 avant blocage (environnement virtualisé, attaque simulée).',
      en: '3 of 111 files encrypted before blocking (virtualized environment, simulated attack).',
    },
    tech: ['Linux', 'fanotify', 'Signaux POSIX'],
  },
  {
    id: 'cluster', name: 'Windows Server 2022 Failover Cluster',
    summary: {
      fr: 'Service de fichiers hautement disponible : deux nœuds, stockage partagé iSCSI, témoin de partage de fichiers et partage SMB. Basculements manuel et automatique testés.',
      en: 'Highly available file service: two nodes, shared iSCSI storage, file share witness and SMB share. Manual and automatic failover tested.',
    },
    tech: ['Windows Server 2022', 'Failover Clustering', 'iSCSI', 'SMB', 'PowerShell', 'VMware'],
    repo: 'https://github.com/monhamad/windows-server-failover-cluster-lab',
  },
  {
    id: 'infra', name: 'Infrastructure Windows Server 2022',
    summary: {
      fr: 'Infrastructure de laboratoire sous Windows Server 2022 : Active Directory, DNS, DHCP et stratégies de groupe.',
      en: 'Windows Server 2022 lab infrastructure: Active Directory, DNS, DHCP and group policies.',
    },
    tech: ['Windows Server 2022', 'Active Directory', 'DNS', 'DHCP', 'GPO'],
    repo: 'https://github.com/monhamad/infracstructure-windows-serveur-2022',
  },
  {
    id: 'fortigate', name: 'FortiGate sous GNS3',
    summary: {
      fr: 'Laboratoire réseau avec un pare-feu FortiGate virtuel dans GNS3 et des clients Linux simulant l’accès à internet.',
      en: 'Network lab with a virtual FortiGate firewall in GNS3 and Linux clients simulating internet access.',
    },
    tech: ['GNS3', 'FortiGate', 'Ubuntu'],
    repo: 'https://github.com/monhamad/fortigate-gns3-lab',
  },
  {
    id: 'zimbra', name: 'Serveur de messagerie Zimbra',
    summary: {
      fr: 'Mise en œuvre d’un serveur de messagerie open source Zimbra.',
      en: 'Deployment of an open source Zimbra mail server.',
    },
    tech: ['Zimbra', 'Linux'],
    repo: 'https://github.com/monhamad/zimbra-serveur-de-messagerie',
  },
  {
    id: 'dw', name: 'Entrepôt de données médicales',
    summary: {
      fr: 'Chaîne d’alimentation d’un entrepôt de données à partir du jeu « Medical Insurance Cost », avec requêtes analytiques.',
      en: 'Data warehouse pipeline built from the “Medical Insurance Cost” dataset, with analytical queries.',
    },
    tech: ['MySQL', 'PostgreSQL', 'Pentaho', 'Metabase'],
    repo: 'https://github.com/monhamad/Entrep-t-de-Donn-es-M-dicales',
  },
];

/* ---------- Textes de l’interface (français = référence de structure) ---------- */
const fr = {
  meta: { title: 'Monhamad Ouedraogo – Étudiant ingénieur, cybersécurité', desc: 'Portfolio de Monhamad Ouedraogo, étudiant ingénieur en informatique orienté cybersécurité : projets, laboratoires et parcours.' },
  nav: { home: 'Accueil', about: 'À propos', skills: 'Compétences', projects: 'Projets', path: 'Parcours', contact: 'Contact', menu: 'Menu', skip: 'Aller au contenu', switch: 'Passer en anglais', switchLabel: 'EN' },
  hero: {
    role: 'Étudiant ingénieur en informatique orienté cybersécurité',
    tagline: 'Comprendre les systèmes. Détecter les menaces. Concevoir des solutions de sécurité.',
    intro: 'Élève ingénieur en quatrième année à l’École Polytechnique de Ouagadougou. Je monte des laboratoires, je documente ce que je réalise et je cherche un stage en cybersécurité.',
    projects: 'Découvrir mes projets', cv: 'Télécharger mon CV', contact: 'Me contacter',
  },
  about: {
    h: 'À propos',
    p: [
      'Je suis en quatrième année du cycle ingénieur à l’Institut du génie informatique et des télécoms (IGIT) de l’École Polytechnique de Ouagadougou, après une classe préparatoire. Je me spécialise en cybersécurité et je vise un poste de pentester ou de red teamer junior.',
      'Ma méthode : monter un laboratoire, faire fonctionner le système, le tester (par exemple en simulant une panne ou une attaque), puis documenter ce qui a marché et ce qui a posé problème.',
      'Je suis un profil junior en construction. Je présente ici ce que j’ai réellement réalisé, avec ses limites, et ce que j’apprends en ce moment.',
    ],
  },
  skills: { h: 'Compétences', intro: 'Chaque niveau est indiqué honnêtement, avec le projet qui le démontre quand il existe.', status: { practiced: 'Pratiqué', learning: 'En apprentissage', notions: 'Notions' }, proof: 'Projet :' },
  projects: {
    h: 'Projets', intro: 'Une sélection de réalisations, avec leur code source lorsqu’il est public.', repo: 'Code source', detail: 'Étude détaillée', noRepo: 'Pas de dépôt public',
    others: 'Autres projets académiques', othersText: 'Compilateur d’un sous-ensemble du C vers NASM AMD64 (flex, bison) ; détection d’infractions au feu rouge (Python, OpenCV) ; application d’offres d’emploi (PHP, MySQL).',
  },
  path: {
    h: 'Parcours',
    items: [
      { when: '2026 – aujourd’hui', kind: 'Projet académique', what: 'RansomGuard : détection et prévention des ransomwares', where: 'École Polytechnique de Ouagadougou' },
      { when: '2024 – 2026', kind: 'Formation', what: 'Cycle ingénieur, ingéniorat 1 et 2', where: 'IGIT, École Polytechnique de Ouagadougou' },
      { when: '2024 – 2025', kind: 'Stage', what: 'Développement du site web d’une école sous Joomla (installation, modules, design)', where: 'ANPTIC' },
      { when: '2024 – 2025', kind: 'Projet académique', what: 'Détection d’infractions au feu rouge (Python, OpenCV, notifications SMS)', where: 'École Polytechnique de Ouagadougou' },
      { when: '2022 – 2024', kind: 'Formation', what: 'Classe préparatoire, physique, chimie et sciences de l’ingénieur', where: 'École Polytechnique de Ouagadougou' },
    ],
  },
  lab: {
    h: 'Laboratoire technique',
    intro: 'Mes environnements de pratique, tous virtualisés et sans donnée sensible.',
    items: [
      { t: 'VMware Workstation', p: 'Domaine Windows Server 2022, cluster de basculement, stockage iSCSI, serveur de messagerie Zimbra.' },
      { t: 'GNS3', p: 'Topologie avec un FortiGate virtuel et des clients Linux.' },
      { t: 'Machines Linux', p: 'Ubuntu et Kali, utilisées pour les tests de RansomGuard et l’apprentissage de la ligne de commande.' },
    ],
  },
  learning: {
    h: 'En apprentissage',
    intro: 'Ce que je développe actuellement. Rien de cette liste n’est présenté comme acquis.',
    items: [
      { t: 'Supervision et détection', p: 'Wazuh, Suricata et ELK Stack.' },
      { t: 'Tests d’intrusion', p: 'Parcours d’autoformation structuré sur douze mois.' },
      { t: 'Linux orienté sécurité', p: 'Plan d’apprentissage par étapes.' },
      { t: 'Anglais professionnel', p: 'Niveau intermédiaire aujourd’hui.' },
    ],
  },
  contact: {
    h: 'Contact', intro: 'Je cherche un stage et une première expérience en cybersécurité. Écrivez-moi.',
    name: 'Nom', email: 'Adresse e-mail', subject: 'Objet', message: 'Message', send: 'Envoyer', sending: 'Envoi en cours…',
    ok: 'Message envoyé. Merci, je vous répondrai rapidement.', error: 'L’envoi a échoué. Réessayez ou écrivez-moi directement par e-mail.',
    invalid: 'Vérifiez les champs : nom, adresse e-mail valide, objet et message d’au moins 10 caractères.',
    noService: 'Le formulaire n’est pas encore connecté à un service d’envoi. Écrivez-moi directement :',
  },
  footer: 'Conçu et développé par Monhamad Ouedraogo.',
  notFound: { h: 'Page introuvable', p: 'Cette adresse n’existe pas.', back: 'Retour à l’accueil' },
  rg: {
    back: 'Retour aux projets', subtitle: 'Détection et prévention des attaques par ransomware dans un réseau universitaire',
    status: 'Projet académique réalisé en laboratoire. Il n’y a pas de dépôt public : un rapport existe et peut être communiqué sur demande.',
    sections: [
      { h: 'Contexte et problématique', p: 'Les antivirus classiques détectent par signatures et laissent passer les menaces inconnues. Le projet vise un réseau universitaire aux ressources limitées et explore une approche comportementale fondée sur des outils open source.' },
      { h: 'Architecture', p: 'RansomGuard surveille les fichiers au niveau du noyau Linux avec fanotify, qui permet d’identifier le processus responsable de chaque accès. Un score pondéré évalue le comportement de ce processus, puis une réponse automatique est déclenchée.' },
      { h: 'Détection de comportements suspects', p: 'Le score combine plusieurs indicateurs : entropie de Shannon des données écrites, taux de modification des fichiers, extensions suspectes et présence de notes de rançon.' },
      { h: 'Réponse et blocage', p: 'Dès que le score signale une attaque, le processus est suspendu avec SIGSTOP puis arrêté avec SIGKILL.' },
      { h: 'Environnement de test', p: 'Les tests ont été menés dans un environnement virtualisé à deux machines. Un simulateur pédagogique de ransomware a servi à valider le système dans des conditions réalistes.' },
    ],
    flow: ['Écritures de fichiers', 'fanotify : processus identifié', 'Score pondéré', 'SIGSTOP puis SIGKILL'],
    results: { h: 'Résultats mesurés', big: '97,3 %', p: 'Sur une attaque ciblant 111 fichiers, 3 seulement ont été chiffrés avant le blocage, soit 97,3 % des données préservées. Conditions : environnement virtualisé à deux machines, attaque produite par le simulateur du projet.' },
    limits: { h: 'Limites identifiées', items: [
      'fanotify ne détecte pas les écritures distantes NFS/SMB : le système doit être déployé directement sur le serveur de fichiers.',
      'Les résultats proviennent d’un simulateur dans un environnement virtualisé, pas d’un ransomware réel sur un réseau de production.',
      'La version actuelle n’intègre ni SIEM ni mécanismes de résilience.',
    ] },
    next: { h: 'Perspectives', items: ['Envoyer les alertes vers un SIEM.', 'Ajouter des mécanismes de résilience.', 'Étendre les tests à d’autres scénarios d’attaque.'] },
  },
};

const en: typeof fr = {
  meta: { title: 'Monhamad Ouedraogo – Engineering student, cybersecurity', desc: 'Portfolio of Monhamad Ouedraogo, computer engineering student focused on cybersecurity: projects, labs and background.' },
  nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', path: 'Background', contact: 'Contact', menu: 'Menu', skip: 'Skip to content', switch: 'Switch to French', switchLabel: 'FR' },
  hero: {
    role: 'Computer engineering student focused on cybersecurity',
    tagline: 'Understand systems. Detect threats. Design security solutions.',
    intro: 'Fourth-year engineering student at the École Polytechnique de Ouagadougou. I build labs, document what I do, and I am looking for a cybersecurity internship.',
    projects: 'See my projects', cv: 'Download my CV', contact: 'Contact me',
  },
  about: {
    h: 'About',
    p: [
      'I am in the fourth year of the engineering program at the Institut du génie informatique et des télécoms (IGIT) of the École Polytechnique de Ouagadougou, after a preparatory class. I am specializing in cybersecurity and aiming for a junior pentester or red team role.',
      'My method: build a lab, get the system running, test it (for example by simulating a failure or an attack), then document what worked and what went wrong.',
      'I am a junior profile still taking shape. This site shows what I have actually built, with its limits, and what I am learning right now.',
    ],
  },
  skills: { h: 'Skills', intro: 'Each level is stated honestly, with the project that demonstrates it when there is one.', status: { practiced: 'Practiced', learning: 'Learning', notions: 'Basics' }, proof: 'Project:' },
  projects: {
    h: 'Projects', intro: 'A selection of work, with source code when it is public.', repo: 'Source code', detail: 'Detailed case study', noRepo: 'No public repository',
    others: 'Other academic projects', othersText: 'Compiler for a C subset targeting NASM AMD64 (flex, bison); red-light violation detection (Python, OpenCV); job listing web application (PHP, MySQL).',
  },
  path: {
    h: 'Background',
    items: [
      { when: '2026 – present', kind: 'Academic project', what: 'RansomGuard: ransomware detection and prevention', where: 'École Polytechnique de Ouagadougou' },
      { when: '2024 – 2026', kind: 'Education', what: 'Engineering program, years 1 and 2', where: 'IGIT, École Polytechnique de Ouagadougou' },
      { when: '2024 – 2025', kind: 'Internship', what: 'Website for a school built with Joomla (installation, modules, design)', where: 'ANPTIC' },
      { when: '2024 – 2025', kind: 'Academic project', what: 'Red-light violation detection (Python, OpenCV, SMS notifications)', where: 'École Polytechnique de Ouagadougou' },
      { when: '2022 – 2024', kind: 'Education', what: 'Preparatory class, physics, chemistry and engineering sciences', where: 'École Polytechnique de Ouagadougou' },
    ],
  },
  lab: {
    h: 'Technical lab',
    intro: 'My practice environments, all virtualized and free of sensitive data.',
    items: [
      { t: 'VMware Workstation', p: 'Windows Server 2022 domain, failover cluster, iSCSI storage, Zimbra mail server.' },
      { t: 'GNS3', p: 'Topology with a virtual FortiGate and Linux clients.' },
      { t: 'Linux machines', p: 'Ubuntu and Kali, used for RansomGuard testing and command-line practice.' },
    ],
  },
  learning: {
    h: 'Currently learning',
    intro: 'What I am developing right now. Nothing on this list is presented as mastered.',
    items: [
      { t: 'Monitoring and detection', p: 'Wazuh, Suricata and ELK Stack.' },
      { t: 'Penetration testing', p: 'A structured twelve-month self-study path.' },
      { t: 'Security-oriented Linux', p: 'A step-by-step learning plan.' },
      { t: 'Professional English', p: 'Intermediate level today.' },
    ],
  },
  contact: {
    h: 'Contact', intro: 'I am looking for an internship and a first experience in cybersecurity. Get in touch.',
    name: 'Name', email: 'Email address', subject: 'Subject', message: 'Message', send: 'Send', sending: 'Sending…',
    ok: 'Message sent. Thank you, I will reply soon.', error: 'Sending failed. Try again or email me directly.',
    invalid: 'Please check the fields: name, a valid email address, subject, and a message of at least 10 characters.',
    noService: 'The form is not yet connected to a sending service. Please email me directly:',
  },
  footer: 'Designed and built by Monhamad Ouedraogo.',
  notFound: { h: 'Page not found', p: 'This address does not exist.', back: 'Back to home' },
  rg: {
    back: 'Back to projects', subtitle: 'Ransomware attack detection and prevention in a university network',
    status: 'Academic project carried out in a lab. There is no public repository: a report exists and can be shared on request.',
    sections: [
      { h: 'Context and problem', p: 'Traditional antivirus tools detect by signatures and miss unknown threats. The project targets a university network with limited resources and explores a behavioral approach built on open source tools.' },
      { h: 'Architecture', p: 'RansomGuard watches files at the Linux kernel level with fanotify, which identifies the process responsible for each access. A weighted score evaluates that process’s behavior, then an automatic response is triggered.' },
      { h: 'Detecting suspicious behavior', p: 'The score combines several indicators: Shannon entropy of written data, file modification rate, suspicious extensions and the presence of ransom notes.' },
      { h: 'Response and blocking', p: 'As soon as the score signals an attack, the process is suspended with SIGSTOP and then terminated with SIGKILL.' },
      { h: 'Test environment', p: 'Tests ran in a virtualized two-machine environment. An educational ransomware simulator was used to validate the system under realistic conditions.' },
    ],
    flow: ['File writes', 'fanotify: process identified', 'Weighted score', 'SIGSTOP then SIGKILL'],
    results: { h: 'Measured results', big: '97.3%', p: 'In an attack targeting 111 files, only 3 were encrypted before blocking, so 97.3% of the data was preserved. Conditions: virtualized two-machine environment, attack produced by the project’s own simulator.' },
    limits: { h: 'Known limits', items: [
      'fanotify does not detect remote NFS/SMB writes: the system must be deployed directly on the file server.',
      'Results come from a simulator in a virtualized environment, not from real ransomware on a production network.',
      'The current version includes neither SIEM integration nor resilience mechanisms.',
    ] },
    next: { h: 'Next steps', items: ['Send alerts to a SIEM.', 'Add resilience mechanisms.', 'Extend testing to other attack scenarios.'] },
  },
};

export const ui = { fr, en };
