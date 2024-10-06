import styles from "./page.module.css";

import HomeText from "./home_text";
import HomeImg from "./home_img";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div
          /*
            wrapper for the image and text
          */
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <HomeImg />
          <HomeText />
        </div>
      </main>
    </div>
  );
}
