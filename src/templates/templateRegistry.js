import { lazy } from 'react'

// This registry keeps template imports explicit so Vite can code-split correctly.
// Future scale options:
// 1) Load this mapping from a JSON manifest file.
// 2) Resolve template bundles from a separate GitHub repository.
// 3) Resolve template bundles from a CDN and map remote module URLs.
// Keep stable template IDs because routes depend on /templates/:templateId/demo.
const templateComponentMap = {
  'spa-resume': lazy(() => import('./spa-resume/index.jsx')),
  'spa-portfolio': lazy(() => import('./spa-portfolio/index.jsx')),
  'sap-pro-resume': lazy(() => import('./sap-pro-resume/index.jsx')),
  'sap-showcase-portfolio': lazy(() => import('./sap-showcase-portfolio/index.jsx')),
  'modern-career-kit': lazy(() => import('./modern-career-kit/index.jsx')),
}

const templateDemoMap = {
  'spa-resume': lazy(() => import('./spa-resume/demo.jsx')),
  'spa-portfolio': lazy(() => import('./spa-portfolio/demo.jsx')),
  'sap-pro-resume': lazy(() => import('./sap-pro-resume/demo.jsx')),
  'sap-showcase-portfolio': lazy(() => import('./sap-showcase-portfolio/demo.jsx')),
  'modern-career-kit': lazy(() => import('./modern-career-kit/demo.jsx')),
}

export function getLazyTemplateComponent(templateId) {
  return templateComponentMap[templateId] || null
}

export function getLazyTemplateDemo(templateId) {
  return templateDemoMap[templateId] || null
}
