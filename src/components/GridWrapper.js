import React from 'react'
import styled from "styled-components";
import SideBar from "./SideBar";
import Map from "./Map";

 const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    gap: 1rem;
    margin: 0 auto;
    width: 100%;
 `

export default function Grid () {
    return(
        <GridWrapper>
            <SideBar />
            <Map />
        </GridWrapper>
    )
}