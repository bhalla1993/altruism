import { motion } from 'framer-motion'
import { businessResume01SampleData } from './sampleData'
import './styles.css'

function BusinessResumeTemplate01({ data = businessResume01SampleData }) {
  return (
    <div className="business-resume">
      <article className="business-resume__sheet">
        <header className="business-resume__header">
          <h1>{data.name}</h1>
          <p>{data.title}</p>
          <p>{data.contact.email} • {data.contact.phone} • {data.contact.location}</p>
        </header>
        <main className="business-resume__body">
          <motion.section className="business-resume__section" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3>Professional Profile</h3>
            <p>{data.profile}</p>
          </motion.section>
          <section className="business-resume__section"><h3>Core Strengths</h3><ul>{data.strengths.map((s) => <li key={s}>{s}</li>)}</ul></section>
          <section className="business-resume__section"><h3>Experience</h3>{data.experience.map((e) => <div key={`${e.company}-${e.role}`} className="business-resume__item"><strong>{e.role} • {e.company}</strong><div className="business-resume__meta">{e.period}</div><ul>{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul></div>)}</section>
          <section className="business-resume__section"><h3>Education</h3>{data.education.map((e) => <p key={e.school}><strong>{e.degree}</strong> - {e.school} ({e.period})</p>)}</section>
        </main>
      </article>
    </div>
  )
}

export default BusinessResumeTemplate01
