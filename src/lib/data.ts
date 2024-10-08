export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/about", key: "about", label: "About" },
  { href: "/project", key: "project", label: "Project" },
  { href: "/service", key: "service", label: "Service " },
  { href: "/contact", key: "contact_me", label: "Contact Me" },
];

export const ABOUT_TECH = [
  {
    category: "Programming",
    technologies: [
      { src: "/javascript.svg", key: "javascript", label: "JavaScript" },
      { src: "/typescript.svg", key: "typescript", label: "TypeScript" },
      { src: "/python.svg", key: "python", label: "Python" },
    ],
  },
  {
    category: "Library & Framework",
    technologies: [
      { src: "/react.svg", key: "react", label: "React.js" },
      { src: "/nextjs.svg", key: "nextjs", label: "Next.js", className: "bg-white rounded-full p-[1px]" },
    ],
  },
  {
    category: "Database",
    technologies: [
      { src: "/mysql.svg", key: "mysql", label: "My SQL" },
      { src: "/mongodb.svg", key: "mongodb", label: "Mongo DB" },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { src: "/docker.svg", key: "docker", label: "Docker" },
      { src: "/nodejs.svg", key: "nodejs", label: "NodeJs", className: "w-12" },
    ],
  },
  {
    category: "Cloud",
    technologies: [{ src: "/aws.png", key: "aws", label: "AWS Cloud" }],
  },
];

export const NAV_ABOUT = [
  { key: "technology", label: "Technology" },
  { key: "certificate", label: "Certificate" },
  { key: "social_media", label: "social media" },
];

export const CERTIFICATION = [
  {
    src: "/sertifikat-ai.jpg",
    key: "artificial_intelegence2",
    title: "2nd place in district-level Artificial Intelligence Competition",
    description: "The competition focuses on the application of artificial intelligence in big data processing and analysis using Python.",
  },
  {
    src: "/sertifikat-ai3.jpg",
    key: "artificial_intelegence3",
    title: "3rd place in district-level Artificial Intelligence Competition",
    description:
      "The competition challenged participants to develop an AI-based chatbot using Python capable of providing intelligent and interactive responses in various conversational scenarios.",
  },
  {
    src: "/sertif-python.jpg",
    key: "python_fundamental",
    title: "Python Fundamental",
    description:
      "This experience provided a strong foundation for me to understand more about application development and more complex programming using Python.",
  },
  {
    src: "/sertif-Network.jpg",
    key: "network_fundamental",
    title: "Network Fundamental",
    description:
      "I have completed the Network Fundamentals class, which covers the basic concepts of computer networks such as the OSI model, TCP/IP protocols, and the basic principles of sending data over a network.",
  },
  {
    src: "/sertif-cloud.png",
    key: "google_cloud",
    title: "Google Cloud Fundamental",
    description:
      "I have completed the Google Cloud Basics course, where I learned the core concepts about cloud infrastructure, compute, storage, and networking services offered by Google Cloud Platform (GCP).",
  },
  {
    src: "/sertif-logic.png",
    key: "logic_fundamental",
    title: "introduction to programming logic",
    description:
      "With this understanding, I was able to apply an algorithmic mindset to develop more structured and understandable programming solutions, which is an important foundation in software development.",
  },
];

export const SOCIAL_MEDIA = [
  {
    src: "/github.svg",
    key: "github",
    label: "GitHub",
    description: "maulanaibnusahban",
    color: "#ffffff",
    href: "https://github.com/maulanaibnusahban/",
  },
  {
    src: "/instagram.svg",
    key: "instagram",
    label: "Instagram",
    description: "maulana_sahban",
    color: "#c4388c",
    href: "https://www.instagram.com/maulana_sahban",
  },
  {
    src: "/facebook.svg",
    key: "facebook",
    label: "Facebook",
    description: "Maulana Sahban",
    color: "#385997",
    href: "https://www.facebook.com/share/fZxEf4ApXmJH8Pii/?mibextid=qi2Omg",
  },
  {
    src: "/linkedin.svg",
    key: "linkedin",
    label: "Linkedin",
    description: "Maulana Ibnu Sahban",
    color: "#007bb5",
    href: "https://www.linkedin.com/in/maulana-ibnu-sahban-45b202291",
  },
];

export const PROJECT = [
  {
    src: "/app-promotion.png",
    key: "camp-promotion",
    title: "Camp App Promotion Web",
    description:
      "The Camp App Promotion Website effectively showcases our innovative camping application. Built with Next.js, TypeScript, and Tailwind CSS, it offers a modern and responsive design. The website highlights key features and benefits of the app, encouraging users to explore the great outdoors. Its captivating layout ensures an engaging user experience for all visitors.",
    href: "https://app-promotion.vercel.app/",
    technologies: [
      { src: "/typescript.svg", key: "typescript", label: "TypeScript" },
      { src: "/react.svg", key: "react", label: "React" },
      { src: "/nextjs.svg", key: "next", label: "Next.js" },
      { src: "/tailwind.svg", key: "tailwind", label: "Tailwind CSS" },
    ],
  },
  {
    src: "/portfolio-next.png",
    key: "portfolio-next",
    title: "My Portfolio Website",
    description:
      "My portfolio website is built with Next.js, TypeScript, and Tailwind CSS, showcasing my projects and skills in a beautiful and interactive manner. Leveraging libraries from various platforms, the site provides a seamless user experience, highlighting my work and expertise in web development.",
    href: "https://maulanaibnusahban.vercel.app/",
    technologies: [
      { src: "/typescript.svg", key: "typescript", label: "TypeScript" },
      { src: "/react.svg", key: "react", label: "React" },
      { src: "/nextjs.svg", key: "next", label: "Next.js" },
      { src: "/tailwind.svg", key: "tailwind", label: "Tailwind CSS" },
    ],
  },
  {
    src: "/al-quran-next.png",
    key: "al-quran-next",
    title: "Al Quran Website With Next JS",
    description:
      "The Al Quran Website is built with Next.js and features API integration for easy access to Quranic verses. It offers a seamless and responsive experience, allowing users to search, read, and explore the Quran through a modern and user-friendly interface. Designed for accessibility, this website aims to make the Quran accessible to everyone, enhancing their understanding of its teachings.",
    href: "https://al-quran-digital-zeta.vercel.app/",
    technologies: [
      { src: "/typescript.svg", key: "typescript", label: "TypeScript" },
      { src: "/react.svg", key: "react", label: "React" },
      { src: "/nextjs.svg", key: "next", label: "Next.js" },
      { src: "/tailwind.svg", key: "tailwind", label: "Tailwind CSS" },
    ],
  },

  {
    src: "/infinity-scroll.png",
    key: "infinity-scroll",
    title: "Anime Infinity Scroll",
    description:
      "Anime Infinity Scroll is a responsive website built with Next.js, TypeScript, and Tailwind CSS. It features an infinite scroll functionality that loads more anime content seamlessly by fetching data from an external API. Enjoy a dynamic and interactive experience as you explore a vast library of anime titles.",
    href: "https://anime-infinity-scroll-dusky.vercel.app/",
    technologies: [
      { src: "/typescript.svg", key: "typescript", label: "TypeScript" },
      { src: "/react.svg", key: "react", label: "React" },
      { src: "/nextjs.svg", key: "next", label: "Next.js" },
      { src: "/tailwind.svg", key: "tailwind", label: "Tailwind CSS" },
    ],
  },
  {
    src: "/al-quran-html.png",
    key: "al-quran-html",
    title: "A Quran Website With HTML, CSS, and JavaScript",
    description:
      "This project is a Quran website developed using HTML, CSS, and JavaScript. It serves as a practical application of my learning journey with these technologies. The website dynamically fetches Quranic content from an external API, providing users with an interactive experience to explore verses and learn more about the Quran.",
    href: "https://maulanaibnusahban.github.io/al-quran-digital/html/index.html",
    technologies: [
      { src: "/html.svg", key: "html", label: "HTML" },
      { src: "/css.svg", key: "css", label: "CSS" },
      { src: "/javascript.svg", key: "javascript", label: "Javascript" },
    ],
  },
  {
    src: "/cuaca.png",
    key: "cuaca",
    title: "Weather Watcher Website",
    description:
      "Weather is a user-friendly web application built with HTML, CSS, and JavaScript that allows users to check the weather for specific locations. By leveraging an external API, it provides real-time weather updates, forecasts, and essential climate information, making it easy for users to stay informed about the weather in their area.",
    href: "https://maulanaibnusahban.github.io/web-cuaca/",
    technologies: [
      { src: "/html.svg", key: "html", label: "HTML" },
      { src: "/css.svg", key: "css", label: "CSS" },
      { src: "/javascript.svg", key: "javascript", label: "Javascript" },
    ],
  },
];

export const SERVICE = [
  {
    src: "code.svg",
    key: "code",
    title: "Web Development",
    description: "Transform your brand with a stunning, user-friendly website. Experience the ultimate web development experience.",
  },
  {
    src: "docker.svg",
    key: "docker",
    title: "Development & SysAdmin",
    description: "Providing efficient web development and secure system management for optimized performance and reliability.",
  },
  {
    src: "people.svg",
    key: "people",
    title: "Private Mentor",
    description: "Elevate your coding journey with customized mentorship and  guidance in programming and web development.",
  },
];
