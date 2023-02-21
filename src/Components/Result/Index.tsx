import { IpData } from "../../Interface";
import styled from "styled-components";

interface props {
  data: IpData | undefined;
}
export default function Index({ data }: props) {
  const city = data?.location.region.replace(``, "");

  return (
    <Wrapper>
      <Container>
        <Content>
          <Border>
            <Title>IP ADDRESS</Title>
            <Description>{data ? data.ip : `Loading`}</Description>
          </Border>

          <Border>
            {" "}
            <Title>LOCATION</Title>
            <Description>
              {data
                ? data.location.city === ""
                  ? `${city}, ${data.location.country} `
                  : `${data.location.city}, ${data.location.country} `
                : `Loading`}
            </Description>
          </Border>
          <Border>
            <Title>TIMEZONE</Title>
            <Description>
              {data ? data.location.timezone : "Loading"}
            </Description>
          </Border>
          <div>
            {" "}
            <Title>ISP</Title>
            <Description>{data ? data.isp : `Loading`}</Description>
          </div>
        </Content>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 294px;
  background: #ffffff;
  box-shadow: 0px 50px 50px -25px rgba(0, 0, 0, 0.0983665);
  border-radius: 15px;
  width: 327px;
  margin: 0 auto;
  position: relative;
  z-index: 10000;
  @media screen and (min-width: 1200px) {
    width: 1110px;
    height: 161px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  padding-top: 26px;
  display: grid;
  row-gap: 7px;
  @media screen and (min-width: 1200px) {
    width: 100%;
    height: 161px;
    padding-top: 0px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const Title = styled.p`
  font-size: 10px;
  color: #2c2c2c;
  opacity: 0.5;
  margin-bottom: 7px;
  font-weight: 700;
  @media screen and (min-width: 1200px) {
    font-size: 12px;
  }
`;
const Description = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: #2c2c2c;
  @media screen and (min-width: 1200px) {
    font-size: 26px;
  }
`;

const Border = styled.div`
  @media screen and (min-width: 1200px) {
    border-right: 1px solid #000000;
    padding-right: 32px;
  }
`;
