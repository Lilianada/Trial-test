import styled from "styled-components";
import Header from "../components/Header";
import SideBar from "../components/SideBar";


 const HomeWrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    margin: 0 auto;
    
 `

export default function Home () {
    return(
        <HomeWrapper>
            <Header />
            <SideBar />
        </HomeWrapper>
    )
}