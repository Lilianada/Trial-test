import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
//import Autocomplete from "react-google-autocomplete";
// import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
// import Geocode from "react-geocode";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 2rem
 `


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map(){
    const defaultProps = {
      center: {
        lat: 9.0820,
        lng: 8.6753
      },
      zoom: 11
    };

    
    return (
        <Wrapper>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCXeKPM_fnbfUJ1P6YTkP9hIakolhrKNv8" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                >
                <AnyReactComponent
                    lat={6.5227}
                    lng={3.6218}
                    text="Marker"
                />
            </GoogleMapReact>
        </Wrapper>
    );
  }


  
    // return(<Autocomplete
        //     apiKey={'AIzaSyCXeKPM_fnbfUJ1P6YTkP9hIakolhrKNv8'}
        //     onPlaceSelected={(place) => console.log(place)}
    // />)