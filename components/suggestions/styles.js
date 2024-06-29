import styled from "styled-components";
import Link from "next/link";
import { useTheme } from "styled-components";

export const PageContainer = styled.section`
  margin: 0;
  padding: ${({ details, feedback }) =>
      details ? "1.5rem" : feedback ? "2rem" : "0"}
    0 ${({ suggestions }) => (suggestions ? "3rem" : "5.5rem")};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;

  @media (min-width: 768px) {
    padding: 56px 40px
      ${({ empty, newFeedback }) =>
        empty ? "3.5rem" : newFeedback ? "14rem" : "7rem"};
  }
  @media (min-width: 1200px) {
    padding: ${({ details, roadmap }) => (details || roadmap ? "5rem" : "6rem")}
      165px
      ${({ newFeedback, roadmap }) =>
        newFeedback || roadmap ? "11.5rem" : "8rem"};
  }
`;

export const SuggestionsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    @media (min-width: 1200px) {
        flex-direction: row;
        justify-content: space-between;
        width 100%;
        max-width: 1110px;
        margin: 0 auto;
    }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ suggestions, details, feedback, theme }) =>
    suggestions || details || feedback ? "transparent" : theme.surface2};
  padding: ${({ suggestions, details, feedback }) =>
    suggestions
      ? 0
      : details
      ? "0 0 24px"
      : feedback
      ? "0 0 55px"
      : "26px 0px"};

  &.suggestions {
    @media (min-width: 1200px) {
      flex-direction: column;
      row-gap: 24px;
      height: 530px;
      padding-bottom: 0px;
    }
  }

  @media (min-width: 768px) {
    max-width: ${({ details }) => (details ? "730px" : "960px")};
    margin: 0 auto;
    padding: ${({ suggestions, details, feedback }) =>
      suggestions
        ? "0 0 40px"
        : feedback
        ? "0 0 68px"
        : details
        ? 0
        : "27px 32px"};
    border-radius: ${({ suggestions }) => (!suggestions ? "10px" : "")};
  }
  @media (min-width: 1200px) {
    width: ${({ suggestions }) => (suggestions ? "23%" : "100%")};
    max-width: ${({ suggestions, details }) =>
      !suggestions ? (details ? "730px" : "1110px") : ""};
    margin: 0 auto;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 87%;
  max-width: ${({ feedback }) => (feedback ? "540px" : "615px")};
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 100%;
    max-width: ${({ feedback }) => (feedback ? "540px" : "100%")};
    margin: 0 ${({ feedback }) => (feedback ? "auto" : "0")};
  }
`;

export const MobileHeader = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 73.09%,
    #28a7ed 150%
  );
  padding: 1rem 0;
  @media (min-width: 768px) {
    width: 32.42%;
    height: 178px;
    flex-direction: column-reverse;
    padding: 24px 28px;
    border-radius: 10px;
  }
  @media (min-width: 1200px) {
    width: 100%;
  }
`;

export const MobileHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 87%;
  max-width: 615px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.headingColor};
  h1 {
    ${({ theme }) => theme.bold500};
    letter-spacing: -0.19px;
    @media (min-width: 768px) {
      ${({ theme }) => theme.bold800};
      letter-spacing: -0.2px;
    }
  }
  h2 {
    ${({ theme }) => theme.medium300};
    opacity: 0.75;
    @media (min-width: 768px) {
      ${({ theme }) => theme.medium500};
    }
  }
`;

export const BurgerMenuWrapper = styled.div`
  position: relative;
  z-index: 1;
  height: 17px;
  width: 20px;
  cursor: pointer;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const BurgerMenu = styled.span`
  position: absolute;
  top: 0.5rem;
  width: 20px;
  height: 3px;
  background: ${({ bgFeatures }) => (bgFeatures ? "transparent" : "#fff")};
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-transform: ${({ bgFeatures }) =>
    bgFeatures ? "rotate(540deg)" : ""};
  transform: ${({ bgFeatures }) => (bgFeatures ? "rotate(360deg)" : "")};
  &:before {
    content: "";
    position: absolute;
    top: -8px;
    width: 20px;
    height: 3px;
    background: #fff;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-transform: ${({ bgFeatures }) =>
      bgFeatures ? "rotate(45deg) translate(5px, 8px)" : ""};
    transform: ${({ bgFeatures }) =>
      bgFeatures ? "rotate(45deg) translate(5px, 8px)" : ""};
  }

  &:after {
    content: "";
    position: absolute;
    top: 8px;
    width: 20px;
    height: 3px;
    background: #fff;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-transform: ${({ bgFeatures }) =>
      bgFeatures ? "rotate(-45deg) translate(3px, -7px)" : ""};
    transform: ${({ bgFeatures }) =>
      bgFeatures ? "rotate(-45deg) translate(3px, -7px)" : ""};
  }
`;

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;    
    &.suggestions {
        @media (min-width: 768px) {
            max-width 960px;
            margin: 0 auto;
            width: 100%;
        }
        @media (min-width: 1200px) {
            width: 74.3%;
        }
    }

    &.roadmap, &.details {
        width: 87%;
        max-width: 615px;
        margin: 0 auto;
        @media (min-width: 768px) {
            width: 100%;
            max-width ${({ details }) => (details ? "730px" : "960px")};
        }
        @media (min-width: 1200px) {
            max-width ${({ details }) => (details ? "730px" : "1110px")};
        }
    }

    &.feedback {
        width: 87%;
        max-width: 540px;
        margin: 0 auto;
    }
    
`;

export const Options = styled.section`
  height: 56px;
  padding: 0.5rem 0;
  background-color: ${({ theme }) => theme.surface2};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    height: 72px;
    border-radius: 10px;
    padding: 0.5rem 24px;
  }
`;

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 87%;
  max-width: 615px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 100%;
    max-width: 100%;
    margin: 0;
  }
`;

export const SortWrapper = styled.div`
  display: flex;
`;

export const SuggestionsQtyWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const SuggestionsIcon = styled.img.attrs({
  src: "/suggestionsIcon.svg",
  alt: "suggestions quantity",
})`
  position: relative;
  top: -2px;
`;

export const SuggestionsQty = styled.p`
  ${({ theme }) => theme.bold700};
  color: ${({ theme }) => theme.onSurface21};
  letter-spacing: -0.2px;
  margin-left: 16px;
`;

export const SortContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.onSurface22};
  @media (min-width: 768px) {
    top: 2px;
    margin-left: 38px;
  }
`;

export const SortLabel = styled.p`
  ${({ theme }) => theme.regular300};
  margin-right: 7px;
  opacity: ${({ bgOptions }) => (bgOptions ? "0.75" : "1")};
  @media (min-width: 768px) {
    ${({ theme }) => theme.regular400};
  }
`;

export const SortDropdown = styled.p`
  ${({ theme }) => theme.bold300};
  opacity: ${({ bgOptions }) => (bgOptions ? "0.75" : "1")};
  @media (min-width: 768px) {
    ${({ theme }) => theme.bold400};
  }
`;

export const SuggestionsItemsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 87%;
  max-width: 615px;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const SuggestionsItem = styled.article`
  // con Grid

  // display: grid;
  // grid-template-columns: repeat(6, 1fr);
  // align-items: center;
  // grid-template-rows: 104px 48px;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.surface1};
  padding: 0px clamp(1.5rem, 6.1vw + 0.07rem, 3rem);
  border-radius: 10px;
  min-height: 200px;
  margin-top: 16px;

  :first-child {
    margin-top: ${({ details }) => (details ? 0 : "32px")};
    @media (min-width: 768px) {
      margin-top: 24px;
    }
  }

  @media (min-width: 768px) {
    min-height: 151px;
  }

  @media (min-width: 768px) {
    margin-top: 20px;
    padding: 28px 32px;
  }
`;

export const ContentWrapper = styled.div`
  // con Grid

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  width: 100%;

  &.suggestions {
    @media (min-width: 768px) {
      grid-template-columns: 6.4% 6.4% 76.16% 4% 7.04%;
      max-width: 860px;
      margin: 0 auto;
    }
  }
`;

export const ContentOne = styled.div`
  grid-column: 1 / 7;

  &.suggestions {
    @media (min-width: 768px) {
      grid-column: 3;
    }
  }
`;

export const Title = styled.button`
  ${({ theme }) => theme.bold300};
  padding: 0;
  letter-spacing: -0.18px;

  &.suggestions {
    @media (min-width: 768px) {
      ${({ theme }) => theme.bold700};
      letter-spacing: -0.25px;
    }
  }

  @media (min-width: 1200px) {
    ${({ theme }) => theme.bold700};
    letter-spacing: -0.25px;
  }
`;

export const EditLink = styled(Link).attrs(({ id }) => ({
  href: {
    pathname: `/feedback-details/[id]`,
    query: { id: id },
  },
}))`
  text-decoration: none;
  color: ${({ $titlehover, theme }) =>
    $titlehover ? theme.secondary : theme.onSurface11};
  cursor: ${({ $details }) => ($details ? "default" : "")};
`;

export const ContentTwo = styled.div`
  grid-column: 1 / 2;
  &.suggestions {
    @media (min-width: 768px) {
      grid-row: 1;
      grid-column: 1;
      align-self: start;
    }
  }
`;
export const ContentThree = styled.div`
  grid-column: 6/ 7;
  justify-self: end;
  &.suggestions {
    @media (min-width: 768px) {
      grid-row: 1;
      grid-column: 5;
    }
  }
`;

export const ContentDescription = styled.p`
  ${({ theme }) => theme.regular300};
  color: ${({ theme }) => theme.onSurface12};
  margin: 8px 0;
  min-height: 38px;

  @media (min-width: 768px) {
    &.suggestions {
      ${({ theme }) => theme.regular600};
      margin: 4px 0 12px;
      min-height: 23px;
    }
    &.roadmap {
      margin-bottom: 24px;
      @media (min-width: 1200px) {
        ${({ theme }) => theme.regular600}
        min-height: 46px;
        margin: 4px 0 16px;
      }
    }
  }
`;

export const UpvotesBtn = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 69px;
    color: ${({ activeVotes, theme }) =>
      activeVotes ? theme.onSecondary : theme.onSurface11};
    background-color: ${({ activeVotes, theme }) =>
      activeVotes ? theme.secondary : theme.onPrimary} ;
    border-radius: 10px;
    padding: 6px 13px 7px 16px;
    cursor: pointer;
    font-family: inherit;
    :hover {
        background-color: ${({ theme }) => theme.primaryInvertedHover};
    }
    &.suggestions {
        @media (min-width: 768px) {
            flex-direction: column;
            width: 40px;
            height 53px;
            padding: 14px 0 8px;
        }
    }

    &.roadmap {
        @media (min-width: 1200px) {
            padding: 10px 13px 10px 16px;
        }
    }
`;

export const ArrowBtn = styled.button`
  margin-left: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

export const Upvotes = styled.p`
  ${({ theme }) => theme.bold300};
`;

export const CommentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40px;
`;

export const CommentsIcon = styled.img.attrs({
  src: "/commentsIcon.svg",
  alt: "comments quantity",
})``;

export const QtyComments = styled.p`
  ${({ theme }) => theme.bold300};
  color: ${({ theme }) => theme.onSurface11};
  opacity: ${({ isZero }) => (isZero ? "0.5" : "1")};
  @media (min-width: 768px) {
    ${({ theme, roadmap }) => (roadmap ? theme.bold300 : theme.bold600)};
  }
  @media (min-width: 1200px) {
    ${({ theme }) => theme.bold600};
  }
`;

export const NoFeedbackWrapper = styled.div`
  width: 87%;
  margin: 32px auto;
  padding: 76px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.surface1};
  border-radius: 10px;
  h2 {
    ${({ theme }) => theme.bold700};
    color: ${({ theme }) => theme.onSurface11};
    margin-top: 40px;
    letter-spacing: -0.25px;
    @media (min-width: 768px) {
      ${({ theme }) => theme.bold900};
      margin-top: 54px;
      letter-spacing: -0.33px;
    }
  }

  p {
    ${({ theme }) => theme.regular300};
    color: ${({ theme }) => theme.onSurface12};
    margin: 14px 0 24px;
    text-align: center;
    max-width: 45ch;
    @media (min-width: 768px) {
      ${({ theme }) => theme.regular600};
      margin: 16px 0 48px;
    }
  }

  @media (min-width: 768px) {
    width: 100%;
    margin: 24px 0px 0px;
    padding: 110px 140px;
  }
`;

export const NoFeedbackIcon = styled.img.attrs(({ width }) => ({
  src: "/no-feedback.svg",
  alt: "no feedback",
  width: width,
}))``;

export const ArrowLeft = ({ details }) => {
  const theme = useTheme();
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.33447 9L0.334473 5L4.33447 1"
        stroke={details ? theme.secondary : theme.onSurface23}
        strokeWidth="2"
      />
    </svg>
  );
};

export const ArrowDown = ({ feedback }) => {
  const theme = useTheme();
  return (
    <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1l4 4 4-4"
        stroke={feedback ? theme.secondary : theme.onSurface21}
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const ArrowUp = ({ atContent, activeVotes, feedback }) => {
  const theme = useTheme();
  return (
    <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 6l4-4 4 4"
        stroke={
          (atContent && !activeVotes) || feedback
            ? theme.secondary
            : theme.onSurface21
        }
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const Dropdown = styled.div`
  display: ${({ bgOptions }) => (bgOptions ? "block" : "none")};
  position: absolute;
  top: ${({ feedback }) => (feedback ? "64px" : "54px")};
  left: ${({ feedback }) => (feedback ? "0" : "10px")};
  background-color: ${({ theme }) => theme.surface1};
  width: ${({ feedback }) => (feedback ? "100%" : "255px")};
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
  border-radius: 10px;
  cursor: default;
  z-index: 1;
`;

export const ItemsList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 24px;
  cursor: pointer;
  :not(:nth-last-child(1)) {
    border-bottom: 1px solid ${({ theme }) => theme.onSurface11OpacityLight};
  }
`;

export const Item = styled.button`
  color: ${({ theme }) => theme.onSurface12};
  ${({ theme }) => theme.regular600};
  cursor: pointer;
  min-width: 100px;
  text-align: left;
  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const CheckIcon = () => {
  const theme = useTheme();
  return (
    <svg
      width="13"
      height="10"
      viewBox="0 0 13 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.968262 4.85894L4.49995 8.39062L11.9999 0.890625"
        stroke={theme.primary}
        strokeWidth="2"
      />
    </svg>
  );
};

export const ItemLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.onSurface11};
  opacity: 0.15;
`;

export const FeedbackBtn = styled.button`
  padding: 11px 16px;
  background-color: ${({ details, feedCancel, feedDelete, theme }) =>
    details
      ? theme.secondary
      : feedCancel
      ? theme.cancel
      : feedDelete
      ? theme.error
      : theme.primary};
  border-radius: 10px;
  ${({ theme }) => theme.bold300};
  color: ${({ theme }) => theme.onPrimary};
  cursor: pointer;
  font-family: inherit;
  justify-self: end;
  @media (min-width: 768px) {
    ${({ theme }) => theme.bold400};
    padding: 12px 24px;
  }
  :hover {
    background-color: ${({ details, feedCancel, feedDelete, theme }) =>
      details
        ? theme.secondaryHover1
        : feedCancel
        ? theme.cancelHover
        : feedDelete
        ? theme.errorHover
        : theme.primaryHover};
  }
`;

export const BgFeatures = styled.div`
  position: fixed;
  display: ${({ bgFeatures }) => (bgFeatures ? "flex" : "none")};
  align-items: center;
  width: 100%;
  height: 100vh;
  top: 72px;
  left: 0;
  background: linear-gradient(
    hsla(0, 0%, 0%, 0),
    hsla(0, 0%, 0%, 0.6),
    hsla(0, 0%, 59%, 0.8)
  );
  z-index: 1;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const FeaturesWrapper = styled.section`
  display: ${({ bgFeatures }) => (bgFeatures ? "flex" : "none")};
  flex-direction: ${({ bgFeatures }) => (bgFeatures ? "column" : "row")};
  row-gap: 24px;
  position: absolute;
  right: 0;
  top: 72px;
  padding: 24px;
  height: calc(100vh - 72px);
  background-color: ${({ theme }) => theme.background};
  z-index: 2;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    align-self: self-start;
    position: relative;
    top: 0;
    padding: 0;
    width: 66.3%;
    height: 0;
  }
  @media (min-width: 1200px) {
    flex-direction: column;
    height: min-content;
    width: 100%;
    row-gap: 24px;
  }
`;

export const Category = styled.section`
  width: 223px;
  background-color: ${({ theme }) => theme.surface1};
  border-radius: 10px;
  display: ${({ bgFeatures }) => (bgFeatures ? "flex" : "none")};
  padding: 24px 18px 33px 24px;
  @media (min-width: 768px) {
    display: flex;
    width: 48.9%;
    padding-left: clamp(1.5rem, 9.3vw - 3rem, 4rem);
  }
  @media (min-width: 1200px) {
    width: 100%;
    padding: 24px;
  }
`;

export const CategoryContent = styled.div`
  width: 181px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 14px;
  column-gap: 8px;
`;

export const CategoryItem = styled.p`
  ${({ theme }) => theme.semibold300};
  color: ${({ selected, theme }) =>
    selected ? theme.onPrimaryInverted : theme.secondary};
  padding: 6px 16px;
  background-color: ${({ selected, theme }) =>
    selected ? theme.secondary : theme.onPrimary};
  border-radius: 10px;
  cursor: ${({ atContent }) => (atContent ? "" : "pointer")};
  width: ${({ atContent }) => (atContent ? "max-content" : "")};
  margin-bottom: ${({ atContent }) => (atContent ? "16px" : "")};
  :hover {
    background-color: ${({ atContent, theme }) =>
      atContent ? "" : theme.primaryInvertedHover};
    color: ${({ theme }) => theme.secondary};
  }
  @media (min-width: 768px) {
    margin-bottom: ${({ roadmap }) => (roadmap ? "16px" : "0")};
  }
`;

export const Roadmap = styled.section`
  width: 223px;
  background-color: ${({ theme }) => theme.surface1};
  border-radius: 10px;
  display: ${({ bgFeatures }) => (bgFeatures ? "flex" : "none")};
  padding: 19px 24px 24px;
  @media (min-width: 768px) {
    display: flex;
    width: 48.9%;
    padding-left: clamp(1.5rem, 9.3vw - 3rem, 4rem);
    padding-right: clamp(1.5rem, 6.1vw + 0.07rem, 3rem);
  }
  @media (min-width: 1200px) {
    width: 100%;
    padding: 19px 24px 24px;
  }
`;

export const RoadmapWrapper = styled.div`
  width: 100%;
`;

export const RoadmapHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  h2 {
    ${({ theme }) => theme.bold700};
    color: ${({ theme }) => theme.onSurface11};
  }
  a {
    ${({ theme }) => theme.semibold300};
    color: ${({ theme }) => theme.secondary};
    :hover {
      color: ${({ theme }) => theme.secondaryHover2};
    }
  }
`;

export const RoadmapItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.onSurface12};
  div {
    display: flex;
    align-items: center;
  }
  p {
    margin-left: 16px;
    ${({ theme }) => theme.regular600};
  }
  span {
    ${({ theme }) => theme.bold600};
  }

  :nth-last-child(1) {
    margin-bottom: 0;
  }
`;

export const Dot = styled.div`
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ status, theme }) =>
    status === "Planned"
      ? theme.roadmap1
      : status === "In-Progress"
      ? theme.roadmap2
      : theme.roadmap3};
`;
