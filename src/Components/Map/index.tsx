import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";
import * as L from "leaflet";
import { MapProps } from "../../Interface";

export default function index({ lat, lng }: MapProps) {
  const LiveLocation = ({ center }: MapProps) => {
    const map = useMap();
    map.setView(center);
    return null;
  };
  return (
    <div>
      <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
        <LiveLocation center={[lat, lng]} lat={0} lng={0} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}></Marker>
      </MapContainer>
    </div>
  );
}
const svgIcon = L.divIcon({
  html: `
  <svg xmlns="http://www.w3.org/2000/svg"
  width="46"
  height="56">
  <path fill-rule="evenodd"
  d="M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z"/>
  </svg>`,
  className: "svg-icon",
  iconSize: [40, 40],
});

L.Marker.prototype.options.icon = svgIcon;
