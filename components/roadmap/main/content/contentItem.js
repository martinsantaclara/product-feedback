import {
    RoadmapItem,
    RoadmapMainTop,
    RoadmapStatus,
    BorderTop,
} from '../../styles';
import {useState, useEffect} from 'react';
import {
    ArrowUp,
    Dot,
    CategoryItem,
    Title,
    EditLink,
    CommentsWrapper,
    CommentsIcon,
    ContentDescription,
    ContentOne,
    ContentThree,
    ContentTwo,
    ContentWrapper,
    QtyComments,
    Upvotes,
    UpvotesBtn,
} from '@/components/suggestions/styles';
import {useDeviceContext, useRequestContext} from '@/context/StateContext';

const RoadmapContentItem = ({suggestion}) => {
    const {mobile} = useDeviceContext();
    const {requests, setRequests} = useRequestContext();
    const [titleHover, setTitleHover] = useState(false);
    const [atContent, setAtContent] = useState(true);
    const [activeVotes, setActiveVotes] = useState();

    const handleClickUpvotes = () => {
        suggestion.active = !suggestion.active;
        suggestion.upvotes += suggestion.active ? 1 : -1;
        const newRequests = [...requests];
        const index = newRequests.findIndex((req) => req.id === suggestion.id);
        newRequests[index].active = suggestion.active;
        newRequests[index].upvotes = suggestion.upvotes;
        localStorage.setItem('requests', JSON.stringify(newRequests));
        setRequests(newRequests);

        // setActiveVotes(suggestion.active);
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

    // console.log(suggestion);
    return (
        <RoadmapItem>
            <RoadmapMainTop>
                <BorderTop
                    status={
                        suggestion.status === 'planned'
                            ? 'Planned'
                            : suggestion.status === 'live'
                            ? 'Live'
                            : 'In-Progress'
                    }
                    mobile={mobile}
                />
                <RoadmapStatus>
                    <Dot
                        status={
                            suggestion.status === 'planned'
                                ? 'Planned'
                                : suggestion.status === 'live'
                                ? 'Live'
                                : 'In-Progress'
                        }
                        roadmap
                    ></Dot>
                    <p>
                        {suggestion.status === 'in-progress'
                            ? 'In Progress'
                            : suggestion.status.charAt(0).toUpperCase() +
                              suggestion.status.slice(1)}
                    </p>
                </RoadmapStatus>
            </RoadmapMainTop>
            <ContentWrapper>
                <ContentOne>
                    <Title>
                        <EditLink
                            onMouseEnter={() => setTitleHover(true)}
                            onMouseLeave={() => setTitleHover(false)}
                            id={suggestion.id}
                            $titlehover={titleHover}
                        >
                            {suggestion.title}
                        </EditLink>
                    </Title>
                    <ContentDescription className="roadmap">
                        {suggestion.description}
                    </ContentDescription>
                    <CategoryItem atContent={atContent} roadmap>
                        {category}
                    </CategoryItem>
                </ContentOne>
                <ContentTwo>
                    <UpvotesBtn
                        className="roadmap"
                        onClick={handleClickUpvotes}
                        activeVotes={suggestion.active}
                    >
                        <ArrowUp atContent activeVotes={suggestion.active} />
                        <Upvotes>{suggestion.upvotes}</Upvotes>
                    </UpvotesBtn>
                </ContentTwo>
                <ContentThree>
                    <CommentsWrapper>
                        <CommentsIcon />
                        <QtyComments
                            isZero={suggestion.qtyComments === 0}
                            roadmap
                        >
                            {suggestion.qtyComments}
                        </QtyComments>
                    </CommentsWrapper>
                </ContentThree>
            </ContentWrapper>
        </RoadmapItem>
    );
};

export default RoadmapContentItem;
