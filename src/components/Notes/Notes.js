import React from "react";
import Note from "../Note/Note";

export default function Notes(props) {
  const { notes } = props;

  return notes.map((n) => <Note key={n.id} n={n} />);
}
