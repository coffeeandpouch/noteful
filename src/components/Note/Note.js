import React from "react";

import { Link } from "react-router-dom";

export default function Note(props) {
  const { n } = props;
  return (
    <div className="note">
      <h3>
        <Link to={`/notes/${n.id}`}>{n.name}</Link>
      </h3>
      <p>{new Date(n.modified).toDateString()}</p>
      {props.match && props.match.params.noteid && <p>{n.content}</p>}
    </div>
  );
}
