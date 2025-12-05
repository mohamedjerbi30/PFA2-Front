'use client';
import React, { useState } from 'react';
import { Check, X, Users, Brain, BookOpen, FileText, BarChart3, Shield, Zap, Globe, Award, TrendingUp } from 'lucide-react';

export default function CommercialHomePage() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const packs = [
    {
      name: 'Starter',
      description: 'Pour les petites entreprises',
      monthlyPrice: 49,
      yearlyPrice: 470,
      features: [
        { text: 'Jusqu\'à 20 employés', included: true },
        { text: 'Gestion des employés de base', included: true },
        { text: '5 recrutements par mois', included: true },
        { text: '3 offres de stage', included: true },
        { text: 'Support par email', included: true },
        { text: 'Analyse IA des CV', included: false },
        { text: 'Formations illimitées', included: false },
        { text: 'Dashboard avancé', included: false },
        { text: 'API personnalisée', included: false }
      ],
      recommended: false
    },
    {
      name: 'Professional',
      description: 'Pour les entreprises en croissance',
      monthlyPrice: 149,
      yearlyPrice: 1430,
      features: [
        { text: 'Jusqu\'à 100 employés', included: true },
        { text: 'Gestion complète des employés', included: true },
        { text: 'Recrutements illimités', included: true },
        { text: 'Gestion de stages illimitée', included: true },
        { text: 'Support prioritaire', included: true },
        { text: 'Analyse IA des CV', included: true },
        { text: '10 formations par mois', included: true },
        { text: 'Dashboard avancé', included: true },
        { text: 'API personnalisée', included: false }
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      description: 'Pour les grandes organisations',
      monthlyPrice: 399,
      yearlyPrice: 3830,
      features: [
        { text: 'Employés illimités', included: true },
        { text: 'Gestion multi-sites', included: true },
        { text: 'Recrutements illimités', included: true },
        { text: 'Gestion stages & PFE avancée', included: true },
        { text: 'Support dédié 24/7', included: true },
        { text: 'Analyse IA avancée', included: true },
        { text: 'Formations illimitées', included: true },
        { text: 'Dashboard personnalisé', included: true },
        { text: 'API personnalisée', included: true }
      ],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-500 bg-opacity-30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">L'IA au service de vos RH</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Révolutionnez votre gestion des ressources humaines
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              TWEE RECRU combine intelligence artificielle et expertise RH pour vous offrir une plateforme complète, intuitive et performante
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl">
                Essayer gratuitement
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
                Voir une démo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi TWEE RECRU ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dans un monde professionnel en constante évolution, la gestion des ressources humaines nécessite des outils modernes et intelligents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gain de temps de 70%</h3>
              <p className="text-gray-600">
                Automatisez vos processus RH répétitifs et concentrez-vous sur ce qui compte vraiment : vos collaborateurs
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">IA de pointe</h3>
              <p className="text-gray-600">
                Notre intelligence artificielle analyse les CV, prédit les compétences et optimise vos recrutements avec une précision inégalée
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conformité RGPD</h3>
              <p className="text-gray-600">
                Vos données et celles de vos employés sont sécurisées et conformes aux réglementations européennes
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">La confiance de +500 entreprises</h3>
                <p className="text-blue-100 mb-6">
                  Des startups aux grandes entreprises, ils ont choisi TWEE RECRU pour transformer leur gestion RH
                </p>
                <div className="flex gap-8">
                  <div>
                    <div className="text-4xl font-bold">98%</div>
                    <div className="text-blue-200">Satisfaction client</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold">2M+</div>
                    <div className="text-blue-200">CV analysés</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur">
                  <Award className="w-8 h-8 mb-2" />
                  <div className="font-semibold text-blue-900">Prix Innovation RH 2024</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur">
                  <Globe className="w-8 h-8 mb-2" />
                  <div className="font-semibold text-blue-900">Disponible dans 12 pays</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Une plateforme complète pour tous vos besoins RH
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce dont vous avez besoin, centralisé en un seul endroit
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Gestion des employés', desc: 'Base de données complète avec compétences, soft skills et historique' },
              { icon: Brain, title: 'Recrutement IA', desc: 'Analyse automatique des CV et matching intelligent avec vos offres' },
              { icon: Users, title: 'Stages intelligents', desc: 'Recrutement IA de stagiaires et PFE avec matching automatique des compétences' },
              { icon: BookOpen, title: 'Formation continue', desc: 'Catalogues de formations, suivi de progression et certifications' },
              { icon: FileText, title: 'Gestion documentaire', desc: 'Stockage sécurisé et signatures électroniques' },
              { icon: BarChart3, title: 'Analytics avancés', desc: 'KPI en temps réel et rapports personnalisables' },
              
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choisissez le pack adapté à vos besoins
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Tarifs transparents, sans frais cachés. Changez de pack à tout moment
            </p>
            
            <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Mensuel
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  billingCycle === 'yearly'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Annuel
                <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  -20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packs.map((pack, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  pack.recommended ? 'ring-2 ring-blue-600 transform scale-105' : ''
                }`}
              >
                {pack.recommended && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                    ⭐ Plus populaire
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pack.name}</h3>
                  <p className="text-gray-600 mb-6">{pack.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      {billingCycle === 'monthly' ? pack.monthlyPrice : pack.yearlyPrice}€
                    </span>
                    <span className="text-gray-600">
                      /{billingCycle === 'monthly' ? 'mois' : 'an'}
                    </span>
                  </div>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    pack.recommended
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    Commencer
                  </button>

                  <div className="mt-8 space-y-4">
                    {pack.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Besoin d'une solution sur mesure ? Notre équipe est là pour vous accompagner
            </p>
            <button className="text-blue-600 font-semibold hover:text-blue-700">
              Contacter notre équipe commerciale →
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à transformer votre gestion RH ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez les centaines d'entreprises qui ont déjà fait confiance à TWEE RECRU
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg">
              Essai gratuit 14 jours
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Planifier une démo
            </button>
          </div>
          <p className="mt-6 text-blue-200 text-sm">
            Aucune carte bancaire requise • Annulation à tout moment • Support en français
          </p>
        </div>
      </section>
    </div>
  );
}