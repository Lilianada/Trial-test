import React, { useState } from "react"
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker/Marker";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 1rem;
`



export default function Map() {


    const [center, setCenter] = useState({lat: 9.0820, lng: 8.6753 });
    const [zoom, setZoom] = useState(11);
    const getMapOptions = (maps) => {
        return {
            disableDefaultUI: true,
            mapTypeControl: true,
            streetViewControl: true,
            styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
            };
    };

    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
    };
        
    return (
        <Wrapper>
            
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCXeKPM_fnbfUJ1P6YTkP9hIakolhrKNv8" }}
                defaultCenter={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                options={getMapOptions}
                >
                <Marker
                    lat={6.5227}
                    lng={3.6218}
                    text="Marker"
                />
            </GoogleMapReact>
        </Wrapper>
    );
}

//AIzaSyCXeKPM_fnbfUJ1P6YTkP9hIakolhrKNv8 INPUT-YOUR-KEY-HERE
  