import { useState } from "react";
import Search from "./Components/SearchIP/index";
import Result from "./Components/Result/Index";
import Map from "./Components/Map/index";
import "./App.css";
import { IpData } from "./Interface";

export default function App() {
  const [IP, setIP] = useState<string>("");
  const [data, setData] = useState<IpData>();
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);

  return (
    <>
      <Search
        setData={setData}
        setLat={setLat}
        setLng={setLng}
        setIP={setIP}
        IP={IP}
      />
      <Result data={data} />
      <Map lat={lat} lng={lng} />
    </>
  );
}
