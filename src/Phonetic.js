import React from "react";
import "./Dictionary.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic flex">
      <a href={props.phonetic.audio} target="_blank">
        Listen
      </a>{" "}
      {props.phonetic.text}
    </div>
  );
}
