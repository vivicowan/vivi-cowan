import React from "react";
import "./Toggle.css";

const Toggle = ({ onClose }) => {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
  );
};

export default Toggle;
