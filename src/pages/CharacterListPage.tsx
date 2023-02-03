import { useLocation, useNavigate } from "react-router-dom";
import { CharacterInfo } from "../interfaces";

export const CharacterListPage = () => {
  const location = useLocation();
  const data: Array<CharacterInfo> = location.state;
  const navigate = useNavigate();

  const handleNavigateInfo = () => {
    return navigate("/character-info");
  };

  return (
    <div className="character-list-wrapper">
      <h1>CharacterList</h1>
      {data
        ? data.map((item, idx: number) => (
            <ul
              key={idx}
              className="character-item"
              onClick={handleNavigateInfo}
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
