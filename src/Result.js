import React from "react";
import "./Dictionary.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <section>
          <div class="row">
            <div class="col-md-6">
              <h2>{props.result.word}</h2>
            </div>
            <div class="col-md-6">
              {props.result.phonetics.map(function (phonetic, index) {
                return (
                  <div key={index}>
                    <Phonetic phonetic={phonetic} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {props.result.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
