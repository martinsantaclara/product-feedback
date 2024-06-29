import {useRequestContext} from '@/context/StateContext';
import {useState} from 'react';
const {FeedbackBtn} = require('../suggestions/styles');
const {
    MainContainer,
    PostCommentTitle,
    PostCommentText,
    PostCommentFooter,
    ErrorText,
    CharactersLeft,
    PostCommentContainer,
} = require('./styles');

const PostComment = ({request}) => {
    const {requests, setRequests, maxCommentId, setMaxCommentId, currentUser} =
        useRequestContext();
    const [commentLeft, setCommentLeft] = useState(250);
    const [comment, setComment] = useState('');
    const [showError, setShowError] = useState(false);
    const postComment = () => {
        console.log(maxCommentId);
        console.log(currentUser);

        if (comment === '') {
            setShowError(true);
        } else {
            const reqIndex = requests.findIndex((req) => req.id === request.id);
            const newComment = {
                id: maxCommentId + 1,
                content: comment,
                user: currentUser,
            };
            requests[reqIndex].comments = requests[reqIndex].hasOwnProperty(
                'comments'
            )
                ? requests[reqIndex].comments
                : [];
            requests[reqIndex].comments.push(newComment);
            requests[reqIndex].qtyComments = requests[reqIndex].qtyComments + 1;
            setMaxCommentId(maxCommentId + 1);
            localStorage.setItem('requests', JSON.stringify(requests));
            setComment('');

            // let newRequests = [...requests];
            // const reqIndex = newRequests.findIndex(
            //     (req) => req.id === request.id
            // );
            // let newComments = newRequests[reqIndex].comments
            //     ? newRequests[reqIndex].comments
            //     : [];
            // const newComment = {
            //     id: maxCommentId + 1,
            //     content: comment,
            //     user: currentUser,
            // };
            // newComments.push(newComment);
            // Update requests
            // newRequests[reqIndex].comments = newComments;
            // requests[reqIndex].qtyComments = requests[reqIndex].qtyComments + 1;
            // setMaxCommentId(maxCommentId + 1);
            // localStorage.setItem('requests', JSON.stringify(requests));
            // setComment('');
            // setRequests(newRequests);
        }
    };
    return (
        // <MainContainer postComment>
        <PostCommentContainer>
            <PostCommentTitle>Add Comment</PostCommentTitle>
            <PostCommentText
                name="textarea"
                // rows="3"
                placeholder="Type your comment here"
                maxLength={250}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onFocus={() => setShowError(false)}
                showError={showError}
            ></PostCommentText>
            <PostCommentFooter>
                {showError ? (
                    <ErrorText>Text comment is required.</ErrorText>
                ) : (
                    <CharactersLeft>
                        {commentLeft - comment.length} characters Left
                    </CharactersLeft>
                )}

                <FeedbackBtn onClick={postComment}>Post Comment</FeedbackBtn>
            </PostCommentFooter>
        </PostCommentContainer>
        // </MainContainer>
    );
};

export default PostComment;
