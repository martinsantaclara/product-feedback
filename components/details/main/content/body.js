import {useState} from 'react';
import {FeedbackBtn} from '@/components/suggestions/styles';
import {useRequestContext} from '@/context/StateContext';
import {
    Comment,
    ErrorText,
    NewReplyContainer,
    PostCommentFooter,
    PostCommentText,
} from '../../styles';
import {NewReply} from './newreply';

const ContentBody = ({
    comment,
    requestId,
    commentIndex,
    showNewReply,
    setShowNewReply,
}) => {
    return (
        <>
            <Comment>{comment.content}</Comment>
            {showNewReply && (
                <NewReply
                    comment={comment}
                    requestId={requestId}
                    commentIndex={commentIndex}
                    setShowNewReply={setShowNewReply}
                />
            )}
        </>
    );
};

export default ContentBody;
