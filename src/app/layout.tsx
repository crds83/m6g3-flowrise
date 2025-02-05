import type { Metadata, ResolvingMetadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import clsx from "clsx";
import { createClient } from "@/prismicio";

import Header from "@/components/Header";

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
  const page = await client.getSingle("settings1");
 
  return {
    title: settings.data.site_title || "Artsphere",
    description: settings.data.meta_description || "Artshere is a great app for artists",
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

        <Header />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        
      </body>
    </html>
  );
}
