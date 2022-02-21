import styled from "styled-components";
import SideBar from "./SideBar";


 const HomeWrapper = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: auto;
    gap: 1rem;
    margin: 0 auto;
    
 `

export default function Grid () {
    return(
        <Grid>
            <Map />
            <SideBar />
        </Grid>
    )
}