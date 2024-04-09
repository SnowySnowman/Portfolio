import Heading from "@/components/Heading";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className={styles.main}>
      <Heading title={"Project: opinion"} description={"Are you writing your opinion on comments? Or are comments writing your opinion?"}/>
      <Link className="button" href="/">Go back</Link>
      <p>I have some text here</p>
      <Image width={140*2} height={100*2} src="/react.webp" alt="Project" />
      <p>I have an image above that you can see.</p>
    </main>
  )
}
