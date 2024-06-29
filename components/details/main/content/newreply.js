import {useState} from 'react';
import {FeedbackBtn} from '@/components/suggestions/styles';
import {useRequestContext} from '@/context/StateContext';
import {
    ErrorText,
    NewReplyContainer,
    PostCommentFooter,
    PostCommentText,
} from '../../styles';

export const NewReply = ({
    comment,
    requestId,
    commentIndex,
    setShowNewReply,
}) => {
    const {requests, setRequests, currentUser} = useRequestContext();

    const [reply, setReply] = useState('');
    const [showError, setShowError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const postReply = () => {
        if (reply === '') {
            setErrorText('Text reply is required');
            setShowError(true);
        } else if (comment.user.username === currentUser.username) {
            setErrorText('Self reply is not permitted');
            setShowError(true);
        } else {
            let newRequests = [...requests];
            const reqIndex = newRequests.findIndex(
                (req) => req.id === requestId
            );

            const newReply = {
                content: reply,
                replyingTo: comment.user.username,
                user: currentUser,
            };

            let newComments = newRequests[reqIndex].comments[commentIndex];
            newRequests[reqIndex].comments[commentIndex].replies =
                newComments.hasOwnProperty('replies')
                    ? newComments.replies
                    : [];
            newRequests[reqIndex].comments[commentIndex].replies.push(newReply);

            // let newComments = newRequests[reqIndex].comments[commentIndex];
            // let newReplies = newComments.replies ? newComments.replies : [];
            // newReplies.push(newReply);
            // newComments.replies = newReplies;

            newRequests[reqIndex].qtyComments =
                newRequests[reqIndex].qtyComments + 1;

            setReply('');
            setShowNewReply(false);
            localStorage.setItem('requests', JSON.stringify(newRequests));
            setRequests(newRequests);
        }
    };

    const handleReplyFocus = () => {
        setShowError(false);
        setErrorText('');
    };

    return (
        <NewReplyContainer>
            <PostCommentText
                name="textarea"
                rows="3"
                placeholder="Type your reply here"
                maxLength={250}
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                newReply
                onFocus={handleReplyFocus}
                showError={showError}
            ></PostCommentText>
            <PostCommentFooter className="newReply">
                <ErrorText newReply>{errorText}</ErrorText>
                <FeedbackBtn onClick={postReply}>Post Reply</FeedbackBtn>
            </PostCommentFooter>
        </NewReplyContainer>
    );
};
