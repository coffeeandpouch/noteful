import React from "react";

import Context from "../../Context";

export default function AddFolder(props) {
  const { history } = props;
  return (
    <Context.Consumer>
      {(value) => {
        return (
          <form onSubmit={(e) => value.addFolder(e, history)}>
            <input
              type="text"
              placeholder="Folder Name"
              name="folder_name"
              aria-label="Folder Name"
              required
            />
            <input type="submit" value="Add Folder" />
          </form>
        );
      }}
    </Context.Consumer>
  );
}
