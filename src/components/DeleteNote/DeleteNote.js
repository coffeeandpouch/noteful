import React from "react";

import Context from "../../Context";

export default function DeleteNote(props) {
  return (
    <Context.Consumer>
      {(value) => {
        return <button>{DeleteNote}</button>;
      }}
    </Context.Consumer>
  );
}
