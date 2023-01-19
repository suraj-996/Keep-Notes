import { useState } from "react";
import notes from "./notes";
import "./styles.css";
const Area = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  };
  const submitNote = (e) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    e.preventDefault();
  };
  return (
    <div className="form">
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={notes.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={notes.content}
          placeholder="Take a note..."
          rows="3"
        ></textarea>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
};
export default Area;
