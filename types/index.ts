// Types pour la plateforme TWEE RECRU

export interface Employe {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  poste: string;
  departement: string;
  dateEmbauche: string;
  salaire: number;
  competences: string[];
  softSkills: string[];
  langues: { langue: string; niveau: string }[];
  photo?: string;
  statut: 'Actif' | 'En congé' | 'Inactif';
  historique: HistoriqueEmploye[];
}

export interface HistoriqueEmploye {
  date: string;
  type: 'Embauche' | 'Promotion' | 'Mutation' | 'Formation';
  description: string;
  ancienPoste?: string;
  nouveauPoste?: string;
}

export interface Candidat {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  posteVise: string;
  datePostulation: string;
  scoreCv: number;
  statut: 'En attente' | 'Présélectionné' | 'Interview IA' | 'Accepté' | 'Refusé';
  cvUrl?: string;
  competences: string[];
  experience: number; // en années
}

export interface Formation {
  id: string;
  titre: string;
  description: string;
  categorie: string;
  duree: string; // ex: "3 heures", "2 jours"
  niveau: 'Débutant' | 'Intermédiaire' | 'Avancé';
  formateur: string;
  dateDebut: string;
  dateFin: string;
  placesDisponibles: number;
  placesTotales: number;
  statut: 'À venir' | 'En cours' | 'Terminée';
  participants?: string[]; // IDs des employés
}

export interface InscriptionFormation {
  id: string;
  employeId: string;
  formationId: string;
  dateInscription: string;
  progression: number; // 0-100
  quizReussi: boolean;
  attestationUrl?: string;
}

export interface Document {
  id: string;
  titre: string;
  type: 'Contrat' | 'Politique' | 'Procédure' | 'Formulaire' | 'Autre';
  description: string;
  dateCreation: string;
  dateModification: string;
  url: string;
  taille: string;
  requiresSignature: boolean;
  signedBy?: string[];
}

export interface StatistiquesRH {
  nombreEmployes: number;
  tauxAbsenteisme: number;
  formationsEnCours: number;
  recrutementsEnCours: number;
  competencesGlobales: { competence: string; niveau: number }[];
  evolutionEffectifs: { mois: string; effectif: number }[];
}

export interface Utilisateur {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  role: 'Admin' | 'RH' | 'Manager' | 'Employé' | 'Candidat';
  photo?: string;
}
