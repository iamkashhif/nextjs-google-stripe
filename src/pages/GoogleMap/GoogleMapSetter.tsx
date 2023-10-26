import React, { useMemo } from "react";
import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  CircleF,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
};

interface proptypes {
  userCoords: any;
  // formValue: any;
}

const { NEXT_PUBLIC_GOOGLE_MAP_APIKEY } = process.env;

function GoogleMapSetter(props: proptypes) {
  const { userCoords } = props;
  const { lat, lng } = userCoords;

  console.log({ NEXT_PUBLIC_GOOGLE_MAP_APIKEY });

  // interface Location {
  //   lat: any;
  //   lng: any;
  // }
  // const handleClick = (e: google.maps.MapMouseEvent) => {
  //   setUserCoords({
  //     lat: e?.latLng?.lat(),
  //     lng: e?.latLng?.lng(),
  //   });
  //   const location: Location = {
  //     lat: e?.latLng?.lat(),
  //     lng: e?.latLng?.lng(),
  //   };
  //   reverseGeocode(location);
  // };
  // const reverseGeocode = async (location: Location) => {
  //   const geocoder = new google.maps.Geocoder();
  //   geocoder.geocode({ location }, (results, status) => {
  //     if (status === "OK" && results && results.length > 0) {
  //       const locationName = results[0].formatted_address;
  //       setLocationName(locationName);
  //     }
  //   });
  // };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${NEXT_PUBLIC_GOOGLE_MAP_APIKEY}`,
    libraries: ["places"],
  });

  const onLoad = (marker: any) => {
    console.log(marker);
  };

  // const radiusValue = useMemo(
  //   () =>
  //     formValue?.radius < 1609 ? formValue?.radius * 1609 : formValue?.radius,
  //   [formValue]
  // );

  const mapOptions = {
    mapTypeControl: false, // Hide the map type control
    streetViewControl: false, // Hide the street view control
  };

  return (
    <div className="border h-[100%] rounded-xl">
      {isLoaded && userCoords ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={4}
          center={{ lat, lng }}
          options={mapOptions}
        >
          {
            <CircleF
              center={userCoords}
              options={{
                strokeColor: "blue",
                strokeOpacity: 0.4,
                strokeWeight: 2,
                fillColor: "blue",
                fillOpacity: 0.2,
              }}
              // radius={Number(radiusValue)}
            />
          }

          <MarkerF onLoad={onLoad} position={userCoords} />
        </GoogleMap>
      ) : (
        <div className="text-14 text-red-600 font-bold text-center mt-10">
          Map Not Loaded
          <br /> <span className="text-12 mt-2 text-dark">Technical Issue</span>
        </div>
      )}
    </div>
  );
}

export default GoogleMapSetter;
