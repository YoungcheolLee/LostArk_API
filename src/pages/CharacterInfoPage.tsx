import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterDetailInfo } from "../interfaces/CharacterDetailInfo";

export const CharacterInfoPage = () => {
  const [characterInfo, setCharacterInfo] = useState<CharacterDetailInfo>();
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

    console.log("DetailInfo", detailInfo);
    const data = detailInfo.data;

    setCharacterInfo(data);
  };

  useEffect(() => {
    characterDetailInfo();
  }, []);

  return (
    <div className="character-detailInfo-wrapper">
      <div className="left-sort">
        <table className="character-detailInfoTable">
          <thead>
            <tr>
              <th>서버</th>
              <td>{characterInfo?.ServerName}</td>
            </tr>
            <tr>
              <th>직업 </th>
              <td>{characterInfo?.CharacterClassName}</td>
            </tr>
            <tr>
              <th>아이디</th>
              <td>{characterInfo?.CharacterName}</td>
            </tr>
            <tr>
              <th>원정대레벨</th>
              <td>{characterInfo?.ExpeditionLevel}</td>
            </tr>
            <tr>
              <th>전투레벨 </th>
              <td>{characterInfo?.CharacterLevel}</td>
            </tr>
            <tr>
              <th>아이템레벨</th>
              <td>{characterInfo?.ItemAvgLevel}</td>
            </tr>
            <tr>
              <th>길드</th>
              <td>{characterInfo?.GuildName}</td>
            </tr>
            <tr>
              <th>영지</th>
              <td>
                {characterInfo?.TownName} [ {characterInfo?.TownLevel}레벨 ]
              </td>
            </tr>
            <tr>
              <th>PVP</th>
              <td>{characterInfo?.PvpGradeName}</td>
            </tr>
            <tr>
              <th>스킬포인트</th>
              <td>{characterInfo?.TotalSkillPoint}</td>
            </tr>
            <tr>
              <th>사용중인스킬포인트</th>
              <td>{characterInfo?.UsingSkillPoint}</td>
            </tr>
          </thead>
        </table>
      </div>

      <div className="right-sort">
        <table>
          <tr>
            <td>
              <img
                src={characterInfo?.CharacterImage}
                alt="characterDetailInfo"
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
