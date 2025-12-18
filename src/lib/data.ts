export const GENERAL_INFO = {
    name: 'Keshav Dadhich',
    email: 'keshavdadhichb7@gmail.com',
    phone: '+91 7708186715',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Keshav, I am reaching out to you because...',

    resumeUrl: 'https://drive.google.com/file/d/1gxe412y8V3BVM8D_T_wiG6jEjee_Kx2i/view?usp=drive_link',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/keshavdadhichb' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/keshav-dadhich-2652611a9/' },
    { name: 'leetcode', url: 'https://leetcode.com/u/keshavdadhichb/' },
    { name: 'instagram', url: 'https://instagram.com/keshavdb' },
];

export const MY_STACK = {
    'Web & Backend': [
        { name: 'Java', icon: '/logo/js.png' },
        { name: 'Python', icon: '/logo/ts.png' },
        { name: 'C++', icon: '/logo/ts.png' },
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'Django', icon: '/logo/express.png' },
        { name: 'Spring Boot', icon: '/logo/nest.svg' },
        { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
        { name: 'MongoDB', icon: '/logo/mongodb.png' },
        { name: 'React', icon: '/logo/react.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
    ],
    'AI & ML': [
        { name: 'TensorFlow', icon: '/logo/ts.png' },
        { name: 'OpenCV', icon: '/logo/react.png' },
        { name: 'MediaPipe', icon: '/logo/gsap.png' },
        { name: 'Scikit-Learn', icon: '/logo/sass.png' },
        { name: 'Gen AI', icon: '/logo/framer-motion.png' },
    ],
    'Blockchain': [
        { name: 'Solidity', icon: '/logo/ts.png' },
        { name: 'Ethereum', icon: '/logo/redux.png' },
        { name: 'Web3.Js', icon: '/logo/js.png' },
        { name: 'Polygon', icon: '/logo/tailwind.png' },
    ],
    'Cloud & DevOps': [
        { name: 'AWS', icon: '/logo/aws.png' },
        { name: 'Docker', icon: '/logo/docker.svg' },
        { name: 'Git', icon: '/logo/git.png' },
    ],
};

export interface IProject {
    title: string;
    slug: string;
    techStack: string[];
    thumbnail: string;
    liveUrl?: string;
    sourceCode?: string;
    year: number;
    description: string;
    award?: string;
}

export const PROJECTS: IProject[] = [
    {
        title: 'GuardianAI',
        slug: 'guardian-ai',
        techStack: ['TensorFlow', 'Node.js', 'AWS S3', 'Solidity', 'Polygon', 'Twilio'],
        thumbnail: '/projects/guardianai.jpg',
        liveUrl: 'https://guardianaipresentation.vercel.app',
        sourceCode: 'https://github.com/keshavdadhichb/GuardianAI',
        year: 2025,
        description: `Proactive Personal Safety System with Multi-Modal AI for distress detection. Features autonomous threat evaluation, blockchain evidence logging, and real-time emergency alerts.`,
        award: '🏆 1st Prize - InnovAct-2025 at VIT | Patent Filed',
    },
    {
        title: 'Citadel',
        slug: 'citadel',
        techStack: ['Java Spring Boot', 'Python FastAPI', 'Ethereum', 'React'],
        thumbnail: '/projects/citadel.jpg',
        liveUrl: 'https://v0-citadel-scrollytelling-experienc.vercel.app',
        sourceCode: 'https://github.com/keshavdadhichb/citadel',
        year: 2025,
        description: `Zero-Knowledge Loan Verification Protocol with hybrid microservices architecture. Features privacy-first NLP engine for PII redaction and immutable blockchain audit trail.`,
        award: '🏆 1st Prize - Vitality\'25 National Hackathon by GeeksForGeeks',
    },
    {
        title: 'Unidash',
        slug: 'unidash',
        techStack: ['Node.js', 'PostgreSQL', 'React', 'JWT'],
        thumbnail: '/projects/unidash.jpg',
        liveUrl: 'https://uni-dash-fe.vercel.app/',
        sourceCode: 'https://github.com/keshavdadhichb/UniDash-Backend',
        year: 2025,
        description: `Peer-to-Peer Delivery Platform with real-time tracking. Robust PostgreSQL backend with secure JWT authentication and automated CI/CD deployment pipelines.`,
    },
    {
        title: '1up',
        slug: '1up',
        techStack: ['Node.js', 'Express', 'PostgreSQL', 'OAuth 2.0'],
        thumbnail: '/projects/1up.jpg',
        liveUrl: 'https://1upweb.in',
        sourceCode: 'https://github.com/keshavdadhichb/lup',
        year: 2025,
        description: `Community Book-Lending Platform with unique terminal-style UI. Unified REST API with Google OAuth 2.0 for university domain authentication. 200+ active users.`,
        award: '📈 200+ Active Users',
    },
    {
        title: 'EvalOCR',
        slug: 'eval-ocr',
        techStack: ['Python', 'Tesseract', 'EasyOCR', 'OpenCV', 'Flask'],
        thumbnail: '/projects/evalocr.jpg',
        sourceCode: 'https://github.com/keshavdadhichb/ocr-evaluation',
        year: 2025,
        description: `OCR Evaluation Pipeline for comparing multiple OCR engines (Tesseract, EasyOCR). Benchmarks accuracy, processing speed, and text extraction quality across different document types.`,
    },
    {
        title: 'Churn Predictor',
        slug: 'churn-predictor',
        techStack: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
        thumbnail: '/projects/churn.jpg',
        sourceCode: 'https://github.com/keshavdadhichb/Customer-Churn-Analysis-App',
        year: 2025,
        description: `Customer Churn Analysis Application using machine learning. Predicts customer attrition using classification models with interactive Streamlit dashboard for insights visualization.`,
    },
    {
        title: 'Datumaro',
        slug: 'datumaro',
        techStack: ['Python', 'Computer Vision', 'Data Annotation'],
        thumbnail: '/projects/datumaro.jpg',
        sourceCode: 'https://github.com/keshavdadhichb/datumaro',
        year: 2025,
        description: `Dataset Management Framework for computer vision projects. Tools for dataset analysis, transformation, and format conversion across various annotation standards.`,
    },
    {
        title: 'REFEX Trading Bot',
        slug: 'refex-trading',
        techStack: ['Python', 'yfinance', 'Telegram API', 'Real-time Data'],
        thumbnail: '/projects/trading.jpg',
        liveUrl: 'https://colab.research.google.com/drive/1ZfPzS_z6J-CHeuiZZrZrrtwP8OY8as7Z?usp=sharing',
        year: 2025,
        description: `Paper Trading Bot for REFEX.NS stock with real-time monitoring. Features momentum-based strategy, Telegram alerts for trade notifications, and comprehensive PnL tracking.`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'AI/ML Engineer Intern',
        company: 'DataClap Digital Ventures LLP',
        location: 'Coimbatore, India',
        duration: 'May 2025 – Jun 2025',
        highlights: [
            'Engineered high-accuracy OCR data extraction pipelines using Tesseract and EasyOCR',
            'Architected real-time computer vision applications with OpenCV and MediaPipe',
            'Orchestrated annotation of large-scale image datasets using Voxel51 and CVAT',
        ],
    },
];

export const OPEN_SOURCE = [
    {
        name: 'OpenAlgo',
        role: 'Backend Contributor',
        tech: ['Python', 'SQLAlchemy', 'Flask'],
        description: 'Real-time alert engine for market price monitoring. Fixed critical thread-safety issues.',
    },
    {
        name: 'GridCoin-Research',
        role: 'C++/Qt Contributor',
        tech: ['C++', 'Qt'],
        description: 'Engineered "Subtract fee from amount" logic and enhanced Qt frontend.',
    },
    {
        name: 'awesome-react',
        role: 'Library Integration',
        tech: ['Documentation'],
        description: 'Integrated shadcn-ui and modernized the UI Components index.',
    },
];

export const ACHIEVEMENTS = [
    { title: 'Patent Filed', description: 'Intellectual Property for GuardianAI (Proactive Personal Safety System)' },
    { title: '1st Prize - Vitality\'25', description: 'National Level Hackathon by GeeksForGeeks' },
    { title: '1st Prize - InnovAct-2025', description: 'Hackathon at VIT Vellore' },
    { title: 'Oracle Cloud Certified', description: 'OCI 2025 Certified Generative AI Professional' },
    { title: 'Top 1% - DevJams\'25', description: 'Competing against 4000+ participants' },
];

export const EDUCATION = {
    institution: 'Vellore Institute of Technology',
    location: 'Vellore, India',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    duration: '2023 – 2027',
};

export const LEADERSHIP = [
    {
        org: 'ACM',
        role: 'Senior Core Member',
        duration: 'Apr 2024 – Present',
    },
    {
        org: 'ISTE',
        role: 'Core Member (ML/IoT)',
        duration: 'May 2024 – Dec 2024',
    },
    {
        org: 'Team Garuda',
        role: 'Founding Member',
        duration: 'Mar 2024 – Jun 2024',
    },
];
