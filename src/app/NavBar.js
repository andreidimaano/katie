import React from "react";
import Link from "next/link";

const NavBar = ({ currentPage }) => {
  const renderButtons = () => {
    switch (currentPage) {
      case "about":
        return (
          <>
            <NavButton color="#C3D5FE" href="/" label="home" />
            <NavButton color="#C3D5FE" href="/services" label="services" />
            <NavButton color="#C3D5FE" href="/contact" label="contact me" />
          </>
        );
      case "services":
        return (
          <>
            <NavButton color="#C3D5FE" href="/about" label="about me" />
            <NavButton color="#C3D5FE" href="/" label="home" />
            <NavButton color="#C3D5FE" href="/contact" label="contact me" />
          </>
        );
      case "contact":
        return (
          <>
            <NavButton color="#F1DDFF" href="/about" label="about me" />
            <NavButton color="#F1DDFF" href="/services" label="services" />
            <NavButton color="#F1DDFF" href="/" label="home" />
          </>
        );
      default:
        return null;
    }
  };

  return <div style={styles.navbar}>{renderButtons()}</div>;
};

const NavButton = ({ href, label, color }) => (
  <Link style={styles.button} href={href}>
    <p style={{ ...styles.label, backgroundColor: color }}>{label}</p>
  </Link>
);

// CSS-in-JS styles for the NavBar and buttons
const styles = {
  navbar: {
    position: "fixed",
    left: 0,
    display: "flex",
    flexDirection: "column",
    gap: "64px",
  },
  button: {
    textDecoration: "none",
    maxWidth: "103px", // Controls button width
    textAlign: "center",
    cursor: "pointer",
    transition: "background-color 0.3s",
    fontSize: "clamp(14px, 2vw, 24px)",
  },
  label: {
    margin: 0,
    padding: "10px", // Added some padding for text
    wordWrap: "break-word", // Ensures text wraps into multiple lines
    whiteSpace: "normal", // Allows wrapping into new lines
    textAlign: "center", // Centers the text
    lineHeight: "1.2", // Adjust the line height for tighter spacing
  },
};

// Exporting the component
export default NavBar;
