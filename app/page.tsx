// Page d'accueil - TWEE RECRU
import Link from 'next/link';
import { Card, Button } from '@/components/UI';
import ProtectedRoute from '@/components/ProtectedRoute';
export default function HomePage() {
  return (

    <div className="min-h-screen">
      {/* Section Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Bienvenue sur TWEE RECRU
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Votre plateforme RH intelligente pour optimiser la gestion de vos ressources humaines
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/recrutement">
                <Button size="lg" className="bg-blue-200 border-white text-blue-600 hover:bg-blue-50">
                  Commencer le recrutement
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" className="bg-blue-200 border-white text-blue-600 hover:bg-blue-50">
                  Voir le dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fonctionnalités de la plateforme
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce dont vous avez besoin pour gérer efficacement vos ressources humaines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gestion des employés */}
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title="Gestion des Employés"
              description="Gérez facilement les informations de vos employés, leurs compétences, soft skills et historique professionnel."
              link="/employes"
            />

            {/* Recrutement IA */}
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
              title="Recrutement Intelligent"
              description="Analysez automatiquement les CV avec notre IA et organisez des interviews intelligentes pour trouver les meilleurs talents."
              link="/recrutement"
            />

            {/* Formations */}
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
              title="Formation Continue"
              description="Proposez des formations à vos employés, suivez leur progression et délivrez des attestations automatiquement."
              link="/formations"
            />

            {/* Documents */}
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              title="Gestion Documentaire"
              description="Centralisez tous vos documents RH et gérez les signatures électroniques en toute simplicité."
              link="/documents"
            />

            {/* Dashboard */}
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="Tableau de Bord"
              description="Visualisez vos KPI RH en temps réel avec des graphiques et statistiques détaillées."
              link="/dashboard"
            />

            {/* Multi-rôles */}
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              }
              title="Gestion Multi-Rôles"
              description="Système d'authentification sécurisé avec différents niveaux d'accès (Admin, RH, Manager, Employé)."
              link="/connexion"
            />
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatBox number="5" label="Employés actifs" />
            <StatBox number="4" label="Recrutements en cours" />
            <StatBox number="5" label="Formations disponibles" />
            <StatBox number="3.2%" label="Taux d'absentéisme" />
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à optimiser votre gestion RH ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Rejoignez TWEE RECRU et transformez votre façon de gérer les ressources humaines
          </p>
          <Link href="/connexion">
            <Button size="lg">
              Commencer maintenant
            </Button>
          </Link>
        </div>
      </section>
    </div>

  );
}

// Composant pour les cartes de fonctionnalités
function FeatureCard({
  icon,
  title,
  description,
  link
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <Card className="p-6 h-full hover:scale-105 transition-transform cursor-pointer">
        <div className="text-blue-600 mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </Card>
    </Link>
  );
}

// Composant pour les statistiques
function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-gray-700 font-medium">{label}</div>
    </div>
  );
}
