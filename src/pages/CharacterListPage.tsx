import { useLocation, useNavigate } from "react-router-dom";
import { CharacterInfo } from "../interfaces";

export const CharacterListPage = () => {
  const location = useLocation();
  const data: Array<CharacterInfo> = location.state;
  const navigate = useNavigate();

  console.log("data", data);

  const handleNavigateInfo = (characterName: string) => {
    navigate(`/character-info/${characterName}`);
  };

  return (
    <div className="character-list-wrapper">
      <h1>CharacterList</h1>
      {data
        ? data.map((item) => (
            <ul
              key={item.CharacterName}
              className="character-item"
              onClick={() => handleNavigateInfo(item.CharacterName)}
            >
              <hr />
              <li>Server: {item.ServerName}</li>
              <li>Job: {item.CharacterClassName}</li>
              <li>Item Lv: {item.ItemAvgLevel}</li>
              <li>Name: {item.CharacterName}</li>
              <hr />
            </ul>
          ))
        : "no data"}
    </div>
  );
};
