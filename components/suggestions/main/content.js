import {useState, useEffect} from 'react';
import {useRequestContext} from '@/context/StateContext';
import {Fragment} from 'react';
import ContentItem from './contentItem';
import NoFeedback from './nofeedback';
import {SuggestionsItemsWrapper} from '../styles';

const MainContent = ({qtySuggestions}) => {
    const {suggestions, requests, selectedCategory, selectedOrder} =
        useRequestContext();
    const [sortedSuggestions, setSortedSuggestions] = useState([]);
    const [changeOrder, setChangeOrder] = useState(false);

    useEffect(() => {
        const sortSuggestions = () => {
            if (
                selectedOrder === 'Most Upvotes' ||
                selectedOrder === 'Least Upvotes'
            ) {
                const sortedByVotes = [...requests].sort((s1, s2) =>
                    selectedOrder === 'Most Upvotes'
                        ? s2.upvotes - s1.upvotes ||
                          s2.qtyComments - s1.qtyComments
                        : s1.upvotes - s2.upvotes ||
                          s2.qtyComments - s1.qtyComments
                );
                setSortedSuggestions(sortedByVotes);
            } else {
                const sortedByComments = [...requests].sort((s1, s2) =>
                    selectedOrder === 'Most Comments'
                        ? s2.qtyComments - s1.qtyComments ||
                          s2.upvotes - s1.upvotes
                        : s1.qtyComments - s2.qtyComments ||
                          s2.upvotes - s1.upvotes
                );
                setSortedSuggestions(sortedByComments);
            }
        };
        sortSuggestions();
        setChangeOrder((prev) => !prev);
    }, [selectedOrder]);

    return (
        <>
            {' '}
            {qtySuggestions > 0 ? (
                <SuggestionsItemsWrapper>
                    {sortedSuggestions &&
                        sortedSuggestions.map((suggestion, index) => {
                            if (suggestion.status === 'suggestion') {
                                return (
                                    <Fragment key={index}>
                                        {(selectedCategory === 'All' ||
                                            suggestion.category.toUpperCase() ===
                                                selectedCategory.toUpperCase()) && (
                                            <ContentItem
                                                suggestion={suggestion}
                                            ></ContentItem>
                                        )}
                                    </Fragment>
                                );
                            }
                        })}
                </SuggestionsItemsWrapper>
            ) : (
                <NoFeedback />
            )}
        </>
    );
};

export default MainContent;
