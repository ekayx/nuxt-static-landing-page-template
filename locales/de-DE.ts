export default {
  navbar: {
    elements: [
      { text: "Startseite", scrollToId: "home" },
      { text: "Dienstleistungen", scrollToId: "services" },
      { text: "Über uns", scrollToId: "about" },
      { text: "Portfolio", scrollToId: "portfolio" },
      { text: "Team", scrollToId: "team" },
      { text: "Preise", scrollToId: "pricing" },
    ],
    toggleNightMode: "Nachtmodus umschalten",
  },
  header: {
    title: "Das ultimative\nOnline-Erlebnis\nfür Zahlungen.",
    subtitle:
      "Mit unserer Plattform können Unternehmen und Studenten gemeinsam gedeihen. Passen Sie Ihr Personal problemlos an die sich ändernde Nachfrage im Laufe des Tages an.",
    cta: "Jetzt loslegen",
    download: "App herunterladen",
    clientsTitle: "Unsere geschätzten Kunden",
    clients: [
      {
        name: "Logo",
        logo: "/img/brands/logoipsum-297.svg",
        link: "javascript:void(0)",
      },
      {
        name: "LogoIpsum",
        logo: "/img/brands/logoipsum-311.svg",
        link: "javascript:void(0)",
      },
      {
        name: "Ipsum",
        logo: "/img/brands/logoipsum-323.svg",
        link: "javascript:void(0)",
      },
    ],
  },
  services: {
    tag: "Unsere Dienstleistungen",
    title: "Was wir bieten",
    subtitle:
      "Wir bieten außergewöhnliche Dienstleistungen, die auf Sie zugeschnitten sind.",
    items: [
      {
        icon: "icon-[raphael--piechart]",
        title: "Innovatives Design",
        description:
          "Wir arbeiten gerne mit anspruchsvollen Kunden zusammen, für die Qualität, Service, Integrität und Ästhetik wichtig sind.",
      },
      {
        icon: "icon-[mdi--tailwind]",
        title: "Maßgeschneiderte Lösungen",
        description:
          "Wir arbeiten gerne mit anspruchsvollen Kunden zusammen, für die Qualität, Service, Integrität und Ästhetik wichtig sind.",
      },
      {
        icon: "icon-[fluent-mdl2--web-components]",
        title: "Umfangreiche Komponenten",
        description:
          "Wir arbeiten gerne mit anspruchsvollen Kunden zusammen, für die Qualität, Service, Integrität und Ästhetik wichtig sind.",
      },
      {
        icon: "icon-[fluent--top-speed-20-regular]",
        title: "Optimierte Leistung",
        description:
          "Wir arbeiten gerne mit anspruchsvollen Kunden zusammen, für die Qualität, Service, Integrität und Ästhetik wichtig sind.",
      },
      {
        icon: "icon-[teenyicons--layers-outline]",
        title: "Hochgradig anpassbar",
        description:
          "Wir arbeiten gerne mit anspruchsvollen Kunden zusammen, für die Qualität, Service, Integrität und Ästhetik wichtig sind.",
      },
      {
        icon: "icon-[ion--refresh]",
        title: "Regelmäßige Updates",
        description:
          "Wir arbeiten gerne mit anspruchsvollen Kunden zusammen, für die Qualität, Service, Integrität und Ästhetik wichtig sind.",
      },
    ],
  },
  about: {
    tag: "Warum uns wählen",
    title: "Glückliche Kunden durch unsere Dienstleistungen.",
    description:
      "Es ist eine lange bekannte Tatsache, dass ein Leser durch den lesbaren Inhalt einer Seite abgelenkt wird, wenn er sich deren Layout ansieht. Der Punkt bei der Verwendung von Lorem Ipsum ist, dass es eine mehr oder weniger.\n\nEin Domainname ist einer der ersten Schritte zur Etablierung Ihrer Marke. Sichern Sie sich ein konsistentes Markenimage mit einem Domainnamen, der zu Ihrem Unternehmen passt.",
    cta: "Jetzt loslegen",
  },
  portfolio: {
    tag: "Unser Portfolio",
    title: "Neueste Arbeiten",
    subtitle:
      "Es gibt viele Varianten von Lorem Ipsum, aber die meisten haben in irgendeiner Form eine Veränderung erfahren.",
    projects: [
      {
        image: "/img/5.jpg",
        category: "Branding",
        title: "Markenidentität",
        buttonText: "Details anzeigen",
        buttonLink: "#",
      },
      {
        image: "/img/6.jpg",
        category: "Marketing",
        title: "Marketingstrategien",
        buttonText: "Details anzeigen",
        buttonLink: "#",
      },
      {
        image: "/img/7.jpg",
        category: "Entwicklung",
        title: "Webentwicklung",
        buttonText: "Details anzeigen",
        buttonLink: "#",
      },
      {
        image: "/img/8.jpg",
        category: "Design",
        title: "Visitenkarten",
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
        title: "Kreative Lösungen",
        buttonText: "Details anzeigen",
        buttonLink: "#",
      },
    ],
  },
  team: {
    tag: "Unser Team",
    title: "Lernen Sie unsere Experten kennen",
    subtitle:
      "Es gibt viele Varianten von Lorem Ipsum, aber die meisten haben in irgendeiner Form eine Veränderung erfahren.",
    members: [
      {
        image: "/img/11.jpg",
        name: "Jane Doe",
        profession: "Webentwickler",
      },
      {
        image: "/img/12.jpg",
        name: "John Smith",
        profession: "App-Entwickler",
      },
      {
        image: "/img/13.jpg",
        name: "Emily Davis",
        profession: "UI/UX-Designer",
      },
      {
        image: "/img/14.jpg",
        name: "Michael Brown",
        profession: "Vertriebsleiter",
      },
    ],
  },
  cta: {
    tag: "Entdecken Sie Ihre nächste Lieblings-App",
    title: "Beginnen Sie mit\nUnserer kostenlosen Testversion",
    cta: "Premium erhalten",
    secondary: "Kostenlose Testversion starten",
  },
  pricing: {
    tag: "Preispläne",
    title: "Wählen Sie Ihren Plan",
    subtitle:
      " Es gibt viele Varianten von Lorem Ipsum, aber die meisten haben in irgendeiner Form eine Veränderung erfahren.",
    plans: [
      {
        name: "Persönlich",
        price: "59€",
        description:
          "Perfekt für den Einsatz in einer persönlichen Website oder einem Kundenprojekt.",
        features: {
          users: "1 Benutzer",
          components: "Alle UI-Komponenten",
          access: "Lebenslanger Zugang",
          updates: "Kostenlose Updates",
          projects: "Verwendung für 1 Projekt",
          support: "3 Monate Support",
        },
        button: {
          text: "Persönlich wählen",
        },
      },
      {
        name: "Geschäftlich",
        price: "199€",
        description:
          "Perfekt für den Einsatz in einer Unternehmenswebsite oder einem Kundenprojekt.",
        features: {
          users: "5 Benutzer",
          components: "Alle UI-Komponenten",
          access: "Lebenslanger Zugang",
          updates: "Kostenlose Updates",
          projects: "Verwendung für 3 Projekte",
          support: "4 Monate Support",
        },
        button: {
          text: "Geschäftlich wählen",
        },
      },
      {
        name: "Professionell",
        price: "256€",
        description:
          "Perfekt für den Einsatz in einer professionellen Website oder einem Kundenprojekt.",
        features: {
          users: "Unbegrenzte Benutzer",
          components: "Alle UI-Komponenten",
          access: "Lebenslanger Zugang",
          updates: "Kostenlose Updates",
          projects: "Verwendung für unbegrenzte Projekte",
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
        reviewImg: "/img/brands/logoipsum-296.svg",
        reviewAlt: "ipsum",
        details:
          "Dateispeicherung leicht gemacht – mit leistungsstarken Funktionen, die Sie nirgendwo anders finden. Ob Sie.",
        name: "Robert Lee",
        position: "Chief Executive Officer.",
      },
      {
        image: "/img/16.jpg",
        reviewImg: "/img/brands/logoipsum-296.svg",
        reviewAlt: "ipsum",
        details:
          "Dateispeicherung leicht gemacht – mit leistungsstarken Funktionen, die Sie nirgendwo anders finden. Ob Sie.",
        name: "Alice Johnson",
        position: "Geschäftsführer.",
      },
    ],
  },
  footer: {
    description:
      "Das ist nur ein komplett zufälliger Text. Es ist nicht einmal Latein.",
    phone: "+1 234 567 890",
    followUs: "Folgen Sie uns auf",
    copyright: "© 2025 IhrUnternehmen",
    menus: [
      {
        title: "Ressourcen",
        items: [
          { text: "SaaS-Entwicklung", link: "javascript:void(0)" },
          { text: "Unsere Produkte", link: "javascript:void(0)" },
          { text: "Benutzerfluss", link: "javascript:void(0)" },
          { text: "Benutzerstrategie", link: "javascript:void(0)" },
        ],
      },
      {
        title: "Unternehmen",
        items: [
          { text: "Kontakt & Support", link: "/contact-us" },
          { text: "Datenschutzrichtlinie", link: "/privacy-policy" },
          { text: "Nutzungsbedingungen", link: "/terms-of-use" },
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
