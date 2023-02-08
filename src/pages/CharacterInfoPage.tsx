import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CharacterInfo } from "../interfaces";

export const CharacterInfoPage = () => {
  const location = useLocation();
  const characterInfoData: Array<CharacterInfo[]> = location.state;

  console.log("characterInfoData", characterInfoData);

  const characterDetatilInfo = async () => {
    const detatilInfo = await axios.get(
      `https://developer-lostark.game.onstove.com/armories/characters/${characterInfoData}/profiles`,
      {
        headers: {
          accept: "application/json",
          authorization: process.env.REACT_APP_LOSTARK_APIKEY,
        },
      }
    );

    console.log("detatilInfo", detatilInfo);
  };

  useEffect(() => {
    characterDetatilInfo();
  }, []);

  return <div>this is detailinfo page</div>;
};
