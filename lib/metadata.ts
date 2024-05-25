
import { homePageData } from '@/constants'
import { DEFAULT_DESCRIPTION, DEFAULT_IMAGE_URL, SITE_TITLE } from '@/constants/seo-metadata'
import { Metadata } from 'next'

interface SeoProps {
    readonly title?: string
    readonly description?: string
    readonly image?: string
    readonly publishedAt?: string
    readonly type?: 'article' | 'website'
  }

  export const getMetadata = (
    {
      title = SITE_TITLE,
      description = DEFAULT_DESCRIPTION,
      image = DEFAULT_IMAGE_URL,
      type = 'website',
      publishedAt
    } = {} as SeoProps
  ): Metadata => ({
    title,
    description,
    openGraph: {
      type,
      title,
      locale: 'en_EN',
      description,
      siteName: SITE_TITLE,
      ...(type === 'article' ? { publishedTime: publishedAt } : {})
    }
  })