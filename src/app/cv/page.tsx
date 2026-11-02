import Link from "next/link";
import { ArrowLeft, MapPin, Mail, Phone, Github } from "lucide-react";
import CvPrintButton from "@/components/cv-print-button";

export const metadata = {
  title: "CV — Boubacar Siguine",
  description: "Curriculum vitæ de Boubacar Siguine.",
};

const education = [
  {
    title: "Master — Systèmes, Réseaux et Cloud Computing",
    institution: "Institut Africain de Management (IAM), Dakar",
    date: "Diplômé",
  },
  {
    title: "Licence professionnelle — Réseaux et Systèmes Informatiques",
    institution: "Université Catholique de l’Afrique de l’Ouest (UCAO), Dakar",
    date: "2024",
  },
  {
    title: "Licence — Anglais, option Linguistique et Grammaire",
    institution: "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
    date: "2024",
  },
  {
    title: "Baccalauréat — Sciences Sociales et Humaines",
    institution: "Lycée Anne Marie Javouhey, Dakar",
    date: "2021",
  },
];

export default function CvPage() {
  return (
    <main className="cv-page">
      <div className="cv-actions no-print">
        <Link className="cv-back" href="/">
          <ArrowLeft size={16} /> Retour au portfolio
        </Link>
        <CvPrintButton />
      </div>
      <article className="cv-sheet">
        <header className="cv-header">
          <div>
            <p className="eyebrow">CURRICULUM VITÆ</p>
            <h1>BOUBACAR SIGUINE</h1>
            <p className="cv-role">Administrateur Systèmes, Réseaux & Cloud · Junior</p>
          </div>
          <div className="cv-contact">
            <a href="mailto:boubacarsiguine7@gmail.com"><Mail size={14} /> boubacarsiguine7@gmail.com</a>
            <a href="tel:+221772485176"><Phone size={14} /> +221 77 248 51 76</a>
            <span><MapPin size={14} /> Dakar, Sénégal</span>
            <a href="https://github.com/bssmoignon" target="_blank" rel="noreferrer"><Github size={14} /> github.com/bssmoignon</a>
          </div>
        </header>

        <section className="cv-section">
          <h2>PROFIL</h2>
          <p>
            Diplômé d’un Master 2 en informatique de gestion, spécialité
            Systèmes, Réseaux et Cloud Computing. Parcours orienté vers
            l’administration des systèmes et réseaux, le cloud computing et la
            cybersécurité. Objectif : évoluer vers l’ingénierie sécurité réseau,
            le Cloud Security et l’administration d’infrastructures.
          </p>
        </section>

        <section className="cv-section">
          <h2>FORMATION</h2>
          <div className="cv-list">
            {education.map((item) => (
              <div className="cv-row" key={item.title}>
                <div><h3>{item.title}</h3><p>{item.institution}</p></div>
                <span>{item.date}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2>COMPÉTENCES TECHNIQUES</h2>
          <div className="cv-skills">
            <p><strong>Systèmes</strong>Linux / Ubuntu, Windows Server, administration système, utilisateurs et permissions, DNS, DHCP.</p>
            <p><strong>Réseaux</strong>TCP/IP, IPv4 / IPv6, routage, commutation, VLAN, VPN, modèle OSI, Cisco, Packet Tracer.</p>
            <p><strong>Sécurité</strong>Sécurité systèmes et réseaux, pare-feu, segmentation, gestion des identités et des accès, journaux, vulnérabilités.</p>
            <p><strong>Cloud & virtualisation</strong>AWS, IaaS / PaaS / SaaS, stockage et services cloud, VMware.</p>
            <p><strong>Outils</strong>Git, GitHub, terminal Linux, Wireshark, Cisco Packet Tracer, VMware.</p>
          </div>
        </section>

        <section className="cv-section">
          <h2>PROJETS ACADÉMIQUES & TRAVAUX PRATIQUES</h2>
          <div className="cv-project">
            <h3>Architecture blockchain sécurisée pour données de santé dans le cloud <span>2026 · En cours</span></h3>
            <p>Projet de Master à l’IAM : étude et conception d’une architecture visant à sécuriser l’externalisation des données de santé dans le cloud. Axes : confidentialité, traçabilité, RGPD, Hyperledger Fabric, cycle de vie des smart contracts, exigences de sécurité et choix architecturaux. Étude en cours ; aucune mise en production revendiquée.</p>
          </div>
          <div className="cv-project">
            <h3>Réseaux, systèmes et sécurité <span>2024–2026</span></h3>
            <p>Travaux pratiques encadrés : topologies réseau, adressage IP, routage, commutation, VLAN, administration Linux, utilisateurs et permissions, DNS, DHCP, principes VPN et pare-feu, analyse du trafic avec Wireshark et identification de comportements anormaux.</p>
          </div>
          <div className="cv-project">
            <h3>Socle d’infrastructure cloud AWS <span>2024–2026</span></h3>
            <p>Découverte des services AWS, services réseau et calcul, modèles IaaS / PaaS / SaaS, environnements virtualisés, machines virtuelles et fondamentaux du déploiement cloud.</p>
          </div>
        </section>

        <section className="cv-section">
          <h2>FORMATIONS COMPLÉMENTAIRES</h2>
          <p>
            Cisco Networking Academy — Introduction to Cybersecurity · Coursera
            — Foundations of Cybersecurity · Introduction to Cloud Computing
            (AWS) · Getting Started with Linux Terminal · Cybersecurity Tools
            and Cyber Attacks · OpenClassrooms — Design Your TCP/IP Network.
          </p>
        </section>

        <section className="cv-section cv-languages">
          <h2>LANGUES</h2>
          <p><strong>Français</strong>Courant</p>
          <p><strong>Anglais</strong>Niveau avancé · Formation universitaire en linguistique et grammaire</p>
        </section>
      </article>
    </main>
  );
}
