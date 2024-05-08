import React, { useState, useEffect, useRef } from "react";
import { getAllLocation } from "../../services/Api";
import { useDispatch } from "react-redux";
import { addLocker } from "../../redux/actions/locker/lockerActions";
import { Button } from "../../ui/Button";
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


export function LockerMapLocations() {
  const [parcelLockers, setParcelLockers] = useState([]);
  const [selectedLocker, setSelectedLocker] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const modalRef = useRef(null);
  const mapRef = useRef(null);
  const vectorSourceRef = useRef(null);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await getAllLocation();
        setParcelLockers(response.parcelLockers);
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.error("Error fetching parcel lockers:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (parcelLockers.length === 0 || !mapRef.current) return;

    vectorSourceRef.current.clear();

    parcelLockers.forEach((locker) => {
      const markerIcon = new Icon({
        src: "/assets/icons/package.svg",
        anchor: [0.5, 1],
        scale: 1.4,
      });

      const markerStyle = new Style({
        image: markerIcon,
      });

      const marker = new Feature({
        geometry: new Point(fromLonLat([locker.getLng, locker.geoLat])),
        lockerId: locker.code,
      });

      marker.setStyle(markerStyle);
      vectorSourceRef.current.addFeature(marker);
    });
  }, [parcelLockers]);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current;

    map.on("click", (event) => {
      map.forEachFeatureAtPixel(event.pixel, (feature) => {
        const lockerId = feature.get("lockerId");
        if (lockerId) {
          const selectedLocker = parcelLockers.find(
            (locker) => locker.code === lockerId
          );
          setSelectedLocker(selectedLocker);
          setIsModalOpen(true);
        }
      });
    });
  }, [parcelLockers]);

  useEffect(() => {
    if (!mapRef.current) {
      const vectorSource = new VectorSource();
      vectorSourceRef.current = vectorSource;

      const vectorLayer = new VectorLayer({
        source: vectorSource,
      });

      const map = new Map({
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
          center: fromLonLat([16.3738, 45.815]),
          zoom: 6,
        }),
      });

      mapRef.current = map;
    }
  }, []);

  const closeModal = () => {
    setSelectedLocker(null);
    setIsModalOpen(false);
  };

  const handleSelectLocker = () => {
    if (selectedLocker) {
      setIsModalOpen(false);
      dispatch(addLocker(selectedLocker))
    }
  };

  return (
    <div>
      <div id="map" className="relative w-full mobile:h-200p desktop:h-400p">
      {loading && (
        <div className="absolute flex justify-center items-center top-20p left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-75 h-40p px-10p">
          <p className=" text-14p font-inter font-semibold"><i>Učitavanje paketomata...</i></p>
        </div>
      )}
        {isModalOpen && selectedLocker && (
          <div
            ref={modalRef}
            className="modal rounded-8p bg-white bg-opacity-80 w-260p absolute top-90p left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-9"
          >
            <div className="modal-content">
              <span
                className="close cursor-pointer flex justify-end pt-4p pr-4p"
                onClick={closeModal}
              >
                <img src="/assets/icons/cancel.svg" alt="" />
              </span>
              <div className="text-center px-4p pb-6p font-inter text-16p">
                <p>{selectedLocker.name}</p>
                <p>{selectedLocker.address}</p>
                <p>
                  {selectedLocker.zip} {selectedLocker.city}
                </p>
              </div>
              <div className="flex justify-center pb-10p">
                <Button
                  name="Potvrdi"
                  className="button w-124p h-40p rounded-8p text-16p leading-24p font-semibold font-inter"
                  onClick={handleSelectLocker}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
