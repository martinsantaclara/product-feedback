import {useState} from 'react';
import {useRequestContext} from '@/context/StateContext';
// import {MainContainer} from '../styles';
import RoadmapMainContent from './content';
import RoadmapMainHeader from './header';
import {MainContainer} from '@/components/suggestions/styles';

const RoadmapMain = () => {
    return (
        <MainContainer className="roadmap">
            <RoadmapMainHeader />
            <RoadmapMainContent />
        </MainContainer>
    );
};

export default RoadmapMain;
