import { useState, useEffect, useCallback } from "react";
import "../component-styling/dogMap.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
  useMap,
} from "react-leaflet";

import { Icon, L } from "leaflet";

import LocationMarker from "./locationMarker";

const petShopIcon = new Icon({
  iconUrl: require("../static/icons/petShop.png"),
  iconSize: [30, 30],
});

function DogMap() {
  const [petShops, setPetShops] = useState([]);

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "fsq3qx9qlhqnNGwk86iRqQd7xt0tH9hVD5fk+5VhNkjbt7E=",
    },
  };

  const fetchData = useCallback(async () => {
    const response = await fetch(
      "https://api.foursquare.com/v3/places/nearby?ll=52.2450%2C0.7179&query=pet%20supplies%20store&limit=10",
      options
    );
    const json = await response.json();
    console.log(json.results);
    setPetShops(json.results);
  });

  useEffect(() => {
    fetchData().catch((e) => console.log(e));
  }, []);

  return (
    <section id="dogMap">
      <h2>Everything your pet could want no matter where you are!</h2>
      <h5> keep your pet happy and healthy with our easy map</h5>
      <MapContainer
        center={[1.35, 135.8]}
        zoom={9}
        className="container mapContainer"
      >
        <div className="map_buttons">
          <button className="btn btn-primary"> Pet Shops </button>
          <button className="btn btn-primary"> veterinary clinics </button>
          <button className="btn btn-primary"> Pet Play </button>
        </div>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
        />
        {petShops.map((shop) => {
          return shop.geocodes.main === undefined ? (
            ""
          ) : (
            <Marker
              key={shop.fsq_id}
              position={[
                shop.geocodes.main.latitude,
                shop.geocodes.main.longitude,
              ]}
              icon={petShopIcon}
            >
              <Popup>
                {shop.name} <br /> {shop.location.formatted_address}
              </Popup>
            </Marker>
          );
        })}
        <LocationMarker />
      </MapContainer>
    </section>
  );
}
export default DogMap;
