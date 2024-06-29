import styled from 'styled-components';
import Link from 'next/link';

export const FeedbackContainer = styled.section`
    position: relative;
    padding: 44px clamp(1.5rem, 6.1vw + 0.07rem, 3rem) 24px;
    background-color: ${({theme}) => theme.surface1};
    border-radius: 10px;
    @media (min-width: 768px) {
        padding: 52px 42px 40px;
    }
`;

export const FeedbackHead = styled.h1`
    ${({theme}) => theme.bold700};
    letter-spacing: -0.25px;
    color: ${({theme}) => theme.onSurface11};
    @media (min-width: 768px) {
        ${({theme}) => theme.bold900};
        letter-spacing: -0.333333px;
    }
`;

export const FeedbackIcon = styled.img.attrs(({newFeedback, mobile}) => ({
    src: newFeedback ? '/newfeedback.svg' : '/editfeedback.svg',
    alt: 'new feedback',
    width: mobile ? '40' : '56',
}))`
    position: absolute;
    top: ${({mobile}) => (mobile ? '-20px' : '-28px')};
`;

export const FeedbackBody = styled.div``;

export const FeedbackControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    @media (min-width: 768px) {
        :first-child {
            margin-top: ${({newFeedback}) => (newFeedback ? '40px' : '75px')};
        }
    }
`;

export const FeedbackTitle = styled.input`
    ${({theme}) => theme.regular300};
    color: ${({theme}) => theme.onSurface11};
    width: 100%;
    padding: 15px 16px 14px;
    background-color: ${({theme}) => theme.background};
    border-radius: 5px;
    border: ${({showError, theme}) =>
        showError ? `1px solid ${theme.error}` : 'none'};
    margin-top: 16px;

    @media (min-width: 768px) {
        ${({theme}) => theme.regular500};
        padding: 13px 24px;
    }

    :hover {
        border: 1px solid
            ${({showError, theme}) =>
                showError ? theme.error : theme.secondary};
        cursor: pointer;
    }
    :focus {
        outline: none;
        border: none;
        cursor: text;
    }
`;
export const BtnWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    @media (min-width: 768px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        margin-top: 32px;
    }
`;

export const CommonsBtn = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    @media (min-width: 768px) {
        flex-direction: row-reverse;
        column-gap: 16px;
    }
`;

export const SelectionContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px 16px 14px;
    margin-top: 16px;
    background-color: ${({theme}) => theme.background};
    border-radius: 5px;
    @media (min-width: 768px) {
        padding: 13px 24px;
    }
    :hover,
    :focus-within {
        border: 1px solid ${({theme}) => theme.secondary};
        cursor: pointer;
    }
`;

export const ControlLabelWrapper = styled.div`
    h2 {
        ${({theme}) => theme.bold300};
        letter-spacing: -0.18px;
        color: ${({theme}) => theme.onSurface11};
    }
    h3 {
        ${({theme}) => theme.regular300};
        color: ${({theme}) => theme.onSurface12};
        margin-top: 3px;
    }

    @media (min-width: 768px) {
        h2 {
            ${({theme}) => theme.bold400};
            letter-spacing: -0.19px;
        }
        h3 {
            ${({theme}) => theme.regular400};
            margin-top: 2px;
        }
    }
`;

export const Selection = styled.p`
    ${({theme}) => theme.regular300};
    color: ${({theme}) => theme.onSurface11};
    @media (min-width: 768px) {
        ${({theme}) => theme.regular500};
    }
`;

export const FeedbackDetailsContainer = styled.div`
    margin-top: 24px;
`;

export const FeedbackDescription = styled.textarea`
    position: relative;
    margin: 16px 0 0;
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.onSurface11};
    border: ${({showError, theme}) =>
        showError ? `1px solid ${theme.error}` : 'none'};
    ${({theme}) => theme.regular300};
    padding: 16px 24px 16px 16px;
    width: 100%;
    height: 120px;
    resize: none;
    @media (min-width: 768px) {
        ${({theme}) => theme.regular500};
        padding: 16px 24px 24px;
        height: 96px;
    }
    :hover {
        border: 1px solid
            ${({showError, theme}) =>
                showError ? theme.error : theme.secondary};
        cursor: pointer;
    }
    :focus {
        outline: none;
        border: none;
        cursor: text;
    }
`;
