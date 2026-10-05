import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.corebridgelabs.org"),
  title: "Corebridge Labs — Software Engineering Studio",
  description:
    "Corebridge Labs is a remote-first software engineering studio building AI, blockchain, backend and full-stack solutions for startups and growing companies.",
  icons: {
    icon: { url: "/icon.png", type: "image/png", sizes: "300x300" },
  },
  openGraph: {
    title: "Corebridge Labs — Software Engineering Studio",
    description:
      "AI, blockchain, backend and full-stack engineering for startups and growing companies.",
    url: "https://www.corebridgelabs.org/",
    siteName: "Corebridge Labs",
    type: "website",
  },
};

const organizationData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.corebridgelabs.org/#organization",
      name: "Corebridge Labs",
      url: "https://www.corebridgelabs.org/",
      logo: "https://www.corebridgelabs.org/icon.png",
      description:
        "A remote-first software engineering studio building AI, blockchain, backend and full-stack solutions.",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.corebridgelabs.org/#website",
      name: "Corebridge Labs",
      url: "https://www.corebridgelabs.org/",
      publisher: {
        "@id": "https://www.corebridgelabs.org/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
