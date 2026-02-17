import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TWEE RECRU - Plateforme RH Intelligente",
  description: "Plateforme de gestion des ressources humaines avec IA pour le recrutement, la formation et la gestion des employés",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.className} antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <AuthProvider>
          <Navbar />
          <main className="flex-grow bg-gray-50">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}