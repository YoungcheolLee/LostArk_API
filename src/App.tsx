import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { CharacterInfoPage } from "./pages/CharacterInfoPage";
import { CharacterListPage } from "./pages/CharacterListPage";
import { HomePage } from "./pages/HomePage";
import "./style/common.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character-list" element={<CharacterListPage />} />
        <Route path="/character-info" element={<CharacterInfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
