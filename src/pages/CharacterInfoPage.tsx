import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterDetailInfo } from "../interfaces/CharacterDetailInfo";

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
    const data = detailInfo.data;
    console.log("data", data);
  };

  useEffect(() => {
    characterDetailInfo();
  });

  return <span>this is {characterName} detailinfo page</span>;
};
