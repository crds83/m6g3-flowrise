import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Header() {

  const client = createClient(); 

  const page = await client.getSingle("settings1");


    return 
      <header>
        <Link href="/">{settings1.data.site_title}</Link>
    <nav>
        <ul>
            {settings1.data.navigation.map(({link, label})=>(
                <li key={label}>
                        <PrismicNextLink field={link}>{label}</PrismicNextLink>
                </li>
            ))}
        </ul>
    </nav>
    </header>
} 