import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

import MontserratMedium from "../../assets/fonts/Montserrat-Medium.ttf";
import MontserratSemiBold from "../../assets/fonts/Montserrat-SemiBold.ttf";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    body {
        margin: 0;
        font-family: 'Montserrat';
        font-weight: 500;
        font-style: normal;
        font-size:18px;
        color: #111111;
        width: 100%;
        height: 100vh;
        background: linear-gradient(135deg, rgba(173, 216, 230, 0.8), rgba(102, 178, 255, 0.8));
        scroll-behavior: smooth;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin-top: 0;
        margin-bottom: 0;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    img {
        display: block;
        max-width: 100%;
        height: auto;
    }
    button {
        cursor: pointer;
        color:inherit;
    }
`