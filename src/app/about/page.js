"use client";

import styles from "./page.module.css";
import Image from "next/image";
import katie_tongue from "../../images/katie_tongue.png";
import useBodyBackground from "../usebodyBackground";
import NavBar from "../NavBar";

export default function About() {
  useBodyBackground("#FFE0FF");

  return (
    <div className={styles.page}>
      <NavBar currentPage={"about"} />
      <main className={styles.main}>
        <div>
          <p
            style={{
              marginBottom: "40px",
              textAlign: "center",
              fontSize: "clamp(24px, 5vw, 76px)",
            }}
          >
            ABOUT ME
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "3fr 7fr 4fr",
              justifyItems: "center",
            }}
          >
            <div style={{ gridColumn: "2 / span 1" }}>
              <p style={{ fontSize: "clamp(18px, 2.5vw, 36px)" }}>
                hi, my name is katie osako. i&#39;m a human bio major and health
                innovation minor at the university of southern california.
                #victor #gotrojans # fucla
              </p>
              <br />
              <p style={{ fontSize: "clamp(18px, 2.5vw, 36px)" }}>
                i took the mcat on august 23rd and ate it down. i got a 522
                through sheer determination and hard work. you&#39;re probably
                really jealous but you don&#39;t have to be. i will help you
                score well on your mcat. probably not better than me but close
                enough.
              </p>
            </div>
            <Image
              src={katie_tongue}
              alt="katie sticking out her tongue"
              style={{
                border: "2px black solid",
                width: "300",
                height: "200",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
