import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Icon, LatLng, divIcon } from "leaflet";
import clsx from "clsx";
import { CATEGORIES, fetchWithFilters } from "../../services/ApiClient";
import { IPlace } from "../../interfaces/IPlace";
import {
  vetIcon,
  groomerIcon,
  petShopIcon,
  userPositionIcon,
} from "../MarkerIcons";
import "./Map.css";

const ContextualizedMap: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userPosition, setUserPosition] = useState<LatLng>();
  const [boundingBox, setBoundingBox] =
    useState<{ sw: [number, number]; ne: [number, number] }>();
  const [places, setPlaces] = useState<IPlace[]>([]);
  const [filters, setFilters] = useState({
    shop: true,
    vet: true,
    groomer: true,
  });

  const map = useMap();

  // Center the map on user position
  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setUserPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  // When the screen is moved sets the new center
  useEffect(() => {
    map.on("moveend", (e) => {
      const { _southWest: sw, _northEast: ne } = e.target.getBounds();
      setBoundingBox({ sw: [sw.lat, sw.lng], ne: [ne.lat, ne.lng] });
    });
  }, [map]);

  useEffect(() => {
    if (isLoading || !boundingBox) {
      return;
    }

    setIsLoading(true);

    const categories = Object.entries(filters)
      .filter(([_key, value]) => value)
      .map(([key]) => key); //will return an array of strings (elements that have value true)

    if (categories.length === 0) {
      setPlaces([]);
      return;
    }

    // Fetch catergories
    fetchWithFilters(
      categories as ("shop" | "vet" | "groomer")[],
      boundingBox
    ).then((result) => {
      setIsLoading(false);
      setPlaces(result);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, map, boundingBox]);

  const shopClick = () => {
    setFilters((curr) => ({
      ...curr,
      shop: !curr.shop,
    }));
  };

  const vetClick = () => {
    setFilters((curr) => ({
      ...curr,
      vet: !curr.vet,
    }));
  };

  const groomerClick = () => {
    setFilters((curr) => ({
      ...curr,
      groomer: !curr.groomer,
    }));
  };

  return (
    <>
      <div className="map_buttons">
        <button
          className={clsx("btn", "btn-primary", { selected: filters.shop })}
          onClick={shopClick}
        >
          {filters.shop ? "Hide" : "Show"} Pet Shops
        </button>
        <button
          className={clsx("btn", "btn-primary", { selected: filters.vet })}
          onClick={vetClick}
        >
          {filters.vet ? "Hide" : "Show"} veterinary clinics
        </button>
        <button
          className={clsx("btn", "btn-primary", { selected: filters.groomer })}
          onClick={groomerClick}
        >
          {filters.groomer ? "Hide" : "Show"} Groomers
        </button>
      </div>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}.png"
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
      />

      {places.map((place) => {
        let icon: Icon | ReturnType<typeof divIcon>;

        if (place.categories.find((c) => c.id === CATEGORIES.vet)) {
          icon = vetIcon;
        } else if (place.categories.find((c) => c.id === CATEGORIES.groomer)) {
          icon = groomerIcon;
        } else {
          icon = petShopIcon;
        }

        return place.geocodes.main === undefined ? (
          ""
        ) : (
          <Marker
            key={place.fsq_id}
            position={[
              place.geocodes.main.latitude,
              place.geocodes.main.longitude,
            ]}
            icon={icon}
          >
            <Popup>
              {place.name} <br /> {place.location.formatted_address}
            </Popup>
          </Marker>
        );
      })}
      {userPosition && (
        <Marker
          position={[userPosition.lat, userPosition.lng]}
          icon={userPositionIcon}
        />
      )}
    </>
  );
};

const Map: React.FC = () => {
  return (
    <div id="map-container">
      <MapContainer zoom={13} center={[41.0378688, -8.6388822]}>
        <ContextualizedMap />
      </MapContainer>
    </div>
  );
};

export { Map };
