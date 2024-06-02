export default {
  navbar: {
    elements: [
      { text: "Startseite", scrollToId: "home" },
      { text: "Services", scrollToId: "services" },
      { text: "Über Uns", scrollToId: "about" },
      { text: "Portfolio", scrollToId: "portfolio" },
      { text: "Team", scrollToId: "team" },
      { text: "Preise", scrollToId: "pricing" },
    ],
    toggleNightMode: "Nachtmodus umschalten",
  },
  header: {
    title: "Die größte\nReise der\nOnline-Zahlungen.",
    subtitle:
      "Mit TailGrids gedeihen Unternehmen und Studierende zusammen. Unternehmen können ihr Personal perfekt an die sich ändernde Nachfrage im Laufe des Tages anpassen.",
    cta: "Loslegen",
    download: "App herunterladen",
    clientsTitle: "Einige unserer Kunden",
    clients: [
      {
        name: "Ayroui",
        logo: "/img/brands/logoipsum-297.svg",
        link: "javascript:void(0)",
      },
      {
        name: "GrayGrids",
        logo: "/img/brands/logoipsum-311.svg",
        link: "javascript:void(0)",
      },
      {
        name: "UIdeck",
        logo: "/img/brands/logoipsum-323.svg",
        link: "javascript:void(0)",
      },
    ],
  },
  services: {
    tag: "Unsere Dienstleistungen",
    title: "Was wir anbieten",
    subtitle: "Wir bieten Ihnen die besten Dienstleistungen.",
    items: [
      {
        icon: "icon-[raphael--piechart]",
        title: "Erfrischendes Design",
        description:
          "Wir arbeiten gerne mit anspruchsvollen Kunden zusammen, Menschen, für die Qualität, Service, Integrität und Ästhetik wichtig sind.",
      },
      {
        icon: "icon-[mdi--tailwind]",
        title: "Basierend auf Tailwind CSS",
        description:
          "Wir arbeiten gerne mit anspruchsvollen Kunden zusammen, Menschen, für die Qualität, Service, Integrität und Ästhetik wichtig sind.",
      },
      {
        icon: "icon-[fluent-mdl2--web-components]",
        title: "100+ Komponenten",
        description:
          "Wir arbeiten gerne mit anspruchsvollen Kunden zusammen, Menschen, für die Qualität, Service, Integrität und Ästhetik wichtig sind.",
      },
      {
        icon: "icon-[fluent--top-speed-20-regular]",
        title: "Geschwindigkeitsoptimiert",
        description:
          "Wir arbeiten gerne mit anspruchsvollen Kunden zusammen, Menschen, für die Qualität, Service, Integrität und Ästhetik wichtig sind.",
      },
      {
        icon: "icon-[teenyicons--layers-outline]",
        title: "Vollständig anpassbar",
        description:
          "Wir arbeiten gerne mit anspruchsvollen Kunden zusammen, Menschen, für die Qualität, Service, Integrität und Ästhetik wichtig sind.",
      },
      {
        icon: "icon-[ion--refresh]",
        title: "Regelmäßige Updates",
        description:
          "Wir arbeiten gerne mit anspruchsvollen Kunden zusammen, Menschen, für die Qualität, Service, Integrität und Ästhetik wichtig sind.",
      },
    ],
  },
  about: {
    tag: "Warum uns wählen",
    title:
      "Machen Sie Ihre Kunden glücklich, indem Sie Dienstleistungen anbieten.",
    description:
      "Es ist eine bekannte Tatsache, dass ein Leser durch den lesbaren Inhalt einer Seite abgelenkt wird, wenn er sich deren Layout ansieht. Der Punkt der Verwendung von Lorem Ipsum ist, dass es mehr oder weniger.\n\nEin Domainname ist einer der ersten Schritte zur Etablierung Ihrer Marke. Sichern Sie ein konsistentes Markenbild mit einem Domainnamen, der zu Ihrem Unternehmen passt.",
    cta: "Loslegen",
  },
  portfolio: {
    tag: "Unser Portfolio",
    title: "Unsere neuesten Projekte",
    subtitle:
      "Es gibt viele Varianten von Lorem Ipsum, aber die meisten haben in irgendeiner Form Veränderungen erfahren.",
    projects: [
      {
        image: "/img/5.jpg",
        category: "Branding",
        title: "Branding-Design",
        buttonText: "Details anzeigen",
        buttonLink: "#",
      },
      {
        image: "/img/6.jpg",
        category: "Marketing",
        title: "Beste Marketing-Tipps",
        buttonText: "Details anzeigen",
        buttonLink: "#",
      },
      {
        image: "/img/7.jpg",
        category: "Entwicklung",
        title: "Webdesign-Trend",
        buttonText: "Details anzeigen",
        buttonLink: "#",
      },
      {
        image: "/img/8.jpg",
        category: "Design",
        title: "Visitenkartendesign",
        buttonText: "Details anzeigen",
        buttonLink: "#",
      },
      {
        image: "/img/9.jpg",
        category: "Marketing",
        title: "Digitales Marketing",
        buttonText: "Details anzeigen",
        buttonLink: "#",
      },
      {
        image: "/img/10.jpg",
        category: "Branding",
        title: "Kreativagentur",
        buttonText: "Details anzeigen",
        buttonLink: "#",
      },
    ],
  },
  team: {
    tag: "Unser Team",
    title: "Unser großartiges Team",
    subtitle:
      "Es gibt viele Varianten von Lorem Ipsum, aber die meisten haben in irgendeiner Form Veränderungen erfahren.",
    members: [
      {
        image: "/img/11.jpg",
        name: "Coriss Ambady",
        profession: "Webentwickler",
      },
      {
        image: "/img/12.jpg",
        name: "Glorius Cristian",
        profession: "App-Entwickler",
      },
      {
        image: "/img/13.jpg",
        name: "Jackie Sanders",
        profession: "UI/UX-Designer",
      },
      {
        image: "/img/14.jpg",
        name: "Nikolas Brooten",
        profession: "Vertriebsleiter",
      },
    ],
  },
  cta: {
    tag: "Finden Sie Ihre nächste Traum-App",
    title: "Beginnen Sie mit\nunserem kostenlosen Test",
    cta: "Pro-Version erhalten",
    secondary: "Kostenlose Testversion starten",
  },
  pricing: {
    tag: "Preistabelle",
    title: "Unser Preisplan",
    subtitle:
      " Es gibt viele Varianten von Lorem Ipsum, aber die meisten haben in irgendeiner Form Veränderungen erfahren.",
    plans: [
      {
        name: "Persönlich",
        price: "$59",
        description:
          "Perfekt für die Nutzung auf einer persönlichen Website oder einem Kundenprojekt.",
        features: {
          users: "1 Benutzer",
          components: "Alle UI-Komponenten",
          access: "Lebenslanger Zugang",
          updates: "Kostenlose Updates",
          projects: "Für 1 (ein) Projekt verwenden",
          support: "3 Monate Support",
        },
        button: {
          text: "Persönlich wählen",
        },
      },
      {
        name: "Business",
        price: "$199",
        description:
          "Perfekt für die Nutzung auf einer Business-Website oder einem Kundenprojekt.",
        features: {
          users: "5 Benutzer",
          components: "Alle UI-Komponenten",
          access: "Lebenslanger Zugang",
          updates: "Kostenlose Updates",
          projects: "Für 3 (drei) Projekte verwenden",
          support: "4 Monate Support",
        },
        button: {
          text: "Business wählen",
        },
      },
      {
        name: "Professionell",
        price: "$256",
        description:
          "Perfekt für die Nutzung auf einer professionellen Website oder einem Kundenprojekt.",
        features: {
          users: "Unbegrenzte Benutzer",
          components: "Alle UI-Komponenten",
          access: "Lebenslanger Zugang",
          updates: "Kostenlose Updates",
          projects: "Für unbegrenzte Projekte verwenden",
          support: "12 Monate Support",
        },
        button: {
          text: "Professionell wählen",
        },
      },
    ],
  },
  testimonial: {
    testimonials: [
      {
        image: "/img/15.jpg",
        reviewImg: "/img/lineicon.svg",
        reviewAlt: "lineicon",
        details:
          "Dateispeicherung leicht gemacht – einschließlich leistungsstarker Funktionen, die Sie nirgendwo anders finden. Egal ob Sie.",
        name: "Larry Diamond",
        position: "Chief Executive Officer.",
      },
      {
        image: "/img/16.jpg",
        reviewImg: "/img/lineicon.svg",
        reviewAlt: "lineicon",
        details:
          "Dateispeicherung leicht gemacht – einschließlich leistungsstarker Funktionen, die Sie nirgendwo anders finden. Egal ob Sie.",
        name: "Larry Diamond",
        position: "Chief Executive Officer.",
      },
    ],
  },
  footer: {
    description:
      "Sed ut perspiciatis undmnis ist natus error sit voluptatem totam rem aperiam.",
    phone: "+1 234 567 890",
    followUs: "Folgen Sie uns auf",
    copyright: "&copy; 2025 TailGrids",
    menus: [
      {
        title: "Ressourcen",
        items: [
          { text: "SaaS-Entwicklung", link: "javascript:void(0)" },
          { text: "Unsere Produkte", link: "javascript:void(0)" },
          { text: "User Flow", link: "javascript:void(0)" },
          { text: "User Strategy", link: "javascript:void(0)" },
        ],
      },
      {
        title: "Unternehmen",
        items: [
          { text: "Über TailGrids", link: "javascript:void(0)" },
          { text: "Kontakt & Support", link: "javascript:void(0)" },
          { text: "Erfolgsgeschichte", link: "javascript:void(0)" },
          { text: "Einstellungen & Datenschutz", link: "javascript:void(0)" },
        ],
      },
      {
        title: "Schnellzugriff",
        items: [
          { text: "Premium-Support", link: "javascript:void(0)" },
          { text: "Unsere Dienstleistungen", link: "javascript:void(0)" },
          { text: "Unser Team kennenlernen", link: "javascript:void(0)" },
          { text: "App herunterladen", link: "javascript:void(0)" },
        ],
      },
    ],
  },
};
