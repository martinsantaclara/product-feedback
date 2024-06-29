import {PageContainer} from '../suggestions/styles';
import RoadmapHeader from './header';
import RoadmapMain from './main';

const Roadmap = () => {
    return (
        <PageContainer roadmap>
            <RoadmapHeader />
            <RoadmapMain />
        </PageContainer>
    );
};

export default Roadmap;
