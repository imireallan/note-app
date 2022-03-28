import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import AddForm from "../Forms/AddForm";
import NotesList from "../Notes/NotesList";

export default function Layout() {
  useFirestoreConnect([
    { collection: "notes", orderBy: ["createdAt", "desc"] },
  ]);
  const notes = useSelector((state) => state.firestore.ordered.notes);
  return (
    <div className="container">
      <div className="row center-align">
        <div className="col s7">
          <AddForm />
        </div>
        <div className="col s5">
          <NotesList notes={notes} />
        </div>
      </div>
    </div>
  );
}
