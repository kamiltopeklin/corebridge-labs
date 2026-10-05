import "./globals.css";
export const metadata = {
  title: "Corebridge Labs — Software Engineering Studio",
  description:
    "Production-ready AI, blockchain, backend, full-stack and cloud engineering.",
  icons: {
    icon: { url: "/icon.png", type: "image/png", sizes: "300x300" },
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
