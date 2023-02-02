import axios from "axios";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [newsData, setNewsData] = useState<any>([]);

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
    console.log(newsResponse);

    const lostarkData = newsResponse.data;
    setNewsData(lostarkData);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
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
  );
};
