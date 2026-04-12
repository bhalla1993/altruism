import { motion } from 'framer-motion'
import { studentResume01SampleData } from './sampleData'
import './styles.css'

function StudentResumeTemplate01({ data = studentResume01SampleData }) {
  return (
    <div className="student-resume">
      <article className="student-resume__sheet">
        <header className="student-resume__header">
          <h1>{data.name}</h1>
          <p>{data.title}</p>
          <p>{data.contact.email} • {data.contact.phone} • {data.contact.location}</p>
        </header>

        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3>Objective</h3>
          <p>{data.objective}</p>
        </motion.section>

        <section>
          <h3>Education</h3>
          {data.education.map((e) => <p key={e.school}><strong>{e.degree}</strong> - {e.school} ({e.period}) • GPA: {e.gpa}</p>)}
        </section>

        <section>
          <h3>Skills</h3>
          <div className="student-resume__cols">
            {data.skills.map((s) => <div key={s} className="student-resume__card">{s}</div>)}
          </div>
        </section>

        <section>
          <h3>Projects</h3>
          {data.projects.map((p) => <div key={p.name}><strong>{p.name}</strong><p>{p.description} ({p.tech})</p></div>)}
        </section>

        <section>
          <h3>Achievements</h3>
          <ul>{data.achievements.map((a) => <li key={a}>{a}</li>)}</ul>
        </section>
      </article>
    </div>
  )
}

export default StudentResumeTemplate01
