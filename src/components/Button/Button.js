import React from "react";
import "./Button.scss";

const Button = ({ text, href, newTab }) => {
  return (
    <div>
      <button class="learn-more" href={href} target={newTab && "_blank"}>
        {text}
      </button>
      ;
    </div>
  );
};

export default Button;
