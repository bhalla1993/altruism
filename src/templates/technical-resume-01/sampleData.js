export const technicalResume01SampleData = {
  name: 'Ethan Roy',
  title: 'Software Engineer',
  summary: 'Backend-focused engineer building reliable distributed services and developer tooling.',
  contact: {
    email: 'ethan.roy@example.com',
    github: 'github.com/ethanroy',
    location: 'Vancouver, Canada',
    linkedin: 'linkedin.com/in/ethanroy',
  },
  coreSkills: ['Node.js', 'TypeScript', 'Go', 'PostgreSQL', 'Redis', 'AWS'],
  tools: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'Prometheus', 'Grafana'],
  experience: [
    {
      role: 'Software Engineer II',
      company: 'ScaleOrbit',
      period: '2022 - Present',
      bullets: [
        'Designed queue-based processing service handling 12M jobs/day.',
        'Introduced CI performance checks reducing failed deployments by 30%.',
      ],
    },
  ],
  projects: [
    { name: 'Latency Lens', description: 'Open-source tracing dashboard for service latency analysis.', link: 'github.com/ethanroy/latency-lens' },
  ],
  education: [{ degree: 'B.Sc. Computer Science', school: 'University of British Columbia', period: '2016 - 2020' }],
}
