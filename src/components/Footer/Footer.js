import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { FooterWrapper, Head, Text } from './Footer.styles';

export default function Footer () {
    return(
        <FooterWrapper>
            <Head>Built by Lilian <FaHeart /></Head>
            <Text>Please leave a feedback <a href='lilianokeke.ca@gmail.com'>lilianokeke.ca@gmail.com</a></Text>
        </FooterWrapper>
    )
}