import React, { useState } from "react";
import './area.css'; // Import CSS for layout
import Cta from "../CTA/Cta";

const AreasCovered = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    name: "Manchester city centre",
    coordinates: [53.483959, -2.244644], // Default location
  });

  const locations = [
    { name: "Ardwick", coordinates: [53.468, -2.218] },
    { name: "Belle Vue", coordinates: [53.463, -2.181] },
    { name: "Beswick", coordinates: [53.481, -2.208] },
    { name: "Bolton", coordinates: [53.583, -2.429] },
    { name: "Burnage", coordinates: [53.428, -2.208] },
    { name: "Chorlton", coordinates: [53.438, -2.273] },
    { name: "Crumpsall", coordinates: [53.517, -2.237] },
    { name: "Didsbury", coordinates: [53.414, -2.231] },
    { name: "Fallowfield", coordinates: [53.44, -2.218] },
    { name: "Gorton", coordinates: [53.464, -2.171] },
    { name: "Harpurhey", coordinates: [53.518, -2.222] },
    { name: "Hulme", coordinates: [53.468, -2.246] },
    { name: "Ladybarn", coordinates: [53.43, -2.218] },
    { name: "Levenshulme", coordinates: [53.443, -2.194] },
    { name: "Longsight", coordinates: [53.456, -2.191] },
    { name: "Manchester city centre", coordinates: [53.483959, -2.244644] },
    { name: "Miles Platting", coordinates: [53.491, -2.214] },
    { name: "Moss Side", coordinates: [53.461, -2.242] },
    { name: "Moston, Manchester", coordinates: [53.522, -2.183] },
    { name: "New County", coordinates: [53.463, -2.175] },
    { name: "Newton Heath", coordinates: [53.501, -2.179] },
    { name: "Northenden", coordinates: [53.402, -2.256] },
    { name: "Northern Quarter( Manchester)", coordinates: [53.483, -2.236] },
    { name: "Old Moat", coordinates: [53.429, -2.244] },
    { name: "Old Trafford", coordinates: [53.462, -2.288] },
    { name: "Openshaw", coordinates: [53.469, -2.174] },
    { name: "Parrs Wood", coordinates: [53.415, -2.219] },
    { name: "Whalley Range", coordinates: [53.448, -2.256] },
    { name: "Wythenshawe", coordinates: [53.388, -2.261] },
  ];

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <>
    <h2 className="container text-center mx-auto mb-5 mt-4 text-3xl font-semibold text-dark  p-2">
        Areas We Cover
    </h2>
    <div className="areas-covered-container container mx-auto mt-12">
      <div className="location-list">
        {locations.map((location, index) => (
          <div
            key={index}
            className="location-item"
            onClick={() => handleLocationClick(location)}
          >
            {location.name}
          </div>
        ))}
      </div>
      <div className="map-container">
        <iframe
          title="Map"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps?q=${selectedLocation.coordinates[0]},${selectedLocation.coordinates[1]}&z=13&output=embed`}
          allowFullScreen
        ></iframe>
      </div>
    </div>
    <Cta />
    </>
  );
};

export default AreasCovered;
