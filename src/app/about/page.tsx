import { info } from "@/app/resources/content";
import { baseURL } from "@/app/resources";
import { AboutContent } from "@/components/AboutContent";

export async function generateMetadata() {
  const title = info.title;
  const description = info.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/about`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Info() {
  return <AboutContent />;
}
