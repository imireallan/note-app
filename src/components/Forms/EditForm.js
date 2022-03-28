import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInput from "../../customHooks/useInput";
import { editNote } from "../../store/actions/noteAction";

const EditForm = () => {
  const selectedNote = useSelector((state) => state.note);
  const [title, bindTitle, resetTitle] = useInput(selectedNote.title);
  const [content, bindContent, resetContent] = useInput(selectedNote.content);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedNote = {
      ...selectedNote,
      title,
      content,
    };
    dispatch(editNote(updatedNote));
    resetTitle();
    resetContent();
    navigate("/");
  };

  return (
    <div className="section">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Edit Note</h5>
        <div className="input-field">
          <input
            type="text"
            id="note-title"
            className="validate"
            {...bindTitle}
          />
          <label className="active" htmlFor="note-title">
            Note Title
          </label>
        </div>
        <div className="input-field">
          <textarea
            id="note-content"
            className="materialize-textarea"
            {...bindContent}
          />
          <label className="active" htmlFor="note-content">
            Note Content
          </label>
        </div>
        <button className="btn bgreen" type="submit">
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditForm;
