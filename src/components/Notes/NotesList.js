import Note from "./Note";

const NotesList = ({notes}) => {


  return (
    <div className="notes-list">
      {notes && notes.map((note) => <Note key={note.id} note={note} />)}
    </div>
  );
};

export default NotesList;
