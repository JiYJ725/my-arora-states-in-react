import React from "react";
import Card from "../UI/Card";
import "./DiscussionsItem.css";

const DiscussionsItem = (props) => {
  return (
    <li>
      <Card className="discussion-item">
        <div className="discussion-avata-wrapper">
          <img
            className="discussion-item-avatar"
            src={props.avatarUrl}
            alt="avatar of dubipy"
          />
        </div>
        <div className="discussion-item-content">
          <h2 className="discussion-item-title">
            <a href={props.url}>{props.title}</a>
          </h2>
          <div className="discussion-item-information">
            {props.author} / {props.createdAt}
          </div>
        </div>
        <div className="discussion-item-answered">
          <p>☑</p>
        </div>
      </Card>
    </li>
  );
};

export default DiscussionsItem;
