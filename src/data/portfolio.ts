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
  name: 'Himanshu Beri',
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
      url: 'https://linkedin.com/in/himanshu-beri',
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
      category: 'Programming & Frameworks',
      skills: [
        'Python',
        'SQL',
        'Pandas',
        'NumPy',
        'SciPy',
        'Matplotlib',
        'Scikit-Learn',
        'Hadoop',
        'Spark',
        'Kafka',
        'Hive',
      ],
    },
    {
      category: 'Data Science & Machine Learning',
      skills: ['Data Analysis', 'Machine Learning', 'Big Data Engineering'],
    },
    {
      category: 'Data Visualization & Reporting',
      skills: ['Power BI', 'Excel', 'Business Intelligence (SSAS, SSIS, SSRS)'],
    },
    {
      category: 'Databases & Cloud',
      skills: ['SQL Server', 'MySQL', 'Amazon Web Services', 'Microsoft Azure', 'Google Cloud'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Anaconda', 'Git', 'GitHub', 'Visual Studio Code', 'PyCharm', 'Google Colab'],
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
      duration: 'Nov 2025 - Present',
      highlights: [
        'Optimized logistics tracking for events, workshops, & startup sessions using Microsoft Excel, facilitating improved event planning by enhancing data analysis of participation metrics.',
        'Enhanced decision-making processes by constructing & maintaining Excel-based spreadsheets, reports, & dashboards to effectively monitor daily operations & startup engagement activities.',
      ],
    },
  ],
  projects: [
    {
      title: 'Microsoft Stock Price Forecasting',
      role: 'Machine Learning Developer',
      duration: 'Feb 2026 - Apr 2026',
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
    {
      title: 'Census Income Prediction',
      role: 'Machine Learning Developer',
      duration: 'Oct 2025 - Nov 2025',
      summary:
        'Conducted a comparative analysis of Linear Support Vector Machine & Linear Regression models using Python & Scikit-learn, achieving a 7% increase in income level predictions.',
      highlights: [
        'Conducted a comparative analysis of Linear Support Vector Machine & Linear Regression models using Python & Scikit-learn, achieving a 7% increase in income level predictions & effectively addressing a real-world imbalanced classification challenge.',
        'Evaluated model performance using balanced accuracy and 5-fold cross-validation, demonstrating the superiority of margin-based classifiers over regression for income prediction.',
      ],
      techTags: ['Python', 'Scikit-Learn', 'SVM', 'Linear Regression', 'Cross-Validation'],
      githubUrl: 'https://github.com/BeriHimanshu/Census-Income-Prediction',
    },
  ],
  education: [
    {
      degree: "Master's of Science in Data Science",
      institution: 'New Jersey Institute of Technology',
      location: 'Newark, USA',
      duration: 'May 2027',
    },
    {
      degree: "Bachelor's of Technology in Computer Science",
      institution: 'Punjab Technical University',
      location: 'Mohali, India',
      duration: 'Apr 2024',
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
