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
    ]

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
    whatsNext: ["Launch it using a provider so we can use it live!"]
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
      "Implement user activity tracking and audit logs"]
  }
];


