import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} id="definition">
            <p className="definition">{definition.definition}</p>
            <p className="example">
              <em>{definition.example}</em>
            </p>
            <p className="synonym">
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );

  //"Hello";
}

// meaning.definitions[0].definition;
