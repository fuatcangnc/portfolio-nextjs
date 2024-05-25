import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import readingTime from 'reading-time'


const MDX_PATTERN = /\.mdx?$/


export const getResourceBySlug = async (slug: string, resourcePath: string) => {
  const markdownFile = fs.readFileSync(path.join('projects', slug + '.mdx'), 'utf-8')

    const{data: fontMatter, content} = matter(markdownFile)

    return {
        fontMatter,
        slug,
        content
    }

}