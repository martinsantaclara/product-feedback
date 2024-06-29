import {Fragment} from 'react';
import NoFeedback from '@/components/suggestions/main/nofeedback';
import {useRequestContext} from '@/context/StateContext';
import RoadmapContentItem from './contentItem';
import {RoadmapItemsWrapper} from '../../styles';

const ContentBody = ({status, requestQty}) => {
    const {requests, selectedCategory} = useRequestContext();
    return (
        <>
            {' '}
            {requests.length > 0 ? (
                <RoadmapItemsWrapper>
                    {requests.map((request, index) => {
                        if (request.status === status) {
                            return (
                                <Fragment key={index}>
                                    <RoadmapContentItem
                                        suggestion={request}
                                    ></RoadmapContentItem>
                                    {/* {(selectedCategory === 'All' ||
                                        request.category.toUpperCase() ===
                                            selectedCategory.toUpperCase()) && (
                                        
                                    )} */}
                                </Fragment>
                            );
                        }
                    })}
                </RoadmapItemsWrapper>
            ) : (
                <NoFeedback />
            )}
        </>
    );
};

export default ContentBody;
