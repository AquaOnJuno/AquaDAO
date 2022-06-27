import React, { FunctionComponent } from "react";
// import GoogleMapReact from "google-map-react";
// import { Link } from "react-router-dom";

const markerStyle = {
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translate(-50%, -100%)"
};

interface Props {
  center?: any,
  zoom?: number
  locations: any,
}
const SimpleMap: FunctionComponent<Props> = ({
  center = {
    lat: 60.192059,
    lng: 24.945831
  },
  zoom = 11,
  locations,
}) => {

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec"
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {locations.map((item: any) => {
          if (item.address.length !== 0) {
            return item.address.map((i: any) => {
              return (
                <a href={"/" + item.name} target="_blank" key={i.id} lat={i.lat} lng={i.lng}>
                  <img style={markerStyle} src="/pin.png" alt="pin" />
                </a>
              );
            });
          }
        })}
      </GoogleMapReact> */}
    </div>
  );
}

export default SimpleMap;
