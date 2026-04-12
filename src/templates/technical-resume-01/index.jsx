import { motion } from 'framer-motion'
import { technicalResume01SampleData } from './sampleData'
import './styles.css'

function TechnicalResumeTemplate01({ data = technicalResume01SampleData }) {
  return (
    <div className="technical-resume">
      <article className="technical-resume__sheet">
        <header className="technical-resume__header">
          <h1 className="technical-resume__name">{data.name}</h1>
          <p className="technical-resume__role">{data.title}</p>
          <p>{data.contact.email} • {data.contact.location} • {data.contact.github}</p>
        </header>
        <div className="technical-resume__grid">
          <aside className="technical-resume__left">
            <section className="technical-resume__panel"><h3>Core Skills</h3><ul>{data.coreSkills.map((s) => <li key={s}>{s}</li>)}</ul></section>
            <section className="technical-resume__panel"><h3>Tools</h3><ul>{data.tools.map((t) => <li key={t}>{t}</li>)}</ul></section>
            <section className="technical-resume__panel"><h3>Education</h3>{data.education.map((e) => <div key={e.school}><strong>{e.degree}</strong><div className="technical-resume__meta">{e.school} • {e.period}</div></div>)}</section>
          </aside>
          <main className="technical-resume__right">
            <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="technical-resume__panel"><h3>Summary</h3><p>{data.summary}</p></motion.section>
            <section className="technical-resume__panel"><h3>Experience</h3>{data.experience.map((e) => <div key={`${e.company}-${e.role}`} className="technical-resume__item"><strong>{e.role} • {e.company}</strong><div className="technical-resume__meta">{e.period}</div><ul>{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul></div>)}</section>
            <section className="technical-resume__panel"><h3>Projects</h3>{data.projects.map((p) => <div key={p.name} className="technical-resume__item"><strong>{p.name}</strong><p>{p.description}</p><div className="technical-resume__meta">{p.link}</div></div>)}</section>
          </main>
        </div>
      </article>
    </div>
  )
}

export default TechnicalResumeTemplate01
