import {useState, useEffect} from 'react';
import {useRequestContext} from '@/context/StateContext';
import {
    Options,
    FeedbackBtn,
    OptionsWrapper,
    SortWrapper,
    SuggestionsQtyWrapper,
    SuggestionsIcon,
    SuggestionsQty,
} from '../../styles';
import OptionsSort from './sort';
import {useRouter} from 'next/router';

const MainOptions = ({qtySuggestions}) => {
    const router = useRouter();
    return (
        <>
            {qtySuggestions !== undefined && (
                <Options>
                    <OptionsWrapper>
                        <SortWrapper>
                            <SuggestionsQtyWrapper>
                                <SuggestionsIcon />
                                <SuggestionsQty>
                                    {qtySuggestions} <span>Suggestions</span>{' '}
                                </SuggestionsQty>
                            </SuggestionsQtyWrapper>
                            <OptionsSort />
                        </SortWrapper>
                        <FeedbackBtn onClick={() => router.push('/feedback/0')}>
                            + Add Feedback
                        </FeedbackBtn>
                    </OptionsWrapper>
                </Options>
            )}
        </>
    );
};

export default MainOptions;
