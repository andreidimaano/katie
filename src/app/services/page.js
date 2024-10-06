"use client";

import NavBar from "../NavBar";
import useBodyBackground from "../usebodyBackground";
import styles from "./page.module.css";

export default function Services() {
  useBodyBackground("#D6C8FE");

  return (
    <div className={styles.page}>
      <NavBar currentPage={"services"} />
      <main className={styles.main}>
        <div>
          <p
            style={{
              marginBottom: "64px",
              textAlign: "center",
              fontSize: "clamp(24px, 5vw, 76px)",
            }}
          >
            SERVICES
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr repeat(3, 1.5fr) 1fr",
              gap: "24px",
              justifyItems: "center",
              height: "100%",
            }}
          >
            <div className={styles.column} style={{ gridColumn: "2 / span 1" }}>
              <p style={{ fontSize: "clamp(18px, 2.5vw, 36px)" }}>
                you get one free 10 minute consultation so i can understand what
                you need from me and answer questions you may have
              </p>
              <div className={styles.colbtn}>consultation</div>
            </div>
            <div className={styles.column} style={{ gridColumn: "3 / span 1" }}>
              <p style={{ fontSize: "clamp(18px, 2.5vw, 36px)" }}>
                we will decide on the best course of action for which methods
                best suit your learning style and how often we should meet per
                week.
              </p>
              <div className={styles.colbtn}>plan</div>
            </div>
            <div className={styles.column} style={{ gridColumn: "4 / span 1" }}>
              <p style={{ fontSize: "clamp(18px, 2.5vw, 36px)" }}>
                this is the execution portion where we will follow the plan up
                until you take the test and receive the best score ever
              </p>
              <div className={styles.colbtn}>execution</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
