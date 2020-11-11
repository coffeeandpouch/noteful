import React from "react";
import Note from "../Note/Note";

import Context from "../../Context";

export default function Notes(props) {
  const { match } = props;

  return (
    <Context.Consumer>
      {(value) => {
        const notes = match.params.folderid
          ? value.notes.filter((n) => n.folderId === match.params.folderid)
          : value.notes;
        return notes.map((n) => (
          <Note key={n.id} match={{ params: { noteid: n.id } }} />
        ));
      }}
    </Context.Consumer>
  );
}
