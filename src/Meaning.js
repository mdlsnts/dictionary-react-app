import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <div>
        <p>
          {props.meaning.definition}
          <br />
          <em>{props.meaning.example}</em>
          <br />
          <Synonyms synonyms={props.meaning.synonyms} />
        </p>
      </div>
    </div>
  );

  //"Hello";
}

// meaning.definitions[0].definition;
