// Page Formations
'use client';

import { formations } from '@/data/sampleData';
import { Card, Badge, Button } from '@/components/UI';
import ProtectedRoute from '@/components/ProtectedRoute';
export default function FormationsPage() {
    return (
        <ProtectedRoute>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* En-tête */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Formation Interne</h1>
                    <p className="text-gray-600">
                        Catalogue des formations disponibles pour développer vos compétences
                    </p>
                </div>

                {/* Statistiques */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card className="p-6">
                        <div className="text-sm text-gray-600 mb-1">Total Formations</div>
                        <div className="text-3xl font-bold text-[#1988A7]">{formations.length}</div>
                    </Card>
                    <Card className="p-6">
                        <div className="text-sm text-gray-600 mb-1">En cours</div>
                        <div className="text-3xl font-bold text-green-600">
                            {formations.filter(f => f.statut === 'En cours').length}
                        </div>
                    </Card>
                    <Card className="p-6">
                        <div className="text-sm text-gray-600 mb-1">À venir</div>
                        <div className="text-3xl font-bold text-yellow-600">
                            {formations.filter(f => f.statut === 'À venir').length}
                        </div>
                    </Card>
                    <Card className="p-6">
                        <div className="text-sm text-gray-600 mb-1">Terminées</div>
                        <div className="text-3xl font-bold text-gray-600">
                            {formations.filter(f => f.statut === 'Terminée').length}
                        </div>
                    </Card>
                </div>

                {/* Filtres */}
                <div className="mb-6 flex flex-wrap gap-3">
                    <Button variant="outline" size="sm">Toutes</Button>
                    <Button variant="outline" size="sm">Management</Button>
                    <Button variant="outline" size="sm">Développement</Button>
                    <Button variant="outline" size="sm">Marketing</Button>
                    <Button variant="outline" size="sm">Soft Skills</Button>
                </div>

                {/* Catalogue des formations */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {formations.map((formation) => (
                        <Card key={formation.id} className="p-6 flex flex-col">
                            {/* En-tête de la carte */}
                            <div className="mb-4">
                                <div className="flex items-start justify-between mb-3">
                                    <Badge variant={
                                        formation.statut === 'En cours' ? 'success' :
                                            formation.statut === 'À venir' ? 'info' : 'default'
                                    }>
                                        {formation.statut}
                                    </Badge>
                                    <Badge variant="warning">{formation.niveau}</Badge>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {formation.titre}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    {formation.description}
                                </p>
                            </div>

                            {/* Informations */}
                            <div className="space-y-2 mb-4 text-sm">
                                <div className="flex items-center text-gray-700">
                                    <svg className="w-4 h-4 mr-2 text-[#1988A7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span>Formateur: {formation.formateur}</span>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <svg className="w-4 h-4 mr-2 text-[#1988A7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Durée: {formation.duree}</span>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <svg className="w-4 h-4 mr-2 text-[#1988A7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>
                                        {new Date(formation.dateDebut).toLocaleDateString('fr-FR')}
                                        {formation.dateDebut !== formation.dateFin &&
                                            ` - ${new Date(formation.dateFin).toLocaleDateString('fr-FR')}`
                                        }
                                    </span>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span>
                                        {formation.placesDisponibles} / {formation.placesTotales} places disponibles
                                    </span>
                                </div>
                            </div>

                            {/* Barre de progression des places */}
                            <div className="mb-4">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-[#1988A7] h-2 rounded-full transition-all"
                                        style={{
                                            width: `${((formation.placesTotales - formation.placesDisponibles) / formation.placesTotales) * 100}%`
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="mt-auto">
                                {formation.placesDisponibles > 0 ? (
                                    <Button className="w-full">
                                        S&apos;inscrire
                                    </Button>
                                ) : (
                                    <Button className="w-full" variant="secondary" disabled>
                                        Complet
                                    </Button>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Section Mes Formations */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Mes Formations</h2>
                    <Card className="p-6">
                        <div className="space-y-4">
                            <FormationProgress
                                titre="Développement Web Avancé avec Next.js"
                                progression={65}
                                dateDebut="25/11/2024"
                                quizReussi={false}
                            />
                            <FormationProgress
                                titre="Marketing Digital et SEO"
                                progression={100}
                                dateDebut="15/11/2024"
                                quizReussi={true}
                                attestationDisponible
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </ProtectedRoute>
    );
}

// Composant pour afficher la progression d'une formation
function FormationProgress({
    titre,
    progression,
    dateDebut,
    quizReussi,
    attestationDisponible = false
}: {
    titre: string;
    progression: number;
    dateDebut: string;
    quizReussi: boolean;
    attestationDisponible?: boolean;
}) {
    return (
        <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
                <div>
                    <h3 className="font-semibold text-gray-900">{titre}</h3>
                    <p className="text-sm text-gray-600">Débuté le {dateDebut}</p>
                </div>
                <Badge variant={progression === 100 ? 'success' : 'info'}>
                    {progression}%
                </Badge>
            </div>

            <div className="mb-3">
                <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                        className={`h-3 rounded-full transition-all ${progression === 100 ? 'bg-green-500' : 'bg-[#1988A7]'
                            }`}
                        style={{ width: `${progression}%` }}
                    />
                </div>
            </div>

            <div className="flex gap-2">
                {progression === 100 && !quizReussi && (
                    <Button size="sm" variant="primary">
                        Passer le quiz
                    </Button>
                )}
                {quizReussi && attestationDisponible && (
                    <Button size="sm" variant="success">
                        Télécharger l&apos;attestation
                    </Button>
                )}
                {progression < 100 && (
                    <Button size="sm" variant="outline">
                        Continuer la formation
                    </Button>
                )}
            </div>
        </div>
    );
}
