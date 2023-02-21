import { useState } from "react";
import Search from "./Components/SearchIP/index";
import Result from "./Components/Result/Index";
import Map from "./Components/Map/index";
import "./App.css";
import { IpData } from "./Interface";
import styled from "styled-components";

export default function App() {
  const [IP, setIP] = useState<string>("");
  const [data, setData] = useState<IpData>();
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);

  return (
    <Container>
      <Search
        setData={setData}
        setLat={setLat}
        setLng={setLng}
        setIP={setIP}
        IP={IP}
      />
      <Result data={data} />
      <Map lat={lat} lng={lng} center={[lat, lng]} />
    </Container>
  );
}

const Container = styled.div`
  background-image: url("images/pattern-bg.png");
  /* background-color: blue; */
  background-position: center;
  height: 260px;
`;
