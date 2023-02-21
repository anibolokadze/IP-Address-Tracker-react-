import axios from "axios";
import React, { useEffect } from "react";
import arrow from "../../images/icon-arrow.svg";
export default function Index({ setData, setLat, setLng, setIP, IP }: any) {
  const search = async () => {
    const response = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_f08ryL7xKDMbFwmM67YjKn9eNbAbQ&ipAddress=${IP}`
    );
    const Data = await response.data;
    setData(Data);
    setLat(Data.location.lat);
    setLng(Data.location.lng);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIP(e.target.value);
  };

  const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      search();
    }
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div>
      <input
        placeholder="Search for any IP address or domain"
        onChange={handleChange}
        onKeyPress={keyPress}
      />
      <button onClick={search}>
        <img src={arrow} />
      </button>
    </div>
  );
}
