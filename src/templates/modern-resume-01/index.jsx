import { motion } from 'framer-motion'
import { modernResume01SampleData } from './sampleData'
import './styles.css'

function ModernResumeTemplate01({ data = modernResume01SampleData }) {
  return (
    <div className="modern-resume">
      <article className="modern-resume__sheet">
        <header className="modern-resume__header">
          <h1 className="modern-resume__name">{data.name}</h1>
          <p className="modern-resume__role">{data.title}</p>
          <div className="modern-resume__contact">
            <span>{data.contact.email}</span><span>{data.contact.phone}</span><span>{data.contact.location}</span><span>{data.contact.linkedin}</span>
          </div>
        </header>
        <main className="modern-resume__body">
          <motion.section className="modern-resume__section" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3>Profile</h3><p>{data.profile}</p>
          </motion.section>
          <section className="modern-resume__section"><h3>Skills</h3><ul className="modern-resume__skills">{data.skills.map((s) => <li key={s}>{s}</li>)}</ul></section>
          <section className="modern-resume__section"><h3>Experience</h3>{data.experience.map((e) => <div key={`${e.company}-${e.role}`} className="modern-resume__item"><strong>{e.role} • {e.company}</strong><div className="modern-resume__meta">{e.period}</div><ul>{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul></div>)}</section>
          <section className="modern-resume__section"><h3>Education</h3>{data.education.map((e) => <div key={e.school} className="modern-resume__item"><strong>{e.degree}</strong><div className="modern-resume__meta">{e.school} • {e.period}</div></div>)}</section>
          <section className="modern-resume__section"><h3>Projects</h3>{data.projects.map((p) => <div key={p.name} className="modern-resume__item"><strong>{p.name}</strong><p>{p.description}</p></div>)}</section>
        </main>
      </article>
    </div>
  )
}

export default ModernResumeTemplate01
