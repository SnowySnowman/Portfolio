import Heading from "@/components/Heading";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className={styles.main}>
      <Heading title={"Narwhal Tutoring"} description={"Active & Commercialised tutoring website developed on Django"}/>
      <Link className="button" href="/">Go back</Link>
      <p style={{ maxWidth: "600px" }}>I have worked on this online tutoring website from scratch as a team outside of university and commercialised it.
        It uses Django framework. I focused on the features such as review systems and front-end designs.</p>
      <Image width={200*2} height={100*2} src="/narwhal.png" alt="Project" />
      <p>Click the button below to see the project in web!</p>
      <Link className="button" href="https://www.narwhaltutoring.com/">Visit Project</Link>
    </main>
  )
}
