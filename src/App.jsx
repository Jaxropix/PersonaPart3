import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonaList from "./pages/PersonaList";
import PersonaDetail from "./pages/PersonaDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonaList />} />
        <Route path="/characters/:id" element={<PersonaDetail />} />
      </Routes>
    </Router>
  );
}
