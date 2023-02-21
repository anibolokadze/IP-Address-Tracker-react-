export interface IpData {
  ip: number;
  city?: string;
  country_code?: string;
  utc_offset?: number;
  org?: string;
  lat: number;
  long: number;
}

export interface MapProps {
  lat: number;
  long: number;
}
