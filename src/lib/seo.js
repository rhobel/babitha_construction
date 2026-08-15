// Shared shape for every page's metadata export — keeps canonical URLs and
// Open Graph tags consistent without repeating boilerplate on every route.
// metadataBase is set once in the root layout, so `path` here can stay
// relative (e.g. "/about/").
export function pageMetadata(path, { title, description }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Babitha Constructions",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
