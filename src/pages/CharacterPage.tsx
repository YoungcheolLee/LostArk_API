import { useLocation } from "react-router-dom";
import { CharacterInfo } from "../interfaces";

export const CharacterPage = () => {
  const location = useLocation();
  const data: CharacterInfo[] = location.state;

  return (
    <div>
      {data
        ? data.map((item, idx) => (
            <ul key={idx} className="characterList">
              <hr />
              <li>Server: {item.ServerName}</li>
              <li>ID: {item.CharacterName}</li>
              <li>Server: {item.CharacterClassName}</li>
              <li>CharacterLV: {item.CharacterLevel}</li>
              <li>CharacterLV: {item.ItemAvgLevel}</li>
              <hr />
            </ul>
          ))
        : "no data"}
    </div>
  );
};
