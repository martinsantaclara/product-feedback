import Link from 'next/link';
import {
    ArrowLeft,
    FeedbackBtn,
    HeaderContainer,
    HeaderWrapper,
} from '@/components/suggestions/styles';
import {GoBackWrapper, TitleRoadmap, LinkBack} from '../styles';

// HeaderContainer,

const RoadmapHeader = () => {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <TitleRoadmap>
                    {/* <GoBackWrapper>
                        <ArrowLeft></ArrowLeft>
                        <Link href="/">Go Back</Link>
                    </GoBackWrapper> */}
                    <LinkBack>
                        <ArrowLeft></ArrowLeft>
                        <p>Go Back</p>
                    </LinkBack>
                    <h1>Roadmap</h1>
                </TitleRoadmap>
                <FeedbackBtn>+ Add Feedback</FeedbackBtn>
            </HeaderWrapper>
        </HeaderContainer>
    );
};

export default RoadmapHeader;
