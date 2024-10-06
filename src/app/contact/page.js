"use client";

import NavBar from "../NavBar";
import useBodyBackground from "../usebodyBackground";
import styles from "./page.module.css";

export default function Contact() {
  useBodyBackground("#C3D5FE");

  return (
    <div className={styles.page}>
      <NavBar currentPage={"contact"} />
      <main className={styles.main}>
        <div>
          <p
            style={{
              marginBottom: "64px",
              textAlign: "center",
              fontSize: "clamp(24px, 5vw, 76px)",
            }}
          >
            CONTACT ME
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr 1fr",
              // gap: "24px",
              // justifyItems: "center",
              alignItems: "start",
              height: "100%",
            }}
          >
            <div
              style={{ width: "100%", gridColumn: "2 / span 1" }}
              className={styles.colbtn}
            >
              schedule consultation:&nbsp;&nbsp;
              <span style={{ textDecoration: "underline" }}>
                <a href="https://calendly.com/">calendly link</a>
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
