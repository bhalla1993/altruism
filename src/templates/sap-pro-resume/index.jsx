import TemplateRenderer from '../../components/templates/TemplateRenderer'
import { getTemplateById } from '../../utils/templatesData'

function SapProResumeTemplateEntry({ data }) {
  const template = getTemplateById('sap-pro-resume')
  return <TemplateRenderer template={template} data={data} />
}

export default SapProResumeTemplateEntry
