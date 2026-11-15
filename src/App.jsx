import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Database,
  Cpu,
  Code2,
  Server,
  Layers,
  GitBranch,
  Linkedin,
  Mail,
  FileText,
  Download,
  Check,
  Copy,
  Menu,
  X,
  ArrowUpRight,
  TrendingUp,
  BarChart3,
  Activity,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Info,
  Printer,
  SlidersHorizontal,
  Award,
  CheckCircle2,
  FolderGit2
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

/**
 * ============================================================================
 * PORTFOLIO DATA CONFIGURATION
 * Separated from presentation components for clean maintainability.
 * ============================================================================
 */
const PORTFOLIO_DATA = {
  profile: {
    name: 'Ashish Yadav',
    monogram: 'AY',
    role: 'Data Engineering & AI Developer',
    targetRole: 'Junior Data Engineering & Intelligence Engineer · ZettaRMS.ai',
    location: 'Gwalior / Navi Mumbai, India',
    heroHeading: 'Engineering Intelligent Data Systems.',
    heroSubtext:
      'I build data-driven applications, intelligent pipelines and practical AI solutions using Python, machine learning and modern software technologies.',
    tagline:
      'Building intelligent data pipelines, scalable applications and data-driven solutions.',
    email: '145ashishece2021@gmail.com',
    socials: {
      github: 'https://github.com/Ashish18-01',
      linkedin: 'https://www.linkedin.com/in/ashish-yadav-07504321b/',
      leetcode: 'https://leetcode.com/u/ashish18yadav/',
      takeuforward: 'https://takeuforward.org/profile/ASHISH018YADAV'
    }
  },

  about: {
    paragraphs: [
      'I am currently pursuing an M.Tech in Computer Science and Engineering at ABV-IIITM Gwalior (2025–2027), building upon a B.Tech in Computer Science and Engineering from UIET, MDU Rohtak (2021–2025). My work centers on designing structured data pipelines, analytical backends, and practical machine learning workflows.',
      'Through my Full-Stack Web Development Internship at the Indian Institute of Technology Jammu (IIT Jammu), I gained hands-on experience engineering React.js interfaces, modular Node.js/Express.js REST APIs, MongoDB data models, and verified authentication workflows.',
      'Combining Python, SQL, and algorithmic problem-solving with full-stack engineering fundamentals, I focus on transforming raw operational and market data into validated datasets, demand forecasts, and explainable pricing systems.'
    ],
    pillars: [
      {
        title: 'Data Engineering & ETL',
        icon: 'database',
        description:
          'Automated web extraction, schema validation, deduplication, and structured ingestion pipelines using Python, Pandas, Scrapy, and SQL/NoSQL stores.'
      },
      {
        title: 'Applied ML & Analytics',
        icon: 'cpu',
        description:
          'Feature engineering, historical booking analysis, seasonal demand estimation, and interpretable pricing logic built with NumPy and Scikit-learn.'
      },
      {
        title: 'Full-Stack & REST APIs',
        icon: 'server',
        description:
          'End-to-end web systems, authenticated REST APIs, and real-time dashboards built with React.js, Node.js, Express.js, Flask, and MongoDB.'
      }
    ]
  },

  experience: {
    role: 'Full-Stack Web Development Intern',
    organization: 'Indian Institute of Technology Jammu (IIT Jammu)',
    shortOrg: 'IIT Jammu',
    duration: 'June 2026 – August 2026',
    cohort: "Summer School '26",
    collaboration: 'Conducted in collaboration with I3C – IIT Jammu and Techible',
    location: 'Jammu, India',
    overview:
      'Completed an intensive full-stack engineering internship hosted by IIT Jammu in collaboration with I3C (Institute Innovation and Incubation Council) and Techible, focused on architecting, building, and testing production-grade MERN stack web applications.',
    pillars: [
      {
        title: 'Frontend Architecture',
        subtitle: 'React.js & Responsive UI',
        detail:
          'Engineered modular, reusable React.js components, stateful client workflows, and responsive layouts adhering to clean component hierarchy.'
      },
      {
        title: 'Backend REST API Engineering',
        subtitle: 'Node.js & Express.js',
        detail:
          'Built structured RESTful endpoints, middleware pipelines, request validation handlers, and clean controller-service separation.'
      },
      {
        title: 'Database Design & Auth',
        subtitle: 'MongoDB & JWT Security',
        detail:
          'Designed Mongoose document schemas, integrated CRUD persistence in MongoDB, and implemented token-based authentication & route protection.'
      },
      {
        title: 'API Verification & Git Workflows',
        subtitle: 'Postman, Thunder Client & GitHub',
        detail:
          'Validated API contracts, status codes, and edge-case payloads via Postman & Thunder Client while maintaining feature-branch workflows on GitHub.'
      }
    ],
    deliverables: [
      'End-to-end full-stack MERN capstone application with authenticated user flows and persistent MongoDB storage.',
      'Modular REST API suite verified against structured test collections in Postman and Thunder Client.',
      'Iterative engineering milestones reviewed during technical mentor checkpoints.'
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'REST APIs',
      'JWT Auth',
      'Postman',
      'Thunder Client',
      'Git',
      'GitHub'
    ]
  },

  skills: [
    {
      category: 'Programming Languages',
      icon: 'code',
      items: [
        { name: 'Python', level: 'Demonstrated' },
        { name: 'SQL', level: 'Demonstrated' },
        { name: 'JavaScript (ES6+)', level: 'Demonstrated' },
        { name: 'C++', level: 'Demonstrated' }
      ]
    },
    {
      category: 'Data Engineering',
      icon: 'database',
      items: [
        { name: 'Pandas', level: 'Demonstrated' },
        { name: 'NumPy', level: 'Demonstrated' },
        { name: 'Data Processing & Cleaning', level: 'Demonstrated' },
        { name: 'ETL Fundamentals', level: 'Demonstrated' },
        { name: 'Data Validation', level: 'Demonstrated' },
        { name: 'Web Scraping (Scrapy / BS4)', level: 'Demonstrated' }
      ]
    },
    {
      category: 'AI & Machine Learning',
      icon: 'cpu',
      items: [
        { name: 'Scikit-learn', level: 'Demonstrated' },
        { name: 'Decision Trees', level: 'Demonstrated' },
        { name: 'Support Vector Machines (SVM)', level: 'Demonstrated' },
        { name: 'ML Fundamentals & Feature Eng.', level: 'Demonstrated' },
        { name: 'LLM Fundamentals', level: 'Learning' }
      ]
    },
    {
      category: 'Backend Development',
      icon: 'server',
      items: [
        { name: 'Flask', level: 'Demonstrated' },
        { name: 'Node.js', level: 'Demonstrated' },
        { name: 'Express.js', level: 'Demonstrated' },
        { name: 'REST APIs', level: 'Demonstrated' },
        { name: 'JWT & Socket.IO', level: 'Demonstrated' }
      ]
    },
    {
      category: 'Databases',
      icon: 'layers',
      items: [
        { name: 'MongoDB', level: 'Demonstrated' },
        { name: 'MySQL', level: 'Demonstrated' },
        { name: 'SQL Querying', level: 'Demonstrated' },
        { name: 'Mongoose ODM', level: 'Demonstrated' },
        { name: 'Redis', level: 'Learning' }
      ]
    },
    {
      category: 'Frontend & Tools',
      icon: 'terminal',
      items: [
        { name: 'React.js', level: 'Demonstrated' },
        { name: 'Tailwind CSS / HTML5 / CSS3', level: 'Demonstrated' },
        { name: 'Git & GitHub', level: 'Demonstrated' },
        { name: 'Postman & Thunder Client', level: 'Demonstrated' },
        { name: 'VS Code', level: 'Demonstrated' }
      ]
    }
  ],

  /**
   * Illustrative sample datasets for the interactive Hotel Revenue Intelligence Dashboard
   */
  dashboardScenarios: {
    standard_14d: {
      roomType: 'Standard King Room',
      horizon: 'Next 14 Days',
      kpis: {
        avgCompetitorPrice: 6450,
        competitorDelta: '+4.2% vs last wk',
        occupancyRate: 78.4,
        occupancyDelta: '+6.1% pickup',
        demandIndex: '1.24x · High',
        demandNote: 'Weekend compression detected',
        currentPrice: 6200,
        recommendedPrice: 6890,
        upliftPct: '+11.1%'
      },
      rationale: [
        'Current occupancy (78.4%) exceeds the 75% high-demand threshold for the upcoming 14-day booking window.',
        'Subject property is priced ₹250 below CompSet median (₹6,450), leaving RevPAR yield on the table.',
        'Hybrid rule + regression signal recommends +₹690 adjustment while maintaining a ₹110 buffer below CompSet B.'
      ],
      trendData: [
        { day: 'D+1', current: 6100, recommended: 6450, competitorAvg: 6300, occupancy: 72 },
        { day: 'D+2', current: 6150, recommended: 6550, competitorAvg: 6380, occupancy: 74 },
        { day: 'D+3', current: 6200, recommended: 6890, competitorAvg: 6520, occupancy: 81 },
        { day: 'D+4', current: 6400, recommended: 7250, competitorAvg: 6950, occupancy: 88 },
        { day: 'D+5', current: 6400, recommended: 7390, competitorAvg: 7100, occupancy: 91 },
        { day: 'D+6', current: 6250, recommended: 6750, competitorAvg: 6480, occupancy: 77 },
        { day: 'D+7', current: 6100, recommended: 6400, competitorAvg: 6250, occupancy: 71 },
        { day: 'D+8', current: 6150, recommended: 6500, competitorAvg: 6320, occupancy: 73 },
        { day: 'D+9', current: 6200, recommended: 6680, competitorAvg: 6450, occupancy: 76 },
        { day: 'D+10', current: 6300, recommended: 6950, competitorAvg: 6690, occupancy: 82 },
        { day: 'D+11', current: 6450, recommended: 7420, competitorAvg: 7150, occupancy: 89 },
        { day: 'D+12', current: 6450, recommended: 7490, competitorAvg: 7220, occupancy: 92 },
        { day: 'D+13', current: 6250, recommended: 6790, competitorAvg: 6510, occupancy: 78 },
        { day: 'D+14', current: 6150, recommended: 6480, competitorAvg: 6290, occupancy: 73 }
      ],
      competitors: [
        { name: 'Subject (Current)', rate: 6200, fill: '#52525B' },
        { name: 'Subject (Rec.)', rate: 6890, fill: '#3B82F6' },
        { name: 'CompSet A', rate: 6350, fill: '#27272A' },
        { name: 'CompSet B', rate: 7000, fill: '#27272A' },
        { name: 'CompSet C', rate: 6420, fill: '#27272A' },
        { name: 'CompSet D', rate: 6030, fill: '#27272A' }
      ]
    },
    executive_14d: {
      roomType: 'Executive Business Suite',
      horizon: 'Next 14 Days',
      kpis: {
        avgCompetitorPrice: 10850,
        competitorDelta: '+6.8% corporate',
        occupancyRate: 84.0,
        occupancyDelta: '+8.4% pickup',
        demandIndex: '1.36x · Surge',
        demandNote: 'Mid-week corporate conference',
        currentPrice: 9900,
        recommendedPrice: 11250,
        upliftPct: '+13.6%'
      },
      rationale: [
        'Mid-week corporate booking velocity pushed suite occupancy to 84.0% with constrained remaining inventory.',
        'CompSet B and CompSet C adjusted upper-tier inventory above ₹11,100 over the past 48 hours.',
        'Dynamic rule guardrail caps single-step increase at +14% while capturing ₹1,350 incremental ADR.'
      ],
      trendData: [
        { day: 'D+1', current: 9800, recommended: 10600, competitorAvg: 10450, occupancy: 79 },
        { day: 'D+2', current: 9900, recommended: 11100, competitorAvg: 10800, occupancy: 84 },
        { day: 'D+3', current: 9900, recommended: 11450, competitorAvg: 11150, occupancy: 88 },
        { day: 'D+4', current: 10100, recommended: 11500, competitorAvg: 11200, occupancy: 89 },
        { day: 'D+5', current: 10000, recommended: 10950, competitorAvg: 10750, occupancy: 81 },
        { day: 'D+6', current: 9700, recommended: 10350, competitorAvg: 10200, occupancy: 75 },
        { day: 'D+7', current: 9650, recommended: 10250, competitorAvg: 10100, occupancy: 74 },
        { day: 'D+8', current: 9850, recommended: 10800, competitorAvg: 10550, occupancy: 80 },
        { day: 'D+9', current: 9950, recommended: 11250, competitorAvg: 10950, occupancy: 85 },
        { day: 'D+10', current: 10100, recommended: 11600, competitorAvg: 11300, occupancy: 90 },
        { day: 'D+11', current: 10100, recommended: 11550, competitorAvg: 11250, occupancy: 88 },
        { day: 'D+12', current: 9950, recommended: 10900, competitorAvg: 10700, occupancy: 82 },
        { day: 'D+13', current: 9750, recommended: 10400, competitorAvg: 10250, occupancy: 76 },
        { day: 'D+14', current: 9700, recommended: 10300, competitorAvg: 10150, occupancy: 74 }
      ],
      competitors: [
        { name: 'Subject (Current)', rate: 9900, fill: '#52525B' },
        { name: 'Subject (Rec.)', rate: 11250, fill: '#3B82F6' },
        { name: 'CompSet A', rate: 10600, fill: '#27272A' },
        { name: 'CompSet B', rate: 11400, fill: '#27272A' },
        { name: 'CompSet C', rate: 11150, fill: '#27272A' },
        { name: 'CompSet D', rate: 10250, fill: '#27272A' }
      ]
    }
  },

  projects: [
    {
      id: 'hotel-intelligence-system',
      featured: true,
      title: 'Hotel Intelligence & Dynamic Pricing System',
      status: 'Full Prototype — In Progress',
      statusType: 'prototype',
      domain: 'End-to-End Revenue Intelligence, Data Engineering & Applied ML',
      description:
        'An integrated hospitality revenue intelligence prototype combining automated competitor rate ingestion, schema validation, demand forecasting features, and an explainable dynamic pricing engine into a unified analytical workflow.',
      pipelineNodes: [
        'Rate Scraper & PMS Feed',
        'Validation & Feature Store',
        'Demand & Pricing Engine',
        'Flask REST API Layer',
        'React Analytics UI'
      ],
      features: [
        'Automated competitor rate extraction, normalization & deduplication pipeline',
        'Historical booking window analysis & lag/rolling demand feature engineering',
        'Occupancy threshold evaluation & CompSet price positioning benchmarking',
        'Hybrid rule-guardrail + Scikit-learn dynamic room rate recommendation engine',
        'Human-readable explainability trace generated for every rate recommendation',
        'Interactive analytics dashboard previewing pricing trajectories & CompSet spreads'
      ],
      tech: ['Python', 'Pandas', 'NumPy', 'Scrapy', 'Scikit-learn', 'Flask', 'MongoDB', 'React'],
      repoUrl: '',
      demoUrl: '#dashboard'
    },
    {
      id: 'queueit-system',
      featured: false,
      title: 'QueueIT — Multi-Tenant Queue Management System',
      status: 'Completed · Full-Stack',
      statusType: 'completed',
      domain: 'Real-Time Full-Stack Distributed Web Application',
      description:
        'A multi-tenant full-stack application engineered to help organizations manage service queues, counters, operators, and live customer waiting workflows.',
      pipelineNodes: [
        'React Operator & Live UI',
        'Node / Express REST API',
        'JWT RBAC & Socket.IO',
        'MongoDB & Redis State'
      ],
      features: [
        'Multi-tenant organization isolation & role-based access control (RBAC)',
        'RESTful backend APIs with structured request validation',
        'Persistent tenant, counter, and queue token storage in MongoDB',
        'Real-time queue state synchronization via Socket.IO & Redis'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Socket.IO', 'Redis'],
      repoUrl: '',
      demoUrl: ''
    },
    {
      id: 'student-management-system',
      featured: false,
      title: 'Student Management System',
      status: 'Completed · Full-Stack',
      statusType: 'completed',
      domain: 'Academic Administration & Relational Data System',
      description:
        'A structured academic management application designed to streamline student enrollment, course allocation, attendance tracking, and grade reporting across administrative and faculty roles.',
      pipelineNodes: [
        'Role-Based Dashboard',
        'RESTful Service Layer',
        'Validation & Auth Guard',
        'Structured DB Storage'
      ],
      features: [
        'Multi-role authentication for administrators, faculty, and students',
        'Complete CRUD workflows for student records, departments & courses',
        'Automated attendance aggregation & semester grade computation',
        'Filterable academic reporting and clean responsive interface'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'REST APIs'],
      repoUrl: '',
      demoUrl: ''
    }
  ],

  education: [
    {
      degree: 'M.Tech in Computer Science and Engineering',
      percentage: '',
      institution: 'ABV-Indian Institute of Information Technology and Management (ABV-IIITM), Gwalior',
      period: '2025 – 2027',
      status: 'Pursuing',
      focus: 'Advanced Algorithms, Data Engineering Systems, Machine Learning, Distributed Computing'
    },
    {
      degree: 'B.Tech in Computer Science and Engineering',
      percentage: '',
      institution: 'University Institute of Engineering and Technology (UIET), MDU Rohtak',
      period: '2021 – 2025',
      status: 'Completed',
      focus: 'Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Software Engineering'
    },
    {
      degree: 'Senior Secondary (Class XII)',
      percentage: '93.4%',
      institution: 'Rawal Convent School',
      period: '2021',
      status: 'Completed',
      focus: 'Physics, Chemistry, Maths'
    },
    {
      degree: 'Secondary School (Class X)',
      percentage: '94.6%',
      institution: 'Rawal Convent School',
      period: '2019',
      status: 'Completed',
      focus: ''
    }
  ]
};

/**
 * ============================================================================
 * REUSABLE UI COMPONENTS
 * ============================================================================
 */

const SectionHeader = ({ eyebrow, title, subtitle, id }) => (
  <div id={id} className="scroll-mt-24 mb-10">
    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-[#27272A] bg-[#111114] text-xs font-mono text-[#60A5FA] uppercase tracking-wider mb-3">
      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
      {eyebrow}
    </div>
    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#FAFAFA]">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-2 text-sm sm:text-base text-[#A1A1AA] max-w-2xl leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

/**
 * Custom Tooltip for Recharts matching dark enterprise SaaS aesthetic
 */
const CustomChartTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="bg-[#09090B] border border-[#27272A] rounded-md px-3 py-2.5 shadow-xl text-xs font-mono">
      <p className="text-[#FAFAFA] font-semibold mb-1.5 border-b border-[#27272A] pb-1">
        Booking Window: {label}
      </p>
      {payload.map((entry, index) => (
        <div key={index} className="flex items-center justify-between gap-4 py-0.5">
          <span className="flex items-center gap-1.5 text-[#A1A1AA]">
            <span
              className="w-2 h-2 rounded-xs"
              style={{ backgroundColor: entry.color }}
            />
            {entry.name}:
          </span>
          <span className="text-[#FAFAFA] font-medium">
            {entry.name.toLowerCase().includes('occupancy')
              ? `${entry.value}%`
              : `₹${Number(entry.value).toLocaleString('en-IN')}`}
          </span>
        </div>
      ))}
    </div>
  );
};

/**
 * Special Feature: Interactive Hotel Revenue Intelligence Dashboard Preview
 */
const HotelIntelligenceDashboard = () => {
  const [scenarioKey, setScenarioKey] = useState('standard_14d');
  const scenario = PORTFOLIO_DATA.dashboardScenarios[scenarioKey];
  const { kpis } = scenario;

  return (
    <section className="py-20 border-t border-[#1F1F23]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
          <SectionHeader
            id="dashboard"
            eyebrow="Interactive Architecture Preview"
            title="Hotel Intelligence Dashboard"
            subtitle="Interactive prototype demonstrating how competitor rate scraping, occupancy thresholds, and demand indicators synthesize into explainable room pricing decisions."
          />

          <div className="flex flex-col items-start md:items-end gap-2 mb-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#141D2F] border border-[#253859] text-[11px] font-mono text-[#93C5FD]">
              <Info className="w-3.5 h-3.5 text-[#3B82F6]" />
              ILLUSTRATIVE SAMPLE DATA · PROTOTYPE MODEL
            </span>
          </div>
        </div>

        {/* Main SaaS Analytics Container */}
        <div className="rounded-lg border border-[#27272A] bg-[#0D0D10] shadow-2xl overflow-hidden">
          {/* Top Application Window Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-[#111114] border-b border-[#27272A]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3F3F46]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#3F3F46]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#3F3F46]" />
              </div>
              <div className="h-4 w-[1px] bg-[#27272A]" />
              <div className="flex items-center gap-2 text-xs font-mono text-[#D4D4D8]">
                <BarChart3 className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>rms-pricing-engine / v0.4-prototype</span>
              </div>
            </div>

            {/* Room Segment Selector */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#71717A] hidden sm:block" />
              <div className="inline-flex rounded-md bg-[#09090B] p-1 border border-[#27272A]">
                {Object.entries(PORTFOLIO_DATA.dashboardScenarios).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setScenarioKey(key)}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                      scenarioKey === key
                        ? 'bg-[#172236] text-[#FAFAFA] border border-[#2B4269]'
                        : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
                    }`}
                  >
                    {item.roomType}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dashboard Inner Body */}
          <div className="p-4 sm:p-6 space-y-6">
            {/* 5 KPI Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {/* KPI 1 */}
              <div className="p-4 rounded-md bg-[#111114] border border-[#27272A]">
                <div className="flex items-center justify-between text-xs text-[#A1A1AA] mb-2">
                  <span>Avg Competitor Price</span>
                  <Activity className="w-3.5 h-3.5 text-[#71717A]" />
                </div>
                <div className="text-xl font-mono font-semibold text-[#FAFAFA]">
                  ₹{kpis.avgCompetitorPrice.toLocaleString('en-IN')}
                </div>
                <div className="mt-1.5 text-[11px] font-mono text-[#A1A1AA]">
                  {kpis.competitorDelta}
                </div>
              </div>

              {/* KPI 2 */}
              <div className="p-4 rounded-md bg-[#111114] border border-[#27272A]">
                <div className="flex items-center justify-between text-xs text-[#A1A1AA] mb-2">
                  <span>Hotel Occupancy</span>
                  <TrendingUp className="w-3.5 h-3.5 text-[#3B82F6]" />
                </div>
                <div className="text-xl font-mono font-semibold text-[#FAFAFA]">
                  {kpis.occupancyRate}%
                </div>
                <div className="mt-1.5 text-[11px] font-mono text-[#60A5FA]">
                  {kpis.occupancyDelta}
                </div>
              </div>

              {/* KPI 3 */}
              <div className="p-4 rounded-md bg-[#111114] border border-[#27272A]">
                <div className="flex items-center justify-between text-xs text-[#A1A1AA] mb-2">
                  <span>Demand Indicator</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
                </div>
                <div className="text-xl font-mono font-semibold text-[#FAFAFA]">
                  {kpis.demandIndex}
                </div>
                <div className="mt-1.5 text-[11px] font-mono text-[#A1A1AA] truncate">
                  {kpis.demandNote}
                </div>
              </div>

              {/* KPI 4 */}
              <div className="p-4 rounded-md bg-[#111114] border border-[#27272A]">
                <div className="flex items-center justify-between text-xs text-[#A1A1AA] mb-2">
                  <span>Current Room Price</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#18181B] text-[#A1A1AA]">
                    BASE BAR
                  </span>
                </div>
                <div className="text-xl font-mono font-semibold text-[#D4D4D8]">
                  ₹{kpis.currentPrice.toLocaleString('en-IN')}
                </div>
                <div className="mt-1.5 text-[11px] font-mono text-[#71717A]">
                  Active PMS rate
                </div>
              </div>

              {/* KPI 5 (Highlighted) */}
              <div className="p-4 rounded-md bg-[#111927] border border-[#294068]">
                <div className="flex items-center justify-between text-xs text-[#93C5FD] mb-2">
                  <span>Recommended Price</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#1B2E4D] text-[#93C5FD]">
                    {kpis.upliftPct}
                  </span>
                </div>
                <div className="text-xl font-mono font-bold text-[#FAFAFA]">
                  ₹{kpis.recommendedPrice.toLocaleString('en-IN')}
                </div>
                <div className="mt-1.5 text-[11px] font-mono text-[#60A5FA]">
                  Optimal yield target
                </div>
              </div>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Line Chart: 14-Day Pricing Trajectory */}
              <div className="lg:col-span-7 p-4 sm:p-5 rounded-md bg-[#111114] border border-[#27272A]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-sm font-medium text-[#FAFAFA]">
                      Dynamic Pricing Trajectory ({scenario.horizon})
                    </h3>
                    <p className="text-xs text-[#A1A1AA]">
                      Current BAR vs. Recommended Dynamic Rate & CompSet Median (INR)
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] font-mono">
                    <span className="flex items-center gap-1.5 text-[#93C5FD]">
                      <span className="w-2.5 h-0.5 bg-[#3B82F6]" /> Recommended
                    </span>
                    <span className="flex items-center gap-1.5 text-[#A1A1AA]">
                      <span className="w-2.5 h-0.5 bg-[#71717A]" /> Current
                    </span>
                    <span className="flex items-center gap-1.5 text-[#38BDF8]">
                      <span className="w-2.5 h-0.5 bg-[#0EA5E9]" /> CompAvg
                    </span>
                  </div>
                </div>

                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={scenario.trendData}
                      margin={{ top: 8, right: 12, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#222226" vertical={false} />
                      <XAxis
                        dataKey="day"
                        stroke="#71717A"
                        fontSize={11}
                        tickLine={false}
                        axisLine={{ stroke: '#27272A' }}
                      />
                      <YAxis
                        stroke="#71717A"
                        fontSize={11}
                        tickLine={false}
                        axisLine={false}
                        domain={['auto', 'auto']}
                        tickFormatter={(val) => `₹${(val / 1000).toFixed(1)}k`}
                      />
                      <Tooltip content={<CustomChartTooltip />} />
                      <Line
                        type="monotone"
                        dataKey="recommended"
                        name="Recommended Rate"
                        stroke="#3B82F6"
                        strokeWidth={2.2}
                        dot={{ r: 2.5, fill: '#3B82F6' }}
                        activeDot={{ r: 5 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="competitorAvg"
                        name="Competitor Avg"
                        stroke="#0EA5E9"
                        strokeWidth={1.6}
                        strokeDasharray="4 4"
                        dot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="current"
                        name="Current Rate"
                        stroke="#71717A"
                        strokeWidth={1.6}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Bar Chart: Competitor Rate Benchmarking */}
              <div className="lg:col-span-5 p-4 sm:p-5 rounded-md bg-[#111114] border border-[#27272A]">
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-[#FAFAFA]">
                    Competitor Market Positioning
                  </h3>
                  <p className="text-xs text-[#A1A1AA]">
                    Rate benchmarking across local competitive set (INR)
                  </p>
                </div>

                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={scenario.competitors}
                      layout="vertical"
                      margin={{ top: 4, right: 18, left: 12, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#222226" horizontal={false} />
                      <XAxis
                        type="number"
                        stroke="#71717A"
                        fontSize={11}
                        tickLine={false}
                        axisLine={{ stroke: '#27272A' }}
                        tickFormatter={(val) => `₹${(val / 1000).toFixed(1)}k`}
                      />
                      <YAxis
                        type="category"
                        dataKey="name"
                        stroke="#A1A1AA"
                        fontSize={11}
                        width={102}
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip content={<CustomChartTooltip />} />
                      <Bar
                        dataKey="rate"
                        name="Room Rate"
                        radius={[0, 4, 4, 0]}
                        barSize={18}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Pricing Explainability Engine Log */}
            <div className="p-4 rounded-md bg-[#09090B] border border-[#27272A]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#60A5FA] mb-2.5">
                <ShieldCheck className="w-4 h-4 text-[#3B82F6]" />
                <span>RECOMMENDATION EXPLAINABILITY TRACE · RULE + ML SIGNAL</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {scenario.rationale.map((reason, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded bg-[#111114] border border-[#222226] text-xs text-[#D4D4D8] leading-relaxed"
                  >
                    <span className="font-mono text-[#3B82F6] font-semibold">
                      0{idx + 1}
                    </span>
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Resume Preview & Download Modal (Print / Download clean formatted resume)
 */
const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrintResume = () => {
    window.print();
  };

  const handleDownloadTextResume = () => {
    const resumeContent = `ASHISH YADAV
Data Engineering & AI Developer
Target Role: Junior Data Engineering & Intelligence Engineer (ZettaRMS.ai, Navi Mumbai)
Email: ${PORTFOLIO_DATA.profile.email}
GitHub: ${PORTFOLIO_DATA.profile.socials.github}
LinkedIn: ${PORTFOLIO_DATA.profile.socials.linkedin}
LeetCode: ${PORTFOLIO_DATA.profile.socials.leetcode}
TakeUForward: ${PORTFOLIO_DATA.profile.socials.takeuforward}

EDUCATION
- M.Tech in Computer Science and Engineering | ABV-IIITM Gwalior (2025 - 2027)
- B.Tech in Computer Science and Engineering | UIET, MDU Rohtak (2021 - 2025)
- Senior Secondary (Class XII) — 93.4% | Rawal Convent School (2021) | Physics, Chemistry, Maths
- Secondary School (Class X) — 94.6% | Rawal Convent School (2019)

EXPERIENCE
Full-Stack Web Development Intern | Indian Institute of Technology Jammu (IIT Jammu)
June 2026 - August 2026 (Summer School '26 · Conducted in collaboration with I3C – IIT Jammu and Techible)
- Engineered modular, reusable React.js components and responsive frontend interfaces.
- Developed backend REST APIs with Node.js and Express.js using clean controller-service architecture.
- Designed MongoDB schemas and implemented JWT-based authentication & route protection.
- Verified API contracts via Postman and Thunder Client; managed version control with Git and GitHub.

TECHNICAL SKILLS
- Programming: Python, SQL, JavaScript (ES6+), C++
- Data Engineering: Pandas, NumPy, Data Processing, ETL Fundamentals, Data Validation, Web Scraping (Scrapy, BeautifulSoup)
- AI & Machine Learning: Scikit-learn, Decision Trees, SVM, Machine Learning Fundamentals, LLM Fundamentals (Learning)
- Backend & Databases: Flask, Node.js, Express.js, REST APIs, MongoDB, MySQL, Mongoose, Socket.IO, Redis
- Frontend & Tools: React.js, Tailwind CSS, HTML5, CSS3, Git, GitHub, Postman, Thunder Client

PROJECTS
1. Hotel Intelligence & Dynamic Pricing System (Full Prototype — In Progress) - Python, Pandas, NumPy, Scrapy, Scikit-learn, Flask, MongoDB, React
2. QueueIT — Multi-Tenant Queue Management System (Completed) - React.js, Node.js, Express.js, MongoDB, JWT, Socket.IO, Redis
3. Student Management System (Completed) - React.js, Node.js, Express.js, MongoDB, SQL, REST APIs
`;
    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ashish_Yadav_Data_Engineering_AI_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4">
      <div className="w-full max-w-3xl max-h-[90vh] flex flex-col rounded-lg border border-[#27272A] bg-[#0D0D10] shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#27272A] bg-[#111114]">
          <div className="flex items-center gap-2 text-sm font-medium text-[#FAFAFA]">
            <FileText className="w-4 h-4 text-[#3B82F6]" />
            <span>Curriculum Vitae · Ashish Yadav</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrintResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium bg-[#18181B] hover:bg-[#27272A] text-[#E4E4E7] border border-[#27272A] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              type="button"
              onClick={handleDownloadTextResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium bg-[#2563EB] hover:bg-[#1D4ED8] text-white transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .TXT</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded text-[#A1A1AA] hover:text-white hover:bg-[#18181B] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Sheet */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#D4D4D8] leading-relaxed">
          {/* Resume Modal Header */}
          <div className="border-b border-[#27272A] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-[#FAFAFA]">Ashish Yadav</h3>
              <p className="text-[#60A5FA] font-medium">
                Data Engineering & AI Developer
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs font-mono text-[#A1A1AA]">
                <a
                  href={PORTFOLIO_DATA.profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#93C5FD] underline decoration-[#27272A] underline-offset-2"
                >
                  github.com/Ashish18-01
                </a>
                <span>·</span>
                <a
                  href={PORTFOLIO_DATA.profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#93C5FD] underline decoration-[#27272A] underline-offset-2"
                >
                  linkedin.com/in/ashish-yadav-07504321b
                </a>
                <span>·</span>
                <a
                  href={PORTFOLIO_DATA.profile.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#93C5FD] underline decoration-[#27272A] underline-offset-2"
                >
                  leetcode.com/u/ashish18yadav
                </a>
              </div>
            </div>
            <div className="text-xs font-mono text-[#A1A1AA] sm:text-right space-y-0.5">
              <div>{PORTFOLIO_DATA.profile.email}</div>
              <div>ABV-IIITM Gwalior · M.Tech CSE</div>
            </div>
          </div>

          {/* Experience in Resume */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#60A5FA] mb-2">
              Experience
            </h4>
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between font-medium text-[#FAFAFA]">
                <span>
                  {PORTFOLIO_DATA.experience.role} · {PORTFOLIO_DATA.experience.organization}
                </span>
                <span className="font-mono text-xs text-[#A1A1AA]">
                  {PORTFOLIO_DATA.experience.duration}
                </span>
              </div>
              <p className="text-xs text-[#A1A1AA] italic mb-1.5">
                {PORTFOLIO_DATA.experience.cohort} · {PORTFOLIO_DATA.experience.collaboration}
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-[#D4D4D8]">
                {PORTFOLIO_DATA.experience.pillars.map((pillar, idx) => (
                  <li key={idx}>
                    <span className="font-medium text-[#FAFAFA]">{pillar.title}:</span>{' '}
                    {pillar.detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education in Resume (Percentage placed inline right near Class title) */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#60A5FA] mb-2">
              Education
            </h4>
            <div className="space-y-2">
              {PORTFOLIO_DATA.education.map((edu, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-[#FAFAFA]">{edu.degree}</span>
                    {edu.percentage && (
                      <span className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded bg-[#142038] text-[#93C5FD] border border-[#263C66]">
                        {edu.percentage}
                      </span>
                    )}
                    <span className="text-[#A1A1AA]">— {edu.institution}</span>
                  </div>
                  <span className="font-mono text-xs text-[#A1A1AA] shrink-0">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills in Resume */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#60A5FA] mb-2">
              Core Technical Stack
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {PORTFOLIO_DATA.skills.map((group, idx) => (
                <div key={idx} className="p-2.5 rounded bg-[#111114] border border-[#27272A]">
                  <span className="font-semibold text-[#FAFAFA]">{group.category}: </span>
                  <span className="text-[#A1A1AA]">
                    {group.items.map((item) => item.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects in Resume */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#60A5FA] mb-2">
              Key Engineering Projects
            </h4>
            <div className="space-y-2.5">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-[#FAFAFA]">{proj.title}</span>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 bg-[#18181B] text-[#93C5FD] border border-[#27272A] rounded">
                      {proj.status}
                    </span>
                  </div>
                  <p className="text-[#A1A1AA] mt-0.5">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * ============================================================================
 * MAIN APPLICATION COMPONENT
 * ============================================================================
 */
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Dashboard', href: '#dashboard', id: 'dashboard' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const renderSkillIcon = (type) => {
    switch (type) {
      case 'code':
        return <Code2 className="w-4 h-4 text-[#3B82F6]" />;
      case 'database':
        return <Database className="w-4 h-4 text-[#3B82F6]" />;
      case 'cpu':
        return <Cpu className="w-4 h-4 text-[#3B82F6]" />;
      case 'server':
        return <Server className="w-4 h-4 text-[#3B82F6]" />;
      case 'layers':
        return <Layers className="w-4 h-4 text-[#3B82F6]" />;
      default:
        return <Terminal className="w-4 h-4 text-[#3B82F6]" />;
    }
  };

  const featuredProject = PORTFOLIO_DATA.projects.find((p) => p.featured);
  const standardProjects = PORTFOLIO_DATA.projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA] font-sans antialiased selection:bg-[#2563EB]/30 selection:text-white scroll-smooth">
      {/* =====================================================================
          A. STICKY NAVIGATION BAR
      ===================================================================== */}
      <header className="sticky top-0 z-40 border-b border-[#1F1F23] bg-[#09090B]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand / Monogram */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-md bg-[#111114] border border-[#27272A] flex items-center justify-center font-mono text-xs font-bold text-[#60A5FA] group-hover:border-[#3B82F6] transition-colors">
              {PORTFOLIO_DATA.profile.monogram}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-[#FAFAFA]">
                {PORTFOLIO_DATA.profile.name}
              </span>
              <span className="text-[10px] font-mono text-[#71717A] hidden sm:block">
                Data Eng & AI Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary Navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-[#FAFAFA] bg-[#18181B]'
                    : 'text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#111114]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Resume Button + Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setResumeModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-medium bg-[#111114] hover:bg-[#18181B] text-[#FAFAFA] border border-[#27272A] transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>Resume</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="lg:hidden p-2 rounded-md text-[#A1A1AA] hover:text-white hover:bg-[#18181B] border border-[#27272A]"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#1F1F23] bg-[#0D0D10] px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-[#D4D4D8] hover:text-white hover:bg-[#18181B]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* ===================================================================
            B. HERO SECTION (WITH PROMINENT IIT JAMMU CREDENTIAL SPOTLIGHT)
        =================================================================== */}
        <section
          id="home"
          className="relative pt-14 pb-20 sm:pt-22 sm:pb-28 overflow-hidden"
        >
          {/* Subtle Architectural Grid Pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#18181B_1px,transparent_1px),linear-gradient(to_bottom,#18181B_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,#000_55%,transparent_100%)] opacity-50"
          />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Clickable IIT Jammu Internship Credential Badge */}
              <a
                href="#experience"
                className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full border border-[#253B63] bg-[#101827] hover:bg-[#142034] text-xs font-mono text-[#93C5FD] transition-colors mb-6 group"
              >
                <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                <span>
                  Full-Stack Web Development Intern ·{' '}
                  <strong className="font-semibold text-[#FAFAFA]">
                    Indian Institute of Technology Jammu
                  </strong>{' '}
                  · Summer &apos;26
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-[#60A5FA] group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Identity Line */}
              <div className="flex flex-wrap items-center gap-2.5 text-sm sm:text-base font-mono text-[#A1A1AA] mb-3">
                <span className="text-[#FAFAFA] font-semibold">
                  {PORTFOLIO_DATA.profile.name}
                </span>
                <span className="text-[#3F3F46]">/</span>
                <span className="text-[#60A5FA]">{PORTFOLIO_DATA.profile.role}</span>
              </div>

              {/* Primary Hero Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#FAFAFA] leading-[1.12]">
                {PORTFOLIO_DATA.profile.heroHeading}
              </h1>

              {/* Supporting Paragraph */}
              <p className="mt-5 text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl">
                {PORTFOLIO_DATA.profile.heroSubtext}
              </p>

              {/* Secondary Engineering Tagline */}
              <p className="mt-3 text-xs sm:text-sm font-mono text-[#71717A]">
                // {PORTFOLIO_DATA.profile.tagline}
              </p>

              {/* Primary & Secondary Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-sm transition-colors"
                >
                  <span>View Projects</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setResumeModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium bg-[#111114] hover:bg-[#18181B] text-[#FAFAFA] border border-[#27272A] transition-colors"
                >
                  <Download className="w-4 h-4 text-[#60A5FA]" />
                  <span>Download Resume</span>
                </button>

                <div className="flex items-center gap-2 pl-1">
                  <a
                    href={PORTFOLIO_DATA.profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile (Ashish18-01)"
                    title="GitHub · @Ashish18-01"
                    className="p-2.5 rounded-md bg-[#111114] hover:bg-[#18181B] text-[#A1A1AA] hover:text-[#FAFAFA] border border-[#27272A] transition-colors"
                  >
                    <GitBranch className="w-4 h-4" />
                  </a>
                  <a
                    href={PORTFOLIO_DATA.profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn · Ashish Yadav"
                    className="p-2.5 rounded-md bg-[#111114] hover:bg-[#18181B] text-[#A1A1AA] hover:text-[#FAFAFA] border border-[#27272A] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Compact Engineering Credentials Strip */}
              <div className="mt-12 pt-6 border-t border-[#1F1F23] grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                <a
                  href="#experience"
                  className="p-3 rounded-md bg-[#101622] border border-[#223557] hover:border-[#3B82F6] transition-colors group"
                >
                  <div className="text-[10px] font-mono uppercase text-[#60A5FA] flex items-center justify-between">
                    <span>Internship</span>
                    <ArrowUpRight className="w-3 h-3 opacity-75 group-hover:opacity-100" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#FAFAFA] mt-0.5">
                    IIT Jammu (MERN)
                  </div>
                </a>

                <div className="p-3 rounded-md bg-[#111114] border border-[#27272A]">
                  <div className="text-[10px] font-mono uppercase text-[#71717A]">
                    Postgraduate
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#E4E4E7] mt-0.5">
                    M.Tech CSE · ABV-IIITM
                  </div>
                </div>

                <div className="p-3 rounded-md bg-[#111114] border border-[#27272A]">
                  <div className="text-[10px] font-mono uppercase text-[#71717A]">
                    Data & AI Stack
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#E4E4E7] mt-0.5">
                    Python · Pandas · ML
                  </div>
                </div>

                <div className="p-3 rounded-md bg-[#111114] border border-[#27272A]">
                  <div className="text-[10px] font-mono uppercase text-[#71717A]">
                    Target Domain
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#E4E4E7] mt-0.5">
                    Data Eng & Pricing AI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            C. ABOUT SECTION
        =================================================================== */}
        <section className="py-20 border-t border-[#1F1F23]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              id="about"
              eyebrow="Engineering Profile"
              title="About Me"
              subtitle="Grounded computer science fundamentals paired with practical data pipeline, full-stack API, and applied machine learning development."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Narrative Bio */}
              <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                {PORTFOLIO_DATA.about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Three Core Pillars */}
              <div className="lg:col-span-5 space-y-3.5">
                {PORTFOLIO_DATA.about.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-[#111114] border border-[#27272A] hover:border-[#3F3F46] transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="p-1.5 rounded bg-[#141D2F] border border-[#243656]">
                        {renderSkillIcon(pillar.icon)}
                      </div>
                      <h3 className="text-sm font-semibold text-[#FAFAFA]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            F. DEDICATED IIT JAMMU EXPERIENCE SHOWCASE (PROMINENT PLACEMENT)
        =================================================================== */}
        <section className="py-20 border-t border-[#1F1F23] bg-[#0C0C0F]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              id="experience"
              eyebrow="Featured Engineering Experience"
              title="Indian Institute of Technology Jammu"
              subtitle="Hands-on full-stack software engineering internship building modular React frontends, Node/Express REST APIs, and authenticated MongoDB systems."
            />

            <div className="rounded-xl bg-[#111114] border border-[#27272A] overflow-hidden shadow-xl">
              {/* Top IIT Jammu Banner Header */}
              <div className="p-6 sm:p-8 bg-gradient-to-r from-[#111827] via-[#111114] to-[#111114] border-b border-[#27272A]">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-[#16233B] text-[#93C5FD] border border-[#28406B]">
                        <Briefcase className="w-3.5 h-3.5 text-[#3B82F6]" />
                        {PORTFOLIO_DATA.experience.organization}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-mono bg-[#18181B] text-[#D4D4D8] border border-[#27272A]">
                        {PORTFOLIO_DATA.experience.cohort}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold text-[#FAFAFA]">
                      {PORTFOLIO_DATA.experience.role}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#A1A1AA]">
                      {PORTFOLIO_DATA.experience.collaboration} · {PORTFOLIO_DATA.experience.location}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-[#09090B] text-[#FAFAFA] border border-[#27272A]">
                      {PORTFOLIO_DATA.experience.duration}
                    </span>
                    <span className="text-[11px] font-mono text-[#60A5FA]">
                      Full-Stack MERN & REST API Track
                    </span>
                  </div>
                </div>

                <p className="mt-5 text-sm text-[#D4D4D8] leading-relaxed max-w-4xl">
                  {PORTFOLIO_DATA.experience.overview}
                </p>
              </div>

              {/* Four Core Engineering Pillars Grid */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#60A5FA] mb-3.5">
                    Core Engineering Pillars & Technical Scope
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {PORTFOLIO_DATA.experience.pillars.map((pillar, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-lg bg-[#09090B] border border-[#222226] hover:border-[#2E4369] transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h4 className="text-sm font-semibold text-[#FAFAFA]">
                            {pillar.title}
                          </h4>
                          <span className="text-[11px] font-mono text-[#60A5FA]">
                            {pillar.subtitle}
                          </span>
                        </div>
                        <p className="text-xs text-[#A1A1AA] leading-relaxed">
                          {pillar.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Deliverables & Verified Tech Stack */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 border-t border-[#222226]">
                  <div className="lg:col-span-7 space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                      Engineering Deliverables & Workflow
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#D4D4D8]">
                      {PORTFOLIO_DATA.experience.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-2.5">
                      Technologies & Verification Tools
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {PORTFOLIO_DATA.experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded text-xs font-mono bg-[#141A26] text-[#93C5FD] border border-[#23334F]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            D. TECHNICAL SKILLS SECTION
        =================================================================== */}
        <section className="py-20 border-t border-[#1F1F23]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <SectionHeader
                id="skills"
                eyebrow="Technical Stack"
                title="Capabilities & Tools"
                subtitle="Structured across programming, data engineering, applied machine learning, backend APIs, and databases—distinguishing practical implementation from active learning."
              />

              <div className="flex items-center gap-3 mb-10 text-xs font-mono">
                <span className="inline-flex items-center gap-1.5 text-[#D4D4D8]">
                  <span className="w-2 h-2 rounded-xs bg-[#3B82F6]" />
                  Practical / Demonstrated
                </span>
                <span className="inline-flex items-center gap-1.5 text-[#A1A1AA]">
                  <span className="w-2 h-2 rounded-xs border border-[#71717A]" />
                  Learning
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PORTFOLIO_DATA.skills.map((group) => (
                <div
                  key={group.category}
                  className="p-5 rounded-lg bg-[#111114] border border-[#27272A] hover:border-[#3F3F46] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-[#222226]">
                      <div className="p-1.5 rounded bg-[#141D2F] border border-[#243656]">
                        {renderSkillIcon(group.icon)}
                      </div>
                      <h3 className="text-sm font-semibold text-[#FAFAFA]">
                        {group.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => {
                        const isLearning = skill.level === 'Learning';
                        return (
                          <span
                            key={skill.name}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                              isLearning
                                ? 'bg-[#09090B] text-[#A1A1AA] border border-dashed border-[#3F3F46]'
                                : 'bg-[#18181B] text-[#E4E4E7] border border-[#27272A]'
                            }`}
                          >
                            <span>{skill.name}</span>
                            {isLearning && (
                              <span className="text-[10px] text-[#60A5FA]">
                                · learning
                              </span>
                            )}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            6. SPECIAL FEATURE — HOTEL INTELLIGENCE DASHBOARD
        =================================================================== */}
        <HotelIntelligenceDashboard />

        {/* ===================================================================
            E. FEATURED PROJECTS SECTION (3 FOCUSED PROJECTS)
        =================================================================== */}
        <section className="py-20 border-t border-[#1F1F23] bg-[#0C0C0F]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              id="projects"
              eyebrow="Selected Engineering Work"
              title="Featured Projects"
              subtitle="Hospitality revenue intelligence prototyping paired with completed full-stack distributed web applications."
            />

            <div className="space-y-6">
              {/* Full-Width Featured Project: Hotel Intelligence & Dynamic Pricing System */}
              {featuredProject && (
                <article className="rounded-xl bg-[#111114] border border-[#27272A] hover:border-[#364A70] transition-colors overflow-hidden">
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div>
                        <span className="text-xs font-mono text-[#60A5FA] block mb-1">
                          {featuredProject.domain}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-semibold text-[#FAFAFA] tracking-tight">
                          {featuredProject.title}
                        </h3>
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono bg-[#142038] text-[#93C5FD] border border-[#273E6B] shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                        {featuredProject.status}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed max-w-4xl">
                      {featuredProject.description}
                    </p>

                    {/* End-to-End Architecture Flow Diagram */}
                    <div className="p-4 rounded-lg bg-[#09090B] border border-[#222226]">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] mb-2.5">
                        End-to-End Pipeline & Pricing Architecture
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                        {featuredProject.pipelineNodes.map((node, idx) => (
                          <React.Fragment key={node}>
                            <span className="px-2.5 py-1.5 rounded bg-[#141821] border border-[#252D3D] text-[#E4E4E7]">
                              {node}
                            </span>
                            {idx < featuredProject.pipelineNodes.length - 1 && (
                              <span className="text-[#3B82F6] font-bold">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Key Engineering Capabilities */}
                    <div>
                      <div className="text-xs font-mono text-[#D4D4D8] mb-2.5">
                        Integrated System Capabilities:
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm text-[#A1A1AA]">
                        {featuredProject.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#3B82F6] mt-0.5">▪</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-6 sm:px-8 py-4 bg-[#09090B] border-t border-[#222226] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {featuredProject.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#141A26] text-[#93C5FD] border border-[#23334F]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0">
                      <a
                        href="#dashboard"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-[#182742] hover:bg-[#1F3254] text-[#93C5FD] border border-[#2C4778] transition-colors"
                      >
                        <BarChart3 className="w-3.5 h-3.5" />
                        <span>Inspect Dashboard Preview</span>
                      </a>

                      <span
                        title="Repository link will be attached upon public release"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-[#111114] text-[#71717A] border border-[#222226] cursor-default"
                      >
                        <GitBranch className="w-3.5 h-3.5" />
                        <span>Repo In Progress</span>
                      </span>
                    </div>
                  </div>
                </article>
              )}

              {/* Two-Column Grid for Completed Full-Stack Projects */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {standardProjects.map((project) => (
                  <article
                    key={project.id}
                    className="rounded-xl bg-[#111114] border border-[#27272A] hover:border-[#3F3F46] transition-colors flex flex-col justify-between overflow-hidden"
                  >
                    <div className="p-6 space-y-5">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <span className="text-[11px] font-mono text-[#71717A] block mb-1">
                            {project.domain}
                          </span>
                          <h3 className="text-lg font-semibold text-[#FAFAFA] tracking-tight">
                            {project.title}
                          </h3>
                        </div>

                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono bg-[#0F241D] text-[#6EE7B7] border border-[#1D4739]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                          {project.status}
                        </span>
                      </div>

                      <p className="text-sm text-[#A1A1AA] leading-relaxed">
                        {project.description}
                      </p>

                      {/* Architecture Strip */}
                      <div className="p-3 rounded-md bg-[#09090B] border border-[#222226]">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] mb-2">
                          System Architecture Flow
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                          {project.pipelineNodes.map((node, idx) => (
                            <React.Fragment key={node}>
                              <span className="px-2 py-1 rounded bg-[#141418] border border-[#27272A] text-[#D4D4D8]">
                                {node}
                              </span>
                              {idx < project.pipelineNodes.length - 1 && (
                                <span className="text-[#3B82F6]">→</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <div className="text-xs font-mono text-[#D4D4D8] mb-2">
                          Key Capabilities:
                        </div>
                        <ul className="space-y-1.5 text-xs text-[#A1A1AA]">
                          {project.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#3B82F6] mt-0.5">▪</span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 bg-[#09090B] border-t border-[#222226] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#18181B] text-[#D4D4D8] border border-[#27272A]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="shrink-0">
                        {project.repoUrl ? (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-mono bg-[#18181B] hover:bg-[#27272A] text-[#FAFAFA] border border-[#2E2E34] transition-colors"
                          >
                            <GitBranch className="w-3.5 h-3.5" />
                            <span>Source</span>
                          </a>
                        ) : (
                          <span
                            title="Attach GitHub URL when ready"
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-mono bg-[#111114] text-[#71717A] border border-[#222226] cursor-default"
                          >
                            <FolderGit2 className="w-3.5 h-3.5" />
                            <span>Code Ready</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            G. EDUCATION SECTION (PERCENTAGE PLACED INLINE RIGHT NEAR CLASS)
        =================================================================== */}
        <section className="py-20 border-t border-[#1F1F23]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              id="education"
              eyebrow="Academic Record"
              title="Education"
              subtitle="Postgraduate and undergraduate Computer Science degrees alongside strong higher-secondary and secondary academic performance."
            />

            <div className="relative pl-6 border-l border-[#27272A] space-y-5 max-w-4xl">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="relative p-5 sm:p-6 rounded-lg bg-[#111114] border border-[#27272A] hover:border-[#3F3F46] transition-colors"
                >
                  {/* Timeline Node */}
                  <span
                    className={`absolute -left-[31px] top-6 w-3 h-3 rounded-full border-2 ${
                      idx === 0
                        ? 'bg-[#3B82F6] border-[#09090B]'
                        : 'bg-[#27272A] border-[#52525B]'
                    }`}
                  />

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-[#60A5FA]">
                      {edu.period}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#18181B] text-[#A1A1AA] border border-[#27272A]">
                      {edu.status}
                    </span>
                  </div>

                  {/* Degree / Class Title with Percentage Badge Directly Inline Next to Class */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-base sm:text-lg font-semibold text-[#FAFAFA]">
                      {edu.degree}
                    </h3>
                    {edu.percentage && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-[#132038] text-[#93C5FD] border border-[#284270]">
                        <Award className="w-3.5 h-3.5 text-[#3B82F6]" />
                        {edu.percentage}
                      </span>
                    )}
                  </div>

                  <div className="flex items-start gap-1.5 mt-1.5 text-xs sm:text-sm text-[#D4D4D8]">
                    <GraduationCap className="w-4 h-4 text-[#71717A] shrink-0 mt-0.5" />
                    <span>{edu.institution}</span>
                  </div>

                  {edu.focus && (
                    <p className="mt-3 text-xs text-[#A1A1AA] leading-relaxed">
                      <span className="text-[#D4D4D8] font-medium">Subjects / Focus: </span>
                      {edu.focus}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            H. CONTACT SECTION
        =================================================================== */}
        <section className="py-20 border-t border-[#1F1F23] bg-[#0C0C0F]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              id="contact"
              eyebrow="Connect"
              title="Get in Touch"
              subtitle="Open to opportunities in Data Engineering, Revenue Intelligence, Applied ML, and Full-Stack Software Engineering."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Direct Email Card */}
              <div className="lg:col-span-5 p-6 rounded-lg bg-[#111114] border border-[#27272A] flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#60A5FA] mb-2">
                    <Mail className="w-4 h-4" />
                    <span>DIRECT EMAIL</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#FAFAFA]">
                    Reach out directly
                  </h3>
                  <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
                    For engineering opportunities, technical discussions, or project walkthroughs, feel free to send an email directly or copy my address below.
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between px-3.5 py-2.5 rounded-md bg-[#09090B] border border-[#27272A] font-mono text-xs text-[#E4E4E7]">
                    <span className="truncate">{PORTFOLIO_DATA.profile.email}</span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1 text-[#60A5FA] hover:text-[#93C5FD] ml-2 shrink-0"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#10B981]" />
                          <span className="text-[#10B981]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <a
                    href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=Opportunity%20for%20Ashish%20Yadav`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium bg-[#2563EB] hover:bg-[#1D4ED8] text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>

              {/* Coding & Professional Profiles Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={PORTFOLIO_DATA.profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-lg bg-[#111114] border border-[#27272A] hover:border-[#3B82F6]/60 transition-colors flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded bg-[#141D2F] border border-[#243656]">
                      <Linkedin className="w-4 h-4 text-[#3B82F6]" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#71717A] group-hover:text-[#FAFAFA] transition-colors" />
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-[#FAFAFA]">LinkedIn</h4>
                    <p className="text-[11px] font-mono text-[#60A5FA] mt-0.5 truncate">
                      linkedin.com/in/ashish-yadav-07504321b
                    </p>
                    <p className="text-xs text-[#A1A1AA] mt-1.5">
                      Academic milestones, IIT Jammu internship & professional network
                    </p>
                  </div>
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-lg bg-[#111114] border border-[#27272A] hover:border-[#3B82F6]/60 transition-colors flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded bg-[#141D2F] border border-[#243656]">
                      <Code2 className="w-4 h-4 text-[#3B82F6]" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#71717A] group-hover:text-[#FAFAFA] transition-colors" />
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-[#FAFAFA]">LeetCode</h4>
                    <p className="text-[11px] font-mono text-[#60A5FA] mt-0.5 truncate">
                      leetcode.com/u/ashish18yadav
                    </p>
                    <p className="text-xs text-[#A1A1AA] mt-1.5">
                      Data structures, algorithmic problem solving & complexity optimization
                    </p>
                  </div>
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.socials.takeuforward}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-lg bg-[#111114] border border-[#27272A] hover:border-[#3B82F6]/60 transition-colors flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded bg-[#141D2F] border border-[#243656]">
                      <BookOpen className="w-4 h-4 text-[#3B82F6]" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#71717A] group-hover:text-[#FAFAFA] transition-colors" />
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-[#FAFAFA]">
                      TakeUForward
                    </h4>
                    <p className="text-[11px] font-mono text-[#60A5FA] mt-0.5 truncate">
                      takeuforward.org/profile/ASHISH018YADAV
                    </p>
                    <p className="text-xs text-[#A1A1AA] mt-1.5">
                      Structured DSA sheet progress & core computer science practice
                    </p>
                  </div>
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-lg bg-[#111114] border border-[#27272A] hover:border-[#3B82F6]/60 transition-colors flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded bg-[#141D2F] border border-[#243656]">
                      <GitBranch className="w-4 h-4 text-[#3B82F6]" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#71717A] group-hover:text-[#FAFAFA] transition-colors" />
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-[#FAFAFA]">GitHub</h4>
                    <p className="text-[11px] font-mono text-[#60A5FA] mt-0.5 truncate">
                      github.com/Ashish18-01
                    </p>
                    <p className="text-xs text-[#A1A1AA] mt-1.5">
                      Data pipelines, Python prototypes, API services & full-stack codebases
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          FOOTER
      ===================================================================== */}
      <footer className="border-t border-[#1F1F23] bg-[#09090B] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A] font-mono">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.profile.name} · Engineered with React, Tailwind CSS & Recharts
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PORTFOLIO_DATA.profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4D4D8] transition-colors"
            >
              GitHub
            </a>
            <a
              href={PORTFOLIO_DATA.profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4D4D8] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PORTFOLIO_DATA.profile.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4D4D8] transition-colors"
            >
              LeetCode
            </a>
            <a
              href={PORTFOLIO_DATA.profile.socials.takeuforward}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4D4D8] transition-colors"
            >
              TakeUForward
            </a>
            <span className="text-[#27272A]">|</span>
            <a href="#home" className="hover:text-[#D4D4D8] transition-colors">
              Top ↑
            </a>
            <button
              type="button"
              onClick={() => setResumeModalOpen(true)}
              className="hover:text-[#D4D4D8] transition-colors"
            >
              Resume
            </button>
          </div>
        </div>
      </footer>

      {/* Interactive Resume Viewer & Download Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}