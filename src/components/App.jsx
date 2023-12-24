import React, { useEffect, useState } from "react";
import Top from "./Top";
import NoteList from "./NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(getting, []);
  function deleteNote(id) {
    setNotes((prevNotes) => {
      const newnote = prevNotes.filter((noteitem, index) => {
        return index !== id;
      });
      const stringNote = JSON.stringify(newnote);
      localStorage.setItem("note", stringNote);
      return newnote;
    });
  }
  function addNote(newnote) {
    setNotes((prevNotes) => {
      const newNote = [...prevNotes, newnote];
      const stringNote = JSON.stringify(newNote);
      localStorage.setItem("note", stringNote);
      return newNote;
    });
  }

  function getting() {
    const getlist = localStorage.getItem("note");

    const getlistparsed =
      JSON.parse(getlist) === null ? [] : JSON.parse(getlist);
    setNotes(getlistparsed);
  }

  return (
    <>
      <Top onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </>
  );
}

export default App;
