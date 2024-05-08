import React, { useState, useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Icon from "ol/style/Icon";
import Style from "ol/style/Style";
import "../../styles/LockerMapLocations.scss";

export function LockerOrderLocations({ order }) {
  const [map, setMap] = useState(null);
  const [parcelLocker, setParcelLocker] = useState(null);
  const vectorSourceRef = useRef(null);

  useEffect(() => {
    if (!order) return;

    setParcelLocker(order.parcel_locker);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!parcelLocker) return;

    const { geoLat, getLng } = parcelLocker;


    if (!map) {
      const vectorSource = new VectorSource();
      vectorSourceRef.current = vectorSource;

      const vectorLayer = new VectorLayer({
        source: vectorSource,
      });

      const newMap = new Map({
        target: "map",
        layers: [
          new TileLayer({
            source: new XYZ({
              url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            }),
          }),
          vectorLayer,
        ],
        view: new View({
          center: fromLonLat([getLng, geoLat]),
          zoom: 18,
        }),
      });

      setMap(newMap);
    } else {
      const vectorSource = vectorSourceRef.current;

      const markerIcon = new Icon({
        src: "/assets/icons/package.svg",
        anchor: [0.5, 1],
        scale: 1.4,
      });

      const markerStyle = new Style({
        image: markerIcon,
      });

      const marker = new Feature({
        geometry: new Point(fromLonLat([getLng, geoLat])),
      });

      marker.setStyle(markerStyle);
      vectorSource.clear(true); 
      vectorSource.addFeature(marker);

      if (map) {
        map.getView().animate({
          center: fromLonLat([getLng, geoLat]),
          zoom: 16,
          duration: 1000,
        });
      }
    }
  }, [map, parcelLocker]);

  return (
    <div id="map" className="w-full pt-10p mobile:h-200p desktop:h-400p"></div>
  );
}
