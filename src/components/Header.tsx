import axios from "axios";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [characterName, setCharacterName] = useState<string>("");
  const navigate = useNavigate();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    return setCharacterName(e.target.value);
  };

  const handleSearch = async () => {
    const characterResonse = await axios.get(
      `https://developer-lostark.game.onstove.com/characters/${characterName}/siblings`,
      {
        headers: {
          accept: "application/json",
          authorization: process.env.REACT_APP_LOSTARK_APIKEY,
        },
      }
    );

    const chracterInfomation = characterResonse.data;
    console.log("characterInfo", chracterInfomation);

    navigate("/character", {
      state: chracterInfomation,
    });
  };

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <header>
      <h1 onClick={handleNavigateHome}>LostArk sample API</h1>
      <div className="search">
        ID Search :
        <input
          type="search"
          value={characterName}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch}>검색</button>
      </div>
    </header>
  );
};
