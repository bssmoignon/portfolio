import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boubacar Siguine — Systèmes, Réseaux & Cloud",
  description:
    "Portfolio de Boubacar Siguine, administrateur systèmes, réseaux et cloud junior à Dakar. Projets académiques, compétences techniques et parcours.",
  metadataBase: new URL("https://bssmoignon.github.io/portfolio"),
  openGraph: {
    title: "Boubacar Siguine — Systèmes, Réseaux & Cloud",
    description:
      "Administration systèmes et réseaux, cloud computing et sécurité des infrastructures.",
    type: "website",
    locale: "fr_SN",
  },
};

export const viewport: Viewport = {
  themeColor: "#080b12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-theme="dark" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
