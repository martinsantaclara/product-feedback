import Feedback from '@/components/feedback';
import {useRouter} from 'next/router';
const FeedbackPage = () => {
    const router = useRouter();
    const requestId = parseInt(router.query.id);
    return <Feedback requestId={requestId} />;
};

export default FeedbackPage;
