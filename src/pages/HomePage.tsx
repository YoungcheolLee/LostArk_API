import axios from "axios";
import { useState } from "react";

export const HomePage = () => {
  const [loaData, setLoaData] = useState<any>([]);
  const handleOnClick = async () => {
    const response = await axios.get(
      "https://developer-lostark.game.onstove.com/news/events",
      {
        headers: {
          accept: "application/json",
          authorization: process.env.REACT_APP_LOSTARK_APIKEY,
        },
      }
    );
    console.log(response);

    const lostarkData = response.data;
    setLoaData(lostarkData);
  };

  return (
    <div>
      <h1>LostArk Viewer!</h1>
      <button onClick={handleOnClick}>getData!</button>
      <hr />
      <h3>LostArk News</h3>
      <div className="newsList">
        {loaData.map((item: any, idx: any) => (
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
