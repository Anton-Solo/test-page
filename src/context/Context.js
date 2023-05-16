import React, { useState } from "react";

function ThemeProvider(props) {
  const ThemeContext = React.createContext("light");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
