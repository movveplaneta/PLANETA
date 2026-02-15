import { useState } from "react";
import RailSlider from "./RailSlider";

export default function App() {
  const [theme, setTheme] = useState("dark");

  const slides = [
    {
      image: "https://picsum.photos/id/10/1200/600",
      title: "Proyecto Uno",
      description: "Experiencia cinematográfica."
    },
    {
      image: "https://picsum.photos/id/20/1200/600",
      title: "Proyecto Dos",
      description: "Animaciones con física real."
    },
    {
      image: "https://picsum.photos/id/30/1200/600",
      title: "Proyecto Tres",
      description: "UI moderna y premium."
    }
  ];

  return (
    <div data-theme={theme}>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Cambiar Modo
      </button>

      <RailSlider slides={slides} />
    </div>
  );
}
