// Page Dashboard RH
'use client';

import { statistiquesRH, employes, candidats, formations } from '@/data/sampleData';
import { Card, StatCard, Badge } from '@/components/UI';
import ProtectedRoute from '@/components/ProtectedRoute';

function DashboardContent() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* En-tête */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard RH</h1>
                <p className="text-gray-600">
                    Vue d&apos;ensemble de vos indicateurs RH
                </p>
            </div>

            {/* KPIs principaux */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    title="Employés Actifs"
                    value={statistiquesRH.nombreEmployes}
                    icon={
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    }
                    trend="up"
                    trendValue="+2 ce mois"
                />
                <StatCard
                    title="Taux d'Absentéisme"
                    value={`${statistiquesRH.tauxAbsenteisme}%`}
                    icon={
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    }
                    trend="down"
                    trendValue="-0.5%"
                />
                <StatCard
                    title="Formations en Cours"
                    value={statistiquesRH.formationsEnCours}
                    icon={
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    }
                />
                <StatCard
                    title="Recrutements"
                    value={statistiquesRH.recrutementsEnCours}
                    icon={
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    }
                    trend="up"
                    trendValue="+1 cette semaine"
                />
            </div>

            {/* Graphiques et statistiques */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Évolution des effectifs */}
                <Card className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Évolution des Effectifs</h2>
                    <div className="space-y-3">
                        {statistiquesRH.evolutionEffectifs.map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <span className="text-gray-700 font-medium">{item.mois}</span>
                                <div className="flex items-center gap-3 flex-1 ml-4">
                                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                                        <div
                                            className="bg-[#1988A7] h-3 rounded-full transition-all"
                                            style={{ width: `${(item.effectif / 5) * 100}%` }}
                                        />
                                    </div>
                                    <span className="text-gray-900 font-semibold w-8">{item.effectif}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Compétences globales */}
                <Card className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Compétences Globales</h2>
                    <div className="space-y-3">
                        {statistiquesRH.competencesGlobales.map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <span className="text-gray-700 font-medium">{item.competence}</span>
                                <div className="flex items-center gap-3 flex-1 ml-4">
                                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                                        <div
                                            className={`h-3 rounded-full transition-all ${item.niveau >= 80 ? 'bg-green-500' :
                                                item.niveau >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                                                }`}
                                            style={{ width: `${item.niveau}%` }}
                                        />
                                    </div>
                                    <span className="text-gray-900 font-semibold w-8">{item.niveau}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            {/* Activités récentes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Derniers employés */}
                <Card className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Derniers Employés</h2>
                    <div className="space-y-4">
                        {employes.slice(0, 3).map((employe) => (
                            <div key={employe.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-[#1988A7]/10 rounded-full flex items-center justify-center mr-3">
                                        <span className="text-[#1988A7] font-semibold text-sm">
                                            {employe.prenom[0]}{employe.nom[0]}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            {employe.prenom} {employe.nom}
                                        </div>
                                        <div className="text-sm text-gray-600">{employe.poste}</div>
                                    </div>
                                </div>
                                <Badge variant="success">{employe.statut}</Badge>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Candidatures récentes */}
                <Card className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Candidatures Récentes</h2>
                    <div className="space-y-4">
                        {candidats.slice(0, 3).map((candidat) => (
                            <div key={candidat.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                        <span className="text-purple-600 font-semibold text-sm">
                                            {candidat.prenom[0]}{candidat.nom[0]}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            {candidat.prenom} {candidat.nom}
                                        </div>
                                        <div className="text-sm text-gray-600">{candidat.posteVise}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-semibold text-[#1988A7]">{candidat.scoreCv}</div>
                                    <div className="text-xs text-gray-500">Score CV</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            {/* Formations à venir */}
            <div className="mt-8">
                <Card className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Formations à Venir</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {formations.filter(f => f.statut === 'À venir').map((formation) => (
                            <div key={formation.id} className="p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-start justify-between mb-2">
                                    <Badge variant="info">{formation.niveau}</Badge>
                                    <span className="text-xs text-gray-600">
                                        {new Date(formation.dateDebut).toLocaleDateString('fr-FR')}
                                    </span>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{formation.titre}</h3>
                                <div className="text-sm text-gray-600">
                                    {formation.placesDisponibles} places disponibles
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default function DashboardPage() {
    return (
        <ProtectedRoute>
            <DashboardContent />
        </ProtectedRoute>
    );
}
