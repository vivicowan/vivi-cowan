import React from "react";
import "./Toggle.scss";
import styled from "styled-components";

export const ToggleDiv = styled.div`
  margin-top: 40px;
  margin-right: 5px;
  float: right;
  display: flex;
  flex-direction: row;
`;

const Toggle = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <ToggleDiv>
      <div className="sun">☀️</div>
      <input
        className="react-switch-checkbox"
        onClick={() => setDarkMode(!darkMode)}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label className="react-switch-label" htmlFor={`react-switch-new`}>
        <span className={`react-switch-button`} />
      </label>
      <div className="moon">🌙 </div>
    </ToggleDiv>
  );
};

export default Toggle;
