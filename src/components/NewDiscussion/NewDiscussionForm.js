import React, { useState } from "react";

import "./NewDiscussionForm.css";

const NewDiscussionForm = (props) => {
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // 페이지 리로드 방지

    const expenseData = {
      author: enteredAuthor,
      title: enteredTitle,
    };
    props.onSaveExpenseData(expenseData);
    setEnteredAuthor("");
    setEnteredTitle("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-discussion__controls">
        <div className="new-discussion__control">
          <label>Name</label>
          <input
            type="text"
            value={enteredAuthor}
            onChange={authorChangeHandler}
          />
        </div>
        <div className="new-discussion__control">
          <label>title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-discussion__control">
          <label>Question</label>
          <textarea placeholder="질문을 작성하세요" />
        </div>
      </div>
      <div className="new-discussion__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Discussion</button>
      </div>
    </form>
  );
};

export default NewDiscussionForm;
