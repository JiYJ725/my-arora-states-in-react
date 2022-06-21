import React, { useState } from "react";
import NewDiscussionForm from "./NewDiscussionForm";
import agoraStatesDiscussions from "../../data";

import "./NewDiscussion.css";

const NewDiscussion = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const avatarURL =
    "https://w7.pngwing.com/pngs/395/693/png-transparent-smiley-emoticon-smiley-miscellaneous-face-smiley.png";
  const newDate = new Date();
  const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);
    const expenseData = {
      ...enteredExpenseData,
      id: agoraStatesDiscussions.length + 1, // 이론적으로 같은 id가 생성될 수 있어서 완벽하게 고유한 id는 아니다.
      createdAt: newDate.toLocaleString("ko-kr"),
      avatarUrl: avatarURL,
      url: "https://velog.io/@zer0jun",
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-discussion">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <NewDiscussionForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewDiscussion;
