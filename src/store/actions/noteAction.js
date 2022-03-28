export const addNote =
  (note) =>
  (dispatch, getState, { getFirestore }) => {
    getFirestore()
      .collection("notes")
      .add({
        ...note,
        favorite: false,
        createdAt: new Date(),
      })
      .then(() => console.log("Added note successfully"))
      .catch((e) => console.error(e));
  };

export const deleteNote =
  (note) =>
  (dispatch, getState, { getFirestore }) => {
    getFirestore()
      .collection("notes")
      .doc(note.id)
      .delete()
      .then(() => console.log("Deleted note successfully"))
      .catch((e) => console.error(e));
  };

export const toggleFav =
  (note) =>
  (dispatch, getState, { getFirestore }) => {
    const newFav = !note.favorite;
    getFirestore()
      .collection("notes")
      .doc(note.id)
      .update({
        favorite: newFav,
      })
      .then(() => console.log("toggle favorite success"))
      .catch((e) => console.error(e));
  };

export const editNote =
  (note) =>
  (dispatch, getState, { getFirestore }) => {
    getFirestore()
      .collection("notes")
      .doc(note.id)
      .update({
        title: note.title,
        content: note.content,
      })
      .then(() => console.log("note edit success"))
      .catch((e) => console.error(e));
  };
