import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import "../public/styles.css";
import notes from "./notes";
import { useState } from "react";
import Area from "./createArea";
export default function App() {
  const createNote = (note) => {
    return <Note key={note.key} title={note.title} content={note.content} />;
  };
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };
  return (
    <div className="App">
      <Header />
      <Area onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={1}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}
