export const projects = [
  {
    slug: "waylaytics",
    title: "Waylaytics",
    category: "Data & Analytics",
    description: "A data-driven platform for comparing U.S. locations.",
    featured: true,
    tech: ["React", "Next.js", "MongoDB", "D3.js", "Python"],
    highlights: [
      "Designed scalable data models for U.S. Census datasets",
      "Built interactive D3 visualizations for state and city comparisons",
      "Optimized MongoDB aggregation pipelines for performance"
    ],
    links: {
      live: "https://waylaytics.vercel.app/",
      github: "https://github.com/eriks972/waylaytics"
    },
    problem:"Choosing where to live often requires comparing dozens of disconnected data sources — taxes, housing, crime, education, healthcare, and cost of living — making it difficult to make informed decisions.",
    solution:"Waylaytics aggregates public datasets into a unified platform, allowing users to compare U.S. locations through interactive visualizations and data-driven insights.",
    architecture: ["Ingested and normalized U.S. Census and public datasets using Python",
      "Designed MongoDB schemas optimized for geographic queries",
      "Built aggregation pipelines to support fast comparisons across states and cities",
      "Exposed data through a Next.js backend consumed by D3 visualizations"],
    images: ["/screenshots/waylaytics/Home.png", "/screenshots/waylaytics/statecompare.png", "/screenshots/waylaytics/StatePage.png"],
    captions:["Home Page","State Comparison View","Individual State Page"],
    whatsNext: [
      "Incorporate additional datasets such as climate and employment statistics",
      "Enhance visualizations with predictive analytics and trend analysis",
      "Implement user accounts for saving favorite locations and custom comparisons"
    ],
    githubRepo: "eriks972/waylaytics"

  },
  {
    slug: "tastetrack",
    title: "TasteTrack",
    category: "Full Stack",
    description: "A recipe discovery and meal planning application.",
    featured: true,
    tech: ["React", "Node.js", "MongoDB"],
    highlights: [
      "Implemented ingredient-based recipe filtering",
      "Designed a normalized recipe and ingredient schema",
      "Built meal planning and pantry features"
    ],
    links: {
      live: "",
      github: "https://github.com/eriks972/TasteTrack"
    },
    problem:"Finding new recipes that match available ingredients can be time-consuming, and planning meals for the week often leads to food waste due to lack of organization.",
    solution:"TasteTrack allows users to discover recipes based on ingredients they have, plan meals for the week, and manage their pantry to reduce food waste.",
    architecture: ["Designed a normalized MongoDB schema for recipes and ingredients",
      "Built a Node.js backend with RESTful APIs for recipe search and meal planning",
      "Developed a React frontend with ingredient-based filtering and meal planning features"],
    images: ["/screenshots/tastetrack/Home.png", "/screenshots/tastetrack/RecipeSearch.png", "/screenshots/tastetrack/MealPlanner.png"],
    captions:["Home Page","Recipe Search with Ingredient Filtering","Meal Planner View"],
    whatsNext: ["Launch it using a provider so we can use it live!"],
    githubRepo: "eriks972/TasteTrack"
  },
  {
    slug: "laravel-dashboard",
    title: "Laravel Dashboard",
    category: "Backend",
    description: "An admin dashboard built with Laravel and MySQL.",
    featured: false,
    tech: ["Laravel", "PHP", "MySQL"],
    highlights: [
      "Built role-based authentication and admin workflows",
      "Designed complex reporting queries",
      "Integrated third-party APIs for payments and documents"
    ],
    links: {
      live: "",
      github: ""
    },
    problem:"Many businesses require an admin dashboard to manage users, view reports, and handle payments, but building such a system from scratch can be time-consuming and complex.",
    solution:"This Laravel-based admin dashboard provides a robust foundation with role-based authentication, reporting features, and third-party API integrations to streamline business operations.",
    architecture: ["Implemented role-based authentication using Laravel's built-in features",
      "Designed complex MySQL queries for generating reports",
      "Integrated third-party APIs for payment processing and document management"],
    images: ["/screenshots/laravel-dashboard/Login.png", "/screenshots/laravel-dashboard/Dashboard.png", "/screenshots/laravel-dashboard/Reports.png"],
    captions:["Login Page","Admin Dashboard Overview","Reporting Section"],
    whatsNext: ["Add more third-party integrations for expanded functionality",
      "Enhance reporting features with data visualization tools",
      "Implement user activity tracking and audit logs"],
    githubRepo: ""
  },
  {
  slug: "sports-info-api",
  title: "Sports Info API",
  category: "Backend / Data",
  description: "A Python-based sports analytics API that retrieves NBA and MLB statistics and allows users to query data using natural language processing.",
  featured: true,
  tech: ["Python", "REST API", "NLP", "Data Parsing"],
  highlights: [
    "Retrieved and processed NBA and MLB statistical data",
    "Implemented NLP-based query handling for sports questions",
    "Translated natural language input into structured data queries"
  ],
  links: {
    live: "",
    github: "https://github.com/eriks972/SportsInfoAPI/tree/main/Erik_Swanson_113470011_SportsInfoAPI"
  },
  problem:
    "Sports statistics are often locked behind rigid query formats, making data exploration difficult for non-technical users.",
  solution:
    "This project introduces a Python-based API that allows users to ask natural language questions about NBA and MLB data, converting them into structured queries and returning relevant statistics.",
  architecture: [
    "Python backend responsible for data ingestion and processing",
    "Natural Language Processing layer to interpret user queries",
    "Query engine that maps interpreted intent to sports datasets"
  ],
  images: [
    "/screenshots/sports-info-api/nlp-query.png",
    "/screenshots/sports-info-api/results.png"
  ],
  captions: [
    "Natural Language Sports Query Interface",
    "Structured Statistical Results Output"
  ],
  whatsNext: [
    "Improve NLP accuracy with expanded training data",
    "Add support for additional sports leagues",
    "Expose the system through a public API or frontend interface"
  ],
  githubRepo: "eriks972/SportsInfoAPI"
  
}, 
{
  slug: "organic-finds",
  title: "OrganicFinds",
  category: "Full Stack",
  description: "A full-stack web application designed to help users discover, compare, and learn about organic and sustainable products.",
  featured: true,
  tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
  highlights: [
    "Designed and built as a senior capstone project",
    "Implemented full CRUD functionality for products and users",
    "Focused on usability, accessibility, and real-world data organization"
  ],
  links: {
    live: "",
    github: "https://github.com/eriks972/OrganicFinds"
  },
  problem:
    "Consumers interested in organic and sustainable products often struggle to find reliable, centralized information across multiple sources.",
  solution:
    "OrganicFinds provides a centralized platform where users can browse, compare, and learn about organic products through a structured and user-friendly interface.",
  architecture: [
    "PHP-based backend handling business logic and data processing",
    "MySQL database designed for product and user data management",
    "Frontend built with vanilla JavaScript, HTML, and CSS for broad compatibility"
  ],
  images: [
    "/screenshots/organic-finds/Home.png",
    "/screenshots/organic-finds/Products.png",
    "/screenshots/organic-finds/Admin.png"
  ],
  captions: [
    "OrganicFinds Homepage",
    "Product Browsing Interface",
    "Admin Management Panel"
  ],
  whatsNext: [
    "Add user reviews and ratings",
    "Improve product filtering and search",
    "Introduce API integrations for live product data"
  ],
  githubRepo: "eriks972/OrganicFinds"
},
{
  slug: "chromaforge",
  title: "ChromaForge",
  category: "Full Stack",
  description: "An in-progress developer-focused application for creating, managing, and exporting color palettes and design systems.",
  featured: true,
  tech: ["TypeScript", "Node.js", "Prisma", "PostgreSQL", "Vite"],
  highlights: [
    "Designed as a developer-first color and palette management tool",
    "Structured backend using Prisma with a PostgreSQL database",
    "Built with scalability and future integrations in mind"
  ],
  links: {
    live: "",
    github: "https://github.com/eriks972/ChromaForge"
  },
  problem:
    "Developers and designers often juggle multiple tools to manage color palettes, themes, and design tokens, leading to fragmented workflows.",
  solution:
    "ChromaForge aims to centralize palette creation, management, and export into a single developer-friendly platform that integrates cleanly into modern workflows.",
  architecture: [
    "TypeScript-based backend for strong type safety",
    "Prisma ORM used for schema management and database access",
    "PostgreSQL chosen for reliable relational data modeling"
  ],
  images: [
    "/screenshots/chromaforge/architecture.png",
    "/screenshots/chromaforge/palettes.png"
  ],
  captions: [
    "Early Architecture and Data Model",
    "Palette Management Interface (In Progress)"
  ],
  whatsNext: [
    "Build Create Palette form and validation",
    "Implement user authentication and profiles",
    "Add palette export options for CSS, Tailwind, and JSON"
  ],
  githubRepo: "eriks972/ChromaForge"
},

{
  slug: "developer-portfolio",
  title: "Developer Portfolio",
  category: "Frontend / Full Stack",
  description: "A custom-built developer portfolio showcasing full-stack, data, and systems projects with a focus on clarity, performance, and storytelling.",
  featured: true,
  tech: ["Astro", "Svelte", "TypeScript", "Tailwind CSS"],
  highlights: [
    "Designed a structured project system with detailed case studies",
    "Implemented reusable components for projects, tech stacks, and navigation",
    "Optimized for performance, accessibility, and clean UX"
  ],
  links: {
    live: "eriktswanson.dev",
    github: "https://github.com/eriks972/Portfolio"
  },
  githubRepo: "eriks972/Portfolio",
  problem:
    "Many developer portfolios lack depth, context, or clarity, making it difficult for hiring managers to understand the impact of individual projects.",
  solution:
    "This portfolio was built as a fully custom site that presents each project as a structured case study, highlighting problems, solutions, architecture, and future direction.",
  architecture: [
    "Astro used for fast static generation and performance",
    "Svelte components for interactive UI elements",
    "Centralized project data model for scalability and consistency"
  ],
  images: [
    "/screenshots/portfolio/Home.png",
    "/screenshots/portfolio/Projects.png",
    "/screenshots/portfolio/ProjectDetail.png"
  ],
  captions: [
    "Portfolio Homepage",
    "Projects Overview",
    "Individual Project Case Study"
  ],
  whatsNext: [
    "Add blog and technical writing section",
    "Introduce project filtering and search",
    "Integrate analytics for user interaction insights"
  ]
}

];


