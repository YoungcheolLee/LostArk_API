import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CharacterInfo } from "../interfaces";

export const CharacterInfoPage = () => {
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

    console.log("detailInfo", detailInfo);
    return detailInfo;
  };

  console.log(characterDetailInfo());

  return <div>this is {characterName} detailinfo page</div>;
};
