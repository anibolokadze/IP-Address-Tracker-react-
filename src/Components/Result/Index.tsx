import { IpData } from "../../Interface";
interface props {
  data: IpData | undefined;
}
export default function Index({ data }: props) {
  const city = data?.location.region.replace(``, "");

  return (
    <div>
      <div>
        <p>IP ADDRESS {data ? data.ip : `Loading`}</p>
        <p>
          LOCATION
          {data
            ? data.location.city === ""
              ? `${city}, ${data.location.country} `
              : `${data.location.city}, ${data.location.country} `
            : `Loading`}
        </p>
        <p>TIMEZONE {data ? data.location.timezone : "Loading"}</p>
        <p>ISP {data ? data.isp : `Loading`}</p>
      </div>
    </div>
  );
}
