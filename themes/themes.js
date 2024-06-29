import {createGlobalStyle} from 'styled-components';
import {css} from 'styled-components';

const regular300 = css`
    font-weight: 400;
    font-size: 13px;
`;
const regular400 = css`
    font-weight: 400;
    font-size: 14px;
`;
const regular500 = css`
    font-weight: 400;
    font-size: 15px;
`;
const regular600 = css`
    font-weight: 400;
    font-size: 16px;
`;
const medium300 = css`
    font-weight: 500;
    font-size: 13px;
`;
const medium500 = css`
    font-weight: 500;
    font-size: 15px;
`;
const semibold300 = css`
    font-weight: 600;
    font-size: 13px;
`;
const bold300 = css`
    font-weight: 700;
    font-size: 13px;
`;
const bold400 = css`
    font-weight: 700;
    font-size: 14px;
`;
const bold500 = css`
    font-weight: 700;
    font-size: 15px;
`;
const bold600 = css`
    font-weight: 700;
    font-size: 16px;
`;
const bold700 = css`
    font-weight: 700;
    font-size: 18px;
`;
const bold800 = css`
    font-weight: 700;
    font-size: 20px;
`;
const bold900 = css`
    font-weight: 700;
    font-size: 24px;
`;

const shared = {
    // Temp fonts
    ffPrimary: 'Jost, sans-serif',

    // Colors for layout
    primary: 'hsl(282 83% 52%)',
    onPrimary: 'hsl(231 100% 97%)',
    primaryHover: 'hsl(282 90% 66%)',
    primaryInvertedHover: 'hsl(230 100% 90%)',
    onPrimaryInverted: 'hsl(0 0% 100%)',

    secondary: 'hsl(230 76% 59%)',
    onSecondary: 'hsl(0 0% 100%)',
    secondaryHover1: 'hsl(230 91% 73%)',
    secondaryHover2: 'hsl(230 89% 74%)',

    roadmap1: 'hsl(14 83% 74%)',
    roadmap2: 'hsl(282 83% 52%)',
    roadmap3: 'hsl(204 94% 68%)',

    error: 'hsl(0 67% 53%)',
    onError: 'hsl(231 100% 97%)',
    errorHover: 'hsl(0 69% 72%)',

    cancel: 'hsl(231 33% 34%)',
    onCancel: 'hsl(231 100% 97%)',
    cancelHover: 'hsl(231 26% 52%)',

    regular300: regular300,
    regular400: regular400,
    regular500: regular500,
    regular600: regular600,
    medium300: medium300,
    medium500: medium500,
    semibold300: semibold300,
    bold300: bold300,
    bold400: bold400,
    bold500: bold500,
    bold600: bold600,
    bold700: bold700,
    bold800: bold800,
    bold900: bold900,
};

const light = {
    background: 'hsl(230 60% 98%)',

    surface1: 'hsl(0 0% 100%)',
    onSurface11: 'hsl(231 33% 34%)',
    onSurface11OpacityLight: 'hsl(231 33% 34% / 0.15)',
    onSurface11OpacityDark: 'hsl(231 33% 34% / 0.4)',

    onSurface12: 'hsl(224 20% 49%)',
    onSurface12Opacity: 'hsl(224 20% 49% / 0.1)',

    surface2: 'hsl(230 31% 31%)',
    onSurface21: 'hsl(0 0% 100%)',
    onSurface22: 'hsl(231 100% 97%)',
    onSurface23: 'hsl(231 49% 87%)',
    surfaceBorder: 'hsl(231 20% 63% / 0.25)',

    headingColor: 'hsl(0 0% 100%)',
};

const dark = {
    background: 'hsl(219 29% 10%)',
    surface1: 'hsl(219 29% 14%)',
    onSurface11: 'hsl(0 0% 100%)',
    onSurface11OpacityLight: 'hsl(0 0% 100% / 0.15)',
    onSurface11OpacityDark: 'hsl(0 0% 100% / 0.4)',
    onSurface12: 'hsl(224 20% 49%)',
    onSurface12Opacity: 'hsl(224 20% 49% / 0.1)',

    surface2: 'hsl(230 31% 31%)',
    onSurface21: 'hsl(214 17% 51%)',
    onSurface22: 'hsl(231 100% 97%)',
    onSurface23: 'hsl(231 49% 87%)',
    surfaceBorder: 'hsl(231 20% 63% / 0.25)',

    headingColor: 'hsl(0 0% 100%)',
};

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-size: 1rem;
        overflow-x: hidden;
        font-family: ${({theme}) => theme.ffPrimary};
        line-height 1.445;
    }

    h1,
    h2,
    h3,
    p {
        margin: 0;
        padding: 0;
        font-size: 1em;
    }

    button {
        font-family: ${({theme}) => theme.ffPrimary};
        background-color: transparent;
        border: none;
        line-height 1.445;
    }

    input, textarea, button {
        font-family: ${({theme}) => theme.ffPrimary};
        margin: 0;
        padding: 0;
    }
`;

export const lightTheme = {...shared, ...light};
export const darkTheme = {...shared, ...dark};

// html, body {
// font-family: ${({ theme }) => theme.ffBody};
// background-color: ${({ theme }) => theme.background};
// color: ${({ theme }) => theme.onBackground};

// }

// input, button {
//     // font-family: ${({ theme }) => theme.ffBody};
// }
