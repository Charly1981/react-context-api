import React from "react";
import { ThemeContext } from "../context/ThemeProvider";

const Navbar = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme.background,
        color: theme.color,
      }}
    >
      <h1>Navbar</h1>
      <label>Color Texto</label>
      <input
        type="color"
        onChange={(e) => setTheme({ ...theme, color: e.target.value })}
      />
      <label>Color Fondo</label>
      <input
        type="color"
        onChange={(e) => setTheme({ ...theme, background: e.target.value })}
      />
    </div>
  );
};

export default Navbar;
