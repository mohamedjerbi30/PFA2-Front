// Page Gestion des Employés
'use client';

import { useState } from 'react';
import { employes } from '@/data/sampleData';
import { Card, Badge, Button, Table, Modal, Input } from '@/components/UI';
import { Employe } from '@/types';
import ProtectedRoute from '@/components/ProtectedRoute';
export default function EmployesPage() {
    const [selectedEmploye, setSelectedEmploye] = useState<Employe | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewDetails = (employe: Employe) => {
        setSelectedEmploye(employe);
        setIsModalOpen(true);
    };

    return (
        <ProtectedRoute>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* En-tête */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Gestion des Employés</h1>
                    <p className="text-gray-600">
                        Gérez et consultez les informations de tous vos employés
                    </p>
                </div>

                {/* Statistiques rapides */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card className="p-6 hover:shadow-xl transition-all">
                        <div className="text-sm text-gray-600 mb-1">Total Employés</div>
                        <div className="text-3xl font-bold text-[#1988A7]">{employes.length}</div>
                    </Card>
                    <Card className="p-6">
                        <div className="text-sm text-gray-600 mb-1">Actifs</div>
                        <div className="text-3xl font-bold text-green-600">
                            {employes.filter(e => e.statut === 'Actif').length}
                        </div>
                    </Card>
                    <Card className="p-6">
                        <div className="text-sm text-gray-600 mb-1">En congé</div>
                        <div className="text-3xl font-bold text-yellow-600">
                            {employes.filter(e => e.statut === 'En congé').length}
                        </div>
                    </Card>
                    <Card className="p-6">
                        <div className="text-sm text-gray-600 mb-1">Départements</div>
                        <div className="text-3xl font-bold text-purple-600">
                            {new Set(employes.map(e => e.departement)).size}
                        </div>
                    </Card>
                </div>

                {/* Actions */}
                <div className="mb-6 flex flex-col sm:flex-row gap-4">
                    <Input
                        placeholder="Rechercher un employé..."
                        className="flex-grow"
                    />
                    <Button>
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Ajouter un employé
                        </span>
                    </Button>
                </div>

                {/* Tableau des employés */}
                <Card className="overflow-hidden">
                    <Table headers={['Nom', 'Poste', 'Département', 'Date d\'embauche', 'Statut', 'Actions']}>
                        {employes.map((employe) => (
                            <tr key={employe.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-[#1988A7]/10 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-[#1988A7] font-semibold">
                                                {employe.prenom[0]}{employe.nom[0]}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">
                                                {employe.prenom} {employe.nom}
                                            </div>
                                            <div className="text-sm text-gray-500">{employe.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-700">{employe.poste}</td>
                                <td className="px-6 py-4 text-gray-700">{employe.departement}</td>
                                <td className="px-6 py-4 text-gray-700">
                                    {new Date(employe.dateEmbauche).toLocaleDateString('fr-FR')}
                                </td>
                                <td className="px-6 py-4">
                                    <Badge variant={
                                        employe.statut === 'Actif' ? 'success' :
                                            employe.statut === 'En congé' ? 'warning' : 'default'
                                    }>
                                        {employe.statut}
                                    </Badge>
                                </td>
                                <td className="px-6 py-4">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => handleViewDetails(employe)}
                                    >
                                        Voir détails
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </Table>
                </Card>

                {/* Modal de détails */}
                {selectedEmploye && (
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        title={`${selectedEmploye.prenom} ${selectedEmploye.nom}`}
                    >
                        <div className="space-y-6">
                            {/* Informations personnelles */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    Informations Personnelles
                                </h3>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="text-gray-600">Email:</span>
                                        <p className="font-medium">{selectedEmploye.email}</p>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Téléphone:</span>
                                        <p className="font-medium">{selectedEmploye.telephone}</p>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Poste:</span>
                                        <p className="font-medium">{selectedEmploye.poste}</p>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Département:</span>
                                        <p className="font-medium">{selectedEmploye.departement}</p>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Date d&apos;embauche:</span>
                                        <p className="font-medium">
                                            {new Date(selectedEmploye.dateEmbauche).toLocaleDateString('fr-FR')}
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Statut:</span>
                                        <p className="font-medium">{selectedEmploye.statut}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Compétences */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Compétences</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedEmploye.competences.map((comp, index) => (
                                        <Badge key={index} variant="info">{comp}</Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Soft Skills */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Soft Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedEmploye.softSkills.map((skill, index) => (
                                        <Badge key={index} variant="success">{skill}</Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Langues */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Langues</h3>
                                <div className="space-y-2">
                                    {selectedEmploye.langues.map((langue, index) => (
                                        <div key={index} className="flex justify-between items-center">
                                            <span className="font-medium">{langue.langue}</span>
                                            <Badge>{langue.niveau}</Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Historique */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Historique</h3>
                                <div className="space-y-3">
                                    {selectedEmploye.historique.map((hist, index) => (
                                        <div key={index} className="border-l-4 border-[#1988A7] pl-4 py-2">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Badge variant={
                                                    hist.type === 'Embauche' ? 'success' :
                                                        hist.type === 'Promotion' ? 'info' : 'default'
                                                }>
                                                    {hist.type}
                                                </Badge>
                                                <span className="text-sm text-gray-600">
                                                    {new Date(hist.date).toLocaleDateString('fr-FR')}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-700">{hist.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}
            </div>
        </ProtectedRoute>
    );
}
