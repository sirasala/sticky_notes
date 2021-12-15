import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="New Note"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder=">>>Comment"
          rows="3"
        />
        <button onClick={submitNote}>
          <i class="fas fa-plus-square fa-3x"></i>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
