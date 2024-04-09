import Heading from "@/components/Heading";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className={styles.main}>
      <Heading title={"Escape Room"} description={"Can you escape from this house without getting killed?"}/>
      <Link className="button" href="/">Go back</Link>
      <p>I have some text here</p>
      <Image width={140*2} height={100*2} src="/react.webp" alt="Project" />
      <p>I have an image above that you can see.</p>
      <Link className="button" href="https://github.com/SnowySnowman/escape_room_game">Visit Project's Git Repository</Link>
    </main>
  )
}
