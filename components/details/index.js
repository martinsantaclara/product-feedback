import {MainContainer, PageContainer} from '../suggestions/styles';
import PostComment from './postcomment';
import DetailsHeader from './header';
import DetailsMain from './main';

const Details = ({request}) => {
    return (
        <PageContainer details>
            <DetailsHeader request={request} />
            <MainContainer className="details" details>
                <DetailsMain request={request} />
                <PostComment request={request}></PostComment>
            </MainContainer>
        </PageContainer>
    );
};

export default Details;
