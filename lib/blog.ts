import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  content: string
  readTime: number
}

export type BlogMeta = Omit<BlogPost, 'content'>

export function getAllPosts(): BlogMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))
  return files
    .map((file) => {
      const slug = file.replace('.md', '')
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8')
      const { data } = matter(raw)
      const wordCount = raw.split(/\s+/).length
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        description: data.description as string,
        tags: (data.tags as string[]) || [],
        readTime: Math.ceil(wordCount / 200),
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content: mdContent } = matter(raw)
  const processed = await remark().use(html).process(mdContent)
  const wordCount = raw.split(/\s+/).length
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: data.description as string,
    tags: (data.tags as string[]) || [],
    content: processed.toString(),
    readTime: Math.ceil(wordCount / 200),
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace('.md', ''))
}
