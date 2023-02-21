import axios from "axios";
import { useEffect, useState } from "react";
import { IpData } from "./Interface";
import SearchIP from "./Components/SearchIP/index";
import Map from "./Components/Map/index";
import "./App.css";
function App() {
  const [data, setData] = useState<IpData | null>(null);
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    const defaultIpAddress = "";
    setIpAddress(defaultIpAddress);
    axios
      .get<IpData>(`https://ipapi.co/${defaultIpAddress}/json/`)
      .then((response) => setData(response.data))
      .catch((error) => {
        setData(null);
      });
  }, []);

  return (
    <div>
      <SearchIP
        setIpAddress={setIpAddress}
        setData={setData}
        ipAddress={ipAddress}
        data={data}
      />
      <Map lat={0} long={0} />
    </div>
  );
}

export default App;
