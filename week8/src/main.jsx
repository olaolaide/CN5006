import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Counter from "./Counter.jsx";
import EmojiCounter from "./EmojeeCounters.jsx";
import WeatherMoodWidget from "./WeatherMoodWidget.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Counter />
    <div style={{display: "flex", gap:'10px'}}>
      <EmojiCounter pic="Love" />
      <EmojiCounter pic="Sad" />
      <EmojiCounter pic="Like" />
    </div>
   <div style={{display: "flex", gap:'10px'}}>
     <WeatherMoodWidget weather = "Sunny"/>
    <WeatherMoodWidget weather = "Rainy"/>
    <WeatherMoodWidget weather = "Cloudy"/>
   </div>
  </StrictMode>,
);
