import Image from "next/image";
import katie_mcat from "../images/katie_mcat_score.png";
import katie_sitting from "../images/katie_sitting.png";

export default function HomeImg() {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          position: "relative",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <div
          style={{
            gridColumn: "1 / span 6",
            gridRow: "1 / span 3",
            position: "relative",
            width: "100%" /* Ensures image fits within grid cell */,
            height: "0",
            paddingBottom: "125%",
          }}
        >
          <Image
            src={katie_mcat}
            alt="katie's amazing mcat score'"
            layout="fill"
            objectFit="cover"
            style={{
              border: "2px black solid",
            }}
          />
        </div>
        <div
          style={{
            zIndex: 1,
            gridRow: "2 / span 4",
            gridColumn: "4 / span 6",
            position: "relative",
            width: "100%",
            height: "0",
            paddingBottom: "125%",
          }}
        >
          <Image
            src={katie_sitting}
            alt="katie but really amazing"
            layout="fill"
            objectFit="cover"
            style={{
              border: "2px black solid",
            }}
          />
        </div>
      </div>
    </div>
  );
}
