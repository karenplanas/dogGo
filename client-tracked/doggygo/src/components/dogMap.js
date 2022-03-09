import { useState, useEffect, useCallback } from "react";
import "../component-styling/dogMap.css";
import { GiDogBowl } from "react-icons";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
  useMap,
  MapConsumer,
} from "react-leaflet";

// there is so much to do here but i have an idea of how to do it.

import { Icon, L } from "leaflet";

import LocationMarker from "./locationMarker";

const petShopIcon = new Icon({
  iconUrl: require("../static/icons/petShop.png"),
  iconSize: [30, 30],
});

const vetIcon = new Icon({
  iconSize: [30, 30],
  iconUrl: require("../static/icons/vet.png"),
});

const groomerIcon = new Icon({
  iconSize: [30, 30],
  iconUrl: require("../static/icons/prints.png"),
});

function DogMap() {
  const [petShops, setPetShops] = useState([]);
  const [vets, setVets] = useState([]);
  const [groomers, setGroomers] = useState([]);

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "fsq3qx9qlhqnNGwk86iRqQd7xt0tH9hVD5fk+5VhNkjbt7E=",
    },
  };

  const fetchShops = useCallback(async () => {
    const response = await fetch(
      "https://api.foursquare.com/v3/places/nearby?ll=52.24%2C0.71&query=pet%20supplies&limit=10",
      options
    );
    const json = await response.json();
    console.log(json.results);
    setPetShops(json.results);
  });

  const fetchVets = useCallback(async () => {
    const response = await fetch(
      "https://api.foursquare.com/v3/places/nearby?ll=52.24%2C0.71&query=veterinary&limit=10",
      options
    );
    const json = await response.json();
    console.log(json.results);
    setVets(json.results);
  });

  const fetchGroomers = useCallback(async () => {
    const response = await fetch(
      "https://api.foursquare.com/v3/places/nearby?ll=52.24%2C0.71&query=groomers&limit=10",
      options
    );
    const json = await response.json();
    console.log(json.results);
    setGroomers(json.results);
  });

  const shopClick = () => {
    fetchShops();
    setGroomers([]);
    setVets([]);
  };

  const vetClick = () => {
    fetchVets();
    setGroomers([]);
    setPetShops([]);
  };

  const groomerClick = () => {
    fetchGroomers();
    setPetShops([]);
    setVets([]);
  };

  const clearMarkers = () => {
    setGroomers([]);
    setPetShops([]);
    setVets([]);
  };

  return (
    <section id="dogMap">
      <h2>Everything your pet could want no matter where you are!</h2>
      <h5> keep your pet happy and healthy with our easy map</h5>
      <MapContainer
        center={[1.35, 135.8]}
        zoom={13}
        className="container mapContainer"
      >
        <div className="map_buttons">
          <button className="btn btn-primary" onClick={shopClick}>
            Pet Shops
          </button>
          <button className="btn btn-primary" onClick={vetClick}>
            veterinary clinics
          </button>
          <button className="btn btn-primary" onClick={groomerClick}>
            Groomers
          </button>
          <button className="btn btn-primary clear" onClick={clearMarkers}>
            Clear Markers
          </button>
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
        {vets.map((vet) => {
          return vet.geocodes.main === undefined ? (
            ""
          ) : (
            <Marker
              key={vet.fsq_id}
              position={[
                vet.geocodes.main.latitude,
                vet.geocodes.main.longitude,
              ]}
              icon={vetIcon}
            >
              <Popup>
                {vet.name} <br /> {vet.location.formatted_address}
              </Popup>
            </Marker>
          );
        })}
        {groomers.map((groomer) => {
          return groomer.geocodes.main === undefined ? (
            ""
          ) : (
            <Marker
              key={groomer.fsq_id}
              position={[
                groomer.geocodes.main.latitude,
                groomer.geocodes.main.longitude,
              ]}
              icon={groomerIcon}
            >
              <Popup>
                {groomer.name} <br /> {groomer.location.formatted_address}
              </Popup>
            </Marker>
          );
        })}
        <MapConsumer>
          {(map) => {
            console.log("map center:", map.getCenter());
            map.on("click", function (e) {
              <Marker position={e.latlng}></Marker>;
            });
            return null;
          }}
        </MapConsumer>
        <LocationMarker />
      </MapContainer>
    </section>
  );
}
export default DogMap;
