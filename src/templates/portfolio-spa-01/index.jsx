import { motion } from 'framer-motion'
import { portfolioSpa01SampleData } from './sampleData'
import './styles.css'

const sections = ['about', 'skills', 'projects', 'contact']

function PortfolioSpaTemplate01({ data = portfolioSpa01SampleData }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(`portfolio-spa-01-${id}`)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="portfolio-spa">
      <div className="portfolio-spa__shell">
        <header className="portfolio-spa__hero">
          <h1>{data.name}</h1>
          <p>{data.role}</p>
          <p>{data.about}</p>
          <div className="portfolio-spa__nav">
            {sections.map((s) => <button key={s} type="button" onClick={() => scrollToSection(s)}>{s}</button>)}
          </div>
        </header>

        <motion.section id="portfolio-spa-01-about" className="portfolio-spa__section" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3>About</h3>
          <p>{data.about}</p>
        </motion.section>

        <section id="portfolio-spa-01-skills" className="portfolio-spa__section">
          <h3>Skills</h3>
          <div className="portfolio-spa__skills">{data.skills.map((s) => <span key={s} className="portfolio-spa__chip">{s}</span>)}</div>
        </section>

        <section id="portfolio-spa-01-projects" className="portfolio-spa__section">
          <h3>Projects</h3>
          {data.projects.map((p) => <div key={p.title} className="portfolio-spa__project"><strong>{p.title}</strong><p>{p.impact}</p></div>)}
        </section>

        <section id="portfolio-spa-01-contact" className="portfolio-spa__section">
          <h3>Contact</h3>
          <p>{data.contact.email}</p>
          <p>{data.contact.linkedin}</p>
          <p>{data.contact.location}</p>
        </section>
      </div>
    </div>
  )
}

export default PortfolioSpaTemplate01
