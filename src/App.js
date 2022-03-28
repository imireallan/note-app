import { Route, BrowserRouter, Routes } from "react-router-dom";
import Favorites from "./components/Notes/Favorites";
import Home from "./components/Home";
import LayOut from "./components/Layout";
import NoteDetail from "./components/Notes/NoteDetail";
import EditForm from "./components/Forms/EditForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<LayOut />} />
          <Route path="favorites" element={<Favorites />}>
            <Route path="notes/:id" element={<NoteDetail />} />
            <Route path="edit-note/:id" element={<EditForm />} />
          </Route>
          <Route path="notes/:id" element={<NoteDetail />} />
          <Route path="edit-note/:id" element={<EditForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
