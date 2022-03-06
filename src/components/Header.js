import React from 'react'
import styled from "styled-components";
import Hamburger from './Hamburger';

const HeaderWrapper = styled.div`
    margin-bottom: 1rem;
    color: var(--white-color);
 `
const Head = styled.h1`
    background: var(--purple-color);
    padding: 2rem;
    display: flex;
    justify-content: space-between;
`
const Text = styled.h4`
    color: var(--black-color);
    padding: 1rem 2rem;
    width: 100%;
`


export default function Header () {
    return(
        <HeaderWrapper>
            
            <Head>
                <h1>Welcome to Scrumanac!</h1>
                <Hamburger />
            </Head>
            
            <Text>
                Hello User,
            </Text>
            <Text>
                Scrumanac is a web application that allow users to submit addresses of their pick-up location and drop-off location.
                <br/>
                To begin, please input your current location in the first input box and your drop-off location in the next.
            </Text>
        </HeaderWrapper>
    )
}