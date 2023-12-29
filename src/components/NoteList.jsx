import React from "react";
import Note from "./Note";

function NoteList(props) {
  return (
    <div className="note-container">
      {props.notes.map((noteitem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteitem.title}
            content={noteitem.content}
            theme={noteitem.theme}
            onDelete={props.onDelete}
          />
        );
      })}
    </div>
  );
}

export default NoteList;
