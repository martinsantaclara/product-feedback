import {GoBackWrapper, LinkBack} from '../roadmap/styles';
import Link from 'next/link';

const {
    HeaderContainer,
    HeaderWrapper,
    ArrowLeft,
} = require('../suggestions/styles');

const FeedbackHeader = () => {
    return (
        <HeaderContainer feedback>
            <HeaderWrapper feedback>
                {/* <GoBackWrapper details>
                    <ArrowLeft details></ArrowLeft>
                    <Link href="/">Go Back</Link>
                </GoBackWrapper> */}
                <LinkBack $details>
                    <ArrowLeft details></ArrowLeft>
                    <p>Go Back</p>
                </LinkBack>
            </HeaderWrapper>
        </HeaderContainer>
    );
};

export default FeedbackHeader;
