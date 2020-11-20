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

            <input
              type="text"
              placeholder="Content"
              name="note_content"
              aria-label="Note Content"
            />

            <select>
              <option key="folderOption[0]">
                `${this.state.folders[0].id}
              </option>
            </select>
            <input type="submit" value="Add Note" />
          </form>
        );
      }}
    </Context.Consumer>
  );
}
