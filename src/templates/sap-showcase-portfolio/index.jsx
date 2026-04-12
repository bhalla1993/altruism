import TemplateRenderer from '../../components/templates/TemplateRenderer'
import { getTemplateById } from '../../utils/templatesData'

function SapShowcasePortfolioTemplateEntry({ data }) {
  const template = getTemplateById('sap-showcase-portfolio')
  return <TemplateRenderer template={template} data={data} />
}

export default SapShowcasePortfolioTemplateEntry
