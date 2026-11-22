import { useState, useEffect } from "react";
import Sunny from "./Sunny.png";
import Rainy from "./Rainy.png";
import Cloudy from "./Cloudy.png";

function WeatherMoodWidget({ weather = "Sunny" }) {
  const [image, setImage] = useState(Sunny);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const weatherImages = {
      Sunny,
      Rainy,
      Cloudy,
    };

    setImage(weatherImages[weather] || Sunny);
  }, [weather]);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const theme = {
    Sunny: { bg: "#FFF9DB", border: "#FCC419", accent: "#F59F00" },
    Rainy: { bg: "#E7F5FF", border: "#339AF0", accent: "#1C7ED6" },
    Cloudy: { bg: "#F8F9FA", border: "#CED4DA", accent: "#495057" },
  }[weather] || { bg: "#FFF9DB", border: "#FCC419", accent: "#F59F00" };

  return (
    <div
      style={{
        backgroundColor: theme.bg,
        border: `2px solid ${theme.border}`,
        borderRadius: "16px",
        padding: "24px",
        width: "220px",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <h2 style={{ margin: "0 0 16px 0", fontSize: "1.4rem", color: "#212529" }}>
        {weather}
      </h2>

      <img
        src={image}
        alt={weather}
        style={{
          width: "72px",
          height: "72px",
          objectFit: "contain",
          marginBottom: "18px",
        }}
      />

      <div>
        <button
          type="button"
          onClick={handleClick}
          style={{
            backgroundColor: theme.accent,
            color: "#FFFFFF",
            border: "none",
            borderRadius: "8px",
            padding: "10px 18px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <span>Mood</span>
          <span
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              padding: "2px 8px",
              borderRadius: "12px",
              fontSize: "0.9rem",
            }}
          >
            {count}
          </span>
        </button>
      </div>
    </div>
  );
}

export default WeatherMoodWidget;