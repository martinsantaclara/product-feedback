import {useState} from 'react';
import {useRequestContext} from '@/context/StateContext';
import Image from 'next/image';
import {
    AuthorName,
    ErrorText,
    HeaderContainer,
    NewReplyContainer,
    PersonalData,
    PostCommentFooter,
    PostCommentText,
    Reply,
    UserName,
} from '../../styles';
import {FeedbackBtn} from '@/components/suggestions/styles';
export const ContentHeader = ({comment, showNewReply, setShowNewReply}) => {
    const handleClickReply = () => {
        setShowNewReply(!showNewReply);
    };
    return (
        <>
            <HeaderContainer>
                <PersonalData>
                    <Image
                        src={comment.user.image}
                        alt="Picture of the author"
                        width={40}
                        height={40}
                        style={{borderRadius: '50%'}}
                    />
                    <AuthorName>
                        <h3>{comment.user.name}</h3>
                        <UserName>
                            <p>@</p>
                            <span>{comment.user.username}</span>
                        </UserName>
                    </AuthorName>
                </PersonalData>
                <Reply onClick={handleClickReply}>Reply</Reply>
            </HeaderContainer>
        </>
    );
};

export default ContentHeader;
