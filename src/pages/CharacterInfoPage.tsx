import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterDetailInfo } from "../interfaces/CharacterDetailInfo";

export const CharacterInfoPage = () => {
  const [characterInfo, setCharacterInfo] = useState<CharacterDetailInfo[]>([]);
  const { characterName } = useParams<string>();

  const characterDetailInfo = async () => {
    const detailInfo = await axios.get(
      `https://developer-lostark.game.onstove.com/armories/characters/${characterName}/profiles`,
      {
        headers: {
          accept: "application/json",
          authorization: process.env.REACT_APP_LOSTARK_APIKEY,
        },
      }
    );

    console.log("characterDetailInfo", detailInfo);
    const data = detailInfo.data;
    console.log("data", data);
    setCharacterInfo(data);
  };

  useEffect(() => {
    characterDetailInfo();
  });

  return (
    <div>
      <span>{characterName} deatil infomation page</span>
      {/* {characterInfo.map((item, idx) => {
        <div>{item.CharacterClassName}</div>;
      })} */}
    </div>
  );
};
