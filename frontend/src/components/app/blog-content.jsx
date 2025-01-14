import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

const BlogContent = ({ content }) => {
  const customComponents = {
    types: {
      image: ({ value }) => (
        <div className="relative w-full h-full">
          <Image
            src={value.asset.url}
            alt={value.alt || "Image"}
            fill
            className="!relative"
          />
        </div>
      ),
    },
    marks: {
      strong: ({ children }) => (
        <strong className="font-bold">{children}</strong>
      ),
      link: ({ value, children }) => (
        <Link
          href={value.href}
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </Link>
      ),
    },
    block: {
      h1: ({ children }) => (
        <h1 className="text-2xl font-bold my-2">{children}</h1>
      ),
      normal: ({ children }) => <p className="my-2">{children}</p>,
    },
  };

  return (
    <div className="mb-5">
      <PortableText value={content} components={customComponents} />
    </div>
  );
};

export default BlogContent;
