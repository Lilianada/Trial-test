import styled from "styled-components";
import {devices} from './MediaQueries';

const HeaderWrapper = styled.div`
    margin-bottom: 1rem;
    color: var(--white-color);
 `
const Head = styled.h1`
    background: var(--purple-color);
    padding: 2rem;
`
const Text = styled.h2`
    color: var(--black-color);
    padding: 1rem 2rem;
    width: 100%;
`


export default function Header () {
    return(
        <HeaderWrapper>
            <Head>Welcome to Tracker Trial!</Head>
            <Text>To be begin, please input your current location in the first input box and your drop off location in the next</Text>
        </HeaderWrapper>
    )
}