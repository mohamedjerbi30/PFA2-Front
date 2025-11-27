// Données d'exemple pour la plateforme TWEE RECRU
import { Employe, Candidat, Formation, Document, StatistiquesRH } from '@/types';

export const employes: Employe[] = [
    {
        id: 'emp001',
        nom: 'Dupont',
        prenom: 'Marie',
        email: 'marie.dupont@tweerecru.fr',
        telephone: '+33 6 12 34 56 78',
        poste: 'Directrice des Ressources Humaines',
        departement: 'RH',
        dateEmbauche: '2018-03-15',
        salaire: 65000,
        competences: ['Gestion RH', 'Recrutement', 'Formation', 'Droit du travail'],
        softSkills: ['Leadership', 'Communication', 'Empathie', 'Organisation'],
        langues: [
            { langue: 'Français', niveau: 'Natif' },
            { langue: 'Anglais', niveau: 'Courant' },
            { langue: 'Espagnol', niveau: 'Intermédiaire' }
        ],
        statut: 'Actif',
        historique: [
            {
                date: '2018-03-15',
                type: 'Embauche',
                description: 'Embauche en tant que Responsable RH'
            },
            {
                date: '2020-06-01',
                type: 'Promotion',
                description: 'Promotion au poste de Directrice RH',
                ancienPoste: 'Responsable RH',
                nouveauPoste: 'Directrice des Ressources Humaines'
            }
        ]
    },
    {
        id: 'emp002',
        nom: 'Martin',
        prenom: 'Thomas',
        email: 'thomas.martin@tweerecru.fr',
        telephone: '+33 6 23 45 67 89',
        poste: 'Développeur Full Stack',
        departement: 'IT',
        dateEmbauche: '2020-09-01',
        salaire: 48000,
        competences: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Next.js'],
        softSkills: ['Travail d\'équipe', 'Résolution de problèmes', 'Créativité', 'Autonomie'],
        langues: [
            { langue: 'Français', niveau: 'Natif' },
            { langue: 'Anglais', niveau: 'Courant' }
        ],
        statut: 'Actif',
        historique: [
            {
                date: '2020-09-01',
                type: 'Embauche',
                description: 'Embauche en tant que Développeur Full Stack'
            },
            {
                date: '2021-10-15',
                type: 'Formation',
                description: 'Formation avancée en architecture microservices'
            }
        ]
    },
    {
        id: 'emp003',
        nom: 'Bernard',
        prenom: 'Sophie',
        email: 'sophie.bernard@tweerecru.fr',
        telephone: '+33 6 34 56 78 90',
        poste: 'Chef de Projet Marketing',
        departement: 'Marketing',
        dateEmbauche: '2019-05-20',
        salaire: 52000,
        competences: ['Marketing digital', 'SEO/SEA', 'Réseaux sociaux', 'Analytics'],
        softSkills: ['Créativité', 'Communication', 'Gestion de projet', 'Analyse'],
        langues: [
            { langue: 'Français', niveau: 'Natif' },
            { langue: 'Anglais', niveau: 'Courant' },
            { langue: 'Allemand', niveau: 'Débutant' }
        ],
        statut: 'Actif',
        historique: [
            {
                date: '2019-05-20',
                type: 'Embauche',
                description: 'Embauche en tant que Chargée de Marketing'
            },
            {
                date: '2021-03-01',
                type: 'Promotion',
                description: 'Promotion au poste de Chef de Projet Marketing',
                ancienPoste: 'Chargée de Marketing',
                nouveauPoste: 'Chef de Projet Marketing'
            }
        ]
    },
    {
        id: 'emp004',
        nom: 'Petit',
        prenom: 'Lucas',
        email: 'lucas.petit@tweerecru.fr',
        telephone: '+33 6 45 67 89 01',
        poste: 'Commercial Senior',
        departement: 'Ventes',
        dateEmbauche: '2017-11-10',
        salaire: 55000,
        competences: ['Négociation', 'Prospection', 'CRM', 'Vente B2B'],
        softSkills: ['Persuasion', 'Écoute active', 'Relationnel', 'Persévérance'],
        langues: [
            { langue: 'Français', niveau: 'Natif' },
            { langue: 'Anglais', niveau: 'Courant' },
            { langue: 'Italien', niveau: 'Intermédiaire' }
        ],
        statut: 'Actif',
        historique: [
            {
                date: '2017-11-10',
                type: 'Embauche',
                description: 'Embauche en tant que Commercial Junior'
            },
            {
                date: '2019-11-10',
                type: 'Promotion',
                description: 'Promotion au poste de Commercial Senior',
                ancienPoste: 'Commercial Junior',
                nouveauPoste: 'Commercial Senior'
            }
        ]
    },
    {
        id: 'emp005',
        nom: 'Leroy',
        prenom: 'Emma',
        email: 'emma.leroy@tweerecru.fr',
        telephone: '+33 6 56 78 90 12',
        poste: 'Designer UX/UI',
        departement: 'Design',
        dateEmbauche: '2021-02-15',
        salaire: 45000,
        competences: ['Figma', 'Adobe XD', 'Prototypage', 'Design System', 'User Research'],
        softSkills: ['Créativité', 'Empathie', 'Attention aux détails', 'Collaboration'],
        langues: [
            { langue: 'Français', niveau: 'Natif' },
            { langue: 'Anglais', niveau: 'Intermédiaire' }
        ],
        statut: 'En congé',
        historique: [
            {
                date: '2021-02-15',
                type: 'Embauche',
                description: 'Embauche en tant que Designer UX/UI'
            }
        ]
    }
];

export const candidats: Candidat[] = [
    {
        id: 'cand001',
        nom: 'Moreau',
        prenom: 'Alexandre',
        email: 'alexandre.moreau@email.fr',
        telephone: '+33 6 67 89 01 23',
        posteVise: 'Développeur Backend',
        datePostulation: '2024-11-15',
        scoreCv: 92,
        statut: 'Présélectionné',
        competences: ['Python', 'Django', 'PostgreSQL', 'Docker', 'AWS'],
        experience: 4
    },
    {
        id: 'cand002',
        nom: 'Rousseau',
        prenom: 'Camille',
        email: 'camille.rousseau@email.fr',
        telephone: '+33 6 78 90 12 34',
        posteVise: 'Chargée de Recrutement',
        datePostulation: '2024-11-18',
        scoreCv: 88,
        statut: 'Interview IA',
        competences: ['Recrutement', 'ATS', 'Sourcing', 'Entretiens'],
        experience: 3
    },
    {
        id: 'cand003',
        nom: 'Simon',
        prenom: 'Julien',
        email: 'julien.simon@email.fr',
        telephone: '+33 6 89 01 23 45',
        posteVise: 'Data Analyst',
        datePostulation: '2024-11-20',
        scoreCv: 85,
        statut: 'En attente',
        competences: ['SQL', 'Python', 'Power BI', 'Excel', 'Statistiques'],
        experience: 2
    },
    {
        id: 'cand004',
        nom: 'Laurent',
        prenom: 'Léa',
        email: 'lea.laurent@email.fr',
        telephone: '+33 6 90 12 34 56',
        posteVise: 'Responsable Communication',
        datePostulation: '2024-11-22',
        scoreCv: 90,
        statut: 'Présélectionné',
        competences: ['Communication', 'Relations presse', 'Réseaux sociaux', 'Événementiel'],
        experience: 5
    },
    {
        id: 'cand005',
        nom: 'Michel',
        prenom: 'Antoine',
        email: 'antoine.michel@email.fr',
        telephone: '+33 6 01 23 45 67',
        posteVise: 'Développeur Frontend',
        datePostulation: '2024-11-10',
        scoreCv: 78,
        statut: 'Refusé',
        competences: ['HTML', 'CSS', 'JavaScript', 'React'],
        experience: 1
    }
];

export const formations: Formation[] = [
    {
        id: 'form001',
        titre: 'Leadership et Management d\'Équipe',
        description: 'Formation complète sur les techniques de leadership moderne et la gestion d\'équipe efficace.',
        categorie: 'Management',
        duree: '2 jours',
        niveau: 'Intermédiaire',
        formateur: 'Dr. Philippe Mercier',
        dateDebut: '2024-12-05',
        dateFin: '2024-12-06',
        placesDisponibles: 8,
        placesTotales: 15,
        statut: 'À venir',
        participants: ['emp001', 'emp003', 'emp004']
    },
    {
        id: 'form002',
        titre: 'Développement Web Avancé avec Next.js',
        description: 'Maîtrisez Next.js 14, le framework React pour la production.',
        categorie: 'Développement',
        duree: '5 jours',
        niveau: 'Avancé',
        formateur: 'Sarah Dubois',
        dateDebut: '2024-11-25',
        dateFin: '2024-11-29',
        placesDisponibles: 3,
        placesTotales: 12,
        statut: 'En cours',
        participants: ['emp002']
    },
    {
        id: 'form003',
        titre: 'Communication Interpersonnelle',
        description: 'Développez vos compétences en communication pour améliorer vos relations professionnelles.',
        categorie: 'Soft Skills',
        duree: '1 jour',
        niveau: 'Débutant',
        formateur: 'Marie Fontaine',
        dateDebut: '2024-12-10',
        dateFin: '2024-12-10',
        placesDisponibles: 12,
        placesTotales: 20,
        statut: 'À venir'
    },
    {
        id: 'form004',
        titre: 'Marketing Digital et SEO',
        description: 'Stratégies avancées de marketing digital et optimisation pour les moteurs de recherche.',
        categorie: 'Marketing',
        duree: '3 jours',
        niveau: 'Intermédiaire',
        formateur: 'Jean-Marc Renard',
        dateDebut: '2024-11-15',
        dateFin: '2024-11-17',
        placesDisponibles: 0,
        placesTotales: 10,
        statut: 'Terminée',
        participants: ['emp003']
    },
    {
        id: 'form005',
        titre: 'Gestion du Temps et Productivité',
        description: 'Techniques éprouvées pour optimiser votre temps et augmenter votre productivité.',
        categorie: 'Développement Personnel',
        duree: '4 heures',
        niveau: 'Débutant',
        formateur: 'Claire Moreau',
        dateDebut: '2024-12-15',
        dateFin: '2024-12-15',
        placesDisponibles: 15,
        placesTotales: 15,
        statut: 'À venir'
    }
];

export const documents: Document[] = [
    {
        id: 'doc001',
        titre: 'Contrat de Travail CDI - Modèle',
        type: 'Contrat',
        description: 'Modèle de contrat de travail à durée indéterminée conforme à la législation française.',
        dateCreation: '2024-01-15',
        dateModification: '2024-09-20',
        url: '/documents/contrat-cdi-modele.pdf',
        taille: '245 KB',
        requiresSignature: true,
        signedBy: ['emp001', 'emp002', 'emp003']
    },
    {
        id: 'doc002',
        titre: 'Politique de Télétravail',
        type: 'Politique',
        description: 'Règlement interne concernant le télétravail et les modalités d\'organisation.',
        dateCreation: '2024-03-10',
        dateModification: '2024-10-05',
        url: '/documents/politique-teletravail.pdf',
        taille: '180 KB',
        requiresSignature: false
    },
    {
        id: 'doc003',
        titre: 'Procédure de Demande de Congés',
        type: 'Procédure',
        description: 'Guide complet pour effectuer une demande de congés payés ou exceptionnels.',
        dateCreation: '2024-02-01',
        dateModification: '2024-02-01',
        url: '/documents/procedure-conges.pdf',
        taille: '120 KB',
        requiresSignature: false
    },
    {
        id: 'doc004',
        titre: 'Charte Informatique',
        type: 'Politique',
        description: 'Règles d\'utilisation des ressources informatiques de l\'entreprise.',
        dateCreation: '2024-01-20',
        dateModification: '2024-08-15',
        url: '/documents/charte-informatique.pdf',
        taille: '210 KB',
        requiresSignature: true,
        signedBy: ['emp001', 'emp002', 'emp003', 'emp004', 'emp005']
    },
    {
        id: 'doc005',
        titre: 'Formulaire de Demande de Formation',
        type: 'Formulaire',
        description: 'Formulaire à remplir pour demander une formation professionnelle.',
        dateCreation: '2024-04-12',
        dateModification: '2024-04-12',
        url: '/documents/formulaire-formation.pdf',
        taille: '95 KB',
        requiresSignature: false
    },
    {
        id: 'doc006',
        titre: 'Règlement Intérieur',
        type: 'Politique',
        description: 'Règlement intérieur de l\'entreprise TWEE RECRU.',
        dateCreation: '2024-01-05',
        dateModification: '2024-07-10',
        url: '/documents/reglement-interieur.pdf',
        taille: '320 KB',
        requiresSignature: true,
        signedBy: ['emp001', 'emp002', 'emp003', 'emp004']
    }
];

export const statistiquesRH: StatistiquesRH = {
    nombreEmployes: 5,
    tauxAbsenteisme: 3.2,
    formationsEnCours: 1,
    recrutementsEnCours: 4,
    competencesGlobales: [
        { competence: 'Communication', niveau: 85 },
        { competence: 'Leadership', niveau: 72 },
        { competence: 'Développement', niveau: 68 },
        { competence: 'Marketing', niveau: 75 },
        { competence: 'Vente', niveau: 80 },
        { competence: 'Gestion de projet', niveau: 70 }
    ],
    evolutionEffectifs: [
        { mois: 'Juin', effectif: 3 },
        { mois: 'Juillet', effectif: 3 },
        { mois: 'Août', effectif: 4 },
        { mois: 'Septembre', effectif: 4 },
        { mois: 'Octobre', effectif: 5 },
        { mois: 'Novembre', effectif: 5 }
    ]
};
