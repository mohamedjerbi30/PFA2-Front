// Page Documents
'use client';

import { documents } from '@/data/sampleData';
import { Card, Badge, Button, Table, Input } from '@/components/UI';
import ProtectedRoute from '@/components/ProtectedRoute';
export default function DocumentsPage() {
    return (
        <ProtectedRoute>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* En-tête */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Documents Internes</h1>
                    <p className="text-gray-600">
                        Accédez à tous vos documents RH et gérez les signatures électroniques
                    </p>
                </div>

                {/* Statistiques */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card className="p-6">
                        <div className="text-sm text-gray-600 mb-1">Total Documents</div>
                        <div className="text-3xl font-bold text-[#1988A7]">{documents.length}</div>
                    </Card>
                    <Card className="p-6">
                        <div className="text-sm text-gray-600 mb-1">Contrats</div>
                        <div className="text-3xl font-bold text-green-600">
                            {documents.filter(d => d.type === 'Contrat').length}
                        </div>
                    </Card>
                    <Card className="p-6">
                        <div className="text-sm text-gray-600 mb-1">Politiques</div>
                        <div className="text-3xl font-bold text-purple-600">
                            {documents.filter(d => d.type === 'Politique').length}
                        </div>
                    </Card>
                    <Card className="p-6">
                        <div className="text-sm text-gray-600 mb-1">À signer</div>
                        <div className="text-3xl font-bold text-yellow-600">
                            {documents.filter(d => d.requiresSignature).length}
                        </div>
                    </Card>
                </div>

                {/* Filtres et recherche */}
                <div className="mb-6 flex flex-col sm:flex-row gap-4">
                    <Input
                        placeholder="Rechercher un document..."
                        className="flex-grow"
                    />
                    <div className="flex gap-2">
                        <Button variant="outline">Tous</Button>
                        <Button variant="outline">Contrats</Button>
                        <Button variant="outline">Politiques</Button>
                        <Button variant="outline">Procédures</Button>
                    </div>
                </div>

                {/* Liste des documents */}
                <Card className="overflow-hidden">
                    <Table headers={['Document', 'Type', 'Date de modification', 'Taille', 'Signature', 'Actions']}>
                        {documents.map((document) => (
                            <tr key={document.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-7 h-7 text-[#1988A7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">{document.titre}</div>
                                            <div className="text-sm text-gray-500">{document.description}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <Badge variant={
                                        document.type === 'Contrat' ? 'success' :
                                            document.type === 'Politique' ? 'info' :
                                                document.type === 'Procédure' ? 'warning' : 'default'
                                    }>
                                        {document.type}
                                    </Badge>
                                </td>
                                <td className="px-6 py-4 text-gray-700">
                                    {new Date(document.dateModification).toLocaleDateString('fr-FR')}
                                </td>
                                <td className="px-6 py-4 text-gray-700">{document.taille}</td>
                                <td className="px-6 py-4">
                                    {document.requiresSignature ? (
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                            <span className="text-sm text-gray-700">
                                                {document.signedBy ? `${document.signedBy.length} signatures` : 'Non signé'}
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="text-sm text-gray-500">Non requis</span>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        <Button size="sm" variant="outline">
                                            <span className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                Télécharger
                                            </span>
                                        </Button>
                                        {document.requiresSignature && (
                                            <Button size="sm" variant="primary">
                                                <span className="flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                    </svg>
                                                    Signer
                                                </span>
                                            </Button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </Table>
                </Card>

                {/* Section Documents récents */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents Récents</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {documents.slice(0, 3).map((doc) => (
                            <Card key={doc.id} className="p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <Badge variant="info">{doc.type}</Badge>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{doc.titre}</h3>
                                <p className="text-sm text-gray-600 mb-4">{doc.taille}</p>
                                <Button size="sm" className="w-full">
                                    Ouvrir
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}
