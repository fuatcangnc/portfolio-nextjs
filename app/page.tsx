import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/ui/Hero";
import { project } from "@/utils";
import { groq, PortableText } from "next-sanity";
import client from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import PostCard from "@/components/ui/PostCard";

const getPosts = async () => {
  try {
    const query = `
      *[_type == "post"] {
        title,
        slug,
        body,
        publishedAt
      }
    `;
    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.log(error);
  }
};

const getProjects = async () => {
  try {
    const query = `
    *[_type == "project"] {
      title,
      slug,
      body,
        mainImage,
      publishedAt
    }
    `;
    const projects = await client.fetch(query);
    return projects;
  } catch (error) {
    console.log(error);
  }
};
export default async function Home() {
  const blogs = await getPosts();
  const projects = await getProjects();
  if (!blogs || blogs.length === 0) {
    return <div>No posts found</div>;
  }

  return (
    <main className="flex flex-col ">
      <Hero />

      <section className="py-10">
        <h2 className="text-2xl font-bold">💾 Latest Posts</h2>
        <div className="py-2">
          {blogs.map((blog:any, index:any) => (
            <PostCard blog={blog} key={index}></PostCard>

            // <Link href={`/posts/${blog.slug.current}`} key={index}>
            //   <div className="py-2 flex justify-between align-middle gap-2">
            //     <div>
            //       <h3 className="text-lg font-bold">{blog.title}</h3>
            //       <div className="text-gray-600">
            //         <PortableText value={blog.body} />
            //       </div>
            //       <div className="my-auto text-gray-400">
            //         <p>{new Date(blog.publishedAt).toDateString()}</p>
            //       </div>
            //     </div>
            //   </div>
            // </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold">💾 Latest Projects</h2>
        <div className="py-2 flex gap-3">
          {projects.map((project:any, index:any) => (
            <Link href={`/projects/${project?.slug.current}`} key={index}>
              <div className="py-2 flex justify-between align-middle gap-2">
                <div>
                  <h3 className="text-lg font-bold">{project?.title}</h3>
                  <div className="text-gray-600">
                    <PortableText value={project?.body} />
                  </div>
                  <div className="my-auto text-gray-400">
                    <p>{new Date(project?.publishedAt).toDateString()}</p>
                  </div>
                  <Image
                    src={urlForImage(project?.mainImage)}
                    width={200}
                    height={200}
                    alt=""
                  ></Image>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
