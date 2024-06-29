import {PageContainer} from '../suggestions/styles';
import FeedbackHeader from './header';
import FeedbackMain from './main';

const Feedback = ({requestId}) => {
    return (
        <PageContainer feedback newFeedback={requestId === 0}>
            <FeedbackHeader></FeedbackHeader>
            <FeedbackMain requestId={requestId}></FeedbackMain>
        </PageContainer>
    );
};

export default Feedback;
