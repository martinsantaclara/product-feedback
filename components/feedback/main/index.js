import {MainContainer} from '@/components/suggestions/styles';
import FeedbackContent from './content';

const FeedbackMain = ({requestId}) => {
    return (
        <MainContainer feedback className="feedback">
            <FeedbackContent requestId={requestId} />
        </MainContainer>
    );
};

export default FeedbackMain;
