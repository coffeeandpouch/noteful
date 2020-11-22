import React from "react";

import Context from "../../Context";

export default function AddNote(props) {
  const { history } = props;
  return (
    <Context.Consumer>
      {(value) => {
        const { folders = [] } = value || [];
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

            <div className="fmenu">
              <select name="folderId">
                {folders.map((folder) => (
                  <option key={folder.id} value={folder.id}>
                    {folder.name}
                  </option>
                ))}
              </select>
            </div>

            <input type="submit" />
          </form>
        );
      }}
    </Context.Consumer>
  );
}
