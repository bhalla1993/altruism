import React, { useState } from 'react'
import './styles.css'
import sampleData from './sampleData'

export default function RealEstateAgent01({ data = sampleData }) {
  const [selected, setSelected] = useState(null)
  const open = (item) => setSelected(item)
  const close = () => setSelected(null)

  return (
    <div className="real-estate-root">
      <header className="header">
        <div className="brand">
          <div className="logo" />
          <div>
            <div style={{fontWeight:700}}>{data.agent.name}</div>
            <div style={{fontSize:13,color:'#777'}}>{data.agent.title} • {data.agent.location}</div>
          </div>
        </div>
        <div>
          <a href={`mailto:${data.agent.email}`} className="cta">Contact</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-left">
          <h1>Find your next home with {data.agent.name}</h1>
          <p>{data.agent.bio}</p>
          <button className="cta" onClick={() => window.scrollTo({ top: 700, behavior: 'smooth' })}>View Listings</button>
        </div>
        <div style={{flex:1}}>
          <img src={data.listings[0].image} alt="" style={{width:'100%',borderRadius:12, boxShadow:'0 12px 30px rgba(0,0,0,0.06)'}} />
        </div>
      </section>

      <section>
        <h2 style={{padding:'0 28px'}}>Featured Listings</h2>
        <div className="listings">
          {data.listings.map((l) => (
            <article key={l.id} className="card" onClick={() => open(l)} style={{cursor:'pointer'}}>
              <img src={l.image} alt={l.title} loading="lazy" />
              <div className="card-body">
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
                  <div>
                    <div style={{fontWeight:700}}>{l.title}</div>
                    <div className="meta">{l.location} • {l.area}</div>
                  </div>
                  <div className="price">{l.price}</div>
                </div>
                <div className="meta" style={{marginTop:8}}>{l.beds} bd • {l.baths} ba</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="agent-section">
        <img className="agent-avatar" src={data.agent.avatar} alt={data.agent.name} />
        <div className="agent-bio">
          <h3>About {data.agent.name}</h3>
          <p style={{color:'#555'}}>{data.agent.bio}</p>
          <div style={{marginTop:10}}>
            <strong>Services:</strong> {data.services.join(' • ')}
          </div>
        </div>
      </section>

      <section className="testimonials">
        {data.testimonials.map((t, i) => (
          <div key={i} className="testimonial">
            <div style={{fontWeight:700}}>{t.name}</div>
            <div style={{color:'#555', marginTop:6}}>{t.text}</div>
          </div>
        ))}
      </section>

      <section className="contact">
        <div className="form">
          <h4>Contact {data.agent.name}</h4>
          <input placeholder="Your name" />
          <input placeholder="Email or phone" />
          <textarea rows="4" placeholder="Message" />
          <button className="cta" onClick={() => alert('Message sent (demo)')}>Send</button>
        </div>
        <div style={{flex:1}}>
          <h4>Office</h4>
          <div style={{color:'#555'}}>Phone: {data.agent.phone}</div>
          <div style={{color:'#555'}}>Email: {data.agent.email}</div>
          <div style={{marginTop:12}}><strong>Location:</strong> {data.agent.location}</div>
        </div>
      </section>

      <footer className="footer">© {new Date().getFullYear()} {data.agent.name} — All rights reserved</footer>

      {selected && (
        <div style={{
          position:'fixed',inset:0,background:'rgba(0,0,0,0.45)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:200
        }} onClick={close}>
          <div style={{width:'90%',maxWidth:900,background:'#fff',borderRadius:12,overflow:'hidden'}} onClick={(e)=>e.stopPropagation()}>
            <img src={selected.image} alt={selected.title} style={{width:'100%',height:360,objectFit:'cover'}} />
            <div style={{padding:18}}>
              <h3 style={{margin:0}}>{selected.title}</h3>
              <div style={{color:'#777',marginTop:6}}>{selected.location} • {selected.area}</div>
              <div style={{marginTop:12, fontWeight:700, color:'var(--accent)'}}>{selected.price}</div>
              <div style={{marginTop:12}}>
                <button className="cta" onClick={() => { window.location.href = `mailto:${data.agent.email}?subject=Inquiry about ${selected.title}` }}>Contact Agent</button>
                <button style={{marginLeft:12}} onClick={close}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
