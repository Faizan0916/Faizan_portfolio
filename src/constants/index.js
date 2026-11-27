export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Project',
    href: '#project',
  },
  { id: 4, name: 'Skills', href: '#skills' },
  { id: 5, name: 'Certificates', href: '#certificates' },
  { id: 6, name: 'Journey', href:'#journey'},
  {
    id: 7,
    name: '📨Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Trendora - Full-Stack E-Commerce Store',
    desc: 'Trendora is a full-stack e-commerce clothing store with product filtering, a shopping cart, user authentication, order tracking and an admin panel. Customers can pay with Stripe, Razorpay or Cash on Delivery (COD).',
    subdesc:
      'Built with the MERN stack (React, Node.js, Express and MongoDB), styled with Tailwind CSS, secured with JWT authentication and using Cloudinary for image management.',
    href: 'https://trendora-fqq3.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/trendora-logo.png',
    logoStyle: {
    backgroundColor: '#2A1D12',
    border: '0.2px solid #3A2716',
    boxShadow: '0px 0px 60px 0px #FF7A1A4D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
      id: 1,
      name: 'React.js',
      path: '/assets/react.svg',
    },
    {
      id: 2,
      name: 'Node.js',
      path: 'https://cdn.simpleicons.org/nodedotjs/ffffff',
    },
    {
      id: 3,
      name: 'MongoDB',
      path: 'https://cdn.simpleicons.org/mongodb/ffffff',
    },
    {
      id: 4,
      name: 'TailwindCSS',
      path: '/assets/tailwindcss.png',
    },
    ],
  },
  
  {
    title: 'CarePulse - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    reactLogoPosition: isSmall
  ? [5, 5, 0]
  : isMobile
  ? [8, 6, 0]
  : isTablet
  ? [10, 7, 0]
  : [12, 7, 0],

cubePosition: isSmall
  ? [5, -5, 0]
  : isMobile
  ? [8, -6, 0]
  : isTablet
  ? [10, -7, 0]
  : [12, -7, 0],
    ringPosition: isSmall
  ? [-5, 5, 0]
  : isMobile
  ? [-8, 6, 0]
  : isTablet
  ? [-10, 7, 0]
  : [-12, 7, 0],
    targetPosition: isSmall
  ? [-5, -5, 0]
  : isMobile
  ? [-8, -6, 0]
  : isTablet
  ? [-10, -7, 0]
  : [-12, -7, 0],
  };
};


export const certificates = [
  {
    id: 1,
    title: 'Learn C++ Programming -Beginner to Advance- Deep Dive in C++',   // jaisa certificate par likha hai
    issuer: 'Udemy',
    year: 2026,                                    // certificate par jo saal hai
    category: 'softwareDev',
    image: '/certificates/cpp.png',
    link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-29d0bb78-af3c-406b-b670-f9a70b42793c.jpg',   // Udemy ka certificate link
  },
  {
    id: 2,
    title: 'Mastering Data Structures & Algorithms using C and C++',
    issuer: 'Udemy',
    year: 2026,
    category: 'softwareDev',
    image: '/certificates/dsa.png',
    link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-53f770f1-2b6e-4bba-b9c3-a910f31a12d9.jpg',
  },
  {
  id: 3,
  title: 'Learn Figma: UI/UX Design Masterclass From Beginner to Pro',
  issuer: 'Udemy',
  year: 2026,                     
  category: 'design',
  image: '/certificates/figma.png',
  link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-354eca5f-9cf6-49b7-8747-42657cd9059d.jpg',
},

];