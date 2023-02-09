import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterInfo } from "../interfaces";

export const CharacterInfoPage = () => {
  const [detailInfoData, setDetailInfoData] = useState<CharacterInfo[]>([]);
  const { characterName } = useParams();

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

    const data = detailInfo.data;
    console.log("data", data);

    setDetailInfoData(data);
  };

  useEffect(() => {
    characterDetailInfo();
  });

  console.log(characterDetailInfo());

  return (
    <div>
      <span>this is {characterName} detailinfo page</span>
      {detailInfoData.map((item, idx: number) => {
        return <div key={idx}>{item.CharacterClassName}</div>;
      })}
    </div>
  );
};
