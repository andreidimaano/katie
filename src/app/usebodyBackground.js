"use client";

import { useEffect } from "react";

export default function useBodyBackground(color) {
  useEffect(() => {
    // Set the body's background color to the provided color
    document.body.style.backgroundColor = color;

    return () => {
      // Reset the body's background color when the component unmounts
      document.body.style.backgroundColor = "";
    };
  }, [color]);
}
