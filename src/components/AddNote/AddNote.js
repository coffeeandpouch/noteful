import React from "react";

import Context from "../../Context";

export default function AddNote(props) {
  const { history } = props;
  return (
    <Context.Consumer>
      {(value) => {
        return (
          <form onSubmit={(e) => value.addNote(e, history)}>
            <input
              type="text"
              placeholder="Note Name"
              name="note_name"
              aria-label="Note Name"
              required
            />
            <input type="submit" value="Add Note" />
          </form>
        );
      }}
    </Context.Consumer>
  );
}
