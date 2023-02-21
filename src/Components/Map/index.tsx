import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";

interface Props {
  lat: number;
  long: number;
}

export default function index(props: Props) {
  function ChangeView(props: any) {
    const map = useMap();
    map.setView(props.center);
    return null;
  }
  return (
    <div className="App">
      <MapContainer
        center={[props.lat, props.long]}
        zoom={13}
        zoomControl={false}
        scrollWheelZoom={false}
      >
        <ChangeView center={[props.lat, props.long]} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[props.lat, props.long]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
