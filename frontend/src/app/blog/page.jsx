import Image from "next/image";
import Link from "next/link";

import client from "@/lib/sanity";

const Blog = async () => {
  const blogs = await client.fetch({
    query: `*[_type == 'blog'] {
        "cover_image": {
            "url": cover_image.asset->url,
            "caption": cover_image.caption
        },
        "_id": _id,
        "title": title,
        "category": category,
        "slug": slug.current
    }`,
    config: {
      cache: "force-cache",
      next: { revalidate: 60 },
    },
  });

  return (
    <>
      <div className="container py-10">
        <div className="grid grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div className="border-[1px] border-zinc-800" key={blog._id}>
              <div className="relative">
                <Image
                  src={blog.cover_image.url}
                  alt={blog.title}
                  width={500}
                  height={350}
                />
              </div>
              <div className="relative p-4">
                <h2 className="text-lg mb-5">{blog.title}</h2>
                <Link href={`/blog/${blog.slug}`}>Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
