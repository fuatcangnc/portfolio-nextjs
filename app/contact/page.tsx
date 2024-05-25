import SeoMetaData from "@/components/shared/SeoMetaData"
import { site_metadata } from "@/constants/seo-metadata"

export default function page() {
  return (
    <div>
        <SeoMetaData title={site_metadata?.contact.title} description={site_metadata?.contact.desc}></SeoMetaData>
    </div>
  )
}
