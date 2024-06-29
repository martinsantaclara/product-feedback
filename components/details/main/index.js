import ContentItem from '@/components/suggestions/main/contentItem';
import {
    CommentsItemsWrapper,
    CommentsWrapper,
    DetailsMainHeader,
} from '../styles';
import CommentsItem from './content';

const DetailsMain = ({request}) => {
    return (
        // <MainContainer>
        <>
            <ContentItem suggestion={request} details></ContentItem>
            <CommentsWrapper>
                <DetailsMainHeader>
                    {request.qtyComments} Comments
                </DetailsMainHeader>
                <CommentsItemsWrapper>
                    {request.qtyComments > 0 &&
                        request.comments.map((comment, index) => {
                            return (
                                <CommentsItem
                                    key={comment.id}
                                    comment={comment}
                                    requestId={request.id}
                                    commentIndex={index}
                                ></CommentsItem>
                            );
                        })}
                </CommentsItemsWrapper>
            </CommentsWrapper>
        </>
        // </MainContainer>
    );
};

export default DetailsMain;
