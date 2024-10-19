import React from "react";
import GoogleMapSetter from "./GoogleMapSetter";
import { Autocomplete } from "@react-google-maps/api";
import { Box } from "@mui/material";

const Index = () => {
  const [autocomplete, setAutocomplete] = React.useState<any>(null);
  const [userCoords, setUserCoords] = React.useState<any>({
    lat: 23.7766642,
    lng: 72.79698789999999,
  });

  const onLoads = (autocomplete: any) => {
    setAutocomplete(autocomplete);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place?.address_components && place?.geometry) {
        setUserCoords({
          lat: place?.geometry.location.lat(),
          lng: place?.geometry.location.lng(),
        });
      }
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };

  return (
    <Box className="flex flex-col gap-8 justify-center items-center ">
      <div>
        <label className="block text-sm font-medium mb-1">
          Search Location
        </label>
        <Autocomplete onLoad={onLoads} onPlaceChanged={onPlaceChanged}>
          <input
            type="text"
            placeholder="Enter Location"
            multiple
            className="mb-2 focus:outline-none input-camp-det py-3 w-[400px] text-[#000000] ps-4 font-normal rounded-lg text-[14px]"
          />
        </Autocomplete>
      </div>

      <div className="w-[650px] rounded-lg h-[400px]">
        <GoogleMapSetter userCoords={userCoords} />
      </div>
    </Box>
  );
};

export default Index;
