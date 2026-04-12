import { Helmet } from 'react-helmet-async'
import { business } from '../../utils/siteData'

function Seo({ title, description, path = '/' }) {
  const siteTitle = `${title} | ${business.name}`
  const canonical = `https://bhalla1993.github.io/altruism${path}`

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
    </Helmet>
  )
}

export default Seo
