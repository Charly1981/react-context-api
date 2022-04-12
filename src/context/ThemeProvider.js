import React from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
  const themes = {
    color: "#000",
    background: "#eee",
  };
  const [theme, setTheme] = React.useState(themes);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;