import Link from "next/link";

export default function HomeText() {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <p style={{ fontSize: "clamp(24px, 8vw, 128px)" }}>hi, i&#39;m katie</p>
      <p style={{ fontSize: "clamp(18px, 4vw, 48px)" }}>
        my mcat score was a 522
      </p>
      <div
        style={{
          marginTop: "24px",
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "64px",
            backgroundColor: "#C2D6FF",
          }}
        >
          <Link href="/about">
            <p
              style={{
                textAlign: "center",
                maxWidth: "100px",
                fontSize: "clamp(14px, 2vw, 24px)",
                padding: "2px",
              }}
            >
              about me
            </p>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "64px",
            backgroundColor: "#C2D6FF",
          }}
        >
          <Link href="/services">
            <p
              style={{
                textAlign: "center",
                maxWidth: "100px",
                fontSize: "clamp(14px, 2vw, 24px)",
                padding: "2px",
                backgroundColor: "#C2D6FF",
              }}
            >
              services
            </p>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "64px",
            backgroundColor: "#C2D6FF",
          }}
        >
          <Link href="/contact">
            <p
              style={{
                textAlign: "center",
                maxWidth: "100px",
                fontSize: "clamp(14px, 2vw, 24px)",
                padding: "2px",
                backgroundColor: "#C2D6FF",
              }}
            >
              contact me
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
