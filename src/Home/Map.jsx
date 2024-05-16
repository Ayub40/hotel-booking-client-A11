import { useState } from "react";
import { Map as PigeonMap, Marker, Overlay } from "pigeon-maps";

// Tooltip component for displaying additional information
const HotelInfo = () => (
    <div style={{ background: "white", padding: "5px", borderRadius: "5px", boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)" }}>
        <strong>Hotel Location</strong>
        <p>Leuven, Belgium</p>
    </div>
);

const Map = () => {
    const [hue, setHue] = useState(0);
    const [showInfo, setShowInfo] = useState(false);
    const color = `hsl(${hue % 360}deg 39% 70%)`;
    const coordinates = [50.879, 4.6997];

    return (
        <PigeonMap height={300} defaultCenter={coordinates} defaultZoom={11}>
            <Marker
                width={50}
                anchor={coordinates}
                color={color}
                onClick={() => {
                    setHue(hue + 20);
                    setShowInfo(!showInfo);
                }}
            />
            {showInfo && (
                <Overlay anchor={coordinates} offset={[0, -25]}>
                    <HotelInfo />
                </Overlay>
            )}
        </PigeonMap>
    );
};

export default Map;
