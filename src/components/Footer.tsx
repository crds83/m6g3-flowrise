import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";


export default async Function(){
    const client = createClient(); 

    const page = await client.getSingle("settings1");

    return (
        <footer>
        <Link href="/">{setting1.data.site_title}</Link>
        <p>©{new Date().getFullYear()}</p>
        <ul>
            {settings1.data.navigation.map(({link, label})=>(
                <li key={label}>
                        <PrismicNextLink field={link}>{label}</PrismicNextLink>
                </li>
            ))}
        </ul>
        
        </footer>
    )
    
}