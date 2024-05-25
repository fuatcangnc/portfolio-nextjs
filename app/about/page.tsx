import SeoMetaData from "@/components/shared/SeoMetaData"

import { site_metadata } from "@/constants/seo-metadata"
import { Metadata } from "next"


function page() {
  return (
    <section>
        <SeoMetaData title={site_metadata.about?.title} description={site_metadata.about?.desc}/>dsaddsadsaaaaaaaaaaaaaaaaaaa
    </section>
  )
}

export default page