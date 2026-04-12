import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import ScheduleIcon from '@mui/icons-material/Schedule'
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { lawyerPortfolio01SampleData } from './sampleData'
import './styles.css'

const BROWN = '#b38650'
const BROWN_LT = '#c9a06a'
const BROWN_DK = '#8b6430'
const SAND = '#f5ede0'
const TAN = '#e8d5bc'
const OFF_WHITE = '#fffaf4'
const MUTED = '#6e5a42'

const fadeUp = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } } }
const stagger = { show: { transition: { staggerChildren: 0.1 } } }

function SectionLabel({ children }) {
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
        letterSpacing: '0.13em', textTransform: 'uppercase',
        color: BROWN, background: SAND, px: 1.2, py: 0.5,
        borderRadius: 999, mb: 0.75,
      }}
    >
      {children}
    </Box>
  )
}

function StatChip({ value, label }) {
  return (
    <Box sx={{ background: SAND, borderRadius: '10px', px: 1.5, py: 1, textAlign: 'center' }}>
      <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: BROWN_LT, lineHeight: 1 }}>{value}</Typography>
      <Typography sx={{ fontSize: '0.68rem', color: MUTED, textTransform: 'uppercase', letterSpacing: '0.08em', mt: 0.3 }}>{label}</Typography>
    </Box>
  )
}

function AreaCard({ area, delay = 0 }) {
  return (
    <motion.div variants={fadeUp} transition={{ delay }} style={{ height: '100%' }}>
      <Paper elevation={0} sx={{ height: '100%', p: 2.25, border: `1px solid ${TAN}`, borderRadius: '12px', background: '#fff', transition: 'transform 220ms ease, box-shadow 220ms ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 8px 26px rgba(100,70,30,0.10)' } }}>
        <Box sx={{ width: 46, height: 46, borderRadius: '11px', background: `linear-gradient(135deg, ${SAND}, ${TAN})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', mb: 1.25 }}>
          {area.icon}
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.6, fontSize: '1.05rem' }}>{area.title}</Typography>
        <Typography variant="body2" sx={{ color: MUTED, lineHeight: 1.7, mb: 0.75 }}>{area.description}</Typography>
        <Typography variant="body2" sx={{ color: BROWN, fontWeight: 600, fontSize: '0.75rem' }}>→ {area.tags}</Typography>
      </Paper>
    </motion.div>
  )
}

function CaseCard({ c }) {
  return (
    <motion.div variants={fadeUp}>
      <Paper elevation={0} sx={{ border: `1px solid ${TAN}`, borderRadius: '12px', overflow: 'hidden', display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '240px 1fr' }, transition: 'transform 220ms ease, box-shadow 220ms ease', '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 8px 26px rgba(100,70,30,0.10)' } }}>
        <Box component="img" src={c.img} alt={c.title} loading="lazy" sx={{ width: '100%', height: { xs: 180, sm: '100%' }, objectFit: 'cover', minHeight: 160 }} />
        <Stack p={2.25} spacing={0.75}>
          <Box>
            <Chip label={c.tag} size="small" sx={{ fontSize: '0.68rem', fontWeight: 700, background: SAND, color: BROWN, height: 22, letterSpacing: '0.06em', borderRadius: 999 }} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem', lineHeight: 1.3 }}>{c.title}</Typography>
          <Typography variant="body2" sx={{ color: MUTED, lineHeight: 1.7 }}>{c.description}</Typography>
          <Divider sx={{ borderColor: SAND, mt: 0.5 }} />
          <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
            <Chip label={`✓ ${c.outcome}`} size="small" sx={{ fontSize: '0.7rem', fontWeight: 700, background: '#eef7ee', color: '#2d6a2d', height: 22, borderRadius: 999 }} />
            <Typography variant="caption" sx={{ color: MUTED }}>{c.court}</Typography>
          </Stack>
        </Stack>
      </Paper>
    </motion.div>
  )
}

function TestiCard({ t, delay = 0 }) {
  return (
    <motion.div variants={fadeUp} transition={{ delay }} style={{ height: '100%' }}>
      <Paper elevation={0} sx={{ height: '100%', p: 2.25, border: `1px solid ${TAN}`, borderRadius: '12px', background: '#fff', position: 'relative' }}>
        <Typography sx={{ position: 'absolute', top: '1.5rem', right: '1.25rem', fontFamily: 'Georgia, serif', fontSize: '3.5rem', lineHeight: 0, color: TAN }}>&#8220;</Typography>
        <Stack spacing={0.4} mb={1.25}>
          {[1,2,3,4,5].map(i => <span key={i} style={{ display: 'inline' }}>★</span>).reduce((a, b) => <>{a}{b}</>, <Box component="span" sx={{ color: BROWN_LT, letterSpacing: '0.06em', fontSize: '0.85rem' }} />)}
          <Typography sx={{ color: BROWN_LT, letterSpacing: '0.06em', fontSize: '0.85rem' }}>★★★★★</Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: MUTED, lineHeight: 1.8, fontStyle: 'italic', mb: 1.5 }}>"{t.text}"</Typography>
        <Stack direction="row" spacing={1.25} alignItems="center">
          <Box sx={{ width: 42, height: 42, borderRadius: '50%', background: `linear-gradient(135deg, ${SAND}, ${TAN})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: BROWN, fontSize: '0.85rem', flexShrink: 0 }}>
            {t.initials}
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>{t.name}</Typography>
            <Typography variant="caption" sx={{ color: MUTED }}>{t.role}</Typography>
          </Box>
        </Stack>
      </Paper>
    </motion.div>
  )
}

function NavItem({ label, sectionId, active, onClick }) {
  return (
    <Button
      onClick={() => onClick(sectionId)}
      sx={{
        color: active ? BROWN_DK : MUTED,
        background: active ? SAND : 'transparent',
        fontWeight: 600, fontSize: '0.82rem', textTransform: 'none',
        borderRadius: '8px', px: 1.25, py: 0.6, minWidth: 0,
        '&:hover': { background: SAND, color: BROWN_DK },
        transition: 'all 200ms ease',
      }}
    >
      {label}
    </Button>
  )
}

// ─── Main Component ──────────────────────────────────────────────────────────
function LawyerPortfolio01({ data = lawyerPortfolio01SampleData }) {
  const [formStatus, setFormStatus] = useState('')
  const [activeSection, setActiveSection] = useState('hero')
  const refs = {
    hero: useRef(null),
    about: useRef(null),
    areas: useRef(null),
    cases: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null),
  }

  const scrollTo = (id) => {
    setActiveSection(id)
    refs[id]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('Sending…')
    await new Promise(r => setTimeout(r, 900))
    setFormStatus('✓ Message received — we\'ll respond within one business day.')
    e.target.reset()
  }

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Practice', id: 'areas' },
    { label: 'Cases', id: 'cases' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <Box className="lp01" sx={{ background: OFF_WHITE, minHeight: '100vh' }}>

      {/* ─── Sticky Nav ─── */}
      <Box
        component={motion.div}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
          position: 'sticky', top: 64, zIndex: 40,
          background: 'rgba(255,250,244,0.92)',
          backdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${TAN}`,
          px: 2, py: 0.75,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1,
        }}
      >
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Box sx={{ width: 34, height: 34, borderRadius: '8px', background: `linear-gradient(135deg, ${BROWN_LT}, ${BROWN_DK})`, display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 800, fontSize: '12px', flexShrink: 0 }}>
            AM
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.2 }}>{data.name}</Typography>
            <Typography sx={{ fontSize: '0.68rem', color: MUTED }}>Attorney at Law</Typography>
          </Box>
        </Stack>

        <Stack direction="row" spacing={0.25} sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navItems.map(n => (
            <NavItem key={n.id} label={n.label} sectionId={n.id} active={activeSection === n.id} onClick={scrollTo} />
          ))}
        </Stack>

        <Button
          variant="contained"
          size="small"
          onClick={() => scrollTo('contact')}
          sx={{ background: BROWN, color: '#fff', fontWeight: 700, textTransform: 'none', borderRadius: '9px', px: 1.75, '&:hover': { background: BROWN_DK }, fontSize: '0.82rem', whiteSpace: 'nowrap' }}
        >
          Book Consultation
        </Button>
      </Box>

      {/* ─── Hero ─── */}
      <Box
        ref={refs.hero}
        id="lp01-hero"
        sx={{
          position: 'relative',
          background: `linear-gradient(160deg, #1e140a 0%, #3a2510 100%)`,
          minHeight: '88vh',
          display: 'flex', alignItems: 'flex-end', overflow: 'hidden',
        }}
      >
        {/* bg photo tint */}
        <Box
          sx={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1400)',
            backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.22,
          }}
        />
        {/* attorney photo faded right */}
        <Box
          component="img"
          src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=700"
          alt=""
          aria-hidden="true"
          loading="eager"
          sx={{
            position: 'absolute', right: 0, bottom: 0,
            height: '90%', width: { xs: 0, md: '38%' },
            objectFit: 'cover', objectPosition: 'top center',
            opacity: 0.38,
            maskImage: 'linear-gradient(to left, rgba(0,0,0,0.8) 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.8) 50%, transparent 100%)',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pb: 6, pt: 10 }}>
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp}>
              <Chip
                label="◆  Board-Certified Attorney · New York State Bar"
                size="small"
                sx={{ background: 'rgba(201,160,106,0.2)', color: BROWN_LT, border: '1px solid rgba(201,160,106,0.38)', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.05em', mb: 2, height: 26, borderRadius: 999 }}
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <Typography
                variant="h1"
                sx={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 800, fontSize: { xs: '2.6rem', md: '4.5rem' }, color: '#fff', lineHeight: 1.08, mb: 0.5 }}
              >
                {data.name.split(' ')[0]}<br />
                <Box component="span" sx={{ color: BROWN_LT }}>{data.name.split(' ').slice(1).join(' ')}</Box>
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Typography sx={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.62)', mb: 1.5 }}>{data.title} &mdash; {data.subtitle}</Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Typography sx={{ fontSize: '1rem', color: 'rgba(255,255,255,0.72)', maxWidth: 520, lineHeight: 1.75, mb: 2.5 }}>{data.tagline}</Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap mb={4}>
                <Button
                  variant="contained"
                  onClick={() => scrollTo('contact')}
                  sx={{ background: BROWN, color: '#fff', fontWeight: 700, textTransform: 'none', borderRadius: '10px', px: 2.5, py: 1.1, fontSize: '1rem', '&:hover': { background: BROWN_DK } }}
                >
                  Request Consultation
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => scrollTo('cases')}
                  sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.35)', fontWeight: 700, textTransform: 'none', borderRadius: '10px', px: 2.5, py: 1.1, fontSize: '1rem', background: 'rgba(255,255,255,0.07)', '&:hover': { borderColor: BROWN_LT, background: 'rgba(201,160,106,0.12)' } }}
                >
                  View Case Studies
                </Button>
              </Stack>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)', mb: 2.5 }} />
              <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
                {data.stats.map(s => (
                  <Box key={s.label}>
                    <Typography sx={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.9rem', fontWeight: 700, color: BROWN_LT, lineHeight: 1 }}>{s.value}</Typography>
                    <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.07em', mt: 0.25 }}>{s.label}</Typography>
                  </Box>
                ))}
              </Stack>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* ─── About ─── */}
      <Box ref={refs.about} id="lp01-about" component="section" sx={{ background: '#fff', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={5}>
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                <Box sx={{ position: 'relative' }}>
                  <Box
                    component="img"
                    src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt={`${data.name}, ${data.title}`}
                    loading="lazy"
                    sx={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: '14px', boxShadow: '0 20px 60px rgba(100,70,30,0.14)' }}
                  />
                  <Box sx={{ position: 'absolute', bottom: -20, right: -20, background: BROWN, color: '#fff', p: '1rem 1.25rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 8px 26px rgba(100,70,30,0.22)' }}>
                    <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: '1.8rem', fontWeight: 700, lineHeight: 1 }}>15+</Typography>
                    <Typography sx={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.85 }}>Years in Practice</Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={7}>
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
                <motion.div variants={fadeUp}><SectionLabel>About {data.name.split(' ')[0]}</SectionLabel></motion.div>
                <motion.div variants={fadeUp}>
                  <Typography variant="h3" sx={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700, fontSize: { xs: '1.7rem', md: '2.2rem' }, lineHeight: 1.2, mb: 1.5 }}>
                    Experienced Counsel.<br />Strategic Thinking. Real Results.
                  </Typography>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <Typography sx={{ color: MUTED, lineHeight: 1.8, fontSize: '1rem', mb: 2.25 }}>{data.about}</Typography>
                </motion.div>
                <motion.div variants={stagger}>
                  <Grid container spacing={1.25} mb={2.5}>
                    {data.credentials.map(c => (
                      <Grid item xs={12} sm={6} key={c.title}>
                        <motion.div variants={fadeUp}>
                          <Stack direction="row" spacing={1.25} alignItems="flex-start" sx={{ background: OFF_WHITE, p: 1.25, borderRadius: '10px' }}>
                            <Box sx={{ fontSize: '1.1rem', mt: '2px', flexShrink: 0 }}>{c.icon}</Box>
                            <Box>
                              <Typography variant="body2" sx={{ fontWeight: 700 }}>{c.title}</Typography>
                              <Typography variant="caption" sx={{ color: MUTED }}>{c.detail}</Typography>
                            </Box>
                          </Stack>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <Button
                    variant="contained"
                    onClick={() => scrollTo('contact')}
                    sx={{ background: BROWN, color: '#fff', fontWeight: 700, textTransform: 'none', borderRadius: '10px', px: 2.5, py: 1, '&:hover': { background: BROWN_DK } }}
                  >
                    Schedule a Consultation
                  </Button>
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ─── Practice Areas ─── */}
      <Box ref={refs.areas} id="lp01-areas" component="section" sx={{ background: OFF_WHITE, py: 8 }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ sm: 'flex-end' }} spacing={1} mb={3}>
              <Box>
                <motion.div variants={fadeUp}><SectionLabel>Practice Areas</SectionLabel></motion.div>
                <motion.div variants={fadeUp}>
                  <Typography variant="h3" sx={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700, fontSize: { xs: '1.7rem', md: '2.2rem' }, lineHeight: 1.25 }}>
                    Comprehensive Legal<br />Representation
                  </Typography>
                </motion.div>
              </Box>
              <motion.div variants={fadeUp}>
                <Typography sx={{ color: MUTED, maxWidth: 380, fontSize: '0.95rem' }}>Every matter receives dedicated attention and a strategy tailored to your goals.</Typography>
              </motion.div>
            </Stack>

            <Grid container spacing={1.75}>
              {data.practiceAreas.map((area, i) => (
                <Grid item xs={12} sm={6} md={4} key={area.title}>
                  <AreaCard area={area} delay={i * 0.07} />
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* ─── Case Studies ─── */}
      <Box ref={refs.cases} id="lp01-cases" component="section" sx={{ background: '#fff', py: 8 }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}><SectionLabel>Case Studies</SectionLabel></motion.div>
            <motion.div variants={fadeUp}>
              <Typography variant="h3" sx={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700, fontSize: { xs: '1.7rem', md: '2.2rem' }, mb: 0.75 }}>
                Representative Matters &amp; Results
              </Typography>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Typography sx={{ color: MUTED, fontSize: '0.875rem', mb: 3.5 }}>Past results do not guarantee future outcomes. Summaries shared with client consent.</Typography>
            </motion.div>

            <Stack spacing={2}>
              {data.cases.map(c => (
                <CaseCard key={c.title} c={c} />
              ))}
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* ─── Testimonials ─── */}
      <Box ref={refs.testimonials} id="lp01-testimonials" component="section" sx={{ background: OFF_WHITE, py: 8 }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <motion.div variants={fadeUp}><SectionLabel>Client Testimonials</SectionLabel></motion.div>
              <motion.div variants={fadeUp}>
                <Typography variant="h3" sx={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700, fontSize: { xs: '1.7rem', md: '2.2rem' } }}>
                  What Clients Say
                </Typography>
              </motion.div>
            </Box>
            <Grid container spacing={1.75}>
              {data.testimonials.map((t, i) => (
                <Grid item xs={12} sm={6} key={t.name}>
                  <TestiCard t={t} delay={i * 0.08} />
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* ─── Awards ─── */}
      <Box component="section" sx={{ background: '#fff', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="start">
            <Grid item xs={12} md={6}>
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
                <motion.div variants={fadeUp}><SectionLabel>Recognition</SectionLabel></motion.div>
                <motion.div variants={fadeUp}>
                  <Typography variant="h3" sx={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700, fontSize: { xs: '1.7rem', md: '2.2rem' }, mb: 0.75 }}>
                    Awards &amp; Honors
                  </Typography>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <Typography sx={{ color: MUTED, mb: 2.5 }}>Recognized by peers and professional organizations for excellence in litigation.</Typography>
                </motion.div>
                <Stack spacing={1.25}>
                  {data.awards.map((a, i) => (
                    <motion.div key={a.title} variants={fadeUp} transition={{ delay: i * 0.08 }}>
                      <Stack direction="row" spacing={1.25} sx={{ background: OFF_WHITE, p: 1.25, borderRadius: '10px' }}>
                        <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: BROWN, minWidth: 38, pt: '2px' }}>{a.year}</Typography>
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700 }}>{a.title}</Typography>
                          <Typography variant="caption" sx={{ color: MUTED }}>{a.detail}</Typography>
                        </Box>
                      </Stack>
                    </motion.div>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                <Box
                  component="img"
                  src="https://images.pexels.com/photos/936048/pexels-photo-936048.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Law office"
                  loading="lazy"
                  sx={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '14px', boxShadow: '0 8px 30px rgba(100,70,30,0.10)', mb: 2 }}
                />
                <Box sx={{ background: SAND, borderRadius: '12px', p: 2 }}>
                  <Typography sx={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.05rem', fontStyle: 'italic', lineHeight: 1.6, color: '#1e140a', mb: 1 }}>
                    &ldquo;{data.quote}&rdquo;
                  </Typography>
                  <Typography sx={{ fontSize: '0.82rem', color: BROWN, fontWeight: 700 }}>&mdash; {data.name}</Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ─── Contact ─── */}
      <Box ref={refs.contact} id="lp01-contact" component="section" sx={{ background: OFF_WHITE, py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <SectionLabel>Get In Touch</SectionLabel>
            <Typography variant="h3" sx={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700, fontSize: { xs: '1.7rem', md: '2.2rem' } }}>
              Schedule a Consultation
            </Typography>
            <Typography sx={{ color: MUTED, mt: 0.75 }}>Initial consultations are confidential. Sliding-scale fees available for qualifying clients.</Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Info column */}
            <Grid item xs={12} md={5}>
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
                <motion.div variants={fadeUp}>
                  <Typography variant="h5" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, mb: 2 }}>Contact Information</Typography>
                </motion.div>
                <Stack spacing={1.5} mb={2.5}>
                  {[
                    { icon: <PhoneIcon fontSize="small" />, label: 'Phone', value: data.phone, href: `tel:${data.phone.replace(/\D/g, '')}` },
                    { icon: <EmailIcon fontSize="small" />, label: 'Email', value: data.email, href: `mailto:${data.email}` },
                    { icon: <LocationOnIcon fontSize="small" />, label: 'Office', value: data.location },
                    { icon: <ScheduleIcon fontSize="small" />, label: 'Hours', value: data.hours },
                  ].map(item => (
                    <motion.div key={item.label} variants={fadeUp}>
                      <Stack direction="row" spacing={1.5} alignItems="flex-start">
                        <Box sx={{ width: 40, height: 40, borderRadius: '10px', background: SAND, display: 'flex', alignItems: 'center', justifyContent: 'center', color: BROWN, flexShrink: 0 }}>
                          {item.icon}
                        </Box>
                        <Box>
                          <Typography sx={{ fontSize: '0.75rem', color: MUTED }}>{item.label}</Typography>
                          {item.href
                            ? <Typography component="a" href={item.href} sx={{ fontSize: '0.95rem', fontWeight: 600, color: '#1e140a', textDecoration: 'none', '&:hover': { color: BROWN } }}>{item.value}</Typography>
                            : <Typography sx={{ fontSize: '0.95rem', fontWeight: 600 }}>{item.value}</Typography>
                          }
                        </Box>
                      </Stack>
                    </motion.div>
                  ))}
                </Stack>
                <motion.div variants={fadeUp}>
                  <Paper elevation={0} sx={{ background: '#fff', border: `1px solid ${TAN}`, borderRadius: '12px', p: 1.75 }}>
                    <Typography variant="body2" sx={{ color: MUTED, lineHeight: 1.7 }}>
                      <strong style={{ color: '#1e140a' }}>Attorney-Client Privilege Notice:</strong> Contacting us does not establish an attorney-client relationship. Information shared prior to engagement is treated as confidential.
                    </Typography>
                  </Paper>
                </motion.div>
              </motion.div>
            </Grid>

            {/* Form column */}
            <Grid item xs={12} md={7}>
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                <Paper elevation={0} sx={{ border: `1px solid ${TAN}`, borderRadius: '14px', p: { xs: 2, md: 3 }, background: '#fff' }}>
                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={1.5}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: MUTED, display: 'block', mb: 0.5 }}>First Name *</Typography>
                        <Box component="input" name="firstName" type="text" placeholder="First name" required sx={{ width: '100%', p: '0.65rem 0.85rem', borderRadius: '10px', border: `1.5px solid ${TAN}`, fontFamily: 'inherit', fontSize: '0.95rem', color: '#1e140a', background: 'transparent', outline: 'none', '&:focus': { borderColor: BROWN_LT, boxShadow: '0 0 0 3px rgba(201,160,106,0.16)' }, transition: 'all 200ms ease', }} />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: MUTED, display: 'block', mb: 0.5 }}>Last Name *</Typography>
                        <Box component="input" name="lastName" type="text" placeholder="Last name" required sx={{ width: '100%', p: '0.65rem 0.85rem', borderRadius: '10px', border: `1.5px solid ${TAN}`, fontFamily: 'inherit', fontSize: '0.95rem', color: '#1e140a', background: 'transparent', outline: 'none', '&:focus': { borderColor: BROWN_LT, boxShadow: '0 0 0 3px rgba(201,160,106,0.16)' }, transition: 'all 200ms ease', }} />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: MUTED, display: 'block', mb: 0.5 }}>Email *</Typography>
                        <Box component="input" name="email" type="email" placeholder="you@example.com" required sx={{ width: '100%', p: '0.65rem 0.85rem', borderRadius: '10px', border: `1.5px solid ${TAN}`, fontFamily: 'inherit', fontSize: '0.95rem', color: '#1e140a', background: 'transparent', outline: 'none', '&:focus': { borderColor: BROWN_LT, boxShadow: '0 0 0 3px rgba(201,160,106,0.16)' }, transition: 'all 200ms ease', }} />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: MUTED, display: 'block', mb: 0.5 }}>Practice Area</Typography>
                        <Box component="select" name="practiceArea" sx={{ width: '100%', p: '0.65rem 0.85rem', borderRadius: '10px', border: `1.5px solid ${TAN}`, fontFamily: 'inherit', fontSize: '0.95rem', color: '#1e140a', background: 'transparent', outline: 'none', '&:focus': { borderColor: BROWN_LT }, cursor: 'pointer' }}>
                          <option value="">— Select —</option>
                          {data.practiceAreas.map(a => <option key={a.title}>{a.title}</option>)}
                          <option>Other</option>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: MUTED, display: 'block', mb: 0.5 }}>Brief Description *</Typography>
                        <Box component="textarea" name="message" placeholder="Describe your situation in a few sentences…" required rows={4} sx={{ width: '100%', p: '0.65rem 0.85rem', borderRadius: '10px', border: `1.5px solid ${TAN}`, fontFamily: 'inherit', fontSize: '0.95rem', color: '#1e140a', background: 'transparent', outline: 'none', resize: 'vertical', '&:focus': { borderColor: BROWN_LT, boxShadow: '0 0 0 3px rgba(201,160,106,0.16)' }, transition: 'all 200ms ease', }} />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          sx={{ background: BROWN, color: '#fff', fontWeight: 700, textTransform: 'none', borderRadius: '10px', py: 1.1, fontSize: '1rem', '&:hover': { background: BROWN_DK } }}
                        >
                          Send Message
                        </Button>
                        {formStatus && (
                          <Typography variant="body2" sx={{ mt: 1, color: '#2d6a2d', textAlign: 'center' }}>{formStatus}</Typography>
                        )}
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ─── Footer ─── */}
      <Box component="footer" sx={{ background: '#1e140a', color: 'rgba(255,255,255,0.55)', py: 3 }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ sm: 'center' }} spacing={1}>
            <Stack direction="row" spacing={1.25} alignItems="center">
              <Box sx={{ width: 30, height: 30, borderRadius: '7px', background: `linear-gradient(135deg, ${BROWN_LT}, ${BROWN_DK})`, display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 800, fontSize: '11px' }}>AM</Box>
              <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 700, fontSize: '0.875rem' }}>{data.name} &mdash; {data.title} &copy; {new Date().getFullYear()}</Typography>
            </Stack>
            <Typography sx={{ fontSize: '0.75rem' }}>Licensed in New York State &bull; Not legal advice</Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default LawyerPortfolio01
