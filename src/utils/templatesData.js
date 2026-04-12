import spaResume01Thumbnail from '../templates/spa-resume-01/thumbnail.jpg'
import { spaResume01MinimalData, spaResume01SampleData } from '../templates/spa-resume-01/sampleData'
import modernResume01Thumbnail from '../templates/modern-resume-01/thumbnail.jpg'
import { modernResume01SampleData } from '../templates/modern-resume-01/sampleData'
import creativeResume01Thumbnail from '../templates/creative-resume-01/thumbnail.jpg'
import { creativeResume01SampleData } from '../templates/creative-resume-01/sampleData'
import technicalResume01Thumbnail from '../templates/technical-resume-01/thumbnail.jpg'
import { technicalResume01SampleData } from '../templates/technical-resume-01/sampleData'
import studentResume01Thumbnail from '../templates/student-resume-01/thumbnail.jpg'
import { studentResume01SampleData } from '../templates/student-resume-01/sampleData'
import businessResume01Thumbnail from '../templates/business-resume-01/thumbnail.jpg'
import { businessResume01SampleData } from '../templates/business-resume-01/sampleData'
import portfolioSpa01Thumbnail from '../templates/portfolio-spa-01/thumbnail.jpg'
import { portfolioSpa01SampleData } from '../templates/portfolio-spa-01/sampleData'
import spaResumeThumbnail from '../templates/spa-resume/thumbnail.jpg'
import spaPortfolioThumbnail from '../templates/spa-portfolio/thumbnail.jpg'
import sapProResumeThumbnail from '../templates/sap-pro-resume/thumbnail.jpg'
import sapShowcasePortfolioThumbnail from '../templates/sap-showcase-portfolio/thumbnail.jpg'
import modernCareerKitThumbnail from '../templates/modern-career-kit/thumbnail.jpg'
import { lawyerPortfolio01SampleData } from '../templates/lawyer-portfolio-01/sampleData'
import realEstateAgent01Thumbnail from '../templates/real-estate-agent-01/thumbnail.svg'
import { realEstateAgent01SampleData } from '../templates/real-estate-agent-01/sampleData'

export const templates = [
  {
    id: 'modern-resume-01',
    title: 'Modern Resume - Template 01',
    category: 'Modern Resume Templates',
    filterCategory: 'Modern',
    tags: ['Modern', 'Resume', 'Minimal', 'Professional'],
    shortDescription: 'Clean minimal resume template with strong typography and balanced spacing for professional use.',
    thumbnail: modernResume01Thumbnail,
    layout: 'modernResume01',
    sampleData: modernResume01SampleData,
    popularity: 95,
    createdAt: '2026-04-12',
    recommended: true,
  },
  {
    id: 'creative-resume-01',
    title: 'Creative Resume - Template 01',
    category: 'Creative Resume Templates',
    filterCategory: 'Creative',
    tags: ['Creative', 'Resume', 'Visual', 'Design'],
    shortDescription: 'Visual resume layout with color blocks and expressive structure for creative professionals.',
    thumbnail: creativeResume01Thumbnail,
    layout: 'creativeResume01',
    sampleData: creativeResume01SampleData,
    popularity: 89,
    createdAt: '2026-04-12',
    recommended: true,
  },
  {
    id: 'technical-resume-01',
    title: 'Technical Resume - Template 01',
    category: 'Technical Resume Templates',
    filterCategory: 'Technical',
    tags: ['Technical', 'Resume', 'Engineering', 'Grid'],
    shortDescription: 'Structured grid-style resume with dedicated sections for core skills, tools, and technical projects.',
    thumbnail: technicalResume01Thumbnail,
    layout: 'technicalResume01',
    sampleData: technicalResume01SampleData,
    popularity: 98,
    createdAt: '2026-04-12',
    recommended: true,
  },
  {
    id: 'student-resume-01',
    title: 'Student Resume - Template 01',
    category: 'Student Resume Templates',
    filterCategory: 'Student',
    tags: ['Student', 'Resume', 'Entry Level', 'Recruiter Friendly'],
    shortDescription: 'Simple and readable student-focused resume emphasizing education, projects, and achievements.',
    thumbnail: studentResume01Thumbnail,
    layout: 'studentResume01',
    sampleData: studentResume01SampleData,
    popularity: 91,
    createdAt: '2026-04-12',
    recommended: true,
  },
  {
    id: 'business-resume-01',
    title: 'Business Resume - Template 01',
    category: 'Business Professional Templates',
    filterCategory: 'Business',
    tags: ['Business', 'Professional', 'Corporate', 'Conservative'],
    shortDescription: 'Corporate resume with conservative visual language ideal for finance, HR, and admin roles.',
    thumbnail: businessResume01Thumbnail,
    layout: 'businessResume01',
    sampleData: businessResume01SampleData,
    popularity: 86,
    createdAt: '2026-04-12',
    recommended: false,
  },
  {
    id: 'portfolio-spa-01',
    title: 'Portfolio SPA - Template 01',
    category: 'Portfolio SPA Templates',
    filterCategory: 'Portfolio',
    tags: ['Portfolio', 'SPA', 'Modern', 'Showcase'],
    shortDescription: 'Single-page portfolio template with smooth scrolling sections for skills, projects, and contact.',
    thumbnail: portfolioSpa01Thumbnail,
    layout: 'portfolioSpa01',
    sampleData: portfolioSpa01SampleData,
    popularity: 93,
    createdAt: '2026-04-12',
    recommended: true,
  },
  {
    id: 'spa-resume-01',
    title: 'SPA Resume - Template 01',
    category: 'SPA Resume',
    tags: ['SPA', 'Resume', 'Professional', 'Student Friendly'],
    shortDescription: 'A standalone single-page resume template designed for polished online CV sharing.',
    thumbnail: spaResume01Thumbnail,
    layout: 'spaResume01',
    sampleData: spaResume01SampleData,
    minimalData: spaResume01MinimalData,
  },
  {
    id: 'spa-resume',
    title: 'SPA Modern Resume',
    category: 'SPA Resume',
    tags: ['SPA', 'Resume', 'Modern', 'Professional'],
    shortDescription: 'Interactive single-page resume with smooth scroll navigation and modern gradient design.',
    thumbnail: spaResumeThumbnail,
    layout: 'spaResume',
    sampleData: {
      name: 'Anika Sharma',
      role: 'Senior SAP FICO Consultant',
      summary:
        'Enterprise-focused consultant with 8+ years transforming financial operations through SAP implementations, with a track record of leading migrations affecting $500M+ annual revenue streams.',
      skills: ['S/4HANA', 'FICO', 'Financial Transformation', 'SAP BTP', 'Integration', 'Process Optimization', 'Leadership'],
      achievements: [
        'Led S/4HANA migration for 14-country rollout reducing month-end close by 28%.',
        'Designed and implemented FICO controls reducing audit findings by 95%.',
        'Mentored 12+ consultants across 5 enterprise implementations.',
      ],
      experience: [
        { company: 'Nexa Systems', period: '2021 - Present', title: 'Senior SAP Consultant' },
        { company: 'BlueArc Global', period: '2018 - 2021', title: 'SAP Functional Analyst' },
        { company: 'Deloitte Consulting', period: '2015 - 2018', title: 'Associate Consultant' },
      ],
    },
    minimalData: {
      name: 'Alex Johnson',
      role: 'Consultant',
      summary: 'Experienced professional with expertise in enterprise systems and business process optimization.',
      skills: ['SAP', 'Finance', 'Consulting', 'Process Optimization'],
      achievements: [
        'Delivered successful enterprise implementations.',
        'Led cross-functional teams to successful project completion.',
      ],
      experience: [
        { company: 'Tech Corp', period: '2022 - Present', title: 'Senior Consultant' },
        { company: 'Previous Firm', period: '2020 - 2022', title: 'Consultant' },
      ],
    },
  },
  {
    id: 'spa-portfolio',
    title: 'SPA Modern Portfolio',
    category: 'SPA Portfolio',
    tags: ['SPA', 'Portfolio', 'Modern', 'Project Showcase'],
    shortDescription: 'Elegant portfolio template showcasing featured projects, tech stack, and professional achievements.',
    thumbnail: spaPortfolioThumbnail,
    layout: 'spaPortfolio',
    sampleData: {
      name: 'Rohan Iyer',
      role: 'Full-Stack Software Architect',
      intro: 'I design and build scalable digital systems connecting frontend user experiences with robust backend infrastructure, delivering measurable business outcomes.',
      projects: [
        {
          title: 'Enterprise SPA Platform',
          impact: 'Built React + Node platform handling 50k+ concurrent users with 99.9% uptime, improving customer onboarding by 40%.',
        },
        {
          title: 'Real-Time Analytics Dashboard',
          impact: 'Architected streaming pipeline processing 10M+ events daily, reducing data insight latency from 24h to real-time.',
        },
        {
          title: 'Microservices Migration',
          impact: 'Led infrastructure redesign from monolith to microservices, improving deployment frequency from quarterly to daily.',
        },
      ],
      stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL'],
    },
    minimalData: {
      name: 'Jordan Smith',
      role: 'Software Developer',
      intro: 'Full-stack developer passionate about building modern web applications and solving complex technical challenges.',
      projects: [
        {
          title: 'Web Application',
          impact: 'Developed responsive web application used by 5000+ users.',
        },
        {
          title: 'API Integration',
          impact: 'Designed and implemented REST API integration improving data processing speed by 35%.',
        },
      ],
      stack: ['React', 'Node.js', 'JavaScript', 'PostgreSQL', 'AWS'],
    },
  },
  {
    id: 'sap-pro-resume',
    title: 'SAP Professional Resume',
    category: 'Resume',
    tags: ['SAP', 'Resume', 'Professional', 'Minimal'],
    shortDescription: 'Enterprise-ready resume template for SAP consultants and analysts.',
    thumbnail: sapProResumeThumbnail,
    layout: 'sapResume',
    sampleData: {
      name: 'Anika Sharma',
      role: 'SAP FICO Consultant',
      summary:
        'SAP consultant with 7+ years in finance transformation, S/4HANA migration, and process optimization for global operations.',
      skills: ['S/4HANA', 'FICO', 'SAP BTP', 'Integration', 'Business Process Mapping'],
      achievements: [
        'Led FICO migration for 14-country rollout with 99.6% reconciliation accuracy.',
        'Reduced month-end close cycle by 28% using automation and controls redesign.',
      ],
      experience: [
        { company: 'Nexa Systems', period: '2021 - Present', title: 'Senior SAP Consultant' },
        { company: 'BlueArc Global', period: '2018 - 2021', title: 'SAP Functional Analyst' },
      ],
    },
    minimalData: {
      name: 'Mark Thompson',
      role: 'SAP Analyst',
      summary: 'SAP professional with strong technical and analytical skills.',
      skills: ['SAP', 'Finance', 'Process Mapping'],
      achievements: [
        'Successfully implemented SAP modules in multinational environment.',
        'Optimized financial processes reducing cycle time.',
      ],
      experience: [
        { company: 'ABC Solutions', period: '2021 - Present', title: 'SAP Analyst' },
        { company: 'XYZ Corp', period: '2019 - 2021', title: 'Junior Analyst' },
      ],
    },
  },
  {
    id: 'sap-showcase-portfolio',
    title: 'SAP Portfolio Showcase',
    category: 'Portfolio',
    tags: ['SAP', 'Portfolio', 'Case Study', 'Modern'],
    shortDescription: 'Case-study focused portfolio template for SAP implementation experts.',
    thumbnail: sapShowcasePortfolioThumbnail,
    layout: 'sapPortfolio',
    sampleData: {
      name: 'Rohan Iyer',
      role: 'SAP Solution Architect',
      intro:
        'I architect scalable SAP ecosystems connecting finance, supply chain, and analytics with practical implementation outcomes.',
      projects: [
        {
          title: 'S/4HANA Greenfield Implementation',
          impact: 'Unified data model across 5 business units and improved reporting latency by 40%.',
        },
        {
          title: 'SAP BTP Integration Hub',
          impact: 'Connected 9 internal systems with standardized APIs, reducing incident tickets by 35%.',
        },
      ],
      stack: ['SAP S/4HANA', 'SAP BTP', 'Fiori', 'ABAP', 'Power BI'],
    },
    minimalData: {
      name: 'Sarah Patel',
      role: 'SAP Architect',
      intro: 'SAP architect with expertise in enterprise system design and implementation.',
      projects: [
        {
          title: 'Enterprise System Implementation',
          impact: 'Led successful SAP implementation for global enterprise.',
        },
        {
          title: 'System Integration',
          impact: 'Integrated legacy systems with modern enterprise solutions.',
        },
      ],
      stack: ['SAP S/4HANA', 'Fiori', 'ABAP'],
    },
  },
  {
    id: 'modern-career-kit',
    title: 'Modern Resume + Portfolio Kit',
    category: 'Resume & Portfolio',
    tags: ['Modern', 'Resume', 'Portfolio', 'Minimal'],
    shortDescription: 'A versatile modern template for tech professionals and creators.',
    thumbnail: modernCareerKitThumbnail,
    layout: 'modernCombo',
    sampleData: {
      name: 'Maya Chen',
      role: 'Product Engineer',
      bio: 'Building user-first digital products that blend practical UX with robust frontend engineering.',
      highlights: ['12 shipped product features', '3 SaaS launches', 'Mentor for early-career developers'],
      work: [
        { name: 'Creator CRM', details: 'Designed and built dashboard flows for 8k monthly active users.' },
        { name: 'Hiring Hub', details: 'Launched candidate review workflow that cut screening time by 22%.' },
      ],
      skills: ['React', 'TypeScript', 'Design Systems', 'API Design', 'Growth UX'],
    },
    minimalData: {
      name: 'Casey Wang',
      role: 'Developer',
      bio: 'Passionate about creating elegant solutions to technical problems.',
      highlights: ['5 projects shipped', 'Open source contributor', 'Technical blog writer'],
      work: [
        { name: 'Project One', details: 'Built and maintained production application.' },
        { name: 'Project Two', details: 'Implemented performance optimizations.' },
      ],
      skills: ['React', 'JavaScript', 'Node.js'],
    },
  },
  {
    id: 'lawyer-portfolio-01',
    title: 'Lawyer Portfolio — Template 01',
    category: 'Legal & Professional',
    filterCategory: 'Portfolio',
    tags: ['Lawyer', 'Portfolio', 'Legal', 'Professional', 'SPA'],
    shortDescription: 'Elegant single-page attorney portfolio with hero, practice areas, case studies, testimonials, awards, and contact form.',
    thumbnail: 'https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    layout: 'lawyerPortfolio01',
    sampleData: lawyerPortfolio01SampleData,
    popularity: 88,
    createdAt: '2026-04-12',
    recommended: true,
  },
  {
    id: 'real-estate-agent-01',
    title: 'Real Estate Agent — Template 01',
    category: 'Real Estate & Agents',
    filterCategory: 'Portfolio',
    tags: ['Real Estate', 'Agent', 'Listings', 'SPA'],
    shortDescription: 'Clean, modern real-estate agent template with featured listings and contact flow.',
    thumbnail: realEstateAgent01Thumbnail,
    layout: 'realEstateAgent01',
    sampleData: realEstateAgent01SampleData,
    popularity: 85,
    createdAt: '2026-04-12',
    recommended: true,
  },
]

export const templateFilters = ['All', 'Modern', 'Creative', 'Technical', 'Student', 'Portfolio', 'Business']

export const templateSortOptions = ['Most Popular', 'Newest', 'Recommended']

export function getTemplateById(templateId) {
  return templates.find((template) => template.id === templateId)
}
