import React from "react";

import Card from "../UI/Card";
import DiscussionsList from "./DiscussionsList";

import "./Discussions";

const Discussions = (props) => {
  return (
    <div>
      <Card className="discussions">
        <DiscussionsList items={props.items} />
      </Card>
    </div>
  );
};

export default Discussions;
