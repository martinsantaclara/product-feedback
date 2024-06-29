import {useState, useEffect} from 'react';
import MainOptions from './options';
import {MainContainer} from '../styles';
import MainContent from './content';
import {useRequestContext} from '@/context/StateContext';

const SuggestionsMain = ({setEmpty}) => {
    const {suggestions, requests, selectedCategory} = useRequestContext();
    const [qtySuggestions, setQtySuggestions] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const qtySuggestions = requests.reduce((acc, curr) => {
            acc +=
                (curr.status === 'suggestion') &
                (curr.category.toUpperCase() ===
                    selectedCategory.toUpperCase() ||
                    selectedCategory === 'All')
                    ? 1
                    : 0;
            return acc;
        }, 0);
        setQtySuggestions(qtySuggestions);
        setEmpty(qtySuggestions === 0);
        setLoading(false);
    }, [selectedCategory]);

    return (
        <>
            {!loading && (
                <MainContainer className="suggestions">
                    <MainOptions qtySuggestions={qtySuggestions} />
                    <MainContent qtySuggestions={qtySuggestions} />
                </MainContainer>
            )}
        </>
    );
};

export default SuggestionsMain;
