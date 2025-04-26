import Heading from "@/components/Heading";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

export default function Project() {
  return (
    <main className={styles.main}>
      <Heading title={"USurveYD"} description={"Rewarding survey webapp for USYD students"} />
      
      <Link className="button" href="/">Go back</Link>
      
      <p style={{ maxWidth: "600px" }}>
        This webapp project was submitted as part of the USYD Coding Fest 2024 submission.
        Through this platform, USYD students are able to get survey data quickly, and earn vouchers from answering survey questions. 
        This project received “Outstanding Project Idea Award Runner-Up”.
      </p>
      
      <p>Click below to see the submitted project poster:</p>
      
      {/* PDF Link */}
      <a 
        href="/files/usurveyd_poster.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="button"
        style={{ marginTop: '1rem', display: 'inline-block' }}
      >
        View Project Poster (PDF)
      </a>
    </main>
  );
}
