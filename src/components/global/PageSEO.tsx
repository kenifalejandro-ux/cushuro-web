import SEO from "./seo";

type PageId =
  | "inicio"
  | "la-empresa"
  | "cal-viva"
  | "cal-agricola"
  | "piedra-caliza"
  | "carbon-antracita"
  | "carbon-cisco"
  | "operacion-con-maquinaria-pesada"
  | "transporte-logistico-especializado"
  | "medio-ambiente"
  | "responsabilidad-social"
  | "contacto"
  | "formulario";

type PageKind = "home" | "about" | "product" | "service" | "information" | "contact" | "utility";

type FAQItem = {
  question: string;
  answer: string;
};

type SchemaNode = Record<string, unknown>;

type PageConfig = {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  kind: PageKind;
  imageAlt: string;
  schemaName: string;
  category?: string;
  robots?: string;
  cta?: string;
  faq?: FAQItem[];
};

const FALLBACK_SITE_URL = "https://kenifa.sg-host.com";
const SITE_NAME = "";
const LEGAL_NAME = "Empresa de Transportes y Servicios Santa Isabel de Cushuro S.A.C.";
const COMPANY_DESCRIPTION =
  "Producción y comercialización de cal viva, cal molida, cal hidratada, cal agrícola, piedra caliza, carbón antracita y carbón tipo zisco para minería e industria.";
const CONTACT_EMAIL = "administracion@cushuro.com";
const CONTACT_PHONE = "+51 986 671 128";
const CONTACT_PHONE_ALT = "+51 910 582 455";
const COMPANY_RUC = "20482610944";
const SITE_LOCALE = "es_PE";
const DEFAULT_IMAGE_PATH = "/imagenes-optim/flota-calera-noche/flota-calera-noche-1280.webp";
const LOGO_PATH = "/logo-caldera/logo-caldera-cushuro.png";

const pageConfigs: Record<PageId, PageConfig> = {
  inicio: {
    title: " | Cal Viva, Cal Agrícola y Piedra Caliza",
    description:
      "Producción y comercialización de óxido de calcio, cal viva, cal molida, cal hidratada, cal agrícola, piedra caliza y carbón para minería e industria desde Huamachuco. Solicite cotización comercial.",
    keywords: [
      "",
      "óxido de calcio en huamachuco",
      "cal viva para minería",
      "cal agrícola en la libertad",
      "piedra caliza en huamachuco",
      "carbón antracita para hornos",
      "cal molida y cal hidratada",
      "proveedor minero en sánchez carrión",
    ],
    path: "/",
    kind: "home",
    imageAlt: "Operación de  con producción y logística para minería e industria.",
    schemaName: "",
    cta: "Solicite cotización de productos y servicios",
    faq: [
      {
        question: "¿Qué productos comercializa ?",
        answer:
          "La empresa comercializa cal viva, cal molida, cal hidratada, cal agrícola, piedra caliza, carbón antracita y carbón tipo zisco para minería e industria.",
      },
      {
        question: "¿Dónde se ubica la empresa y su centro de producción?",
        answer:
          "La oficina se ubica en Av. Vía de Evitamiento N°105, Huamachuco, y el centro de producción está en el caserío Rodeopampa, distrito de Marcabal, La Libertad.",
      },
      {
        question: "¿Cómo puedo solicitar una cotización?",
        answer:
          "Puede solicitar una cotización desde la página de contacto, por WhatsApp o escribiendo a administracion@cushuro.com.",
      },
    ],
  },
  "la-empresa": {
    title: "La Empresa | ",
    description:
      "Conozca a la Empresa de Transportes y Servicios Santa Isabel de Cushuro S.A.C., especializada en suministro de óxido de calcio con enfoque en seguridad, medio ambiente, logística y responsabilidad social.",
    keywords: [
      "empresa santa isabel de cushuro",
      "producción de óxido de calcio",
      "minería no metálica en la libertad",
      "seguridad y medio ambiente en calera",
      "logística minera huamachuco",
      "responsabilidad social marcabal",
    ],
    path: "/la-empresa",
    kind: "about",
    imageAlt: "Información institucional de  en Huamachuco.",
    schemaName: "La Empresa",
    faq: [
      {
        question: "¿Cuál es el enfoque de trabajo de la empresa?",
        answer:
          "La empresa enfoca su gestión en producción, seguridad, medio ambiente, logística y responsabilidad social para atender al sector minero e industrial.",
      },
      {
        question: "¿Qué mercado atiende ?",
        answer:
          "Atiende principalmente al mercado minero y a clientes industriales que requieren óxido de calcio, caliza y combustibles sólidos.",
      },
    ],
  },
  "cal-viva": {
    title: "Cal Viva | Óxido de Calcio para Minería e Industria",
    description:
      "Cal viva producida en cinco hornos operativos en Rodeopampa, Marcabal, con control de calidad y despacho programado para mercado minero e industrial. Cotice su suministro.",
    keywords: [
      "cal viva en huamachuco",
      "óxido de calcio para minería",
      "cal viva en la libertad",
      "proveedor de óxido de calcio",
      "calera con cinco hornos",
      "suministro de cal viva en perú",
    ],
    path: "/Productos/cal-viva",
    kind: "product",
    imageAlt: "Cal viva y óxido de calcio producidos por .",
    schemaName: "Cal Viva",
    category: "Óxido de calcio para minería e industria",
    cta: "Cotice cal viva para minería e industria",
    faq: [
      {
        question: "¿Dónde se produce la cal viva?",
        answer:
          "La cal viva se produce en el centro de operaciones de Rodeopampa, Marcabal, con cinco hornos operativos en proceso continuo.",
      },
      {
        question: "¿Para qué sectores está orientada la cal viva?",
        answer:
          "Está orientada al mercado minero e industrial, donde el óxido de calcio se usa como insumo de proceso y soporte operativo.",
      },
    ],
  },
  "cal-agricola": {
    title: "Cal Agrícola | Corrección de Suelos y Producción Controlada",
    description:
      "Cal agrícola elaborada a partir de caliza seleccionada y procesos controlados para corrección de suelos, acondicionamiento técnico y aplicaciones productivas. Solicite cotización.",
    keywords: [
      "cal agrícola en la libertad",
      "cal agrícola en huamachuco",
      "enmienda de suelos con cal",
      "hidróxido de calcio agrícola",
      "productor de cal agrícola en perú",
      "caliza seleccionada para agricultura",
    ],
    path: "/Productos/cal-agricola",
    kind: "product",
    imageAlt: "Cal agrícola producida por  para suelos y procesos técnicos.",
    schemaName: "Cal Agrícola",
    category: "Cal agrícola y acondicionamiento de suelos",
    cta: "Solicite cotización de cal agrícola",
    faq: [
      {
        question: "¿Qué beneficios ofrece la cal agrícola?",
        answer:
          "Ayuda al acondicionamiento técnico del suelo y se produce con materia prima seleccionada para aplicaciones productivas y de corrección.",
      },
      {
        question: "¿La empresa maneja procesos controlados?",
        answer:
          "Sí. La empresa trabaja con selección de caliza, calcinación, hidratación, molienda y control de calidad según el uso requerido.",
      },
    ],
  },
  "piedra-caliza": {
    title: "Piedra Caliza | Suministro para Hornos y Minería",
    description:
      "Piedra caliza de cantera propia para calcinación, preparación y suministro continuo a operaciones mineras, hornos industriales y procesos no metálicos. Cotice disponibilidad.",
    keywords: [
      "piedra caliza en huamachuco",
      "cantera de piedra caliza",
      "piedra caliza para hornos",
      "suministro de caliza para minería",
      "piedra caliza en marcabal",
      "materia prima para cal viva",
    ],
    path: "/Productos/piedra-caliza",
    kind: "product",
    imageAlt: "Piedra caliza extraída y preparada para producción industrial en Santa Isabel de Cushuro.",
    schemaName: "Piedra Caliza",
    category: "Piedra caliza para producción de cal y minería",
    cta: "Cotice piedra caliza para su operación",
    faq: [
      {
        question: "¿La piedra caliza proviene de cantera propia?",
        answer:
          "Sí. La empresa cuenta con canteras y abastecimiento propio de piedra caliza para sostener su producción y suministro.",
      },
      {
        question: "¿Para qué se utiliza la piedra caliza suministrada?",
        answer:
          "Se utiliza como insumo principal en hornos industriales, producción de cal y operaciones vinculadas a minería no metálica.",
      },
    ],
  },
  "carbon-antracita": {
    title: "Carbón Antracita | Combustible para Hornos Industriales",
    description:
      "Carbón antracita clasificado para hornos y procesos térmicos, con control de humedad, granulometría y abastecimiento continuo para minería e industria. Solicite cotización.",
    keywords: [
      "carbón antracita en huamachuco",
      "combustible para hornos industriales",
      "carbón para calera",
      "antracita para minería",
      "carbón de piedra en la libertad",
      "proveedor de carbón antracita",
    ],
    path: "/Productos/carbon-antracita",
    kind: "product",
    imageAlt: "Carbón antracita clasificado por  para procesos térmicos.",
    schemaName: "Carbón Antracita",
    category: "Combustible sólido para hornos y procesos industriales",
    cta: "Solicite cotización de carbón antracita",
    faq: [
      {
        question: "¿Qué controla la empresa en el carbón antracita?",
        answer:
          "La empresa controla granulometría, humedad y calidad del carbón para asegurar un suministro confiable en hornos y procesos térmicos.",
      },
      {
        question: "¿Para qué operaciones está orientado este combustible?",
        answer:
          "Está orientado a hornos industriales, procesos térmicos continuos y operaciones mineras e industriales que requieren combustible sólido.",
      },
    ],
  },
  "carbon-cisco": {
    title: "Carbón Tipo Zisco | Combustible Sólido Clasificado",
    description:
      "Carbón tipo zisco recuperado, clasificado y acondicionado para hornos industriales y procesos térmicos con suministro programado desde la operación minera no metálica. Cotice su abastecimiento.",
    keywords: [
      "carbón tipo zisco",
      "carbón cisco en huamachuco",
      "combustible sólido clasificado",
      "carbón para hornos industriales",
      "proveedor de carbón tipo zisco",
      "carbón para calcinación",
    ],
    path: "/Productos/carbon-cisco",
    kind: "product",
    imageAlt: "Carbón tipo zisco acondicionado para hornos industriales por Santa Isabel de Cushuro.",
    schemaName: "Carbón Tipo Zisco",
    category: "Combustible sólido clasificado para hornos",
    cta: "Cotice carbón tipo zisco",
    faq: [
      {
        question: "¿Qué es el carbón tipo zisco que comercializa la empresa?",
        answer:
          "Es una fracción clasificada y acondicionada de combustible sólido, orientada a hornos industriales y procesos térmicos.",
      },
      {
        question: "¿El carbón tipo zisco se acondiciona antes del despacho?",
        answer:
          "Sí. La empresa lo clasifica, controla humedad y lo prepara para un suministro programado según requerimiento operativo.",
      },
    ],
  },
  "operacion-con-maquinaria-pesada": {
    title: "Operación con Maquinaria Pesada | Servicios Industriales",
    description:
      "Servicios de operación con maquinaria pesada para extracción, carguío, movimiento de tierras y soporte de cantera en operaciones mineras no metálicas. Solicite propuesta comercial.",
    keywords: [
      "maquinaria pesada en huamachuco",
      "servicios industriales en cantera",
      "movimiento de tierras para minería",
      "carguío y extracción de caliza",
      "operación minera no metálica",
      "soporte operativo con maquinaria pesada",
    ],
    path: "/Servicios-Industriales/operacion-con-maquinaria-pesada",
    kind: "service",
    imageAlt: "Operación con maquinaria pesada y soporte de cantera en Santa Isabel de Cushuro.",
    schemaName: "Operación con Maquinaria Pesada",
    category: "Servicios de cantera y soporte operativo",
    cta: "Solicite una propuesta de maquinaria pesada",
    faq: [
      {
        question: "¿Qué trabajos cubre la operación con maquinaria pesada?",
        answer:
          "La empresa cubre movimiento de tierras, extracción, carguío, preparación de accesos y soporte operativo en cantera.",
      },
      {
        question: "¿Este servicio está orientado a minería no metálica?",
        answer:
          "Sí. El servicio está alineado con operaciones de cantera y minería no metálica, con supervisión técnica y apoyo operativo.",
      },
    ],
  },
  "transporte-logistico-especializado": {
    title: "Transporte Logístico Especializado | Calera Santa Isabel",
    description:
      "Transporte logístico especializado de piedra caliza, cal viva, carbón e insumos industriales con flota y coordinación operativa segura para clientes mineros. Solicite cotización.",
    keywords: [
      "transporte logístico especializado",
      "transporte de cal viva",
      "transporte de piedra caliza",
      "logística minera en huamachuco",
      "servicio de transporte industrial",
      "flota para suministros mineros",
    ],
    path: "/Servicios-Industriales/transporte-logistico-especializado",
    kind: "service",
    imageAlt: "Flota y transporte logístico especializado de Santa Isabel de Cushuro.",
    schemaName: "Transporte Logístico Especializado",
    category: "Logística y transporte para minería e industria",
    cta: "Cotice transporte logístico especializado",
    faq: [
      {
        question: "¿Qué materiales transporta la empresa?",
        answer:
          "Transporta piedra caliza, cal viva, carbón de piedra y otros insumos industriales vinculados a minería e industria.",
      },
      {
        question: "¿El transporte se realiza con coordinación operativa y seguridad?",
        answer:
          "Sí. El servicio se apoya en coordinación operativa, supervisión y protocolos de seguridad para el traslado de insumos.",
      },
    ],
  },
  "medio-ambiente": {
    title: "Medio Ambiente | Preservación Ambiental y Reforestación",
    description:
      "Compromiso con la preservación ambiental, reforestación y gestión responsable en proyectos de minería no metálica en Huamachuco, Marcabal y su área de influencia.",
    keywords: [
      "medio ambiente en minería no metálica",
      "reforestación en huamachuco",
      "preservación ambiental en marcabal",
      "gestión ambiental de calera",
      "compromiso ambiental santa isabel de cushuro",
      "forestación en la libertad",
    ],
    path: "/compromiso-ambiental-y-social/medio-ambiente",
    kind: "information",
    imageAlt: "Compromiso ambiental y reforestación impulsados por Santa Isabel de Cushuro.",
    schemaName: "Medio Ambiente",
    faq: [
      {
        question: "¿Qué enfoque ambiental mantiene la empresa?",
        answer:
          "La empresa mantiene un enfoque de preservación ambiental, reforestación y mejora de la conciencia ambiental dentro de sus operaciones.",
      },
      {
        question: "¿Qué acciones ambientales destaca el brochure?",
        answer:
          "Destaca la reforestación y el cuidado de especies como quinual, quishuar, eucalipto y aliso en zonas del área de influencia.",
      },
    ],
  },
  "responsabilidad-social": {
    title: "Responsabilidad Social | Compromiso con Huamachuco y Marcabal",
    description:
      "Responsabilidad social orientada a empleo local, respeto cultural, educación, salud y desarrollo de las comunidades del área de influencia de la empresa.",
    keywords: [
      "responsabilidad social en huamachuco",
      "empleo local en marcabal",
      "compromiso social calera",
      "desarrollo comunitario en la libertad",
      "proyectos sociales santa isabel de cushuro",
      "empresa y comunidad en minería",
    ],
    path: "/compromiso-ambiental-y-social/responsabilidad-social",
    kind: "information",
    imageAlt: "Programas de responsabilidad social de Santa Isabel de Cushuro en comunidades locales.",
    schemaName: "Responsabilidad Social",
    faq: [
      {
        question: "¿Cómo entiende la empresa la responsabilidad social?",
        answer:
          "La entiende como respeto a la población, sus costumbres, cultura, salud y entorno, promoviendo convivencia con equidad y desarrollo local.",
      },
      {
        question: "¿Qué áreas sociales prioriza la empresa?",
        answer:
          "Prioriza empleo local, educación, salud, cultura, deporte y apoyo al desarrollo comunitario en su zona de influencia.",
      },
    ],
  },
  contacto: {
    title: "Contacto | Cotice Cal Viva, Piedra Caliza y Carbón",
    description:
      "Solicite cotización de cal viva, cal agrícola, piedra caliza, carbón antracita o servicios industriales. Atención desde Huamachuco, La Libertad.",
    keywords: [
      "contacto santa isabel de cushuro",
      "cotización de cal viva",
      "proveedor de piedra caliza en huamachuco",
      "cotizar carbón antracita",
      "contacto para servicios industriales",
      "administracion@cushuro.com",
    ],
    path: "/contacto",
    kind: "contact",
    imageAlt: "Contacto y cotizaciones de .",
    schemaName: "Contacto",
    cta: "Solicite su cotización comercial",
    faq: [
      {
        question: "¿Por qué medios puedo contactar a la empresa?",
        answer:
          "Puede contactar por correo a administracion@cushuro.com o por los teléfonos 986 671 128 y 910 582 455.",
      },
      {
        question: "¿Qué puedo solicitar desde la página de contacto?",
        answer:
          "Puede solicitar cotizaciones de productos, abastecimiento para operaciones y consultas sobre servicios industriales.",
      },
    ],
  },
  formulario: {
    title: "Formulario Enviado | ",
    description:
      "Confirmación del envío del formulario de contacto de .",
    keywords: ["confirmación de formulario", "contacto enviado", "santa isabel de cushuro"],
    path: "/formulario",
    kind: "utility",
    imageAlt: "Confirmación de contacto enviada a .",
    schemaName: "Formulario Enviado",
    robots: "noindex, nofollow",
  },
};

function normalizeUrl(url: string) {
  return url.replace(/\/+$/, "");
}

function getSiteUrl() {
  const envUrl = import.meta.env.VITE_SITE_URL;

  if (typeof envUrl === "string" && envUrl.trim()) {
    return normalizeUrl(envUrl.trim());
  }

  if (typeof window !== "undefined" && window.location.origin) {
    return normalizeUrl(window.location.origin);
  }

  return FALLBACK_SITE_URL;
}

function toAbsoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

function buildBreadcrumbs(page: PageConfig) {
  if (page.path === "/") {
    return [{ name: "Inicio", path: "/" }];
  }

  return [
    { name: "Inicio", path: "/" },
    { name: page.schemaName, path: page.path },
  ];
}

function createBreadcrumbSchema(page: PageConfig) {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: buildBreadcrumbs(page).map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

function createOrganizationSchema() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    name: LEGAL_NAME,
    alternateName: SITE_NAME,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: toAbsoluteUrl(LOGO_PATH),
    },
    description: COMPANY_DESCRIPTION,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: CONTACT_PHONE,
        email: CONTACT_EMAIL,
        availableLanguage: ["es"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: CONTACT_PHONE_ALT,
        email: CONTACT_EMAIL,
        availableLanguage: ["es"],
      },
    ],
    identifier: {
      "@type": "PropertyValue",
      propertyID: "RUC",
      value: COMPANY_RUC,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Vía de Evitamiento N°105",
      addressLocality: "Huamachuco",
      addressRegion: "La Libertad",
      addressCountry: "PE",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "La Libertad",
      },
      {
        "@type": "Country",
        name: "Perú",
      },
    ],
    location: {
      "@type": "Place",
      name: "Centro de Producción Rodeopampa",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Caserío Rodeopampa",
        addressLocality: "Marcabal",
        addressRegion: "La Libertad",
        addressCountry: "PE",
      },
    },
    knowsAbout: [
      "Óxido de calcio",
      "Cal viva",
      "Cal agrícola",
      "Piedra caliza",
      "Carbón antracita",
      "Transporte logístico especializado",
      "Maquinaria pesada",
    ],
  };
}

function createLocalBusinessSchema() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#localbusiness`,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: siteUrl,
    image: toAbsoluteUrl(DEFAULT_IMAGE_PATH),
    logo: toAbsoluteUrl(LOGO_PATH),
    description: COMPANY_DESCRIPTION,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Vía de Evitamiento N°105",
      addressLocality: "Huamachuco",
      addressRegion: "La Libertad",
      addressCountry: "PE",
    },
    areaServed: ["Huamachuco", "La Libertad", "Perú"],
    identifier: {
      "@type": "PropertyValue",
      propertyID: "RUC",
      value: COMPANY_RUC,
    },
  };
}

function createWebSiteSchema() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    url: siteUrl,
    name: SITE_NAME,
    alternateName: LEGAL_NAME,
    description: pageConfigs.inicio.description,
    inLanguage: "es-PE",
    publisher: {
      "@id": `${siteUrl}#organization`,
    },
    potentialAction: {
      "@type": "ContactAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/contacto`,
      },
      name: "Solicitar cotización comercial",
    },
  };
}

function createWebPageSchema(page: PageConfig, imageUrl: string) {
  const siteUrl = getSiteUrl();
  const pageUrl = toAbsoluteUrl(page.path);
  const webPageType =
    page.kind === "about" ? "AboutPage" : page.kind === "contact" ? "ContactPage" : "WebPage";

  return {
    "@context": "https://schema.org",
    "@type": webPageType,
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: page.title,
    description: page.description,
    inLanguage: "es-PE",
    isPartOf: {
      "@id": `${siteUrl}#website`,
    },
    about: {
      "@id": `${siteUrl}#organization`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: imageUrl,
    },
  };
}

function createPrimarySchema(page: PageConfig, imageUrl: string) {
  const siteUrl = getSiteUrl();
  const pageUrl = toAbsoluteUrl(page.path);

  if (page.kind === "product") {
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": `${pageUrl}#primary`,
      name: page.schemaName,
      description: page.description,
      category: page.category,
      image: imageUrl,
      url: pageUrl,
      brand: {
        "@type": "Brand",
        name: SITE_NAME,
      },
      manufacturer: {
        "@id": `${siteUrl}#organization`,
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Minería e industria",
      },
    };
  }

  if (page.kind === "service") {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#primary`,
      name: page.schemaName,
      description: page.description,
      serviceType: page.category ?? page.schemaName,
      provider: {
        "@id": `${siteUrl}#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "Perú",
      },
      image: imageUrl,
      url: pageUrl,
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Clientes mineros e industriales",
      },
    };
  }

  if (page.kind === "contact") {
    return {
      "@context": "https://schema.org",
      "@type": "ContactPoint",
      "@id": `${pageUrl}#primary`,
      contactType: "sales",
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      availableLanguage: ["es"],
      areaServed: {
        "@type": "Country",
        name: "Perú",
      },
    };
  }

  return null;
}

function createFaqSchema(page: PageConfig) {
  if (!page.faq?.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function createConversionActionSchema(page: PageConfig) {
  if (!page.cta || page.kind === "utility") {
    return null;
  }

  const contactUrl = toAbsoluteUrl("/contacto");
  const actionType = page.kind === "product" || page.kind === "service" ? "QuoteAction" : "ContactAction";

  return {
    "@context": "https://schema.org",
    "@type": actionType,
    name: page.cta,
    target: {
      "@type": "EntryPoint",
      urlTemplate: contactUrl,
    },
    result: {
      "@type": "Thing",
      name: "Cotización y contacto comercial",
    },
  };
}

type PageSEOProps = {
  pageId: PageId;
};

export default function PageSEO({ pageId }: PageSEOProps) {
  const page = pageConfigs[pageId];
  const imageUrl = toAbsoluteUrl(DEFAULT_IMAGE_PATH);
  const primarySchema = createPrimarySchema(page, imageUrl);
  const faqSchema = createFaqSchema(page);
  const conversionActionSchema = createConversionActionSchema(page);
  const schema: SchemaNode[] = [
    createWebSiteSchema(),
    createOrganizationSchema(),
    createLocalBusinessSchema(),
    createWebPageSchema(page, imageUrl),
    createBreadcrumbSchema(page),
  ];

  if (primarySchema) {
    schema.push(primarySchema);
  }

  if (faqSchema) {
    schema.push(faqSchema);
  }

  if (conversionActionSchema) {
    schema.push(conversionActionSchema);
  }

  return (
    <SEO
      title={page.title}
      description={page.description}
      keywords={page.keywords.join(", ")}
      url={toAbsoluteUrl(page.path)}
      image={imageUrl}
      imageAlt={page.imageAlt}
      type={page.kind === "product" ? "product" : "website"}
      locale={SITE_LOCALE}
      siteName={SITE_NAME}
      schema={schema}
      robots={page.robots}
    />
  );
}
