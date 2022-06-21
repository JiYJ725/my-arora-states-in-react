import React, { useState } from "react";

import "./SearchID.css";

const SearchID = (props) => {
  const [enteredID, setEnteredID] = useState("");

  const IDChangeHandler = (event) => {
    setEnteredID(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault(); // 페이지 리로드 방지
    props.onSearchID({ method: "GET", name: enteredID });
    setEnteredID("");
  };
  return (
    <form className="search-discussion" onSubmit={submitHandler}>
      <div className="search-discussion__controls">
        <div className="search-discussion__control">
          <label>Name</label>
          <input type="text" value={enteredID} onChange={IDChangeHandler} />
        </div>
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchID;
