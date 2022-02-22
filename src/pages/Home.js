import React from 'react'
import styled from "styled-components";
import Footer from "../components/Footer";
import Grid from "../components/GridWrapper";
import Header from "../components/Header";


const HomeWrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    margin: 0 auto;
    gap: 1rem;
    height: 100vh;
`

export default function Home () {
    return(
        <HomeWrapper>
            <Header />
            <Grid />
            <Footer />
        </HomeWrapper>
    )
}