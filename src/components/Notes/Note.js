import { useDispatch } from "react-redux";
import moment from "moment";
import { deleteNote, toggleFav } from "../../store/actions/noteAction";
import { Link } from "react-router-dom";

const Note = ({ note }) => {
  const dispatch = useDispatch();
  const favIcon = note.favorite ? "favorite" : "favorite_border";

  const editHandler = () => {
    dispatch({ type: "EDIT_NOTE", payload: note });
  };
  return (
    <div className="note white">
      <div className="right-align">
        <i
          className="material-icons red-text"
          onClick={() => dispatch(toggleFav(note))}
        >
          {favIcon}
        </i>
        <i
          className="material-icons"
          onClick={() => dispatch(deleteNote(note))}
        >
          delete
        </i>
      </div>
      <Link to={`notes/${note.id}`}>
        <h5 className="black-text">{note.title}</h5>
      </Link>
      <p className="truncate">{note.content}</p>
      <p className="grey-text">{moment(note.createdAt.toDate()).fromNow()}</p>
      <div className="right-align">
        <Link to={`edit-note/${note.id}`}>
          <i className="material-icons black-text" onClick={editHandler}>
            edit
          </i>
        </Link>
      </div>
    </div>
  );
};

export default Note;
