import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "yourProjectId",
  dataset: "yourDataset",
  apiVersion: "2021-10-21", // oder die gewünschte Version
  useCdn: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
