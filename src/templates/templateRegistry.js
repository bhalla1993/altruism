import { lazy } from 'react'

// This registry keeps template imports explicit so Vite can code-split correctly.
// Future scale options:
// 1) Load this mapping from a JSON manifest file.
// 2) Resolve template bundles from a separate GitHub repository.
// 3) Resolve template bundles from a CDN and map remote module URLs.
// 4) Add more SPA resume variants by creating /templates/spa-resume-XX/ and mapping IDs below.
// 5) Add new categories by creating /templates/[template-id]/ with index, demo, sampleData, styles, thumbnail.
// Keep stable template IDs because routes depend on /templates/:templateId/demo.
const templateComponentMap = {
  'modern-resume-01': lazy(() => import('./modern-resume-01/index.jsx')),
  'creative-resume-01': lazy(() => import('./creative-resume-01/index.jsx')),
  'technical-resume-01': lazy(() => import('./technical-resume-01/index.jsx')),
  'student-resume-01': lazy(() => import('./student-resume-01/index.jsx')),
  'business-resume-01': lazy(() => import('./business-resume-01/index.jsx')),
  'portfolio-spa-01': lazy(() => import('./portfolio-spa-01/index.jsx')),
  'spa-resume-01': lazy(() => import('./spa-resume-01/index.jsx')),
  'spa-resume': lazy(() => import('./spa-resume/index.jsx')),
  'spa-portfolio': lazy(() => import('./spa-portfolio/index.jsx')),
  'sap-pro-resume': lazy(() => import('./sap-pro-resume/index.jsx')),
  'sap-showcase-portfolio': lazy(() => import('./sap-showcase-portfolio/index.jsx')),
  'modern-career-kit': lazy(() => import('./modern-career-kit/index.jsx')),
  'lawyer-portfolio-01': lazy(() => import('./lawyer-portfolio-01/index.jsx')),
  'real-estate-agent-01': lazy(() => import('./real-estate-agent-01/index.jsx')),
}

const templateDemoMap = {
  'modern-resume-01': lazy(() => import('./modern-resume-01/demo.jsx')),
  'creative-resume-01': lazy(() => import('./creative-resume-01/demo.jsx')),
  'technical-resume-01': lazy(() => import('./technical-resume-01/demo.jsx')),
  'student-resume-01': lazy(() => import('./student-resume-01/demo.jsx')),
  'business-resume-01': lazy(() => import('./business-resume-01/demo.jsx')),
  'portfolio-spa-01': lazy(() => import('./portfolio-spa-01/demo.jsx')),
  'spa-resume-01': lazy(() => import('./spa-resume-01/demo.jsx')),
  'spa-resume': lazy(() => import('./spa-resume/demo.jsx')),
  'spa-portfolio': lazy(() => import('./spa-portfolio/demo.jsx')),
  'sap-pro-resume': lazy(() => import('./sap-pro-resume/demo.jsx')),
  'sap-showcase-portfolio': lazy(() => import('./sap-showcase-portfolio/demo.jsx')),
  'modern-career-kit': lazy(() => import('./modern-career-kit/demo.jsx')),
  'lawyer-portfolio-01': lazy(() => import('./lawyer-portfolio-01/demo.jsx')),
  'real-estate-agent-01': lazy(() => import('./real-estate-agent-01/demo.jsx')),
}

export function getLazyTemplateComponent(templateId) {
  return templateComponentMap[templateId] || null
}

export function getLazyTemplateDemo(templateId) {
  return templateDemoMap[templateId] || null
}
