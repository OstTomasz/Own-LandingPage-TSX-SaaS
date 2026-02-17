import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import styles from "./GoogleMap.module.scss";

const lubinCoords = { lat: 51.3971, lng: 16.2043 };

const mapStyles = [
  {
    featureType: "landscape.natural" as const,
    elementType: "geometry.fill" as const,
    stylers: [{ color: "#e0efef" }],
  },
  {
    featureType: "poi" as const,
    elementType: "geometry.fill" as const,
    stylers: [{ color: "#c0e8e8" }],
  },
  {
    featureType: "road" as const,
    elementType: "geometry" as const,
    stylers: [{ lightness: 100 }, { visibility: "simplified" }],
  },
  {
    featureType: "road" as const,
    elementType: "labels" as const,
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water" as const,
    elementType: "all" as const,
    stylers: [{ color: "#7dcdcd" }],
  },
];

export const GoogleMap = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={styles.mapContainer}>
      <div className={styles.overlay} />
      <div className={styles.mapWrapper}>
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <Map
            defaultCenter={lubinCoords}
            defaultZoom={14}
            mapId="webstudio-map"
            disableDefaultUI
            gestureHandling="cooperative"
            styles={mapStyles}
            onClick={() => setShowInfo(false)}
          >
            <AdvancedMarker
              position={lubinCoords}
              onClick={() => setShowInfo((prev) => !prev)}
            >
              <div className={styles.marker}>
                <div className={styles.icon} />
              </div>
            </AdvancedMarker>

            {showInfo && (
              <InfoWindow
                position={lubinCoords}
                onCloseClick={() => setShowInfo(false)}
                pixelOffset={[0, -45]}
              >
                <div className={styles.infoContent}>
                  <h3>WebStudio</h3>
                  <p>Lubin, Polska</p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${lubinCoords.lat},${lubinCoords.lng}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Nawiguj
                  </a>
                </div>
              </InfoWindow>
            )}
          </Map>
        </APIProvider>
      </div>
    </div>
  );
};
