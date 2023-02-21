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
          <Title>IP ADDRESS</Title>
          <Description>{data ? data.ip : `Loading`}</Description>

          <Title>LOCATION</Title>
          <Description>
            {data
              ? data.location.city === ""
                ? `${city}, ${data.location.country} `
                : `${data.location.city}, ${data.location.country} `
              : `Loading`}
          </Description>

          <Title>TIMEZONE</Title>
          <Description>{data ? data.location.timezone : "Loading"}</Description>

          <Title>ISP</Title>
          <Description>{data ? data.isp : `Loading`}</Description>
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
  max-width: 327px;
  margin: 0 auto;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  padding-top: 26px;
  display: grid;
  row-gap: 7px;
`;
const Title = styled.p`
  font-size: 10px;
  color: #2c2c2c;
  opacity: 0.5;
  margin-bottom: 7px;
  font-weight: 700;
`;
const Description = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: #2c2c2c;
`;
