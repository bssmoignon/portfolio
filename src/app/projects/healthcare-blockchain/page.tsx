"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Blocks, Cloud, Database, FileCheck2, LockKeyhole, Shield, Workflow } from "lucide-react";

const layers = [
  {
    id: "access",
    title: "01 / Accès & identités",
    subtitle: "Contrôle des accès · acteurs autorisés",
    icon: LockKeyhole,
    detail: "Couche d’accès à préciser : identification des acteurs, gestion des identités et contrôle des permissions. Les choix détaillés restent à définir dans le cadre de l’étude.",
  },
  {
    id: "application",
    title: "02 / Application & contrats",
    subtitle: "Hyperledger Fabric · cycle de vie",
    icon: Workflow,
    detail: "Étude du rôle d’Hyperledger Fabric et du cycle de vie des smart contracts dans une architecture de traçabilité. Il s’agit d’un axe de conception, pas d’un déploiement réalisé.",
  },
  {
    id: "data",
    title: "03 / Données de santé",
    subtitle: "Confidentialité · traçabilité",
    icon: Database,
    detail: "Analyse des exigences de confidentialité et de traçabilité relatives aux données médicales externalisées, sans exposer de données réelles de santé.",
  },
  {
    id: "cloud",
    title: "04 / Infrastructure cloud",
    subtitle: "Externalisation · exigences de sécurité",
    icon: Cloud,
    detail: "Étude de l’externalisation vers le cloud, des exigences de sécurité associées et des limites des choix architecturaux envisagés.",
  },
];

function ArchitectureDiagram() {
  const [selectedLayer, setSelectedLayer] = useState(layers[0]);
  return (
    <div className="architecture-panel">
      <div className="architecture-canvas">
        <div className="architecture-caption"><span className="status-dot" /> VUE CONCEPTUELLE · INTERACTIVE</div>
        <div className="architecture-flow">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            return <div className="architecture-step-wrap" key={layer.id}>
              <button className={`architecture-step ${selectedLayer.id === layer.id ? "architecture-step-active" : ""}`} onClick={() => setSelectedLayer(layer)} aria-pressed={selectedLayer.id === layer.id}>
                <span className="architecture-step-icon"><Icon size={19} /></span><span className="architecture-step-title">{layer.title}</span><span className="architecture-step-subtitle">{layer.subtitle}</span>
              </button>
              {index < layers.length - 1 && <span className="architecture-connector" aria-hidden="true"><i /></span>}
            </div>;
          })}
        </div>
        <div className="architecture-description" aria-live="polite"><span>COUCHE SÉLECTIONNÉE</span><p>{selectedLayer.detail}</p></div>
        <div className="architecture-legend"><span><i className="legend-blue" /> Périmètre étudié</span><span><i className="legend-outline" /> Détail à préciser</span><span>Schéma conceptuel, non déployé</span></div>
      </div>
    </div>
  );
}

export default function HealthcareBlockchainPage() {
  return (
    <main className="project-detail-page">
      <header className="project-detail-nav"><Link href="/" className="detail-back"><ArrowLeft size={16} /> Portfolio</Link><span>PROJET ACADÉMIQUE / 01</span><a href="mailto:boubacarsiguine7@gmail.com">Me contacter <ArrowUpRight size={14} /></a></header>
      <section className="detail-hero">
        <div className="detail-hero-grid" />
        <div className="container detail-hero-content">
          <p className="eyebrow"><span>ÉTUDE DE MASTER</span> · IAM · 2026</p>
          <div className="detail-title-icon"><Blocks size={25} /></div>
          <h1>Architecture blockchain sécurisée pour les données de santé dans le cloud</h1>
          <p className="detail-lead">Étude et conception d’une architecture destinée à sécuriser l’externalisation des données de santé dans le cloud.</p>
          <div className="detail-tags"><span>Hyperledger Fabric</span><span>Cloud</span><span>Confidentialité</span><span>En cours</span></div>
          <div className="detail-status"><span className="status-dot" /> PROJET EN COURS · CONCEPTION UNIQUEMENT · NON DÉPLOYÉ EN PRODUCTION</div>
        </div>
      </section>
      <section className="detail-section">
        <div className="container">
          <div className="detail-section-heading"><div><p className="eyebrow"><span>01</span> — VUE D’ENSEMBLE</p><h2>Une architecture<br /><span>à penser de bout en bout.</span></h2></div><p>Ce projet de Master à l’Institut Africain de Management explore les enjeux de sécurité et de conception liés à l’externalisation des données de santé dans le cloud.</p></div>
          <div className="detail-overview-grid">
            <article className="detail-overview-card"><span className="overview-icon"><Shield size={19} /></span><span className="card-overline">ENJEU</span><h3>Protéger des données sensibles</h3><p>Étudier la confidentialité des données médicales et la traçabilité des opérations dans un contexte d’externalisation.</p></article>
            <article className="detail-overview-card"><span className="overview-icon"><Blocks size={19} /></span><span className="card-overline">PISTE ÉTUDIÉE</span><h3>Blockchain & contrats</h3><p>Examiner Hyperledger Fabric et le cycle de vie des smart contracts dans le cadre d’une architecture à concevoir.</p></article>
            <article className="detail-overview-card"><span className="overview-icon"><FileCheck2 size={19} /></span><span className="card-overline">CADRE</span><h3>Exigences & conformité</h3><p>Analyser les exigences de sécurité, la traçabilité et les enjeux de conformité au RGPD.</p></article>
          </div>
        </div>
      </section>
      <section className="detail-section detail-architecture-section">
        <div className="container">
          <div className="detail-section-heading"><div><p className="eyebrow"><span>02</span> — ARCHITECTURE CONCEPTUELLE</p><h2>Explorer les couches<br /><span>du modèle étudié.</span></h2></div><p>Sélectionnez une couche pour consulter son rôle dans le périmètre de l’étude. Le schéma est conceptuel : il décrit des axes d’analyse, pas une infrastructure opérationnelle.</p></div>
          <ArchitectureDiagram />
        </div>
      </section>
      <section className="detail-section">
        <div className="container detail-focus-grid">
          <div><p className="eyebrow"><span>03</span> — AXES D’ÉTUDE</p><h2>Les questions<br /><span>au cœur du projet.</span></h2></div>
          <div className="focus-list">
            <div><span>01</span><div><h3>Confidentialité des données médicales</h3><p>Étudier les mesures et les choix d’architecture nécessaires à la protection des informations de santé.</p></div></div>
            <div><span>02</span><div><h3>Traçabilité des opérations</h3><p>Analyser comment les opérations pourraient être journalisées et rendues auditables dans le modèle envisagé.</p></div></div>
            <div><span>03</span><div><h3>Cycle de vie des smart contracts</h3><p>Prendre en compte leur conception, leur validation, leur évolution et leur gouvernance dans l’étude.</p></div></div>
            <div><span>04</span><div><h3>Choix architecturaux & limites</h3><p>Documenter les compromis, les exigences de sécurité et les limites identifiées au fil du travail.</p></div></div>
          </div>
        </div>
      </section>
      <section className="detail-boundary"><div className="container"><span className="boundary-icon"><Shield size={19} /></span><div><strong>Périmètre transparent</strong><p>Projet académique en cours. Cette page présente une étude de conception ; elle ne revendique ni prototype fonctionnel, ni infrastructure déployée, ni données médicales traitées.</p></div></div></section>
      <footer className="detail-footer"><Link href="/#projects"><ArrowLeft size={14} /> Retour aux projets</Link><span>BOUBACAR SIGUINE · 2026</span></footer>
    </main>
  );
}
