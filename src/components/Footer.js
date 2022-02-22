import React from 'react'
import styled from "styled-components";
import { FaHeart } from 'react-icons/fa';

const FooterWrapper = styled.div`
    padding: 1rem;
    background: var(--grey-color);
    color: var(--black-color);
    text-align: center;
    margin-top: 2rem;
 `
const Head = styled.h4`
    
`
const Text = styled.p`
    color: var(--black-color);
    width: 100%;
    font-size: 12px;
    padding: .5rem 0;
`


export default function Footer () {
    return(
        <FooterWrapper>
            <Head>Built by Lilian <FaHeart /></Head>
            <Text>To be begin, please input your current location in the first input box and your drop off location in the next</Text>
        </FooterWrapper>
    )
}