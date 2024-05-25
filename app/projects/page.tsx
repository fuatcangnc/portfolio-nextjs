import React from 'react'
import { project } from "@/utils";
import Link from 'next/link';
function page() {
  return (
    <div>
        {
        project?.map((p:any,index:any)=>(
          <Link href={`/projects/${p.slug}`} key={index}>{p.meta.title}</Link>
        ))
      }
    </div>
  )
}

export default page