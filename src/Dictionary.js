import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  const [message, setMessage] = useState("");
  let [result, setResult] = useState(null);
  let [photos, SetPhotos] = useState(null);

  function search(event) {
    event.preventDefault();

    function handleDictionaryResponse(response) {
      setResult(response.data[0]);
    }
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    function handlePexelResponse(response) {
      SetPhotos(response.data);
    }

    let pexelApiKey =
      "MwKR5PRsO2K9u5Jv95IUxVChp6lRRoatzacNlpB4mzwLqEc307PfuuHF";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: ` ${pexelApiKey}` };
    axios.get(pexelApiUrl, { headers: headers }).then(handlePexelResponse);
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
          placeholder=""
          className="search-form"
          value={message}
        />
        <button className="btn-search" onClick={() => setMessage("")}>
          Search
        </button>
      </form>

      <Result result={result} />
      <Photos photos={photos} />
    </div>
  );
}
