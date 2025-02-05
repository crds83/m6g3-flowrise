import type { Metadata, ResolvingMetadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import clsx from "clsx";
import { createClient } from "@/prismicio";


const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: 'swap'
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient(); 
  const page = await client.getSingle("settings");
 
  return {
    title: page.data.site_title || "Artsphere",
    description: page.data.meta_description || "Artshere is a great app for artists",
    openGraph: {
      images: [page.data.og_images.url || ""],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
      <body>

        <header>Header!</header>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <footer>Footer!</footer>
      </body>
    </html>
  );
}
