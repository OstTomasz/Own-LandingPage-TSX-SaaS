import { useState } from "react";
import GoogleMapReact from "google-map-react";
import styles from "./GoogleMap.module.scss";

// Definicja typu dla elementów renderowanych na mapie, aby TS nie krzyczał o lat/lng
interface AnyMapElement {
  lat: number;
  lng: number;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// Marker dopasowany do Twoich stylów SCSS z pulsem
const Marker = ({ onClick }: AnyMapElement) => (
  <div className={styles.marker} onClick={onClick}>
    <div className={styles.icon} />
  </div>
);

const lubinCoords = { lat: 51.3971, lng: 16.2043 };

export const GoogleMap = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={styles.mapContainer}>
      {/* Overlay gradientowy z SCSS */}
      <div className={styles.overlay} />

      <div className={styles.mapWrapper}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
          defaultCenter={lubinCoords}
          defaultZoom={14}
          options={{
            scrollwheel: false,
            disableDefaultUI: true,
            styles: [
              {
                featureType: "landscape.natural",
                elementType: "geometry.fill",
                stylers: [{ visibility: "on" }, { color: "#e0efef" }],
              },
              {
                featureType: "poi",
                elementType: "geometry.fill",
                stylers: [
                  { visibility: "on" },
                  { hue: "#1900ff" },
                  { color: "#c0e8e8" },
                ],
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ lightness: 100 }, { visibility: "simplified" }],
              },
              {
                featureType: "road",
                elementType: "labels",
                stylers: [{ visibility: "off" }],
              },
              {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [{ visibility: "on" }, { lightness: 700 }],
              },
              {
                featureType: "water",
                elementType: "all",
                stylers: [{ color: "#7dcdcd" }],
              },
            ],
          }}
          onClick={() => setShowInfo(false)}
        >
          {/* Marker z obsługą kliknięcia */}
          <Marker
            lat={lubinCoords.lat}
            lng={lubinCoords.lng}
            onClick={() => setShowInfo(!showInfo)}
          />

          {/* InfoWindow z rzutowaniem typu, aby uniknąć błędu TS */}
          {showInfo && (
            <div
              {...({
                lat: lubinCoords.lat,
                lng: lubinCoords.lng,
              } as AnyMapElement)}
              className={styles.infoWindow}
            >
              <button
                className={styles.closeBtn}
                onClick={(e) => {
                  e.stopPropagation(); // Zapobiega natychmiastowemu ponownemu otwarciu przez mapę
                  setShowInfo(false);
                }}
              >
                ×
              </button>
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
          )}
        </GoogleMapReact>
      </div>
    </div>
  );
};
