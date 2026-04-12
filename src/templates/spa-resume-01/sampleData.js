// Replace this object with user profile data from forms or API in future releases.
// For scale, this data can be loaded from a JSON manifest, external GitHub repo, or CDN endpoint.
export const spaResume01SampleData = {
  name: 'Nina Patel',
  title: 'Computer Science Graduate | Frontend Developer',
  summary:
    'I build responsive user experiences with a strong focus on accessibility, performance, and clean component architecture.',
  about:
    'I am a Toronto-based developer transitioning from student projects to production-ready products. I enjoy converting complex ideas into elegant interfaces and collaborating with teams to ship reliable digital experiences.',
  skills: [
    { label: 'React', icon: 'code' },
    { label: 'TypeScript', icon: 'code' },
    { label: 'UI Engineering', icon: 'brush' },
    { label: 'API Integration', icon: 'hub' },
    { label: 'Testing', icon: 'verified' },
    { label: 'Accessibility', icon: 'accessible' },
  ],
  experience: [
    {
      role: 'Frontend Developer Intern',
      company: 'Northbridge Labs',
      period: 'May 2025 - Aug 2025',
      points: [
        'Built reusable React components that reduced feature development time by 25%.',
        'Improved dashboard performance by optimizing data-fetch rendering patterns.',
        'Collaborated with design and QA to improve keyboard navigation and color contrast.',
      ],
    },
    {
      role: 'Freelance Web Developer',
      company: 'Independent',
      period: '2024 - Present',
      points: [
        'Delivered portfolio and landing page websites for local businesses and students.',
        'Implemented responsive layouts with Lighthouse performance scores above 90.',
      ],
    },
  ],
  education: [
    {
      program: 'B.Sc. Computer Science',
      school: 'Toronto Metropolitan University',
      period: '2021 - 2025',
      notes: 'Relevant coursework: Software Engineering, Human-Computer Interaction, Databases',
    },
  ],
  projects: [
    {
      name: 'Campus Connect',
      summary: 'A student collaboration platform for project matching and scheduling.',
      stack: ['React', 'Node.js', 'PostgreSQL'],
      link: '#',
    },
    {
      name: 'Interview Prep Tracker',
      summary: 'A progress dashboard for coding goals, mock interviews, and revision notes.',
      stack: ['React', 'Firebase', 'Material UI'],
      link: '#',
    },
  ],
  contact: {
    email: 'nina.patel@example.com',
    location: 'Greater Toronto Area, Canada',
    linkedin: 'linkedin.com/in/ninapatel',
  },
}

export const spaResume01MinimalData = {
  name: 'Nina Patel',
  title: 'Frontend Developer',
  summary: 'Entry-level developer focused on modern UI engineering.',
  about: 'Developer based in Toronto, passionate about clean and accessible interfaces.',
  skills: [
    { label: 'React', icon: 'code' },
    { label: 'JavaScript', icon: 'code' },
    { label: 'Responsive Design', icon: 'brush' },
  ],
  experience: [
    {
      role: 'Frontend Intern',
      company: 'Northbridge Labs',
      period: '2025',
      points: ['Built reusable components and improved UI performance.'],
    },
  ],
  education: [
    {
      program: 'B.Sc. Computer Science',
      school: 'Toronto Metropolitan University',
      period: '2021 - 2025',
      notes: 'Computer Science graduate.',
    },
  ],
  projects: [
    {
      name: 'Campus Connect',
      summary: 'Student collaboration platform.',
      stack: ['React', 'Node.js'],
      link: '#',
    },
  ],
  contact: {
    email: 'nina.patel@example.com',
    location: 'GTA, Canada',
    linkedin: 'linkedin.com/in/ninapatel',
  },
}
