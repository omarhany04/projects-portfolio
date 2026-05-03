export const owner = {
  name: "Omar Hany",
  role: "Software Engineer",
  github: "https://github.com/omarhany04",
  linkedin: "https://www.linkedin.com/in/omarhany04/",
  email: "omarhanyy24@gmail.com"
};

export const projects = [
  {
    id: "shipstack",
    title: "ShipStack",
    subtitle: "AI startup builder with live code preview",
    category: "AI Product",
    featured: true,
    mark: "SS",
    color: "#14b8a6",
    image: "/logos/ShipStack Logo.png",
    demoUrl: "https://ship-stack-ai.vercel.app/",
    githubUrl: "https://github.com/omarhany04/ShipStack",
    demoLabel: "Live Demo",
    description:
      "An AI product builder that turns a plain-English startup idea into a structured blueprint, generated Next.js codebase, live WebContainer preview, saved workspace, and downloadable files.",
    highlights: [
      "Multi-provider AI orchestration across Gemini, Groq, and OpenRouter",
      "Editable blueprint workflow with generated pages, APIs, config, and styles",
      "Prisma/PostgreSQL persistence for projects, generations, metadata, and usage logs"
    ],
    tech: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Gemini", "Groq", "WebContainer"]
  },
  {
    id: "litebite",
    title: "LiteBite",
    subtitle: "Gluten-free bakery marketplace and PWA",
    category: "Full Stack",
    featured: true,
    mark: "LB",
    color: "#f97316",
    image: "/logos/LiteBite Logo.png",
    demoUrl: "https://litebite-eg.vercel.app/",
    githubUrl: "https://github.com/omarhany04/LiteBite",
    demoLabel: "Live Demo",
    description:
      "A React and Supabase storefront for a gluten-free bakery marketplace in Alexandria, with customer shopping flows, admin operations, order tracking, payment review, and installable PWA behavior.",
    highlights: [
      "Cart, wishlist, checkout, order history, feedback, and profile management",
      "Admin panel for products, orders, payment screenshots, and customer feedback",
      "AI shopping assistant with Gemini first, OpenRouter fallback, and Groq backup"
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Supabase", "Framer Motion", "Leaflet", "PWA"]
  },
  {
    id: "booky",
    title: "Booky",
    subtitle: "Full-stack bookstore platform",
    category: "Full Stack",
    featured: true,
    mark: "BK",
    color: "#8b5cf6",
    image: "/logos/Booky Logo.png",
    demoUrl: "https://booky-online.vercel.app/",
    githubUrl: "https://github.com/omarhany04/Bookstore",
    demoLabel: "Live Demo",
    description:
      "A bookstore platform covering browsing, checkout, order history, profile management, admin inventory workflows, replenishment tracking, reports, and a Booky-specific AI assistant.",
    highlights: [
      "Customer storefront with stock-aware cart, checkout, orders, and reading quiz",
      "Protected admin dashboard for inventory, covers, authors, publishers, and reports",
      "PostgreSQL triggers for replenishment orders, cancellation stock restores, and reporting consistency"
    ],
    tech: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "JWT", "Docker", "AI Assistant"]
  },
  {
    id: "nasa-center",
    title: "NASA Center",
    subtitle: "Interactive NASA data and AI exploration app",
    category: "AI Frontend",
    featured: true,
    mark: "NC",
    color: "#38bdf8",
    image: "/logos/NASA Logo.png",
    demoUrl: "https://nasa-center.vercel.app/",
    githubUrl: "https://github.com/omarhany04/nasa-center",
    demoLabel: "Live Demo",
    description:
      "A React application that integrates NASA APIs, 3D visualizations, live Earth streams, searchable space imagery, quizzes, and a Gemini-powered virtual assistant.",
    highlights: [
      "NASA APOD, Mars Rover, EPIC, NEO, live events, and news feed integrations",
      "3D solar system experience using React Three Fiber and Drei",
      "Responsive interface with dark mode, advanced search, and space quizzes"
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion", "NASA APIs", "Gemini", "React Three Fiber", "Axios"]
  },
  {
    id: "3arabety",
    title: "3arabety",
    subtitle: "Car service and parts marketplace",
    category: "Marketplace",
    featured: true,
    mark: "3A",
    color: "#22c55e",
    image: "/logos/3arabety Logo.png",
    demoUrl: "https://3arabety.vercel.app/",
    githubUrl: "https://github.com/omarhany04/3arabety",
    demoLabel: "Live Demo",
    description:
      "A car service platform and parts marketplace that connects car owners with repairs, emergency assistance, inspections, towing, car wash services, and automotive products.",
    highlights: [
      "Service booking forms with package selection and scheduling",
      "Parts shop with category, brand, and price filtering plus cart and checkout",
      "Interactive service-center map with location details and service filtering"
    ],
    tech: ["React", "React Router", "Tailwind CSS", "React Context", "Leaflet", "React Icons"]
  },
  {
    id: "gesture-earth",
    title: "Gesture Earth",
    subtitle: "Hand-controlled 3D globe",
    category: "Interactive 3D",
    featured: true,
    mark: "GE",
    color: "#06b6d4",
    image: "/logos/Gesture Earth Logo.jpg",
    demoUrl: "https://earth-gestures.vercel.app/",
    githubUrl: "https://github.com/omarhany04/earth-gestures",
    demoLabel: "Live Demo",
    description:
      "A browser-based 3D Earth controlled with hand gestures, combining Three.js rendering, MediaPipe hand tracking, webcam input, gesture controls, and animated visual effects.",
    highlights: [
      "One-hand pinch rotation and two-hand zoom controls",
      "Fist-triggered energy pulse and overdrive spin effects",
      "Camera preview, on-screen HUD, atmosphere, clouds, starfield, and glow effects"
    ],
    tech: ["Three.js", "MediaPipe Hands", "JavaScript", "HTML", "CSS", "Webcam"]
  },
  {
    id: "wanderlust",
    title: "Wanderlust Travel",
    subtitle: "Responsive travel booking website",
    category: "Frontend",
    featured: true,
    mark: "WT",
    color: "#0ea5e9",
    image: "/logos/Wanderlust Logo.png",
    demoUrl: "https://wanderlust-trips.vercel.app/",
    githubUrl: "https://github.com/omarhany04/wanderlust-travel",
    demoLabel: "Live Demo",
    description:
      "A responsive travel website for browsing destinations, comparing travel categories, searching experiences, and opening reservation flows with polished animated UI.",
    highlights: [
      "Destination browsing with detailed cards and visual sections",
      "Global search across destinations, travel types, and experiences",
      "Reservation modal, sliders, conditional rendering, and smooth scrolling"
    ],
    tech: ["React", "React Router", "Tailwind CSS", "React Scroll", "Font Awesome", "CSS Animations"]
  },
  {
    id: "smart-home",
    title: "Smart Home Security",
    subtitle: "Arduino security and automation prototype",
    category: "Embedded",
    featured: false,
    mark: "SH",
    color: "#ef4444",
    image: null,
    demoUrl: "https://drive.google.com/drive/folders/1c79PsdO0pR-7of5dRevDiLW5eqB94wc8?usp=sharing",
    githubUrl: "https://github.com/omarhany04/Smart-Home",
    demoLabel: "Demo Video",
    description:
      "An Arduino-based smart home prototype that combines password access, Bluetooth control, radar motion detection, automatic lighting, fan activation, voice alerts, and electronic door locking.",
    highlights: [
      "Two-Arduino setup with ultrasonic radar, servo scanning, LCD, relay, and solenoid lock",
      "Bluetooth app control plus keypad password creation, reset, and validation",
      "Processing-based radar UI and sensor-driven automation"
    ],
    tech: ["Arduino", "Embedded Systems", "Bluetooth", "Sensors", "Processing", "Serial Communication"]
  },
  {
    id: "connect-hub",
    title: "Connect Hub",
    subtitle: "Java desktop social network",
    category: "Desktop App",
    featured: false,
    mark: "CH",
    color: "#64748b",
    image: null,
    demoUrl: null,
    githubUrl: "https://github.com/amrrkhaled/Connect-Hub",
    demoLabel: "Live Demo",
    description:
      "A Java and Swing social networking platform with account management, profiles, posts, stories, friend requests, blocking, status tracking, and a JSON file-based data layer.",
    highlights: [
      "Secure sign up and login with hashed passwords and validation",
      "Profile, posts, stories, friend suggestions, and online status flows",
      "Backend and frontend structure with tests for core logic"
    ],
    tech: ["Java", "Java Swing", "JSON", "OOP", "Unit Testing", "Desktop UI"]
  },
  {
    id: "depi-ecommerce",
    title: "Depi E-Commerce",
    subtitle: "Multi-vendor commerce application",
    category: "Full Stack",
    featured: false,
    mark: "DE",
    color: "#f59e0b",
    image: null,
    demoUrl: null,
    githubUrl: "https://github.com/Reem-Kamal-Ghoniem/depi_e-commerce",
    demoLabel: "Live Demo",
    description:
      "A modern multi-vendor e-commerce application with authentication, vendor product management, cart handling, order processing, responsive layout, and search.",
    highlights: [
      "Vendor management for adding, editing, and deleting products",
      "Customer cart and checkout flow with quantity management",
      "JWT authentication with React, Redux Toolkit, Express, and MongoDB"
    ],
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT", "CSS"]
  },
  {
    id: "maskana",
    title: "Maskana",
    subtitle: "Real estate CRM SaaS architecture",
    category: "SaaS",
    featured: false,
    mark: "MS",
    color: "#10b981",
    image: null,
    demoUrl: null,
    githubUrl: "https://github.com/omarhany04/Maskana",
    demoLabel: "Live Demo",
    description:
      "A real estate CRM SaaS codebase structured around an app layer, Prisma database layer, Python service, shared package, Nginx deployment, Docker workflow, and AWS EC2 runbook.",
    highlights: [
      "Separate app, shared, Prisma, Python service, and Nginx modules",
      "Docker compose setup plus production EC2 and Nginx deployment instructions",
      "Environment design for email, WhatsApp, S3 assets, calendar, auth, and AI service integration"
    ],
    tech: ["Node.js", "Next.js", "Prisma", "Python", "Docker", "Nginx", "AWS EC2"]
  },
  {
    id: "user-management-api",
    title: "UserManagementAPI",
    subtitle: "ASP.NET Core users API",
    category: "Backend API",
    featured: false,
    mark: "UA",
    color: "#3b82f6",
    image: null,
    demoUrl: null,
    githubUrl: "https://github.com/omarhany04/UserManagementAPI",
    demoLabel: "Live Demo",
    description:
      "An ASP.NET Core Web API for managing users with in-memory storage, custom middleware, bearer-token authentication, global error handling, request logging, and Swagger UI.",
    highlights: [
      "CRUD endpoints for creating, reading, updating, and deleting users",
      "Custom authentication, logging, and error-handling middleware",
      "Swagger testing workflow with bearer token authorization"
    ],
    tech: ["ASP.NET Core", "C#", "Swagger", "Middleware", "REST API", "Bearer Auth"]
  },
  {
    id: "safevault",
    title: "SafeVault",
    subtitle: "Secure web application hardening",
    category: "Security",
    featured: false,
    mark: "SV",
    color: "#e11d48",
    image: null,
    demoUrl: null,
    githubUrl: "https://github.com/omarhany04/SafeVault-Cybersecurity-Capstone",
    demoLabel: "Live Demo",
    description:
      "A security-focused web application project centered on protecting credentials and sensitive information through validation, SQL injection prevention, XSS protection, BCrypt hashing, RBAC, and NUnit tests.",
    highlights: [
      "Identified SQL injection, cross-site scripting, and unauthorized admin access risks",
      "Applied parameterized queries, input sanitization, HTML encoding, BCrypt, and RBAC",
      "Automated tests for injection attacks, XSS, invalid login, and role access"
    ],
    tech: [".NET", "C#", "BCrypt", "RBAC", "NUnit", "Security Testing"]
  },
  {
    id: "machine-learning-projects",
    title: "Machine Learning Projects",
    subtitle: "Classical ML and neural network experiments",
    category: "Machine Learning",
    featured: false,
    mark: "ML",
    color: "#7c3aed",
    image: null,
    demoUrl: null,
    githubUrl: "https://github.com/omarhany04/ML-projects",
    demoLabel: "Live Demo",
    description:
      "A Python machine learning collection covering foundational supervised and unsupervised algorithms on real datasets such as MAGIC Gamma Telescope, California Housing, MNIST, Adult Income, and Breast Cancer.",
    highlights: [
      "KNN, linear regression, logistic regression, softmax, and Naive Bayes",
      "Neural networks, CNNs, Gaussian generative classifier, decision trees, and random forests",
      "Dataset-driven practice with scikit-learn and Kaggle data sources"
    ],
    tech: ["Python", "scikit-learn", "KNN", "Regression", "CNN", "Random Forest", "MNIST"]
  },
  {
    id: "nlp-transformers",
    title: "Natural Language Processing Projects",
    subtitle: "Classical NLP to neural sequence models",
    category: "Machine Learning",
    featured: false,
    mark: "NLP",
    color: "#a855f7",
    image: null,
    demoUrl: null,
    githubUrl: "https://github.com/omarhany04/NLP-Projects",
    demoLabel: "Live Demo",
    description:
      "A university-style NLP project series moving from statistical language models and text classifiers to word embeddings, named entity recognition, neural machine translation, attention, and transformer architectures.",
    highlights: [
      "Built N-gram language models, perplexity evaluation, text generation, Naive Bayes, and Logistic Regression from scratch",
      "Implemented Skip-Gram embeddings, HMM-based NER with Viterbi decoding, and neural NER with contextual windows",
      "Developed sequence-to-sequence translation models with custom LSTM cells, Bahdanau attention, Transformer blocks, beam search, and BLEU evaluation"
    ],
    tech: ["Python", "NumPy", "PyTorch", "N-Grams", "Word2Vec", "HMM", "LSTM", "Attention", "Transformers"]
  }
];
