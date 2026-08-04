export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  role: string;
  organization: string;
  location: string;
  duration: string;
  highlights: string[];
}

export interface Project {
  title: string;
  role: string;
  duration: string;
  summary: string;
  highlights: string[];
  techTags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
}

export interface Certification {
  name: string;
  issuer: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  tagline: string;
  summary: string;
  resumeUrl: string;
  socialLinks: SocialLink[];
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
}

export const portfolioData: PortfolioData = {
  name: 'Himanshu Himanshu',
  tagline: 'Data Science Student | Machine Learning Enthusiast',
  summary:
    "Data Science Master's student at NJIT with expertise in Python, SQL, and data visualization. Enhanced cybersecurity measures by analyzing 100K+ log events weekly and achieving a 30% increase in detection accuracy. Leveraged data insights to drive a 15% sales boost through optimized reporting and visualization tools like Power BI.",
  resumeUrl: '/Himanshu_Resume.pdf',
  socialLinks: [
    {
      platform: 'Email',
      url: 'mailto:himanshuberi1606@gmail.com',
      label: 'himanshuberi1606@gmail.com',
      icon: 'Mail',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/himanshu-beri',
      label: 'linkedin.com/in/himanshu-beri',
      icon: 'Linkedin',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/BeriHimanshu',
      label: 'github.com/BeriHimanshu',
      icon: 'Github',
    },
  ],
  skills: [
    {
      category: 'Cloud, DevOps & CI/CD',
      skills: [
        'Amazon Web Services (AWS)',
        'Microsoft Azure',
        'Google Cloud (GCP)',
        'Docker',
        'GitHub Actions',
        'CI/CD Pipelines',
        'Azure App Services',
      ],
    },
    {
      category: 'Machine Learning & MLOps',
      skills: [
        'Machine Learning',
        'End-to-End ML Pipelines',
        'Model Deployment',
        'Scikit-Learn',
        'TensorFlow',
        'CatBoost',
        'XGBoost',
      ],
    },
    {
      category: 'Big Data & Data Engineering',
      skills: ['PySpark', 'Apache Hadoop', 'Apache Spark', 'Apache Kafka', 'Apache Hive', 'Data Analysis'],
    },
    {
      category: 'Programming & Web Frameworks',
      skills: ['Python', 'SQL', 'Flask', 'Pandas', 'NumPy', 'SciPy', 'Matplotlib'],
    },
    {
      category: 'Databases & BI Tools',
      skills: ['SQL Server', 'MySQL', 'Power BI', 'Advanced Excel', 'SSAS', 'SSIS', 'SSRS'],
    },
    {
      category: 'Developer Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'PyCharm', 'Anaconda', 'Google Colab'],
    },
  ],
  experience: [
    {
      role: 'Teaching Assistant, Mechatronics',
      organization: 'MakerSpace, NJIT',
      location: 'Newark, New Jersey',
      duration: 'Mar 2026 - Present',
      highlights: [
        'Conducted lab sessions, graded assignments, and provided academic support to students.',
        'Resolved hardware & software issues with basic circuit components in lab environments, preventing experiment failures & minimizing downtime for researchers to enable timely data collection.',
      ],
    },
    {
      role: 'Student Assistant, Operations & Data',
      organization: 'Profeta Center, NJIT',
      location: 'Newark, New Jersey',
      duration: 'Nov 2025 - May 2026',
      highlights: [
        'Optimized logistics tracking for events, workshops, & startup sessions using Microsoft Excel, facilitating improved event planning by enhancing data analysis of participation metrics.',
        'Enhanced decision-making processes by constructing & maintaining Excel-based spreadsheets, reports, & dashboards to effectively monitor daily operations & startup engagement activities.',
      ],
    },
    {
      role: 'SOC Analyst Intern, Managed Detection & Response',
      organization: 'Aujas CyberSecurity',
      location: 'Gurugram, India',
      duration: 'Feb 2024 - Apr 2024',
      highlights: [
        'Analyzed 100K+ security log events weekly across network and endpoint environments, contributing to a 30% increase in threat detection accuracy.',
        'Monitored real-time SIEM alerts and performed triage on security incidents in a 24/7 Security Operations Center (SOC) environment to mitigate potential cyber threats.',
      ],
    },
  ],
  projects: [
    {
      title: 'Student Performance Predictor',
      role: 'End-to-End ML & Azure Deployment',
      duration: 'Feb 2026 - Apr 2026',
      summary:
        'Architected a modular end-to-end ML pipeline in Python, decoupling data ingestion, feature preprocessing, and model training, then containerized and deployed it to Azure with automated CI/CD.',
      highlights: [
        'Architected a modular end-to-end ML pipeline in Python (src/), decoupling data ingestion, feature preprocessing, and model training for maintainability.',
        'Trained and hyperparameter-tuned multiple ML algorithms (CatBoost, XGBoost, Scikit-Learn) with automated artifact tracking for model binaries.',
        'Containerized the Flask web application with Docker and configured automated CI/CD pipelines via GitHub Actions for zero-downtime deployment to Microsoft Azure App Services.',
      ],
      techTags: ['Python', 'CatBoost', 'XGBoost', 'Scikit-Learn', 'Flask', 'Docker', 'GitHub Actions', 'Azure'],
      githubUrl: 'https://github.com/BeriHimanshu/Generic_ML_Project',
      liveUrl: 'https://studentperformanceindicator-atetdmcxepg7d7ak.eastus-01.azurewebsites.net/predictdata',
    },
    {
      title: 'Microsoft Stock Price Forecasting',
      role: 'Machine Learning Developer',
      duration: 'Oct 2025 - Nov 2025',
      summary:
        'Developed a stacked LSTM model (3 layers, 50 units each) to forecast Microsoft stock prices using 15+ years of historical data.',
      highlights: [
        'Developed a stacked LSTM model (3 layers, 50 units each) to forecast Microsoft stock prices using 15+ years of historical data.',
        'Processed and analyzed 5,000+ time-series data points, applying MinMaxScaler normalization to improve model convergence.',
        "Engineered input sequences using a 100-day sliding window, enhancing the model's ability to capture temporal dependencies.",
      ],
      techTags: ['Python', 'LSTM', 'TensorFlow', 'MinMaxScaler', 'Time-Series'],
      githubUrl: 'https://github.com/BeriHimanshu/Time-Series-Forecasting-Using-Stacked-LSTM',
    },
  ],
  education: [
    {
      degree: "Master's of Science in Data Science",
      institution: 'New Jersey Institute of Technology',
      location: 'Newark, USA',
      duration: 'Sep 2025 - May 2027',
    },
    {
      degree: "Bachelor's of Technology in Computer Science",
      institution: 'Punjab Technical University',
      location: 'Mohali, India',
      duration: 'Apr 2020 - Apr 2024',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services (Udemy)',
      description:
        'Completed 14 hours of technical training and hands-on labs focused on AWS Management Console.',
    },
    {
      name: 'Machine Learning & Deep Learning Bootcamp',
      issuer: 'Udemy',
      description:
        'Engineered and deployed 5+ end-to-end Machine Learning models using Python, Scikit Learn, and TensorFlow.',
    },
    {
      name: 'Certificate in Leadership Skills',
      issuer: 'IIM Ahmedabad (IIMA)',
      description:
        'Analyzed 15+ Harvard-style case studies focusing on complex decision-making, conflict resolution, and strategic influence.',
    },
  ],
};
