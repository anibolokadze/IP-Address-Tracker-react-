import axios from "axios";
import React, { useEffect } from "react";
import arrow from "../../images/icon-arrow.svg";
import styled from "styled-components";

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
    <Container>
      <Input
        placeholder="Search for any IP address or domain"
        onChange={handleChange}
        onKeyPress={keyPress}
      />
      <Search onClick={search}>
        <img src={arrow} />
      </Search>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  outline: none;
  width: 269px;
  border-radius: 15px 0 0 15px;
  border: none;
  height: 58px;
  color: #2c2c2c;
  padding-left: 24px;
  margin-bottom: 24px;
`;
const Search = styled.button`
  height: 58px;
  width: 58px;
  border: none;
  background-color: #000000;
  border-radius: 0 15px 15px 0;
  cursor: pointer;
  &:hover {
    background-color: #3f3f3f;
    transition: all 0.5s;
  }
`;
