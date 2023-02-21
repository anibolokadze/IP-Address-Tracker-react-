import { useState } from "react";
import Search from "./Components/SearchIP/index";
import Result from "./Components/Result/Index";
import Map from "./Components/Map/index";
import { IpData } from "./Interface";
import styled from "styled-components";
import bgPattern from "./images/pattern-bg.png";
import "./App.css";
export default function App() {
  const [IP, setIP] = useState<string>("");
  const [data, setData] = useState<IpData>();
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);

  return (
    <Container>
      <Title>IP Address Tracker</Title>
      <Search
        setData={setData}
        setLat={setLat}
        setLng={setLng}
        setIP={setIP}
        IP={IP}
        data={data}
      />
      <Result data={data} />

      <Map lat={lat} lng={lng} center={[lat, lng]} />
    </Container>
  );
}

const Container = styled.div`
  background-image: url(${bgPattern});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 300px;
`;
const Title = styled.h1`
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  padding: 29px 0;
`;
