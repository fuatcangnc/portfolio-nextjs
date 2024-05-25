import type { Metadata, ResolvingMetadata } from "next";
import { getProjectBySlug } from "@/lib/posts";
import { getMetadata } from "@/lib/metadata";
import { groq, PortableText } from "next-sanity";
import client from "@/sanity/lib/client";
import Link from "next/link";

type Props = {
  params: { slug: string }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
 
  // fetch data
  const project = await getProject(params.slug)
 
  return {
    title: project.title,
  }
}

const getProject = async (slug: string) => {
  try {
    const query = groq`
      *[_type == "project" && slug.current == $slug][0] {
        _id,
        title,
        body,
        publishedAt,
        slug
      }
    `;
    const project = await client.fetch(query, { slug });
    return project;
  } catch (error) {
    console.log(error);
  }
};
export default async function Page({ params }: any) {
  const project = await getProject(params.slug);

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto">
      <Link href="/"></Link>
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <div className="text-gray-600">
        <PortableText value={project.body} />
      </div>
      <p className="text-gray-400">
        {new Date(project.publishedAt).toDateString()}
      </p>
    </article>
  );
}
