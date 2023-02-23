import axios from "axios";
import { useEffect, useState } from "react";
import { NewsInfo } from "../interfaces";

export const HomePage = () => {
  const [newsData, setNewsData] = useState<NewsInfo[]>([]);

  const fetchNews = async () => {
    const newsResponse = await axios.get(
      "https://developer-lostark.game.onstove.com/news/events",
      {
        headers: {
          accept: "application/json",
          authorization: process.env.REACT_APP_LOSTARK_APIKEY,
        },
      }
    );
    console.log("newsData", newsResponse);

    const lostarkData = newsResponse.data;
    setNewsData(lostarkData);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="newsList">
      {newsData.map((item, idx: number) => (
        <div key={idx} className="newsItem">
          <h2>{item.Title}</h2>
          <a target="_blank" rel="noreferrer" href={item.Link}>
            <img src={item.Thumbnail} alt="thumbnail" />
          </a>
          이벤트 기간: {item.StartDate} ~ {item.EndDate}
        </div>
      ))}
    </div>
  );
};
