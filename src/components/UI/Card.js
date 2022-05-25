import React from "react";
import classes from "./Card.module.css";

// Added own className + props.className (children className) using `template literal`
const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
