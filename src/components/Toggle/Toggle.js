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
    <div class="toggle-btn" id="_1st-toggle-btn">
      <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
      <span></span>
    </div>
  );
};

export default Toggle;
