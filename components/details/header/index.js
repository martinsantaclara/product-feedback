import Link from 'next/link';
import ContentItem from '../../suggestions/main/contentItem';
const {GoBackWrapper, LinkBack} = require('../../roadmap/styles');
const {
    ArrowLeft,
    FeedbackBtn,
    HeaderContainer,
    HeaderWrapper,
} = require('../../suggestions/styles');
import {useRouter} from 'next/router';

const DetailsHeader = ({request}) => {
    const router = useRouter();
    return (
        <>
            <HeaderContainer details>
                <HeaderWrapper>
                    {/* <GoBackWrapper details>
                        <ArrowLeft details></ArrowLeft>
                        <Link href="/">Go Back</Link>
                    </GoBackWrapper> */}
                    <LinkBack $details>
                        <ArrowLeft details></ArrowLeft>
                        <p>Go Back</p>
                    </LinkBack>
                    <FeedbackBtn
                        details
                        onClick={() => router.push(`/feedback/${request.id}`)}
                    >
                        Edit Feedback
                    </FeedbackBtn>
                </HeaderWrapper>
            </HeaderContainer>
        </>
    );
};

export default DetailsHeader;
