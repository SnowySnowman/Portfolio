import Heading from "@/components/Heading";
import styles from "./page.module.css";
import PortfolioEntryCardGroup from "@/components/PortfolioEntryCardGroup";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Heading title={"Luna's Portfolio"} description={" I am a student studying Advanced Computing... I absolutely love Web Development! I created this website at a GDSC Event, which demonstrates my passion for all things tech."}/>
      <PortfolioEntryCardGroup entries={
        [
          {
            title: "Narwhal Tutoring",
            description: "Personal project on developing an web app for survey",
            image: "/narwhal.png",
            skills: ["Django", "Full stack", "Web development", "Real world"],
            href: "project-4",
          },
          {
            title: "USurveYD",
            description: "Description 2",
            image: "/react.webp",
            skills: ["Django", "JavaScript", "PostgreSQL", "Deployment"],
            href: "project-2",
          },
          {
            title: "Portfolio Website",
            description: "This website is a portfolio of my work, and a demonstration of my skills.",
            image: "/react.webp",
            skills: ["React", "Next.js", "CSS", "HTML", "JavaScript"],
            href: "project",
          },
          {
            title: "Escape Room",
            description: "Description 3",
            image: "/lock.webp",
            skills: ["Java", "First Project", "Collaborative work"],
            href: "project-3",
          },
        ]
      } />
      <Link className="button" href="https://github.com/SnowySnowman">Visit My Git Profile</Link>
      <br></br>
      <Link className="button" href="https://www.linkedin.com/in/minjung-shin-187565222/">Visit My LinkedIn Profile</Link>
      <br></br>
      <p>add resume</p>
      <br></br>
      <p>Currently located in: Sydney, Australia</p>
      <br></br>
      <p>Contact me! <b>email</b> lunashin0613@gmail.com | <b>mobile</b> 0402743423</p>
      <br></br>
      <p>could add form</p>
      <br></br>
      <p>copyright of the template to GDSC USYD 2024</p>
    </main>
  );
}
