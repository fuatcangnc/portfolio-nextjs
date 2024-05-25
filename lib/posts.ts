import path from 'path'
import slugify from 'slugify'
import { getResourceBySlug } from './resource'
import matter from 'gray-matter'
import fs from "fs"



const PROJECTS_PATH = path.join(process.cwd(), 'projects')


export const getProjectBySlug=async(slug:string)=>{
    const markdownFile =fs.readFileSync(path.join('projects', slug + '.mdx'), 'utf-8')

    const{data, content} = matter(markdownFile)

    return {
        data,
        slug,
        content
    }
}