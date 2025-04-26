import Heading from "@/components/Heading";
import styles from "./page.module.css";
import PortfolioEntryCardGroup from "@/components/PortfolioEntryCardGroup";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Heading title={"Luna's Portfolio"} description={" I am a student in Final year of Bachelor of Computing @ University of Sydney. This website is built using React. Please feel free to look around, and contact me if you have any question."}/>
      <PortfolioEntryCardGroup entries={
        [
          {
            title: "Narwhal Tutoring",
            description: "Active & Commercialised tutoring website developed on Django",
            image: "/narwhal.png",
            skills: ["Django", "Full stack", "Web development", "Real world"],
            href: "project-4",
          },
          {
            title: "USurveYD",
            description: "Team project for CodingFest 2024. Rewarding USYD survey platform web app",
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
          // {
          //   title: "Escape Room",
          //   description: "Description 3",
          //   image: "/lock.webp",
          //   skills: ["Java", "First Project", "Collaborative work"],
          //   href: "project-3",
          // },
        ]
      } />
      <Link className="button" href="https://github.com/SnowySnowman">Visit My Git Profile</Link>
      <br></br>
      <Link className="button" href="https://www.linkedin.com/in/minjung-shin-187565222/">Visit My LinkedIn Profile</Link>
      <br></br>
      <Link className="button" href="https://drive.google.com/file/d/1PIXgPXChtw6zE70-5pYWuUapef3oGZcZ/view?usp=sharing">Link to my resume</Link>
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
