import React from "react";
import { useDispatch } from "react-redux";
import useInput from "../../customHooks/useInput";
import { addNote } from "../../store/actions/noteAction";

const AddForm = () => {
  const [title, bindTitle, resetTitle] = useInput();
  const [content, bindContent, resetContent] = useInput();

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote({ title, content }));
    resetTitle();
    resetContent();
  };
  return (
    <div className="section">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">New Note</h5>
        <div className="input-field">
          <input
            type="text"
            id="note-title"
            className="validate"
            {...bindTitle}
          />
          <label htmlFor="note-title">Note Title</label>
        </div>
        <div className="input-field">
          <textarea
            id="note-content"
            className="materialize-textarea"
            {...bindContent}
          />
          <label htmlFor="note-content">Note Content</label>
        </div>
        <button className="btn bgreen" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
