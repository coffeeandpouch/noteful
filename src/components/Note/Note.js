import React from "react";
import { Link } from "react-router-dom";

import Context from "../../Context";

export default function Note(props) {
  const { match } = props;

  return (
    <Context.Consumer>
      {(value) => {
        const n = value.notes.find((n) => n.id === match.params.noteid);
        return (
          <div className="note">
            <h3>
              <Link to={`/notes/${n.id}`}>{n.name}</Link>
            </h3>
            <p>{new Date(n.modified).toDateString()}</p>
            {<button className="del">Delete Note</button>}

            {props.location && <p>{n.content}</p>}
          </div>
        );
      }}
    </Context.Consumer>
  );
}
