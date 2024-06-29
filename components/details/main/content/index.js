import {useState} from 'react';
import {ContentItem, Comment, RepliesItemsWrapper} from '../../styles';
import ContentBody from './body';
import ContentHeader from './header';
import RepliesItem from './replies';

const CommentsItem = ({comment, requestId, commentIndex}) => {
    const [showNewReply, setShowNewReply] = useState(false);
    return (
        <ContentItem borderLeft={'0'}>
            <ContentHeader
                comment={comment}
                showNewReply={showNewReply}
                setShowNewReply={setShowNewReply}
            ></ContentHeader>
            <ContentBody
                comment={comment}
                requestId={requestId}
                commentIndex={commentIndex}
                showNewReply={showNewReply}
                setShowNewReply={setShowNewReply}
            />
            {comment.replies && (
                <RepliesItemsWrapper>
                    {comment.replies.map((reply, index) => {
                        return (
                            <RepliesItem
                                key={index}
                                comment={reply}
                                requestId={requestId}
                                commentIndex={commentIndex}
                                borderLeft={
                                    index === 0
                                        ? comment.replies.length > 1
                                            ? '125%'
                                            : '100%'
                                        : '0'
                                }
                            ></RepliesItem>
                        );
                    })}
                </RepliesItemsWrapper>
            )}
        </ContentItem>
    );
};

export default CommentsItem;
