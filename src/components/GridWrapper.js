import React from 'react'
import styled from "styled-components";
import SideBar from "./SideBar/SideBar";
import Map from "./Map";

 const GridWrapper = styled.div`
    display: flex;
    flex-direction: column;


    @media screen and (min-width: 992px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: auto;
        gap: 1rem;
        margin: 0 auto;
        width: 100%;
    }
 `

export default function Grid () {
    return(
        <GridWrapper>
            <SideBar />
            <Map />
        </GridWrapper>
    )
}