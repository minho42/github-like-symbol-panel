import "./globals.css";

export const metadata = {
  title: "Symbol panel",
  description: "GitHub like symbol panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
