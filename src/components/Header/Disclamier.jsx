import React from "react";

export default function Disclaimer() {
  const styles = {
    container: {
      backgroundColor: "#222",
      color: "white",
      textAlign: "center",
      padding: "12px 20px",
      fontSize: "20px",
      fontStyle: "italic",
    },
  };

  return (
    <div style={styles.container}>
      Disclaimer: This project is a Netflix clone built for learning and educational purposes only. It is not related with, or maintained by Netflix.
    </div>
  );
}
