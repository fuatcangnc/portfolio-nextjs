import Link from "next/link";
import React from "react";
function PostCard({blog}:any) {
  return (
    <aside className="flex justify-between items-center w-full relative pb-4 border-t-0 border-r-0 border-b border-l-0 border-[#e8eef3]">
      <Link
        href={`/posts/${blog?.slug.current}`}
        className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#090513]"
      >{blog?.title}</Link>
      <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#6A24FF]">
      {new Date(blog.publishedAt).toDateString()}
      </p>
    </aside>
  );
}

export default PostCard;
