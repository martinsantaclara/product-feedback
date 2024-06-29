import {useDeviceContext} from '@/context/StateContext';
import {FeedbackBtn, NoFeedbackIcon, NoFeedbackWrapper} from '../styles';
import {useRouter} from 'next/router';

const NoFeedback = () => {
    const {mobile} = useDeviceContext();
    const router = useRouter();
    return (
        <NoFeedbackWrapper>
            <NoFeedbackIcon width={mobile ? 102 : 129} />
            <h2>There is no feedback yet.</h2>
            <p>
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app.
            </p>
            <FeedbackBtn onClick={() => router.push('/feedback/0')}>
                + Add Feedback
            </FeedbackBtn>
        </NoFeedbackWrapper>
    );
};

export default NoFeedback;
