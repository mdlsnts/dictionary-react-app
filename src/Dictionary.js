import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  const [message, setMessage] = useState("");
  let [result, setResult] = useState(null);
  function search(event) {
    event.preventDefault();

    function handleResponse(response) {
      setResult(response.data);
      console.log(response.data);
    }
    let apiKey = "o1tc4ebff6db3c7b81795bb7e3b230a1";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
    setMessage(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          placeholder="Search"
          className="search-form"
          value={message}
        />
        <button className="btn-search" onClick={() => setMessage("")}>
          Search
        </button>
      </form>
      <Result result={result} />
    </div>
  );
}
