import {SeoMetaDataProps} from "@/types/index"


export default function SeoMetaData({ title, description }: SeoMetaDataProps) {
    return (
      <>
        <title>{title}</title>
        <meta name="description" content={description} />
      </>
    );
  }