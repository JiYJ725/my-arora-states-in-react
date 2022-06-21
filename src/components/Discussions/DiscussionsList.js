import React from "react";

import DiscussionsItem from "./DiscussionsItem";

import "./DiscussionsList.css";

const DiscussionsList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="discussions-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="discussions-list">
      {props.items.map((discussion) => (
        <DiscussionsItem
          key={discussion.id}
          createdAt={discussion.createdAt}
          title={discussion.title}
          url={discussion.url}
          avatarUrl={discussion.avatarUrl}
          author={discussion.author}
        />
      ))}
    </ul>
  );
};

export default DiscussionsList;
