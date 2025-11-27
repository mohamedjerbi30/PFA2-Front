// Page Recrutement
'use client';

import { useState } from 'react';
import { candidats } from '@/data/sampleData';
import { Card, Badge, Button, Table, Input, Select, Textarea } from '@/components/UI';
import ProtectedRoute from '@/components/ProtectedRoute';
export default function RecrutementPage() {
    const [showForm, setShowForm] = useState(false);

    return (
        <ProtectedRoute>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* En-tête */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Recrutement</h1>
                    <p className="text-gray-600">
                        Gérez vos candidatures et lancez des interviews IA
                    </p>
                </div>

                {/* Statistiques */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card className="p-6">
                        <div className="text-sm text-gray-600 mb-1">Total Candidatures</div>
                        <div className="text-3xl font-bold text-blue-600">{candidats.length}</div>
                    </Card>
                    <Card className="p-6">
                        <div className="text-sm text-gray-600 mb-1">Présélectionnés</div>
                        <div className="text-3xl font-bold text-green-600">
                            {candidats.filter(c => c.statut === 'Présélectionné').length}
                        </div>
                    </Card>
                    <Card className="p-6">
                        <div className="text-sm text-gray-600 mb-1">Interview IA</div>
                        <div className="text-3xl font-bold text-purple-600">
                            {candidats.filter(c => c.statut === 'Interview IA').length}
                        </div>
                    </Card>
                    <Card className="p-6">
                        <div className="text-sm text-gray-600 mb-1">Score CV Moyen</div>
                        <div className="text-3xl font-bold text-yellow-600">
                            {Math.round(candidats.reduce((acc, c) => acc + c.scoreCv, 0) / candidats.length)}
                        </div>
                    </Card>
                </div>

                {/* Actions */}
                <div className="mb-6 flex flex-col sm:flex-row gap-4">
                    <Input
                        placeholder="Rechercher un candidat..."
                        className="flex-grow"
                    />
                    <Button onClick={() => setShowForm(!showForm)}>
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            {showForm ? 'Masquer le formulaire' : 'Nouvelle candidature'}
                        </span>
                    </Button>
                </div>

                {/* Formulaire de candidature */}
                {showForm && (
                    <Card className="p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Formulaire de Dépôt de CV
                        </h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input label="Nom" placeholder="Nom du candidat" required />
                                <Input label="Prénom" placeholder="Prénom du candidat" required />
                                <Input label="Email" type="email" placeholder="email@exemple.fr" required />
                                <Input label="Téléphone" type="tel" placeholder="+33 6 12 34 56 78" required />
                            </div>

                            <Select
                                label="Poste visé"
                                required
                                options={[
                                    { value: 'dev-backend', label: 'Développeur Backend' },
                                    { value: 'dev-frontend', label: 'Développeur Frontend' },
                                    { value: 'dev-fullstack', label: 'Développeur Full Stack' },
                                    { value: 'data-analyst', label: 'Data Analyst' },
                                    { value: 'rh', label: 'Chargé(e) de Recrutement' },
                                    { value: 'marketing', label: 'Responsable Marketing' },
                                    { value: 'commercial', label: 'Commercial' }
                                ]}
                            />

                            <Input
                                label="Années d'expérience"
                                type="number"
                                placeholder="Ex: 3"
                                required
                            />

                            <Textarea
                                label="Compétences principales"
                                placeholder="Listez vos compétences principales séparées par des virgules"
                                rows={3}
                                required
                            />

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    CV (PDF) <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="file"
                                    accept=".pdf"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                />
                            </div>

                            <Textarea
                                label="Lettre de motivation"
                                placeholder="Expliquez votre motivation pour ce poste..."
                                rows={5}
                            />

                            <div className="flex gap-4">
                                <Button type="submit" size="lg">
                                    Soumettre la candidature
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="lg"
                                    onClick={() => setShowForm(false)}
                                >
                                    Annuler
                                </Button>
                            </div>
                        </form>
                    </Card>
                )}

                {/* Tableau des candidats */}
                <Card className="overflow-hidden">
                    <Table headers={['Candidat', 'Poste visé', 'Date', 'Score CV', 'Expérience', 'Statut', 'Actions']}>
                        {candidats.map((candidat) => (
                            <tr key={candidat.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-purple-600 font-semibold">
                                                {candidat.prenom[0]}{candidat.nom[0]}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">
                                                {candidat.prenom} {candidat.nom}
                                            </div>
                                            <div className="text-sm text-gray-500">{candidat.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-700">{candidat.posteVise}</td>
                                <td className="px-6 py-4 text-gray-700">
                                    {new Date(candidat.datePostulation).toLocaleDateString('fr-FR')}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-16 bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full ${candidat.scoreCv >= 85 ? 'bg-green-500' :
                                                    candidat.scoreCv >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                                                    }`}
                                                style={{ width: `${candidat.scoreCv}%` }}
                                            />
                                        </div>
                                        <span className="font-semibold text-gray-900">{candidat.scoreCv}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-700">
                                    {candidat.experience} {candidat.experience > 1 ? 'ans' : 'an'}
                                </td>
                                <td className="px-6 py-4">
                                    <Badge variant={
                                        candidat.statut === 'Accepté' ? 'success' :
                                            candidat.statut === 'Présélectionné' ? 'info' :
                                                candidat.statut === 'Interview IA' ? 'warning' :
                                                    candidat.statut === 'Refusé' ? 'danger' : 'default'
                                    }>
                                        {candidat.statut}
                                    </Badge>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        <Button size="sm" variant="outline">
                                            Voir CV
                                        </Button>
                                        {candidat.statut === 'Présélectionné' && (
                                            <Button size="sm" variant="primary">
                                                Interview IA
                                            </Button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </Table>
                </Card>
            </div>
        </ProtectedRoute>
    );
}
