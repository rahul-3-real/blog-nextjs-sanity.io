import SanityClient from "next-sanity-client";

const client = new SanityClient({
  projectId: "odevo2fz",
  dataset: "production",
  useCdn: process.env.NODE_ENV === "production",
});

export default client;
