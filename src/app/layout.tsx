import "./globals.css";
import type { Metadata } from "next";
import Layout from "./components/Layout";
import ThemeRegistry from "./ThemeRegistry";

export const metadata: Metadata = {
  title: "Frontend Task",
  description: "Frontend task with form and video",
  openGraph: {
    title: "Frontend Task",
    description: "Frontend task with form and video",
    url: "https://domain.com",
    type: "website",
    images: [
      {
        url: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=cloud", // ❗ Замени на настоящую ссылку на изображение
        width: 1200,
        height: 630,
        alt: "Frontend Task",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@twitterhandle",
    title: "Frontend Task",
    description: "Frontend task with form and video",
    images: [
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=cloud",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Layout>{children}</Layout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
