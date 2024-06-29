import styled from 'styled-components';
import Link from 'next/link';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({details, theme}) =>
        details ? 'transparent' : theme.surface2};
    padding: ${({details}) => (details ? '24px' : '26px')} 24px;
    @media (min-width: 768px) {
        padding: 27px 32px;
        border-radius: 10px;
    }
    @media (min-width: 1200px) {
        width: 100%;
        max-width: 1110px;
        margin: 0 auto;
    }
`;

export const TitleRoadmap = styled.div`
    display flex;
    flex-direction: column;
    h1 {
        ${({theme}) => theme.bold700}
        color: ${({theme}) => theme.onSurface21};
        letter-spacing: -0.25px;
        margin-top: 3px;
        @media (min-width: 768px) {
            ${({theme}) => theme.bold900}
            letter-spacing: -0.333333px;
        }
    }
`;

export const LinkBack = styled(Link).attrs({
    href: '/',
})`
    display: flex;
    align-items: center;
    ${({theme}) => theme.bold300}
    color: ${({$details, theme}) =>
        $details ? theme.onSurface12 : theme.onSurface21};
    text-decoration: none;
    p {
        margin-left: 16px;
    }
    @media (min-width: 768px) {
        ${({theme}) => theme.bold400}
    }
    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const GoBackWrapper = styled.div`
    display: flex;
    align-items: center;
    a {
        ${({theme}) => theme.bold300}
        color: ${({details, theme}) =>
            details ? theme.onSurface12 : theme.onSurface21};
        margin-left: 16px;
        text-decoration: none;
        @media (min-width: 768px) {
            ${({theme}) => theme.bold400}
        }
        :hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
`;

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    @media (min-width: 1200px) {
        width: 100%;
        max-width: 1110px;
        margin: 0 auto;
    }
`;

export const MainHeader = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    border-bottom: ${({theme}) => `1px solid ${theme.surfaceBorder}`};
    @media (min-width: 768px) {
        display: none;
    }
`;

export const HeaderItem = styled.div`
    width: 100%;
    padding: 20px 0;
    h2 {
        ${({theme}) => theme.bold300}
        letter-spacing: -0.18px;
        color: ${({theme}) => theme.onSurface11};
        text-align: center;
        opacity: ${({active}) => (active ? '1' : '0.4')};
    }
    :nth-child(1) {
        border-bottom: ${({active, theme}) =>
            active ? `4px solid ${theme.roadmap1}` : ''};
    }
    :nth-child(2) {
        border-bottom: ${({active, theme}) =>
            active ? `4px solid ${theme.roadmap2}` : ''};
    }
    :nth-child(3) {
        border-bottom: ${({active, theme}) =>
            active ? `4px solid ${theme.roadmap3}` : ''};
    }
    :hover {
        cursor: default;
    }
`;

export const MainContentWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 10px;
    }
    @media (min-width: 1200px) {
        column-gap: 30px;
    }
`;

export const MainContent = styled.section`
    display: flex;
    flex-direction: column;
`;

export const Status = styled.div`
    padding-top: 24px;
    h2 {
        ${({theme}) => theme.bold700}
        letter-spacing: -0.25px;
        color: ${({theme}) => theme.onSurface11};
        margin-bottom: 4px;
        @media (min-width: 768px) and (max-width: 1200px) {
            ${({theme}) => theme.bold400}
            letter-spacing: -0.194444px;
        }
    }
    p {
        ${({theme}) => theme.regular300}
        color: ${({theme}) => theme.onSurface12};
        @media (min-width: 768px) {
            ${({theme}) => theme.regular400}
        }
        @media (min-width: 1200px) {
            ${({theme}) => theme.regular600}
        }
    }

    @media (min-width: 768px) {
        padding-top: 32px;
        width: 100%;
    }
    @media (min-width: 1200px) {
        padding-top: 48px;
    }
`;

export const RoadmapItemsWrapper = styled.div`
    width: 100%;
`;

export const RoadmapItem = styled.article`
    // con Grid

    // display: grid;
    // grid-template-columns: repeat(6, 1fr);
    // align-items: center;
    // grid-template-rows: 104px 48px;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({theme}) => theme.surface1};
    margin-top: 16px;
    padding: 0px clamp(1.5rem, 6.1vw + 0.07rem, 3rem) 24px;
    border-radius: 10px;
    min-height: 233px;

    :first-child {
        margin-top: 24px;
        @media (min-width: 1200px) {
            margin-top: 32px;
        }
    }

    @media (min-width: 768px) {
        width: 100%;
        padding: 0px 20px 24px;
    }
    @media (min-width: 1200px) {
        padding: 0 32px 32px;
        margin-top: 24px;
    }
`;

export const RoadmapMainTop = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const BorderTop = styled.div`
    width: ${({mobile}) => (!mobile ? '100%' : '118%')};
    transform: ${({mobile}) => (!mobile ? '' : ' translateX(-7.5%)')};
    height: 6px;
    background-color: ${({status, theme}) =>
        status === 'Planned'
            ? theme.roadmap1
            : status === 'In-Progress'
            ? theme.roadmap2
            : theme.roadmap3};
    border-radius: 5px 5px 0px 0px;
    position: ${({mobile}) => (!mobile ? 'absolute' : '')};
    left: ${({mobile}) => (!mobile ? '0' : '')};
`;

export const RoadmapStatus = styled.div`
    display: flex;
    align-items: center;
    margin: 16px 0;
    p {
        ${({theme}) => theme.regular300}
        color: ${({theme}) => theme.onSurface12};
        margin-left: 8px;
        @media (min-width: 1200px) {
            ${({theme}) => theme.regular600}
            margin-left: 16px;
        }
    }
    @media (min-width: 768px) {
        margin: 26px 0 14px;
    }
    @media (min-width: 1200px) {
        margin: 32px 0 8px;
    }
`;
