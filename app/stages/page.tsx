'use client';
import React, { useState } from 'react';
import { Search, Plus, Upload, Brain, GraduationCap, Calendar, MapPin, Clock, Filter, Star, TrendingUp, Award, Briefcase, User } from 'lucide-react';
import ProtectedRoute from '@/components/ProtectedRoute';
export default function StagesPage() {
  const [activeTab, setActiveTab] = useState('offres');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('tous');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showCVAnalysis, setShowCVAnalysis] = useState(false);

  // Données simulées pour les offres de stage
  const offresStage = [
    {
      id: 1,
      titre: 'Stage développeur Full Stack',
      type: 'PFE',
      duree: '6 mois',
      debut: '01/02/2025',
      lieu: 'Tunis',
      departement: 'IT',
      competences: ['React', 'Node.js', 'MongoDB', 'Git'],
      niveau: 'Bac+5',
      candidatures: 12,
      statut: 'active'
    },
    {
      id: 2,
      titre: 'Stage Marketing Digital',
      type: 'Stage été',
      duree: '3 mois',
      debut: '01/07/2025',
      lieu: 'Ariana',
      departement: 'Marketing',
      competences: ['SEO', 'Social Media', 'Analytics', 'Content Writing'],
      niveau: 'Bac+3',
      candidatures: 8,
      statut: 'active'
    },
    {
      id: 3,
      titre: 'Stage Data Analyst',
      type: 'PFE',
      duree: '6 mois',
      debut: '15/02/2025',
      lieu: 'Sfax',
      departement: 'Data',
      competences: ['Python', 'SQL', 'Power BI', 'Machine Learning'],
      niveau: 'Bac+5',
      candidatures: 15,
      statut: 'active'
    },
    {
      id: 4,
      titre: 'Stage Design UI/UX',
      type: 'Stage',
      duree: '4 mois',
      debut: '01/03/2025',
      lieu: 'Tunis',
      departement: 'Design',
      competences: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      niveau: 'Bac+4',
      candidatures: 6,
      statut: 'brouillon'
    }
  ];

  // Données simulées pour les candidatures
  const candidatures = [
    {
      id: 1,
      nom: 'Ahmed Ben Ali',
      email: 'ahmed.benali@email.com',
      telephone: '+216 20 123 456',
      offre: 'Stage développeur Full Stack',
      ecole: 'ESPRIT',
      niveau: 'Bac+5',
      datePostulation: '10/12/2024',
      statut: 'en_attente',
      scoreIA: 92,
      competencesMatch: ['React', 'Node.js', 'Git'],
      experience: '2 projets académiques',
      cvUrl: '#'
    },
    {
      id: 2,
      nom: 'Fatma Gharbi',
      email: 'fatma.gharbi@email.com',
      telephone: '+216 25 456 789',
      offre: 'Stage Marketing Digital',
      ecole: 'IHEC Carthage',
      niveau: 'Bac+3',
      datePostulation: '11/12/2024',
      statut: 'accepte',
      scoreIA: 88,
      competencesMatch: ['SEO', 'Social Media', 'Analytics'],
      experience: '1 stage précédent',
      cvUrl: '#'
    },
    {
      id: 3,
      nom: 'Mohamed Tlili',
      email: 'mohamed.tlili@email.com',
      telephone: '+216 22 789 123',
      offre: 'Stage Data Analyst',
      ecole: 'INSAT',
      niveau: 'Bac+5',
      datePostulation: '09/12/2024',
      statut: 'entretien',
      scoreIA: 95,
      competencesMatch: ['Python', 'SQL', 'Power BI', 'Machine Learning'],
      experience: '3 projets data science',
      cvUrl: '#'
    },
    {
      id: 4,
      nom: 'Salma Kacem',
      email: 'salma.kacem@email.com',
      telephone: '+216 28 321 654',
      offre: 'Stage Design UI/UX',
      ecole: 'ESAC',
      niveau: 'Bac+4',
      datePostulation: '12/12/2024',
      statut: 'refuse',
      scoreIA: 75,
      competencesMatch: ['Figma', 'Prototyping'],
      experience: 'Portfolio en ligne',
      cvUrl: '#'
    }
  ];

  const getStatutBadge = (statut) => {
    const styles = {
      active: 'bg-green-100 text-green-700',
      brouillon: 'bg-gray-100 text-gray-700',
      cloturee: 'bg-red-100 text-red-700'
    };
    const labels = {
      active: 'Active',
      brouillon: 'Brouillon',
      cloturee: 'Clôturée'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[statut]}`}>
        {labels[statut]}
      </span>
    );
  };

  const getCandidatureStatutBadge = (statut) => {
    const styles = {
      en_attente: 'bg-yellow-100 text-yellow-700',
      accepte: 'bg-green-100 text-green-700',
      refuse: 'bg-red-100 text-red-700',
      entretien: 'bg-blue-100 text-blue-700'
    };
    const labels = {
      en_attente: 'En attente',
      accepte: 'Accepté',
      refuse: 'Refusé',
      entretien: 'Entretien'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[statut]}`}>
        {labels[statut]}
      </span>
    );
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-blue-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <ProtectedRoute>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
                <GraduationCap className="w-10 h-10" />
                Gestion des Stages
              </h1>
              <p className="text-purple-100 text-lg">
                Recrutement intelligent de stagiaires et PFE avec analyse IA
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCVAnalysis(true)}
                className="flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all shadow-lg"
              >
                <Brain className="w-5 h-5" />
                Analyser CV avec IA
              </button>
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-all shadow-lg"
              >
                <Plus className="w-5 h-5" />
                Nouvelle Offre
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Offres actives</p>
                  <p className="text-3xl font-bold">4</p>
                </div>
                <Briefcase className="w-8 h-8 text-purple-200" />
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Candidatures</p>
                  <p className="text-3xl font-bold">41</p>
                </div>
                <User className="w-8 h-8 text-purple-200" />
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Score moyen IA</p>
                  <p className="text-3xl font-bold">87%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-200" />
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Stages en cours</p>
                  <p className="text-3xl font-bold">8</p>
                </div>
                <Award className="w-8 h-8 text-purple-200" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('offres')}
              className={`px-6 py-4 font-medium transition-colors ${
                activeTab === 'offres'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Offres de stage ({offresStage.length})
            </button>
            <button
              onClick={() => setActiveTab('candidatures')}
              className={`px-6 py-4 font-medium transition-colors ${
                activeTab === 'candidatures'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Candidatures ({candidatures.length})
            </button>
            <button
              onClick={() => setActiveTab('stagiaires')}
              className={`px-6 py-4 font-medium transition-colors ${
                activeTab === 'stagiaires'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Stagiaires actifs (8)
            </button>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher une offre ou candidat..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            >
              <option value="tous">Tous les types</option>
              <option value="pfe">PFE uniquement</option>
              <option value="stage">Stages courts</option>
              <option value="stage_ete">Stages été</option>
            </select>
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-5 h-5" />
              Plus de filtres
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'offres' && (
          <div className="grid gap-6">
            {offresStage.map((offre) => (
              <div key={offre.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{offre.titre}</h3>
                        {getStatutBadge(offre.statut)}
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                          {offre.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {offre.duree}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Début: {offre.debut}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {offre.lieu}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {offre.departement}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-600">{offre.candidatures}</div>
                      <div className="text-sm text-gray-600">candidatures</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Compétences requises:</p>
                    <div className="flex flex-wrap gap-2">
                      {offre.competences.map((comp, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
                      Voir les candidatures
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      Modifier
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      Dupliquer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
     
        )}

        {activeTab === 'candidatures' && (
          <div className="grid gap-6">
            {candidatures.map((candidature) => (
              <div key={candidature.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {candidature.nom.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{candidature.nom}</h3>
                        <p className="text-gray-600 mb-2">{candidature.email}</p>
                        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                          <span>{candidature.ecole}</span>
                          <span>•</span>
                          <span>{candidature.niveau}</span>
                          <span>•</span>
                          <span>{candidature.telephone}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-bold mb-1 ${getScoreColor(candidature.scoreIA)}`}>
                        {candidature.scoreIA}%
                      </div>
                      <div className="text-sm text-gray-600 flex items-center gap-1">
                        <Brain className="w-4 h-4" />
                        Score IA
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Offre: {candidature.offre}</p>
                    <p className="text-sm text-gray-600 mb-3">Postulé le: {candidature.datePostulation}</p>
                    <div className="mb-3">
                      <p className="text-sm font-medium text-gray-700 mb-2">Compétences matching:</p>
                      <div className="flex flex-wrap gap-2">
                        {candidature.competencesMatch.map((comp, idx) => (
                          <span key={idx} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" />
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Expérience:</span> {candidature.experience}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      {getCandidatureStatutBadge(candidature.statut)}
                    </div>
                    <div className="flex gap-3">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Voir CV complet
                      </button>
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        Planifier entretien
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        Contacter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'stagiaires' && (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <GraduationCap className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Stagiaires actifs</h3>
            <p className="text-gray-600 mb-6">
              Gérez les stagiaires actuellement en poste dans votre entreprise
            </p>
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
              Voir les stagiaires
            </button>
          </div>
        )}
      </div>

      {/* CV Analysis Modal */}
      {showCVAnalysis && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Analyse IA des CV</h3>
                <p className="text-gray-600">
                  Upload un CV pour obtenir une analyse automatique et un score de matching
                </p>
              </div>
              <button
                onClick={() => setShowCVAnalysis(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center mb-6 hover:border-purple-500 transition-colors cursor-pointer">
              <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-900 mb-2">
                Glissez-déposez un CV ici
              </p>
              <p className="text-gray-600 mb-4">ou cliquez pour sélectionner un fichier</p>
              <p className="text-sm text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <div className="flex gap-3">
                <Brain className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-blue-900 mb-1">L'IA analysera automatiquement:</p>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Compétences techniques et soft skills</li>
                    <li>• Expérience et projets réalisés</li>
                    <li>• Niveau d'études et certifications</li>
                    <li>• Score de matching avec vos offres</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowCVAnalysis(false)}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Annuler
              </button>
              <button className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
                Analyser le CV
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </ProtectedRoute>
  );
}