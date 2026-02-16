import { useState } from "react";
import GoogleMapReact from "google-map-react";
import styles from "./GoogleMap.module.scss";

interface AnyMapElement {
  lat: number;
  lng: number;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  // Zostawiamy unknown, żeby uniknąć błędu 'no-explicit-any'
  $hover?: boolean;
  $getDimensions?: unknown;
  $dimensionKey?: unknown;
  $geoService?: unknown;
  $onMouseAllow?: unknown;
  $prerender?: boolean;
}

// Marker: Destrukturyzujemy propy, ale ich nie nazywamy.
// Dzięki temu zostają "skonsumowane" i nie trafiają do 'div',
// a ESLint nie widzi nieużywanych zmiennych.
const Marker = ({ onClick }: AnyMapElement) => (
  <div className={styles.marker} onClick={onClick} role="button" tabIndex={0}>
    <div className={styles.icon} />
  </div>
);

// InfoWindow: Ta sama logika
const CustomInfoWindow = ({ children, className }: AnyMapElement) => (
  <div className={className}>{children}</div>
);

const lubinCoords = { lat: 51.3971, lng: 16.2043 };

export const GoogleMap = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={styles.mapContainer}>
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
                stylers: [{ color: "#e0efef" }],
              },
              {
                featureType: "poi",
                elementType: "geometry.fill",
                stylers: [{ color: "#c0e8e8" }],
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
                featureType: "water",
                elementType: "all",
                stylers: [{ color: "#7dcdcd" }],
              },
            ],
          }}
          onClick={() => setShowInfo(false)}
        >
          <Marker
            lat={lubinCoords.lat}
            lng={lubinCoords.lng}
            onClick={() => setShowInfo(!showInfo)}
          />

          {showInfo && (
            <CustomInfoWindow
              lat={lubinCoords.lat}
              lng={lubinCoords.lng}
              className={styles.infoWindow}
            >
              <button
                className={styles.closeBtn}
                onClick={(e) => {
                  e.stopPropagation();
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
            </CustomInfoWindow>
          )}
        </GoogleMapReact>
      </div>
    </div>
  );
};
