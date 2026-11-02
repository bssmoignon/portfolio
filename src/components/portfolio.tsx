"use client";

import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  Blocks,
  BookOpen,
  Check,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Moon,
  Network,
  Phone,
  Send,
  Server,
  Shield,
  Sun,
  Terminal,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

gsap.registerPlugin(ScrollTrigger);

const navigation = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Formation", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  {
    name: "Systèmes",
    icon: Server,
    tone: "blue",
    items: ["Linux / Ubuntu", "Windows Server", "Administration système", "Utilisateurs & permissions", "DNS", "DHCP"],
  },
  {
    name: "Réseaux",
    icon: Network,
    tone: "cyan",
    items: ["TCP/IP", "IPv4 / IPv6", "Routage & commutation", "VLAN", "VPN", "Modèle OSI", "Cisco", "Packet Tracer"],
  },
  {
    name: "Cybersécurité",
    icon: Shield,
    tone: "violet",
    items: ["Sécurité systèmes & réseaux", "Pare-feu", "Segmentation réseau", "Identités & accès", "Analyse des journaux", "Gestion des vulnérabilités"],
  },
  {
    name: "Cloud & virtualisation",
    icon: Cloud,
    tone: "blue",
    items: ["Amazon Web Services", "IaaS / PaaS / SaaS", "Stockage cloud", "Services cloud", "VMware"],
  },
  {
    name: "Outils",
    icon: Terminal,
    tone: "cyan",
    items: ["Git & GitHub", "Terminal Linux", "Wireshark", "Cisco Packet Tracer", "VMware"],
  },
];

const projects = [
  {
    number: "01",
    title: "Architecture blockchain sécurisée pour les données de santé",
    category: "Cloud",
    period: "2026 · En cours",
    summary: "Étude et conception d’une architecture pour sécuriser l’externalisation des données de santé dans le cloud.",
    tags: ["Cloud", "Hyperledger Fabric", "Sécurité"],
    icon: Blocks,
    href: "/projects/healthcare-blockchain",
    featured: true,
  },
  {
    number: "02",
    title: "Réseaux, systèmes & sécurité",
    category: "Réseaux",
    period: "2024 — 2026",
    summary: "Travaux pratiques encadrés en topologies, administration Linux, analyse du trafic et repérage de comportements anormaux.",
    tags: ["TCP/IP", "Linux", "Wireshark"],
    icon: Network,
    href: "#lab",
    featured: false,
  },
  {
    number: "03",
    title: "Socle d’infrastructure cloud AWS",
    category: "Cloud",
    period: "2024 — 2026",
    summary: "Découverte des services réseau et calcul AWS, des modèles cloud et des fondamentaux du déploiement.",
    tags: ["AWS", "IaaS / PaaS / SaaS", "VMware"],
    icon: Cloud,
    href: "#lab",
    featured: false,
  },
];

const education = [
  {
    period: "DIPLÔMÉ",
    title: "Master — Systèmes, Réseaux & Cloud Computing",
    school: "Institut Africain de Management (IAM)",
    location: "Dakar",
    current: true,
  },
  {
    period: "2024",
    title: "Licence professionnelle — Réseaux et Systèmes Informatiques",
    school: "Université Catholique de l’Afrique de l’Ouest (UCAO)",
    location: "Dakar",
    current: false,
  },
  {
    period: "2024",
    title: "Licence — Anglais, option Linguistique et Grammaire",
    school: "Université Numérique Cheikh Hamidou Kane (UN-CHK)",
    location: "Sénégal",
    current: false,
  },
  {
    period: "2021",
    title: "Baccalauréat — Sciences Sociales et Humaines",
    school: "Lycée Anne Marie Javouhey",
    location: "Dakar",
    current: false,
  },
];

const courses = [
  { issuer: "Cisco Networking Academy", name: "Introduction to Cybersecurity", icon: Shield },
  { issuer: "Coursera", name: "Foundations of Cybersecurity", icon: Shield },
  { issuer: "Coursera", name: "Introduction to Cloud Computing (AWS)", icon: Cloud },
  { issuer: "Coursera", name: "Getting Started with Linux Terminal", icon: Terminal },
  { issuer: "Coursera", name: "Cybersecurity Tools and Cyber Attacks", icon: Code2 },
  { issuer: "OpenClassrooms", name: "Design Your TCP/IP Network", icon: Network },
];

const labs = [
  { title: "Network Lab", note: "Topologies · adressage · VLAN · routage", icon: Network, color: "blue" },
  { title: "Linux Administration Lab", note: "Administration · utilisateurs · permissions", icon: Terminal, color: "cyan" },
  { title: "Cybersecurity Lab", note: "Pare-feu · journaux · analyse réseau", icon: Shield, color: "violet" },
  { title: "Cloud Infrastructure Lab", note: "Services AWS · modèles cloud", icon: Cloud, color: "blue" },
  { title: "Virtualization Lab", note: "Environnements virtualisés · VMware", icon: Layers3, color: "cyan" },
];

const infrastructureViews = [
  {
    name: "Réseau",
    label: "NETWORK LAB",
    nodes: [
      { id: "clients", title: "Postes clients", subtitle: "Adressage IP", icon: Terminal, detail: "Point de départ d’une topologie pédagogique : configuration de l’adressage IP et échanges entre équipements." },
      { id: "routing", title: "Routage", subtitle: "TCP/IP · Cisco", icon: Network, detail: "Étude du routage et de la circulation des paquets dans le cadre des travaux pratiques réseau." },
      { id: "segmentation", title: "Segmentation", subtitle: "VLAN · commutation", icon: Layers3, detail: "Représentation conceptuelle de la segmentation VLAN et des principes de commutation étudiés." },
      { id: "services", title: "Services système", subtitle: "Linux · DNS · DHCP", icon: Server, detail: "Services et administration abordés dans les travaux pratiques ; aucune configuration réelle n’est exposée ici." },
    ],
  },
  {
    name: "Cloud",
    label: "CLOUD INFRASTRUCTURE",
    nodes: [
      { id: "access", title: "Accès", subtitle: "Utilisateurs · services", icon: Globe2, detail: "Accès aux services dans une représentation pédagogique d’infrastructure cloud, sans compte AWS ni déploiement associé." },
      { id: "network", title: "Réseau cloud", subtitle: "Services réseau", icon: Network, detail: "Couche réseau à explorer dans la découverte des services AWS et des fondamentaux cloud." },
      { id: "compute", title: "Calcul", subtitle: "Machines virtuelles", icon: Server, detail: "Machines virtuelles et environnements de calcul abordés comme notions de cours et de travaux pratiques." },
      { id: "storage", title: "Stockage", subtitle: "Services cloud", icon: Database, detail: "Illustration du stockage cloud parmi les services étudiés ; elle ne représente pas une ressource déployée." },
    ],
  },
];

const contactSchema = z.object({
  name: z.string().trim().min(2, "Indiquez un nom d’au moins 2 caractères."),
  email: z.string().trim().email("Saisissez une adresse e-mail valide."),
  subject: z.string().trim().min(3, "Précisez l’objet de votre message."),
  message: z.string().trim().min(10, "Votre message doit contenir au moins 10 caractères."),
});

type ContactValues = z.infer<typeof contactSchema>;

function NetworkBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let width = 0;
    let height = 0;
    let pointer = { x: -1000, y: -1000 };
    const particles = Array.from({ length: 58 }, () => ({
      x: Math.random(),
      y: Math.random(),
      radius: Math.random() * 1.5 + 0.6,
      speed: (Math.random() * 0.00012 + 0.00004) * (Math.random() > 0.5 ? 1 : -1),
    }));

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
    };
    const draw = () => {
      context.clearRect(0, 0, width, height);
      const points = particles.map((particle) => {
        if (!reducedMotion) {
          particle.y -= particle.speed;
          if (particle.y < -0.02) particle.y = 1.02;
          if (particle.y > 1.02) particle.y = -0.02;
        }
        return { x: particle.x * width, y: particle.y * height, radius: particle.radius };
      });

      points.forEach((point, index) => {
        for (let nextIndex = index + 1; nextIndex < points.length; nextIndex += 1) {
          const next = points[nextIndex];
          const distance = Math.hypot(point.x - next.x, point.y - next.y);
          if (distance < 135) {
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(next.x, next.y);
            context.strokeStyle = `rgba(80, 148, 255, ${(1 - distance / 135) * 0.16})`;
            context.lineWidth = 0.65;
            context.stroke();
          }
        }
        const pointerDistance = Math.hypot(point.x - pointer.x, point.y - pointer.y);
        context.beginPath();
        context.arc(point.x, point.y, point.radius + (pointerDistance < 110 ? 1 : 0), 0, Math.PI * 2);
        context.fillStyle = pointerDistance < 110 ? "rgba(108, 188, 255, .9)" : "rgba(104, 156, 239, .52)";
        context.fill();
      });
      if (!reducedMotion) frame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <canvas aria-hidden="true" className="network-canvas" ref={canvasRef} />;
}

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const cursor = cursorRef.current;
    if (!cursor) return;
    const move = (event: PointerEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };
    const down = () => cursor.classList.add("is-down");
    const up = () => cursor.classList.remove("is-down");
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  return <div aria-hidden="true" className="custom-cursor" ref={cursorRef}><span /></div>;
}

function RevealCounter({ value, label }: { value: number; label: string }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = counterRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) {
        setCount(value);
        observer.disconnect();
        return;
      }
      let current = 0;
      const interval = window.setInterval(() => {
        current += 1;
        setCount(current);
        if (current >= value) {
          window.clearInterval(interval);
          observer.disconnect();
        }
      }, 90);
    }, { threshold: 0.5 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return <div className="stat-item" ref={counterRef}><strong>{String(count).padStart(2, "0")}<span>+</span></strong><span>{label}</span></div>;
}

function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    event.currentTarget.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 5}deg) rotateY(${(x - 0.5) * 5}deg) translateY(-3px)`;
  };
  const reset = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform = "";
  };
  return <div className={`tilt-card ${className}`} onMouseMove={handleMove} onMouseLeave={reset}>{children}</div>;
}

function InfrastructureExplorer() {
  const [viewIndex, setViewIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(infrastructureViews[0].nodes[0].id);
  const view = infrastructureViews[viewIndex];
  const selectedNode = view.nodes.find((node) => node.id === selectedId) ?? view.nodes[0];

  return (
    <div className="infrastructure-explorer reveal">
      <div className="infrastructure-head">
        <div><p className="card-overline">SCHÉMA PÉDAGOGIQUE · NON DÉPLOYÉ</p><h3>Explorer une infrastructure</h3></div>
        <div className="infrastructure-tabs" role="group" aria-label="Choisir le schéma d’infrastructure">
          {infrastructureViews.map((item, index) => <button key={item.name} aria-pressed={viewIndex === index} className={viewIndex === index ? "infrastructure-tab-selected" : ""} onClick={() => { setViewIndex(index); setSelectedId(item.nodes[0].id); }}><span>{item.name}</span></button>)}
        </div>
      </div>
      <div className="infrastructure-figure">
        <div className="infrastructure-caption"><span className="status-dot" /> {view.label} / CONCEPTUAL VIEW</div>
        <div className="infrastructure-flow">
          {view.nodes.map((node, index) => {
            const Icon = node.icon;
            return <div className="infrastructure-node-wrap" key={node.id}>
              <button className={`infrastructure-node ${selectedNode.id === node.id ? "infrastructure-node-selected" : ""}`} onClick={() => setSelectedId(node.id)} aria-pressed={selectedNode.id === node.id}>
                <span className="infrastructure-node-icon"><Icon size={18} /></span><strong>{node.title}</strong><small>{node.subtitle}</small>
              </button>
              {index < view.nodes.length - 1 && <span className="infrastructure-link" aria-hidden="true"><i /></span>}
            </div>;
          })}
        </div>
        <div className="infrastructure-detail" aria-live="polite"><span>ÉLÉMENT SÉLECTIONNÉ <b>/</b> {selectedNode.title}</span><p>{selectedNode.detail}</p></div>
        <div className="infrastructure-foot"><span>Illustration conceptuelle, non issue d’une capture d’environnement.</span><span>{view.name.toUpperCase()} / 0{viewIndex + 1}</span></div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const rootRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("about");
  const [activeSkill, setActiveSkill] = useState(0);
  const [projectFilter, setProjectFilter] = useState("Tous");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [formState, setFormState] = useState<"idle" | "ready">("idle");
  const roles = ["Network Engineering", "Cybersecurity", "Cloud Computing", "Systems Administration", "Infrastructure Security"];
  const form = useForm<ContactValues>({ resolver: zodResolver(contactSchema), mode: "onSubmit" });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch (error) {
      console.error("Impossible d’enregistrer le thème choisi.", error);
    }
  }, [theme]);

  useEffect(() => {
    try {
      const savedTheme = window.localStorage.getItem("portfolio-theme");
      if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
    } catch (error) {
      console.error("Impossible de lire le thème enregistré.", error);
    }
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 2600);
    return () => window.clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    if (!rootRef.current) return;
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(element, { y: 22, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });
    }, rootRef);
    return () => context.revert();
  }, []);

  useEffect(() => {
    const sections = navigation.map(({ href }) => document.querySelector(href)).filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActiveSection(visible.target.id);
    }, { rootMargin: "-32% 0px -54% 0px", threshold: [0, 0.2, 0.55] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const filteredProjects = projects.filter((project) => projectFilter === "Tous" || project.category === projectFilter);
  const onSubmit = (values: ContactValues) => {
    const subject = encodeURIComponent(values.subject);
    const body = encodeURIComponent(`Bonjour Boubacar,\n\n${values.message}\n\n${values.name}\n${values.email}`);
    window.location.href = `mailto:boubacarsiguine7@gmail.com?subject=${subject}&body=${body}`;
    setFormState("ready");
  };

  return (
    <>
      <CustomCursor />
      <main ref={rootRef}>
        <header className="site-header">
          <div className="container nav-container">
            <a className="brand" href="#home" aria-label="Boubacar Siguine, accueil">
              <span className="brand-mark">BS<span>.</span></span>
              <span className="brand-copy">BOUBACAR SIGUINE<small>SYS · NET · CLOUD</small></span>
            </a>
            <nav className={`main-nav ${mobileMenuOpen ? "is-open" : ""}`} aria-label="Navigation principale">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className={activeSection === item.href.slice(1) ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="nav-actions">
              <button className="icon-button theme-toggle" aria-label={theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre"} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
              </button>
              <a className="nav-contact" href="#contact">Discutons <ArrowUpRight size={14} /></a>
              <button className="icon-button menu-toggle" aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </header>

        <section className="hero-section" id="home">
          <div className="hero-grid" />
          <NetworkBackdrop />
          <div className="container hero-layout">
            <div className="hero-copy">
              <motion.div className="availability-pill" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
                <span className="status-dot" /> PORTFOLIO · DAKAR, SÉNÉGAL
              </motion.div>
              <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>INGÉNIEUR INFORMATIQUE · JUNIOR</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.75 }}>
                Boubacar<br /><span>Siguine</span><i>.</i>
              </motion.h1>
              <motion.p className="hero-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                Administrateur Systèmes, Réseaux <span>&</span> Cloud
              </motion.p>
              <div className="role-line"><span className="role-prefix">EXPLORING</span><AnimatePresence mode="wait"><motion.span key={roleIndex} className="role-word" initial={{ opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -9 }} transition={{ duration: 0.28 }}>{roles[roleIndex]}</motion.span></AnimatePresence><span className="role-caret" /></div>
              <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.48 }}>
                Je conçois, configure et sécurise des infrastructures informatiques. Passionné par les réseaux, les systèmes et les technologies cloud, je développe mes compétences autour de la sécurité des infrastructures et de la protection des données.
              </motion.p>
              <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.62 }}>
                <Link className="button button-primary" href="/cv"><Download size={16} /> Télécharger mon CV</Link>
                <a className="button button-quiet" href="#projects">Explorer mes projets <ArrowDownRight size={16} /></a>
                <a className="button button-quiet" href="#contact"><Mail size={15} /> Me contacter</a>
              </motion.div>
              <div className="hero-social">
                <a href="mailto:boubacarsiguine7@gmail.com"><Mail size={15} /> boubacarsiguine7@gmail.com</a>
                <span className="social-divider" />
                <a href="https://github.com/bssmoignon" target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={12} /></a>
              </div>
            </div>

            <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94, x: 16 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.28 }}>
              <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
              <div className="visual-label label-top"><span className="pulse-dot" /> INFRASTRUCTURE / 01</div>
              <div className="network-visual">
                <div className="network-wire wire-a" /><div className="network-wire wire-b" /><div className="network-wire wire-c" /><div className="network-wire wire-d" />
                <figure className="hero-portrait">
                  <Image
                    src="/images/boubacar-siguine.png"
                    alt="Portrait professionnel de Boubacar Siguine."
                    width={768}
                    height={768}
                    priority
                    quality={85}
                  />
                  <figcaption><span>BOUBACAR SIGUINE</span><small>DAKAR · SÉNÉGAL</small></figcaption>
                </figure>
                <div className="network-node node-cloud"><Cloud size={21} /><span>CLOUD</span></div>
                <div className="network-node node-shield"><Shield size={20} /><span>SECURITY</span></div>
                <div className="network-node node-terminal"><Terminal size={19} /><span>SYSTEMS</span></div>
                <div className="network-node node-network"><Network size={20} /><span>NETWORK</span></div>
              </div>
              <div className="visual-label label-bottom"><span>01</span> CONCEVOIR <b /> SÉCURISER <b /> ÉVOLUER</div>
              <div className="floating-chip chip-one"><span className="chip-indicator" /> TCP/IP <span>›</span></div>
              <div className="floating-chip chip-two"><span className="chip-indicator cyan" /> CLOUD <span>›</span></div>
              <span className="visual-coordinate">14° 41′ 34.8″ N<br />17° 26′ 48.0″ W</span>
            </motion.div>
          </div>
          <div className="container hero-footer">
            <a className="scroll-cue" href="#about"><span>FAIRE DÉFILER</span><ArrowDown size={14} /></a>
            <span className="hero-index">01 <i /> 05</span>
          </div>
        </section>

        <section className="intro-strip" aria-label="Domaines">
          <div className="container intro-strip-inner">
            <span>DOMAINES D’INTÉRÊT</span>
            <div><Network size={15} /> Network Engineering</div><i />
            <div><Shield size={15} /> Cybersecurity</div><i />
            <div><Cloud size={15} /> Cloud Computing</div><i />
            <div><Server size={15} /> Systems Administration</div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container">
            <div className="section-heading reveal">
              <div><p className="eyebrow"><span>01</span> — LE PARCOURS</p><h2>Construire des bases solides.<br /><span>Penser l’infrastructure.</span></h2></div>
              <p className="section-intro">Un parcours pluridisciplinaire, avec un fil conducteur : comprendre les systèmes, connecter les réseaux et explorer la sécurité des environnements cloud.</p>
            </div>
            <div className="about-grid">
              <div className="about-narrative reveal">
                <span className="quote-mark">“</span>
                <p className="about-lead">L’infrastructure est le socle invisible de chaque expérience numérique.</p>
                <p className="about-body">Diplômé d’un Master 2 en informatique de gestion, spécialité Systèmes, Réseaux et Cloud Computing, je poursuis un parcours orienté vers l’administration des infrastructures et leur sécurité.</p>
                <p className="about-body">Mes travaux pratiques et formations complémentaires couvrent Linux, TCP/IP, AWS, la virtualisation et des outils de sécurité. J’aborde chaque sujet avec curiosité, rigueur et l’envie d’apprendre en construisant.</p>
                <div className="career-goals"><span>PROCHAINS HORIZONS</span><div><span>Ingénieur sécurité réseau</span><span>Cloud Security</span><span>Administration d’infrastructures</span></div></div>
              </div>
              <div className="about-side">
                <TiltCard className="profile-card reveal">
                  <div className="profile-card-top"><span className="card-overline">PROFIL / 001</span><span className="profile-mark">BS<span>.</span></span></div>
                  <div className="profile-lines"><div><span>SPÉCIALITÉ</span><strong>Systèmes, Réseaux<br />& Cloud Computing</strong></div><div><span>FORMATION</span><strong>Master 2 · Informatique<br />de gestion</strong></div><div><span>LOCALISATION</span><strong><MapPin size={14} /> Dakar, Sénégal</strong></div></div>
                  <div className="profile-card-foot"><span>EN APPRENTISSAGE CONTINU</span><span className="status-dot" /></div>
                </TiltCard>
                <div className="stats-row reveal"><RevealCounter value={5} label="catégories techniques" /><RevealCounter value={3} label="axes de projets pratiques" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="section-heading reveal">
              <div><p className="eyebrow"><span>02</span> — COMPÉTENCES TECHNIQUES</p><h2>Un socle technique.<br /><span>En évolution constante.</span></h2></div>
              <p className="section-intro">Des domaines abordés dans mon parcours académique, mes travaux pratiques et mes formations. Pas de jauges arbitraires : chaque compétence mérite son contexte.</p>
            </div>
            <div className="skills-dashboard reveal">
              <div className="skills-tabs" role="tablist" aria-label="Catégories de compétences">
                {skills.map((category, index) => {
                  const Icon = category.icon;
                  return <button id={`skill-tab-${index}`} role="tab" aria-selected={activeSkill === index} aria-controls="skills-panel" className={`skill-tab ${activeSkill === index ? "selected" : ""}`} key={category.name} onClick={() => setActiveSkill(index)}><Icon size={17} /><span>{category.name}</span><span className="tab-index">0{index + 1}</span></button>;
                })}
              </div>
              <div className="skills-panel" id="skills-panel" role="tabpanel" aria-labelledby={`skill-tab-${activeSkill}`}>
                <AnimatePresence mode="wait">
                  <motion.div className="skills-panel-content" key={activeSkill} initial={{ opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}>
                    <div className="skills-panel-heading"><span className={`skill-icon-large ${skills[activeSkill].tone}`}>{(() => { const Icon = skills[activeSkill].icon; return <Icon size={22} />; })()}</span><div><p className="card-overline">DOMAINE / 0{activeSkill + 1}</p><h3>{skills[activeSkill].name}</h3></div><span className="skill-count">{String(skills[activeSkill].items.length).padStart(2, "0")} COMPÉTENCES</span></div>
                    <div className="skill-tags">{skills[activeSkill].items.map((item, index) => <motion.span key={item} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.035 }}><Check size={13} />{item}</motion.span>)}</div>
                    <div className="skills-panel-foot"><span><span className="status-dot" /> Parcours académique & travaux pratiques</span><span>Cliquer une catégorie pour explorer <ArrowRight size={13} /></span></div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div className="skills-note reveal"><BookOpen size={16} /><p>Les compétences listées reflètent les domaines étudiés ou pratiqués ; elles ne constituent pas une auto-évaluation chiffrée.</p></div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-heading reveal">
              <div><p className="eyebrow"><span>03</span> — SÉLECTION DE PROJETS</p><h2>La théorie prend forme<br /><span>dans la pratique.</span></h2></div>
              <p className="section-intro">Projets académiques et travaux pratiques encadrés. Une sélection fidèle aux travaux documentés, sans revendiquer de déploiement en production.</p>
            </div>
            <div className="project-toolbar reveal"><span className="project-total">0{filteredProjects.length} PROJETS PRÉSENTÉS</span><div className="filter-list" aria-label="Filtrer les projets">{["Tous", "Réseaux", "Cloud"].map((filter) => <button key={filter} onClick={() => setProjectFilter(filter)} className={projectFilter === filter ? "filter-active" : ""}>{filter}</button>)}</div></div>
            <div className="project-grid">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => {
                  const Icon = project.icon;
                  return <motion.div key={project.number} className={`project-card ${project.featured ? "project-featured" : ""}`} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: 0.28, delay: index * 0.04 }}>
                    <Link href={project.href} className="project-card-link" aria-label={`Découvrir : ${project.title}`}>
                      <div className="project-card-head"><span className="project-number">{project.number} <i /> {project.period}</span><span className="project-icon"><Icon size={19} /></span></div>
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                      <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                      <div className="project-card-foot"><span>{project.featured ? "ÉTUDE & CONCEPTION" : "TRAVAUX PRATIQUES"}</span><span className="project-arrow"><ArrowUpRight size={17} /></span></div>
                    </Link>
                  </motion.div>;
                })}
              </AnimatePresence>
            </div>
            <div className="project-disclaimer reveal"><span className="status-dot" /><p>Le projet blockchain est une étude de Master en cours. Aucune infrastructure n’est présentée comme déployée en production.</p></div>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="container">
            <div className="section-heading reveal">
              <div><p className="eyebrow"><span>04</span> — FORMATION & PARCOURS</p><h2>Apprendre. Relier.<br /><span>Approfondir.</span></h2></div>
              <p className="section-intro">Des systèmes d’information aux réseaux, en passant par les langues : un itinéraire qui nourrit ma façon d’aborder les technologies.</p>
            </div>
            <div className="education-layout">
              <div className="timeline">
                {education.map((item, index) => <div className="timeline-item reveal" key={item.title}>
                  <div className={`timeline-marker ${item.current ? "marker-current" : ""}`}><span /></div>
                  <div className="timeline-period">{item.period}</div>
                  <TiltCard className={`education-card ${item.current ? "education-current" : ""}`}>
                    <div className="education-card-top"><span>FORMATION / 0{index + 1}</span><span>{item.current ? "MASTER" : "DIPLÔME"}</span></div>
                    <h3>{item.title}</h3>
                    <p>{item.school}</p>
                    <div className="education-location"><MapPin size={13} />{item.location}</div>
                  </TiltCard>
                </div>)}
              </div>
              <aside className="courses-aside reveal">
                <div className="aside-heading"><Award size={18} /><div><span className="card-overline">APPRENTISSAGES COMPLÉMENTAIRES</span><h3>Formations & cours</h3></div></div>
                <div className="course-list">{courses.map((course) => { const Icon = course.icon; return <div className="course-item" key={course.name}><span className="course-icon"><Icon size={15} /></span><div><span>{course.issuer}</span><strong>{course.name}</strong></div><ArrowUpRight size={13} /></div>; })}</div>
                <p className="course-note">Intitulés communiqués. Aucun numéro de certification ni justificatif externe n’est affiché ici.</p>
              </aside>
            </div>
          </div>
        </section>

        <section className="section lab-section" id="lab">
          <div className="container">
            <div className="lab-heading reveal"><div><p className="eyebrow"><span>05</span> — ESPACE D’EXPLORATION</p><h2>My tech lab<span>.</span></h2></div><p>Des axes de travaux pratiques et d’exploration technique, présentés sans ajouter de résultats ou d’environnements non documentés.</p></div>
            <InfrastructureExplorer />
            <div className="lab-grid">{labs.map((lab, index) => { const Icon = lab.icon; return <TiltCard className={`lab-card reveal lab-${lab.color}`} key={lab.title}><div className="lab-card-top"><span>LAB / 0{index + 1}</span><Icon size={19} /></div><h3>{lab.title}</h3><p>{lab.note}</p><div className="lab-card-foot"><span className="status-dot" /> Axe de travaux pratiques</div></TiltCard>; })}</div>
            <div className="lab-note reveal"><span className="lab-note-icon"><Layers3 size={17} /></span><p>Les fiches de laboratoire détaillées, configurations et captures seront ajoutées lorsqu’elles seront disponibles et documentées.</p><span className="lab-note-code">DOCUMENTATION / À COMPLÉTER</span></div>
          </div>
        </section>

        <section className="section languages-section" id="languages">
          <div className="container languages-layout reveal">
            <div><p className="eyebrow"><span>06</span> — LANGUES</p><h2>Des idées qui<br /><span>franchissent les frontières.</span></h2></div>
            <div className="language-cards"><TiltCard className="language-card"><div className="language-card-top"><span>01 / LANGUE</span><Globe2 size={17} /></div><h3>Français</h3><p>Courant</p><div className="language-meta"><span className="language-code">FR</span><span>Niveau communiqué</span></div></TiltCard><TiltCard className="language-card"><div className="language-card-top"><span>02 / LANGUE</span><Globe2 size={17} /></div><h3>Anglais</h3><p>Niveau avancé</p><div className="language-meta"><span className="language-code">EN</span><span>Formation universitaire</span></div><small>Linguistique & grammaire</small></TiltCard></div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-heading reveal"><p className="eyebrow"><span>07</span> — CONTACT PROFESSIONNEL</p><h2>Un projet en tête ?<br /><span>Échangeons.</span></h2><p>Une opportunité, un projet ou simplement l’envie de parler infrastructures : ma boîte de réception est ouverte.</p></div>
            <div className="contact-layout">
              <div className="contact-details reveal">
                <a className="contact-detail" href="mailto:boubacarsiguine7@gmail.com"><span className="contact-detail-icon"><Mail size={18} /></span><span><small>ÉCRIVEZ-MOI</small><strong>boubacarsiguine7@gmail.com</strong></span><ArrowUpRight size={16} /></a>
                <a className="contact-detail" href="tel:+221772485176"><span className="contact-detail-icon"><Phone size={18} /></span><span><small>APPELEZ-MOI</small><strong>+221 77 248 51 76</strong></span><ArrowUpRight size={16} /></a>
                <div className="contact-detail"><span className="contact-detail-icon"><MapPin size={18} /></span><span><small>LOCALISATION</small><strong>Dakar, Sénégal</strong></span></div>
                <a className="contact-detail" href="https://github.com/bssmoignon" target="_blank" rel="noreferrer"><span className="contact-detail-icon"><Github size={18} /></span><span><small>CODE & PROJETS</small><strong>github.com/bssmoignon</strong></span><ArrowUpRight size={16} /></a>
                <a className="portfolio-link" href="https://bssmoignon.github.io/portfolio" target="_blank" rel="noreferrer"><ExternalLink size={14} /> bssmoignon.github.io/portfolio</a>
                <div className="availability-card"><span className="status-dot" /><p>Disponible pour échanger sur les opportunités en systèmes, réseaux, cloud et sécurité.</p></div>
              </div>
              <form className="contact-form reveal" onSubmit={form.handleSubmit(onSubmit)} noValidate>
                <div className="form-top"><div><span className="card-overline">PREMIER CONTACT</span><h3>Envoyer un message</h3></div><Send size={18} /></div>
                <div className="form-row"><label>Votre nom<input {...form.register("name")} placeholder="Nom et prénom" autoComplete="name" aria-invalid={Boolean(form.formState.errors.name)} />{form.formState.errors.name && <span className="field-error">{form.formState.errors.name.message}</span>}</label><label>Votre e-mail<input {...form.register("email")} type="email" placeholder="nom@exemple.com" autoComplete="email" aria-invalid={Boolean(form.formState.errors.email)} />{form.formState.errors.email && <span className="field-error">{form.formState.errors.email.message}</span>}</label></div>
                <label>Objet<input {...form.register("subject")} placeholder="À propos de…" aria-invalid={Boolean(form.formState.errors.subject)} />{form.formState.errors.subject && <span className="field-error">{form.formState.errors.subject.message}</span>}</label>
                <label>Votre message<textarea {...form.register("message")} rows={4} placeholder="Décrivez brièvement votre message…" aria-invalid={Boolean(form.formState.errors.message)} />{form.formState.errors.message && <span className="field-error">{form.formState.errors.message.message}</span>}</label>
                <button className="button button-primary form-submit" type="submit">Ouvrir mon application e-mail <ArrowUpRight size={16} /></button>
                {formState === "ready" && <p className="form-feedback" role="status">Votre application e-mail devrait s’ouvrir avec le message prérempli. Si ce n’est pas le cas, écrivez à boubacarsiguine7@gmail.com.</p>}
                <p className="form-privacy">Ce formulaire prépare un e-mail sur votre appareil ; aucune donnée n’est envoyée ni stockée par ce site.</p>
              </form>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="container footer-main"><a className="brand" href="#home"><span className="brand-mark">BS<span>.</span></span><span className="brand-copy">BOUBACAR SIGUINE<small>SYS · NET · CLOUD</small></span></a><p>Construire des infrastructures fiables.<br />Apprendre à les sécuriser.</p><a className="back-top" href="#home">RETOUR EN HAUT <ArrowUpRight size={14} /></a></div>
          <div className="container footer-bottom"><span>© {new Date().getFullYear()} BOUBACAR SIGUINE</span><span>CONÇU AVEC CURIOSITÉ À DAKAR <span className="footer-heart">✳</span></span><span>NEXT.JS · TYPESCRIPT</span></div>
        </footer>
      </main>
    </>
  );
}
