export const SITE = {
  title: "Rust",
  description: "Documentation del lenguaje de progrmación Rust.",
  defaultLanguage: "es_ES",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  Spanish: "es",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<
  typeof KNOWN_LANGUAGE_CODES[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  es: {
    "¿Qué es Rust?": [{ text: "Introducción", link: "es/introduction" }],
    "Conceptos comunes de programación": [
      {
        text: "Introducción",
        link: "es/common-programming-concepts/introduction",
      },
      {
        text: "Variables y Constantes",
        link: "es/common-programming-concepts/variables",
      },
      {
        text: "Tipos de Datos",
        link: "es/common-programming-concepts/data-types",
      },
      {
        text: "Funciones",
        link: "es/common-programming-concepts/functions",
      },
      {
        text: "Flujos de Control",
        link: "es/common-programming-concepts/control-flow",
      },
    ],
    "La Propiedad": [
      {
        text: "Entendiendo la Propiedad",
        link: "es/ownership/introduction",
      },
      {
        text: "Referencias y préstamos",
        link: "es/ownership/references",
      },
      {
        text: "Resumen",
        link: "es/ownership/resumen",
      },
    ],
    "Estructura de datos relacionados": [
      {
        text: "Estructura",
        link: "es/struct/introduction",
      },
    ],
  },
};
