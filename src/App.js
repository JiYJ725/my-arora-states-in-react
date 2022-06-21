import React, { useState, useEffect } from "react";
// import agoraStatesDiscussions from "./data";

import NewDiscussion from "./components/NewDiscussion/NewDiscussion";
import Discussions from "./components/Discussions/Discussions";
import SearchID from "./components/Search/SearchID";
import { getDiscussion } from "./api/DiscusstionDataApi";

function App() {
  const [condition, setCondition] = useState({ method: "init", name: "" });
  const [discussions, setDiscussions] = useState([]);

  const searchHandler = (arg) => {
    setCondition(arg);
  };
  const addExpenseHandler = (discussion) => {
    setDiscussions((prevDiscussions) => [discussion, ...prevDiscussions]);
  };

  useEffect(() => {
    const result = getDiscussion(condition);
    result.then((list) => {
      setDiscussions(list);
    });
  }, [condition]);

  return (
    <div>
      <h1>JiYJ's Agora States</h1>
      <SearchID onSearchID={searchHandler} />
      <NewDiscussion onAddExpense={addExpenseHandler} />
      <Discussions items={discussions} />
    </div>
  );
}

export default App;
