import {useRequestContext} from '@/context/StateContext';
import {useState, useEffect} from 'react';
import {
    CommentsIcon,
    CommentsWrapper,
    Content,
    ContentDescription,
    ContentOne,
    ContentThree,
    ContentTwo,
    ContentWrapper,
    CategoryItem,
    QtyComments,
    ArrowUp,
    Upvotes,
    UpvotesBtn,
    BorderTop,
    RoadmapMainTop,
    RoadmapStatus,
    Dot,
    Title,
    EditLink,
    SuggestionsItem,
} from '../styles';

const ContentItem = ({suggestion, details = false}) => {
    const {requests, setRequests} = useRequestContext();
    const [titleHover, setTitleHover] = useState(false);
    const [atContent, setAtContent] = useState(true);

    const handleClickUpvotes = () => {
        suggestion.active = !suggestion.active;
        suggestion.upvotes += suggestion.active ? 1 : -1;
        const newRequests = [...requests];
        const index = newRequests.findIndex((req) => req.id === suggestion.id);
        newRequests[index].active = suggestion.active;
        newRequests[index].upvotes = suggestion.upvotes;
        localStorage.setItem('requests', JSON.stringify(newRequests));
        setRequests(newRequests);
    };

    // useEffect(() => {
    //     const requests = JSON.parse(localStorage.getItem('requests'));
    //     const index = requests.findIndex((req) => req.id === suggestion.id);
    //     requests[index].active = suggestion.active;
    //     requests[index].upvotes = suggestion.upvotes;
    //     localStorage.setItem('requests', JSON.stringify(requests));
    // }, [activeVotes]);

    const category =
        suggestion.category.length === 2
            ? suggestion.category.toUpperCase()
            : suggestion.category.charAt(0).toUpperCase() +
              suggestion.category.slice(1);

    return (
        <SuggestionsItem details={details}>
            <ContentWrapper className="suggestions">
                <ContentOne className="suggestions">
                    <Title className="suggestions">
                        <EditLink
                            onMouseEnter={() => setTitleHover(true)}
                            onMouseLeave={() => setTitleHover(false)}
                            id={suggestion.id}
                            $titlehover={details ? false : titleHover}
                            $details={details}
                        >
                            {suggestion.title}
                        </EditLink>
                    </Title>
                    <ContentDescription className="suggestions">
                        {suggestion.description}
                    </ContentDescription>
                    <CategoryItem atContent={atContent}>
                        {category}
                    </CategoryItem>
                </ContentOne>
                <ContentTwo className="suggestions">
                    <UpvotesBtn
                        className="suggestions"
                        onClick={handleClickUpvotes}
                        activeVotes={suggestion.active}
                    >
                        <ArrowUp atContent activeVotes={suggestion.active} />
                        <Upvotes>{suggestion.upvotes}</Upvotes>
                    </UpvotesBtn>
                </ContentTwo>
                <ContentThree className="suggestions">
                    <CommentsWrapper>
                        <CommentsIcon />
                        <QtyComments isZero={suggestion.qtyComments === 0}>
                            {suggestion.qtyComments}
                        </QtyComments>
                    </CommentsWrapper>
                </ContentThree>
            </ContentWrapper>
        </SuggestionsItem>
    );
};

export default ContentItem;
