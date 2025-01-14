import Image from "next/image";
import { PortableText } from "@portabletext/react";

import client from "@/lib/sanity";
import BlogContent from "@/components/app/blog-content";

const BlogDetail = async ({ params }) => {
  const { slug } = await params;

  const blog = await client.fetch({
    query: `*[_type == 'blog' && slug.current == '${slug}'][0] {
    "cover_image": {
            "url": cover_image.asset->url,
            "caption": cover_image.caption
        },
        "_id": _id,
        "title": title,
        "category": category,
        "slug": slug.current,
        "category": category->name,
        "content": content[]{
            ...,
            _type == "image" => {
                "asset": asset->{url},
                "alt": alt
            }
        }
    }`,
    config: {
      cache: "force-cache",
      next: { revalidate: 60 },
    },
  });

  console.log(blog);

  return (
    <div className="container py-10">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-8 col-start-3">
          <h1 className="text-3xl">{blog.title}</h1>
          <p className="bg-cyan-700 inline-block px-3 py-1 rounded mt-3 mb-7">
            {blog.category}
          </p>
          <div className="relative">
            <Image
              src={blog.cover_image.url}
              alt={blog.title}
              width={1000}
              height={500}
              priority
            />
          </div>
          <BlogContent content={blog.content} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
