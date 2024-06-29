import styled from 'styled-components';
import {keyframes} from 'styled-components';

export const MainContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 24px;
    margin: 0 24px ${({postComment}) => (postComment ? '88px' : '24px')};
    background-color: ${({theme}) => theme.background};
    border-radius: 10px;
    @media (min-width: 1200px) {
        width: 100%;
        max-width: 1110px;
        margin: 0 auto;
    }
`;

export const CommentsWrapper = styled.section`
    margin: 24px 0 0;
    padding: 24px clamp(1.5rem, 6.1vw + 0.07rem, 3rem);
    background-color: ${({theme}) => theme.surface1};
    border-radius: 10px;
    @media (min-width: 768px) {
        padding: 24px 32px 32px;
    }
`;

export const DetailsMainHeader = styled.h2`
    ${({theme}) => theme.bold700};
    letter-spacing: -0.25px;
    color: ${({theme}) => theme.onSurface11};
`;

export const CommentsItemsWrapper = styled.div``;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Reply = styled.button`
    ${({theme}) => theme.semibold300};
    color: ${({theme}) => theme.secondary};
    cursor: pointer;
    :hover {
        text-decoration-line: underline;
    }
`;

export const RepliesItemsWrapper = styled.div``;

export const ContentItem = styled.article`
    position: relative;
    margin-top: 24px;
    padding-left: ${({reply}) => (reply ? '24px' : '')};

    @media (min-width: 768px) {
        margin-top: ${({reply}) => (reply ? '16px' : '32px')};
        @media (min-width: 1200px) {
            margin-top: 32px;
        }
        :first-child {
            margin-top: ${({reply}) => (reply ? '32px' : '28px')};
        }
        padding-left: ${({reply}) => (reply ? '45px' : '')};
    }

    :not(:nth-last-child(1)) {
        padding-bottom: ${({reply}) => (!reply ? '24px' : '')};
        @media (min-width: 768px) {
            padding-bottom: ${({reply}) => (!reply ? '32px' : '')};
        }
        @media (min-width: 1200px) {
            padding-bottom: ${({reply}) => (!reply ? '48px' : '')};
        }
        border-bottom: ${({reply, theme}) =>
            !reply ? `1px solid ${theme.surfaceBorder}` : ''};
    }
    &:after {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        width: 1px;
        height: ${({borderLeft}) => borderLeft};
        background-color: ${({theme}) => theme.onSurface12Opacity};
    }
`;

//

export const PersonalData = styled.div`
    display: flex;
    align-items: center;
    h3 {
        ${({theme}) => theme.bold300};
        letter-spacing: -0.180556px;
        color: ${({theme}) => theme.onSurface11};
    }

    p {
        position: relative;
        ${({theme}) => theme.regular300};
        color: ${({theme}) => theme.onSurface12};
        top: 1px;
    }

    span {
        ${({theme}) => theme.regular300};
        color: ${({theme}) => theme.onSurface12};
    }

    @media (min-width: 768px) {
        h3 {
            ${({theme}) => theme.bold400};
        }
        p,
        span {
            ${({theme}) => theme.regular400};
        }
    }
`;

export const AuthorName = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    @media (min-width: 768px) {
        margin-left: 32px;
    }
`;

export const UserName = styled.div`
    display: flex;
    align-items: center;
`;

export const Comment = styled.p`
    ${({theme}) => theme.regular300};
    color: ${({theme}) => theme.onSurface12};
    margin-top: 16px;
    max-width: 60ch;
    // Para cortar en 60 characters y mostrar ...
    // white-space: nowrap;
    // overflow: hidden;
    // text-overflow: ellipsis;
    span {
        ${({theme}) => theme.bold300};
        color: ${({theme}) => theme.primary};
        margin-right: 5px;
    }

    @media (min-width: 768px) {
        ${({theme}) => theme.regular500};
        margin-left: 72px;
        span {
            ${({theme}) => theme.bold500};
        }
        margin-top: ${({reply}) => (reply ? '10px' : '16px')};
    }

    @media (min-width: 1200px) {
        margin-top: 16px;
    }
`;

export const PostCommentContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    padding: 24px clamp(1.5rem, 6.1vw + 0.07rem, 3rem);
    background-color: ${({theme}) => theme.surface1};
    border-radius: 10px;
    @media (min-width: 768px) {
        padding: 24px 32px 32px 34px;
    }
`;

export const PostCommentTitle = styled.h2`
    ${({theme}) => theme.bold700};
    letter-spacing: -0.25px;
    color: ${({theme}) => theme.onSurface11};
`;

export const PostCommentText = styled.textarea`
    position: relative;
    margin: ${({newReply}) => (newReply ? 0 : '24px')} 0 16px;
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.onSurface12};
    border: ${({showError, theme}) =>
        showError ? `1px solid ${theme.error}` : 'none'};
    ${({theme}) => theme.regular300};
    padding: 16px;
    width: 100%;
    height: 80px;
    resize: none;
    @media (min-width: 768px) {
        ${({theme}) => theme.regular500};
        margin-bottom: ${({newReply}) => (newReply ? 0 : '')};
        width: ${({newReply}) => (newReply ? '76%' : '')};
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

export const PostCommentFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    // display: grid;
    // grid-template-columns: repeat(2, 1fr);
    // align-items: center;
    // width: 100%;
    &.newReply {
        @media (min-width: 768px) {
            flex-direction: column-reverse;
            width: 22%;
            height: 80px;
            align-items: end;
        }
    }
`;

export const CharactersLeft = styled.p`
    ${({theme}) => theme.regular300};
    color: ${({theme}) => theme.onSurface12};
    @media (min-width: 768px) {
        ${({theme}) => theme.regular500};
    }
`;

const blink = keyframes`
 0% { opacity: 0; }
 50% { opacity: 0.5; }
 100% { opacity: 1; }
`;

export const ErrorText = styled.p`
    ${({theme}) => theme.regular400};
    color: ${({theme}) => theme.error};
    // font-style: italic;
    // animation: blink 2s linear infinite;
    // animation-name: ${blink};
    // animation-duration: 1s;
    // animation-iteration-count: infinite;
    width: max-content;
    @media (min-width: 768px) {
        grid-row: ${({newReply}) => (newReply ? '2' : '')};
    }
`;

export const NewReplyContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    justify-content: space-around;
    align-items: end;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: self-start;
        margin-left: 72px;
    }
`;
