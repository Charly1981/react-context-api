import React from "react";

const Navbar = () => {
  const [color, setColor] = React.useState("");
  const [colorTexto, setColorTexto] = React.useState("#000");

  return (
    <div
      style={{
        background: color,
        color: colorTexto,
      }}
    >
      <h1>Navbar</h1>
      <input type="color" onChange={(e) => setColor(e.target.value)} />
      <input type="color" onChange={(e) => setColorTexto(e.target.value)} />
    </div>
  );
};

export default Navbar;
