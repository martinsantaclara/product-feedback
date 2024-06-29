import {useState} from 'react';
import {useRequestContext} from '@/context/StateContext';
import {Comment, ContentItem} from '../../styles';
import ContentHeader from './header';
import {NewReply} from './newreply';

const RepliesItem = ({comment, requestId, commentIndex, borderLeft}) => {
    const [showNewReply, setShowNewReply] = useState(false);
    return (
        <ContentItem reply borderLeft={borderLeft}>
            <ContentHeader
                comment={comment}
                showNewReply={showNewReply}
                setShowNewReply={setShowNewReply}
            ></ContentHeader>
            <Comment reply>
                <span>{'@' + comment.replyingTo}</span>
                {comment.content}
            </Comment>
            {showNewReply && (
                <NewReply
                    comment={comment}
                    requestId={requestId}
                    commentIndex={commentIndex}
                    setShowNewReply={setShowNewReply}
                ></NewReply>
            )}
        </ContentItem>
    );
};

export default RepliesItem;
