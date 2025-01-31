import React, { useState } from "react";
import ReactQuill from "react-quill"; // Import the Quill editor component
import "react-quill/dist/quill.snow.css"; // Import styles for Quill
const RichTextEditor = () => {
  const [editorState, setEditorState] = useState("");

  const handleChange = (value) => {
    setEditorState(value);
  };

  return (
    <div>
      <ReactQuill
        value={editorState}
        onChange={handleChange}
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ align: [] }],
            ["bold", "italic", "underline"],
            ["link"],
            ["image"],
            [{ color: [] }, { background: [] }],
            ["clean"],
          ],
        }}
      />
      <div>
        <h3>Content:</h3>
        <div>{editorState}</div>
      </div>
    </div>
  );
};

export default RichTextEditor;

