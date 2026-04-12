import TemplateRenderer from '../../components/templates/TemplateRenderer'
import { getTemplateById } from '../../utils/templatesData'

function ModernCareerKitTemplateEntry({ data }) {
  const template = getTemplateById('modern-career-kit')
  return <TemplateRenderer template={template} data={data} />
}

export default ModernCareerKitTemplateEntry
