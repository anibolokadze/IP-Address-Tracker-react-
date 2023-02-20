import axios from "axios";
import React from "react";
import { IpData } from "../../Interface";

export default function index({ setIpAddress, setData, ipAddress, data }: any) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIpAddress(event.target.value);
  };

  const handleSearchClick = () => {
    axios
      .get<IpData>(`https://ipapi.co/${ipAddress}/json/`)
      .then((response) => setData(response.data))
      .catch((error) => {
        setData(null);
      });
    setIpAddress(ipAddress);
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={ipAddress}
          onChange={handleInputChange}
          placeholder="Search for any IP address or domain"
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>

      {data ? (
        <div>
          <p>IP Address: {data.ip}</p>
          <p>Timezone: {data.utc_offset ?? "Timezone not found"}</p>
          <p>
            Location:{" "}
            {data.city && data.country_code
              ? `${data.city}, ${data.country_code}`
              : "Location not found"}
          </p>
          <p>ISP: {data.org ?? "ISP not found"}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
