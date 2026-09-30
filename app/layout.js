import "./globals.css";
export const metadata = {
  title: "Corebridge Labs — Software Engineering Studio",
  description:
    "Production-ready AI, blockchain, backend, full-stack and cloud engineering.",
  icons: {
    icon: "/icon.svg",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
