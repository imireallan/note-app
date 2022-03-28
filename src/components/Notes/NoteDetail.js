import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import { useFirestoreConnect, isEmpty, isLoaded } from "react-redux-firebase";

const NoteDetail = () => {
  const params = useParams();
  useFirestoreConnect([{ collection: "notes", doc: params.id }]);
  const note = useSelector(
    ({ firestore: { data } }) => data.notes && data.notes[params.id]
  );

  const noteElement = !isLoaded(note) ? (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Loading...</span>
        </div>
        <div className="card-action grey lighten-4 grey-text"></div>
      </div>
    </div>
  ) : isEmpty(note) ? (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">The content is empty</span>
        </div>
        <div className="card-action grey lighten-4 grey-text"></div>
      </div>
    </div>
  ) : (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{note.title}</span>
          <p>{note?.content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>{moment(note.createdAt.toDate()).calendar()}</div>
        </div>
      </div>
    </div>
  );

  return noteElement;
};

export default NoteDetail;
