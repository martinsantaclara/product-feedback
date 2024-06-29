import {useState} from 'react';
import SuggestionsHeader from './header';
import SuggestionsMain from './main';
import {PageContainer, SuggestionsWrapper} from './styles';

const Suggestions = () => {
    const [empty, setEmpty] = useState(false);
    return (
        <PageContainer suggestions empty={empty}>
            <SuggestionsWrapper>
                <SuggestionsHeader />
                <SuggestionsMain setEmpty={setEmpty} />
            </SuggestionsWrapper>
        </PageContainer>
    );
};

export default Suggestions;
