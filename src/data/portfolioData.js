import {
  FaAws,
  FaBrain,
  FaCertificate,
  FaChartLine,
  FaCode,
  FaDatabase,
  FaDocker,
  FaEnvelope,
  FaEye,
  FaFlask,
  FaGithub,
  FaGraduationCap,
  FaLinkedinIn,
  FaMicrochip,
  FaPhone,
  FaProjectDiagram,
  FaRobot,
  FaServer
} from "react-icons/fa";
import {
  SiCplusplus,
  SiGit,
  SiJirasoftware,
  SiLinux,
  SiMysql,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPython,
  SiPytorch,
  SiScikitlearn,
  SiTensorflow
} from "react-icons/si";

export const personalInfo = {
  name: "Mohamed Aboabdallah",
  tagline: "AI Engineer & ML Builder",
  description:
    "Senior Computer and Communications Engineering undergraduate at Alexandria University focused on AI, computer vision, NLP, chatbots, and AI agents. I enjoy building end-to-end ML systems, practical RAG applications, and production-minded experiments that turn research ideas into useful software.",
  email: "mohamed541416@gmail.com",
  phone: "+20 12 23385448",
  location: "Alexandria, Egypt",
  github: "https://github.com/mohamedaboabdallah",
  linkedin: "https://www.linkedin.com/in/mohamed-aboabdallah-3311b9247/",
  university: "Alexandria University",
  degree: "Computer and Communications Engineering Undergraduate",
  studyPeriod: "2021 - 2026",
  resumeLink: null,
  contactFocus: "AI, Computer Vision, NLP, and RAG systems",
  contactStack: "Python, PyTorch, OpenCV, Flask, Docker",
  footerPitch:
    "AI engineering focused on practical computer vision, LLM applications, and well-structured experimentation.",
  preloaderText: "Turning research ideas into practical AI systems.",
  heroRoles: [
    "AI Engineer",
    "Computer Vision",
    "NLP & RAG",
    "Chatbots & AI Agents",
    "Model Optimization",
    "Deep Learning"
  ]
};

export const socialLinks = [
  { name: "GitHub", url: personalInfo.github, icon: FaGithub },
  { name: "LinkedIn", url: personalInfo.linkedin, icon: FaLinkedinIn },
  { name: "Email", url: `mailto:${personalInfo.email}`, icon: FaEnvelope },
  { name: "Phone", url: `tel:${personalInfo.phone.replace(/\s/g, "")}`, icon: FaPhone }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];

export const aboutCards = [
  {
    label: "Current Focus",
    value: "AI Engineer",
    detail: "Building practical ML, CV, RAG, and agentic systems",
    icon: FaRobot,
    color: "#6c63ff"
  },
  {
    label: "Specialization",
    value: "Computer Vision, NLP & AI Agents",
    detail: "From model experimentation to product-oriented delivery",
    icon: FaBrain,
    color: "#00d4ff"
  },
  {
    label: "Core Stack",
    value: "Python, PyTorch, OpenCV, Flask, Docker",
    detail: "Research-driven experiments with strong engineering habits",
    icon: FaCode,
    color: "#a855f7"
  },
  {
    label: "Education",
    value: "Senior Engineering Undergraduate",
    detail: `${personalInfo.university} • ${personalInfo.studyPeriod}`,
    icon: FaGraduationCap,
    color: "#ec4899"
  }
];

export const stats = [
  { label: "Internships", value: 2, suffix: "" },
  { label: "GitHub Projects", value: 28, suffix: "+" },
  { label: "Certifications", value: 12, suffix: "" },
  { label: "Focus Areas", value: 5, suffix: "" }
];

export const focusPoints = [
  "Building end-to-end AI pipelines from data preparation to evaluation and deployment",
  "Applying computer vision across detection, recognition, depth, AR, and video analysis",
  "Designing RAG and LLM workflows with MCP, vector databases, tool calling, and Docker"
];

export const skillCategories = [
  { key: "mlEngineering", label: "ML Engineering", color: "#6c63ff" },
  { key: "computerVision", label: "Computer Vision", color: "#00d4ff" },
  { key: "nlpAgents", label: "NLP & Agents", color: "#10b981" },
  { key: "optimization", label: "Optimization", color: "#f97316" },
  { key: "dataProgramming", label: "Data & Programming", color: "#ec4899" },
  { key: "toolsWorkflow", label: "Tools & Workflow", color: "#a855f7" }
];

export const skills = {
  mlEngineering: [
    { name: "Python", icon: SiPython, color: "#3776ab" },
    { name: "PyTorch", icon: SiPytorch, color: "#ee4c2c" },
    { name: "TensorFlow", icon: SiTensorflow, color: "#ff6f00" },
    { name: "Deep Learning", icon: FaBrain, color: "#6c63ff" },
    { name: "Supervised Learning", icon: FaChartLine, color: "#00d4ff" },
    { name: "Model Evaluation", icon: FaChartLine, color: "#10b981" }
  ],
  computerVision: [
    { name: "OpenCV", icon: SiOpencv, color: "#5c3ee8" },
    { name: "Image Classification", icon: FaEye, color: "#00d4ff" },
    { name: "Object Detection", icon: FaEye, color: "#6c63ff" },
    { name: "Segmentation", icon: FaProjectDiagram, color: "#10b981" },
    { name: "Depth Estimation", icon: FaEye, color: "#f97316" },
    { name: "Augmented Reality", icon: FaProjectDiagram, color: "#ec4899" }
  ],
  nlpAgents: [
    { name: "Natural Language Processing", icon: FaBrain, color: "#10b981" },
    { name: "RAG Systems", icon: FaDatabase, color: "#6c63ff" },
    { name: "LLM Applications", icon: FaRobot, color: "#00d4ff" },
    { name: "Prompt Engineering", icon: FaCode, color: "#ec4899" },
    { name: "Chatbots", icon: FaRobot, color: "#f97316" },
    { name: "AI Agents & Tool Calling", icon: FaServer, color: "#a855f7" }
  ],
  optimization: [
    { name: "CUDA Profiling", icon: FaChartLine, color: "#00d4ff" },
    { name: "Triton", icon: FaCode, color: "#ec4899" },
    { name: "Quantization", icon: FaMicrochip, color: "#6c63ff" },
    { name: "Knowledge Distillation", icon: FaBrain, color: "#10b981" },
    { name: "Flash Attention", icon: FaCode, color: "#f97316" },
    { name: "Efficient Inference", icon: FaServer, color: "#a855f7" }
  ],
  dataProgramming: [
    { name: "NumPy", icon: SiNumpy, color: "#4dabcf" },
    { name: "Pandas", icon: SiPandas, color: "#150458" },
    { name: "Scikit-Learn", icon: SiScikitlearn, color: "#f7931e" },
    { name: "SQL / MySQL", icon: SiMysql, color: "#00758f" },
    { name: "C++", icon: SiCplusplus, color: "#00599c" },
    { name: "MATLAB", icon: FaChartLine, color: "#e16737" }
  ],
  toolsWorkflow: [
    { name: "Flask", icon: FaFlask, color: "#f0f0ff" },
    { name: "Docker", icon: FaDocker, color: "#2496ed" },
    { name: "Git & GitHub", icon: SiGit, color: "#f1502f" },
    { name: "Linux", icon: SiLinux, color: "#f7df1e" },
    { name: "AWS Foundations", icon: FaAws, color: "#ff9900" },
    { name: "Jira & Agile", icon: SiJirasoftware, color: "#2684ff" }
  ]
};

export const experiences = [
  {
    title: "AI Engineer Intern",
    company: "EJADA Egypt",
    location: "Remote",
    period: "Aug 2025 - Oct 2025",
    description: [
      "Worked with the AI Factory team to design and implement a Retrieval-Augmented Generation system for practical document-based question answering.",
      "Gained hands-on experience with LLMs, MCP, vector databases, tool calling, and Docker while building real-world AI workflows.",
      "Explored optimization topics including profiling, CUDA kernels, Flash Attention, speculative decoding, quantization, pruning, Swin Transformer, and Triton.",
      "Collaborated across RAG and optimization efforts to strengthen both product thinking and model efficiency fundamentals."
    ],
    tech: ["RAG", "LLMs", "MCP", "Vector DBs", "Docker", "Triton"],
    color: "#6c63ff"
  },
  {
    title: "Computer Vision Engineer Intern",
    company: "National Telecommunication Institute",
    location: "Remote",
    period: "Jul 2025 - Aug 2025",
    description: [
      "Built end-to-end computer vision pipelines covering data curation, augmentation, training, evaluation, and error analysis.",
      "Implemented segmentation, classification, and object detection models with reproducible experiments, clear baselines, and versioned code.",
      "Tracked experiments with TensorBoard and Weights & Biases, tuned optimizers and schedulers, and handled class imbalance with task-appropriate metrics.",
      "Translated research ideas into practical experiments and documented findings to guide the next iteration."
    ],
    tech: ["Python", "PyTorch", "OpenCV", "scikit-learn", "TensorBoard", "W&B"],
    color: "#00d4ff"
  }
];

const featuredProjectsData = [
  {
    id: 1,
    title: "PAPYRUS",
    mark: "RG",
    subtitle: "RAG Question-Answering Platform",
    description:
      "Built a full-stack RAG application with a Flask backend and React frontend where users upload documents, store embeddings in Chroma, run semantic search, and ask LLM-powered questions through an authenticated workflow.",
    tech: ["Python", "Flask", "React", "Chroma", "RAG", "LLMs"],
    liveUrl: "https://papyrus-production-b97b.up.railway.app/login",
    githubUrl: "https://github.com/mohamedaboabdallah/Q-A-using-RAG",
    color: "#6c63ff",
    gradient: "from-[#6c63ff] to-[#00d4ff]",
    featured: true,
    category: "LLM Apps"
  },
  {
    id: 2,
    title: "Machine Defect Detection",
    mark: "CV",
    subtitle: "Vision-Based Vibration Analysis",
    description:
      "Developed a computer vision workflow that stabilizes machine videos, detects motion-based regions of interest, enhances contrast, and analyzes vibration patterns to classify operating conditions and defects.",
    tech: ["Python", "OpenCV", "Video Processing", "ROI Detection", "Computer Vision"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/vision_based_vibration_analysis_machine_defects",
    color: "#00d4ff",
    gradient: "from-[#00d4ff] to-[#10b981]",
    featured: true,
    category: "Computer Vision"
  },
  {
    id: 3,
    title: "AR Book Overlay",
    mark: "AR",
    subtitle: "Augmented Reality with Homography",
    description:
      "Implemented an augmented reality pipeline using SIFT features, brute-force KNN matching, homography estimation, and polygon projection to align virtual content with a tracked real-world scene.",
    tech: ["OpenCV", "SIFT", "Homography", "Feature Matching", "Python"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/Augmented_Reality",
    color: "#ec4899",
    gradient: "from-[#ec4899] to-[#f97316]",
    featured: true,
    category: "Computer Vision"
  },
  {
    id: 4,
    title: "YOLO License Plate Detection",
    mark: "YO",
    subtitle: "Object Detection for Vehicle Plates",
    description:
      "Applied a YOLO-based detection workflow to localize vehicle license plates in visual data as part of hands-on object detection practice.",
    tech: ["YOLO", "Python", "OpenCV", "Object Detection"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/yolo-license-plate-detection",
    color: "#00d4ff",
    gradient: "from-[#00d4ff] to-[#6c63ff]",
    featured: false,
    category: "Computer Vision"
  },
  {
    id: 5,
    title: "Emotion Detection Web App",
    mark: "ED",
    subtitle: "Flask-Based AI Application",
    description:
      "Designed a Flask web application that integrates an emotion detection API and serves an interactive HTML interface for inference and user interaction.",
    tech: ["Flask", "Python", "HTML", "AI App"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/Emotion_Detection",
    color: "#10b981",
    gradient: "from-[#10b981] to-[#00d4ff]",
    featured: false,
    category: "AI Apps"
  },
  {
    id: 6,
    title: "Facial Recognition Experiments",
    mark: "FR",
    subtitle: "ResNet-18 Emotion Classification",
    description:
      "Built a transfer-learning pipeline around ResNet-18 and FER-2013 with augmentation, class balancing, label smoothing, scheduler tuning, and early stopping.",
    tech: ["PyTorch", "TensorFlow", "ResNet-18", "FER-2013", "Deep Learning"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/Facial_Recognition",
    color: "#a855f7",
    gradient: "from-[#a855f7] to-[#ec4899]",
    featured: false,
    category: "Deep Learning"
  },
  {
    id: 7,
    title: "Depth Estimation",
    mark: "DE",
    subtitle: "Scene Understanding Project",
    description:
      "Explored depth estimation ideas for scene understanding and geometric reasoning in computer vision workflows.",
    tech: ["Python", "Computer Vision", "Depth Estimation"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/Depth-Estimation",
    color: "#6c63ff",
    gradient: "from-[#6c63ff] to-[#a855f7]",
    featured: false,
    category: "Computer Vision"
  },
  {
    id: 8,
    title: "Image Mosaics",
    mark: "IM",
    subtitle: "Panorama Stitching Practice",
    description:
      "Worked on image alignment and mosaicing pipelines to stitch overlapping views into a coherent panorama.",
    tech: ["OpenCV", "Image Stitching", "Feature Matching"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/Image_Mosaics",
    color: "#f97316",
    gradient: "from-[#f97316] to-[#ec4899]",
    featured: false,
    category: "Computer Vision"
  },
  {
    id: 9,
    title: "CNN Model Comparison",
    mark: "CN",
    subtitle: "Transfer Learning Study",
    description:
      "Compared major CNN architectures including ResNet50, InceptionV3, VGG19, DenseNet121, and MobileNetV2 while documenting transfer-learning trade-offs.",
    tech: ["TensorFlow", "ResNet50", "CNNs", "Transfer Learning"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/Convolution_Neural_Netweorks_Designs",
    color: "#ec4899",
    gradient: "from-[#ec4899] to-[#6c63ff]",
    featured: false,
    category: "Deep Learning"
  },
  {
    id: 10,
    title: "CIFAR-10 CNN Classifier",
    mark: "CF",
    subtitle: "Baseline vs Custom CNN",
    description:
      "Implemented baseline dense models and custom convolutional networks on CIFAR-10, improving accuracy through better architecture and regularization choices.",
    tech: ["TensorFlow", "CNN", "CIFAR-10", "Classification"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/Convolution_neural_network",
    color: "#00d4ff",
    gradient: "from-[#00d4ff] to-[#f97316]",
    featured: false,
    category: "Deep Learning"
  }
];

const additionalProjects = [
  {
    id: 11,
    title: "California House Prediction",
    mark: "HP",
    subtitle: "Regression with Regularization",
    description:
      "Built linear regression, ridge, and lasso workflows with preprocessing, train-validation-test splits, and alpha comparison for better generalization.",
    tech: ["Python", "scikit-learn", "Regression", "Lasso", "Ridge"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/California_house_prediction",
    color: "#10b981",
    gradient: "from-[#10b981] to-[#6c63ff]",
    featured: false,
    category: "Machine Learning"
  },
  {
    id: 12,
    title: "GDINO Triton",
    mark: "TR",
    subtitle: "Inference Optimization Experiments",
    description:
      "Repository focused on Triton-driven experimentation around model performance and lower-level AI optimization workflows.",
    tech: ["Triton", "Optimization", "Python"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/gdino_triton",
    color: "#a855f7",
    gradient: "from-[#a855f7] to-[#00d4ff]",
    featured: false,
    category: "Optimization"
  },
  {
    id: 13,
    title: "Perceptron Kernel",
    mark: "PK",
    subtitle: "Classical ML Experiment",
    description:
      "Implemented perceptron-style learning experiments to explore decision boundaries and kernel-based intuition in foundational machine learning.",
    tech: ["Python", "Perceptron", "Kernel Methods"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/perceptron_kernel",
    color: "#6c63ff",
    gradient: "from-[#6c63ff] to-[#10b981]",
    featured: false,
    category: "Machine Learning"
  },
  {
    id: 14,
    title: "Torch Codes",
    mark: "TC",
    subtitle: "PyTorch Practice Repository",
    description:
      "Collection of PyTorch implementation exercises and experiments used to deepen model-building intuition and coding fluency.",
    tech: ["PyTorch", "Python", "Deep Learning"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/torch_codes",
    color: "#ee4c2c",
    gradient: "from-[#ee4c2c] to-[#f97316]",
    featured: false,
    category: "Deep Learning"
  },
  {
    id: 15,
    title: "K-Means & PCA",
    mark: "KP",
    subtitle: "Unsupervised Learning Practice",
    description:
      "Applied clustering and dimensionality reduction to strengthen intuition around feature spaces, variance, and unsupervised workflows.",
    tech: ["Python", "K-Means", "PCA", "scikit-learn"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/Kmeans_PCA",
    color: "#10b981",
    gradient: "from-[#10b981] to-[#00d4ff]",
    featured: false,
    category: "Machine Learning"
  },
  {
    id: 16,
    title: "Neural Networks",
    mark: "NN",
    subtitle: "Foundational Deep Learning Work",
    description:
      "Hands-on implementations of foundational neural network concepts, training loops, and core deep learning ideas.",
    tech: ["Python", "Neural Networks", "Deep Learning"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/Neural_Networks",
    color: "#ec4899",
    gradient: "from-[#ec4899] to-[#a855f7]",
    featured: false,
    category: "Machine Learning"
  },
  {
    id: 17,
    title: "KNN",
    mark: "KN",
    subtitle: "Instance-Based Learning",
    description:
      "Implemented and evaluated K-nearest neighbors as part of core machine learning experimentation and coursework practice.",
    tech: ["Python", "KNN", "scikit-learn"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/KNN",
    color: "#00d4ff",
    gradient: "from-[#00d4ff] to-[#10b981]",
    featured: false,
    category: "Machine Learning"
  },
  {
    id: 18,
    title: "Cartoonifying Images",
    mark: "CI",
    subtitle: "Image Stylization Pipeline",
    description:
      "Used computer vision filters and transformations to convert natural images into cartoon-style outputs.",
    tech: ["Python", "OpenCV", "Image Processing"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/cartoonifying_images",
    color: "#f97316",
    gradient: "from-[#f97316] to-[#00d4ff]",
    featured: false,
    category: "Computer Vision"
  },
  {
    id: 19,
    title: "Line Detection",
    mark: "HT",
    subtitle: "Hough Transform Practice",
    description:
      "Explored classical computer vision methods for detecting structural lines using the Hough transform.",
    tech: ["OpenCV", "Hough Transform", "Image Processing"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/Line_detection-Hough_transform-",
    color: "#6c63ff",
    gradient: "from-[#6c63ff] to-[#f97316]",
    featured: false,
    category: "Computer Vision"
  },
  {
    id: 20,
    title: "Mini Shell",
    mark: "MS",
    subtitle: "Systems Programming Project",
    description:
      "Built a miniature shell to practice command parsing, process control, and operating systems fundamentals.",
    tech: ["C", "Shell", "Systems Programming"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/Mini_shell",
    color: "#a855f7",
    gradient: "from-[#a855f7] to-[#6c63ff]",
    featured: false,
    category: "Systems"
  },
  {
    id: 21,
    title: "CPU Scheduling",
    mark: "CS",
    subtitle: "OS Scheduling Simulator",
    description:
      "Implemented scheduling strategies to compare CPU behavior and strengthen operating systems intuition.",
    tech: ["C", "Operating Systems", "Scheduling"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/Cpu_scheduling",
    color: "#10b981",
    gradient: "from-[#10b981] to-[#a855f7]",
    featured: false,
    category: "Systems"
  },
  {
    id: 22,
    title: "Producer Consumer",
    mark: "PC",
    subtitle: "Concurrency Practice",
    description:
      "Explored synchronization and concurrency patterns through a classic producer-consumer implementation.",
    tech: ["C", "Concurrency", "Synchronization"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/Producer_consumer",
    color: "#ec4899",
    gradient: "from-[#ec4899] to-[#10b981]",
    featured: false,
    category: "Systems"
  },
  {
    id: 23,
    title: "Backup & Restore",
    mark: "BR",
    subtitle: "Linux Automation Scripts",
    description:
      "Created shell scripts and a Makefile to watch for directory changes, create timestamped backups, and restore snapshots interactively.",
    tech: ["Bash", "Linux", "Automation", "Makefile"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/Backup-Restore",
    color: "#00d4ff",
    gradient: "from-[#00d4ff] to-[#ec4899]",
    featured: false,
    category: "Systems"
  },
  {
    id: 24,
    title: "Markov Decision Process",
    mark: "MD",
    subtitle: "Sequential Decision-Making Study",
    description:
      "Worked on MDP concepts and algorithms for planning, policies, and reinforcement-learning foundations.",
    tech: ["Python", "MDP", "AI Foundations"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/markov_decision_process",
    color: "#6c63ff",
    gradient: "from-[#6c63ff] to-[#ec4899]",
    featured: false,
    category: "AI Foundations"
  },
  {
    id: 25,
    title: "Sudoku Solver",
    mark: "SD",
    subtitle: "Constraint Search Project",
    description:
      "Implemented search and reasoning logic to solve Sudoku puzzles programmatically.",
    tech: ["Search", "Problem Solving", "AI Foundations"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/sudoko_solver",
    color: "#f97316",
    gradient: "from-[#f97316] to-[#6c63ff]",
    featured: false,
    category: "AI Foundations"
  },
  {
    id: 26,
    title: "Connect 4",
    mark: "C4",
    subtitle: "Game AI Project",
    description:
      "Built a Connect 4 project focused on gameplay logic and algorithmic decision making.",
    tech: ["Game AI", "Search", "Problem Solving"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/connect-4",
    color: "#10b981",
    gradient: "from-[#10b981] to-[#f97316]",
    featured: false,
    category: "AI Foundations"
  },
  {
    id: 27,
    title: "8 Puzzle",
    mark: "8P",
    subtitle: "Search Algorithms Practice",
    description:
      "Applied informed search techniques to solve the classic 8-puzzle problem.",
    tech: ["Search Algorithms", "AI Foundations"],
    liveUrl: null,
    githubUrl: "https://github.com/mohamedaboabdallah/8-puzzle",
    color: "#a855f7",
    gradient: "from-[#a855f7] to-[#10b981]",
    featured: false,
    category: "AI Foundations"
  }
];

export const certifications = [
  {
    title: "Generative AI Foundational Models for NLP & Language Understanding",
    issuer: "IBM",
    issued: "Sep 2025",
    highlight: "Natural language processing foundations",
    color: "#6c63ff"
  },
  {
    title: "Generative AI and LLMs: Architecture and Data Preparation",
    issuer: "IBM",
    issued: "Sep 2025",
    highlight: "LLM architecture and data preparation",
    color: "#00d4ff"
  },
  {
    title: "Generative AI: Prompt Engineering",
    issuer: "IBM",
    issued: "Sep 2025",
    highlight: "Prompt design for practical GenAI workflows",
    color: "#10b981"
  },
  {
    title: "Getting Started with Deep Learning",
    issuer: "NVIDIA",
    issued: "Aug 2025",
    highlight: "Deep learning foundations",
    color: "#76b900"
  },
  {
    title: "Agile with Atlassian Jira",
    issuer: "Atlassian",
    issued: "Aug 2025",
    highlight: "Scrum, planning, and project workflow basics",
    color: "#2684ff"
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    issued: "Aug 2025",
    highlight: "NumPy, pandas, and applied data analysis",
    color: "#a855f7"
  },
  {
    title: "Introducing Generative AI with AWS",
    issuer: "Udacity",
    issued: "Jul 2025",
    highlight: "Generative AI concepts and cloud context",
    color: "#f97316"
  },
  {
    title: "Developing AI Applications with Python and Flask",
    issuer: "IBM",
    issued: "Jul 2025",
    highlight: "Python and Flask for AI app delivery",
    color: "#ec4899"
  },
  {
    title: "Python for Data Science and AI",
    issuer: "IBM",
    issued: "Jul 2025",
    highlight: "Python for analytical and AI workflows",
    color: "#3776ab"
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI / Coursera",
    issued: "May 2025",
    highlight: "Core supervised learning methods",
    color: "#10b981"
  },
  {
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI / Coursera",
    issued: "May 2025",
    highlight: "Neural networks and modern ML concepts",
    color: "#00d4ff"
  },
  {
    title: "AWS Educate Machine Learning Foundations",
    issuer: "Amazon Web Services",
    issued: "Jul 2025",
    highlight: "Machine learning foundations in AWS context",
    color: "#ff9900"
  }
];

export const certificationTracks = [
  {
    title: "Generative AI & NLP",
    description:
      "IBM and AWS-aligned coursework in prompt engineering, LLM architecture, and foundational language understanding.",
    icon: FaRobot,
    color: "#6c63ff"
  },
  {
    title: "Deep Learning & ML",
    description:
      "Structured study across supervised learning, deep learning fundamentals, and modern model-building workflows.",
    icon: FaBrain,
    color: "#00d4ff"
  },
  {
    title: "Python & Engineering Workflow",
    description:
      "Hands-on learning in Flask apps, data analysis, agile execution, and production-friendly software habits.",
    icon: FaCertificate,
    color: "#ec4899"
  }
];

export const education = [
  {
    degree: "Senior Computer and Communications Engineering Undergraduate",
    institution: personalInfo.university,
    period: personalInfo.studyPeriod,
    description:
      "Building a strong engineering foundation while specializing through hands-on work in AI, computer vision, NLP, operating systems, and software systems.",
    color: "#6c63ff"
  }
];

export const educationHighlights = [
  { label: "University", value: personalInfo.university },
  { label: "Program", value: "Computer and Communications Engineering" },
  { label: "Standing", value: "Senior Undergraduate" },
  { label: "Expected Graduation", value: "2026" }
];

export const projects = [...featuredProjectsData, ...additionalProjects];
