import { useState, useEffect } from "react";
// import "../component-styling/dogMap.css";
import { Marker, Popup, useMap, Circle, CircleMarker } from "react-leaflet";
// import "../components/dogMap/dogMap.css"
import '../Map/dogMap.css'

import { circleMarker, L } from "leaflet";

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const [bbox, setBbox] = useState([]); {/* Not needed - Not finished */}

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      setBbox(e.bounds.toBBoxString().split(",")); {/* Not needed - Not finished */}
    });
  }, [map]);

  return position === null ? null : (
    <Circle center={position} radius={2000} fillColor="green">
      {" "}
      <Marker position={position}>
        <Popup> You are here</Popup>
      </Marker>
    </Circle>
  );
}

export default LocationMarker;
