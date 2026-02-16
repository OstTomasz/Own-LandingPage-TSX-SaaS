import { useState } from "react";
import GoogleMapReact from "google-map-react";
import styles from "./GoogleMap.module.scss";

// 1. Poprawiony interfejs - dodajemy opcjonalne propy biblioteki
interface AnyMapElement {
  lat: number;
  lng: number;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  // Te propy są wstrzykiwane przez bibliotekę:
  $hover?: boolean;
  $getDimensions?: any;
  $dimensionKey?: any;
  $geoService?: any;
  $onMouseAllow?: any;
  $prerender?: boolean;
}

// 2. Destrukturyzujemy propy biblioteki, aby NIE trafiły do div
const Marker = ({
  onClick,
  $hover,
  $getDimensions,
  $dimensionKey,
  $geoService,
  $onMouseAllow,
  $prerender,
  ...rest
}: AnyMapElement) => (
  <div className={styles.marker} onClick={onClick}>
    <div className={styles.icon} />
  </div>
);

// 3. To samo robimy dla InfoWindow
const CustomInfoWindow = ({
  children,
  className,
  onClick,
  $hover,
  $getDimensions,
  $dimensionKey,
  $geoService,
  $onMouseAllow,
  $prerender,
  ...rest
}: AnyMapElement) => <div className={className}>{children}</div>;

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
