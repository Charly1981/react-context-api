import React from "react";
import Navbar from "./components/Navbar";
import Principal from "./components/Principal";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Principal />
    </ThemeProvider>
  );
}

export default App;
