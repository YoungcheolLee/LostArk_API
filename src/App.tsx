import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { CharacterPage } from "./pages/CharacterPage";
import { HomePage } from "./pages/HomePage";
import "./style/common.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character" element={<CharacterPage />} />
      </Routes>
    </div>
  );
}

export default App;
