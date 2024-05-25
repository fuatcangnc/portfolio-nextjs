import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const projects = "projects";
const files = fs.readdirSync(path.join(projects));
export const project = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(projects, filename), "utf-8");

    const { data: frontMattter } = matter(fileContent);
    return {
        meta: frontMattter,
        slug: filename.replace(".mdx", ""),
    };
});


