import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { Outlet, useParams } from "react-router-dom";
import NotesList from "./NotesList";

const Favorites = () => {
  const params = useParams();
  console.log(params);
  useFirestoreConnect([
    {
      collection: "notes",
      where: ["favorite", "==", true],
      orderBy: ["createdAt", "desc"],
      storeAs: "favnotes",
    },
  ]);
  const favNotes = useSelector((state) => state.firestore.ordered.favnotes);
  return (
    <div>
      {!params.id && <NotesList notes={favNotes} />}
      <Outlet />
    </div>
  );
};

export default Favorites;
