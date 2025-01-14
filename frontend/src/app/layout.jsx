import "./globals.css";

export const metadata = {
  title: "Next + Sanity Blog App",
  description: "Next + Sanity Blog App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
