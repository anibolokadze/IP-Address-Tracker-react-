export interface IpData {
  ip: string;
  isp: string;
  location: {
    city: string;
    country: string;
    geonameId: number;
    lat: number;
    lng: number;
    region: string;
    timezone: string;
  };
}
export interface MapProps {
  lat: number;
  lng: number;
  center: [number, number];
}
