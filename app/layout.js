import "./globals.css";

export const metadata = {
  title: "Symbols panel",
  description: "GitHub-like Symbols panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
