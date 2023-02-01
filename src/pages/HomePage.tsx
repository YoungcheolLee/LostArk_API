import axios from "axios";
import { ChangeEvent, useState } from "react";

export const HomePage = () => {
  const [characterName, setCharacterName] = useState<any>("");
  const [newsData, setNewsData] = useState<any>([]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    return setCharacterName(e.target.value);
  };

  const handleSearch = async () => {
    const searchResponse = await axios.get(
      `https://developer-lostark.game.onstove.com/characters/${characterName}/siblings`,
      {
        headers: {
          accept: "application/json",
          authorization: process.env.REACT_APP_LOSTARK_APIKEY,
        },
      }
    );
    console.log(searchResponse);
  };

  const handleOnClick = async () => {
    const newsResponse = await axios.get(
      "https://developer-lostark.game.onstove.com/news/events",
      {
        headers: {
          accept: "application/json",
          authorization: process.env.REACT_APP_LOSTARK_APIKEY,
        },
      }
    );
    console.log(newsResponse);

    const lostarkData = newsResponse.data;
    setNewsData(lostarkData);
  };

  return (
    <div>
      <h1>LostArk sample API</h1>
      <div className="search">
        ID Search :
        <input value={characterName} onChange={handleSearchChange} />
        <button onClick={handleSearch}>검색</button>
      </div>
      <div className="header">
        <button onClick={handleOnClick}>업데이트 소식</button>
      </div>
      <hr />
      <div className="newsList">
        {newsData.map((item: any, idx: any) => (
          <div key={idx} className="newsItem">
            <h4>{item.Title}</h4>
            <a target="_blank" rel="noreferrer" href={item.Link}>
              <img src={item.Thumbnail} alt="thumbnail" />
            </a>
            {item.StartDate} ~ {item.EndDate}
          </div>
        ))}
      </div>
    </div>
  );
};
