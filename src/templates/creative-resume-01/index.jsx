import { motion } from 'framer-motion'
import { creativeResume01SampleData } from './sampleData'
import './styles.css'

function CreativeResumeTemplate01({ data = creativeResume01SampleData }) {
  return (
    <div className="creative-resume">
      <article className="creative-resume__sheet">
        <aside className="creative-resume__sidebar">
          <h1>{data.name}</h1>
          <h2>{data.title}</h2>
          <div className="creative-resume__block"><h3>Contact</h3><p>{data.contact.email}</p><p>{data.contact.phone}</p><p>{data.contact.location}</p><p>{data.contact.portfolio}</p></div>
          <div className="creative-resume__block"><h3>Skills</h3><div className="creative-resume__chips">{data.skills.map((s) => <span key={s} className="creative-resume__chip">{s}</span>)}</div></div>
        </aside>
        <main className="creative-resume__main">
          <motion.section initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><h3>Profile</h3><p>{data.profile}</p></motion.section>
          <section><h3>Experience</h3>{data.experience.map((e) => <div key={`${e.company}-${e.role}`} className="creative-resume__item"><strong>{e.role} • {e.company}</strong><p>{e.period}</p><ul>{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul></div>)}</section>
          <section><h3>Education</h3>{data.education.map((e) => <div key={e.school}><strong>{e.degree}</strong><p>{e.school} • {e.period}</p></div>)}</section>
          <section><h3>Projects</h3>{data.projects.map((p) => <div key={p.name} className="creative-resume__item"><strong>{p.name}</strong><p>{p.description}</p></div>)}</section>
        </main>
      </article>
    </div>
  )
}

export default CreativeResumeTemplate01
