import {useRequestContext} from '@/context/StateContext';
import {useState} from 'react';
import {HeaderItem, MainHeader} from '../styles';

const RoadmapMainHeader = () => {
    const {requestsQty, selectedStatus, setSelectedStatus} =
        useRequestContext();
    return (
        <MainHeader>
            <HeaderItem
                active={selectedStatus === 'planned'}
                onClick={() => setSelectedStatus('planned')}
            >
                <h2>Planned ({requestsQty[0]})</h2>
            </HeaderItem>
            <HeaderItem
                active={selectedStatus === 'in-progress'}
                onClick={() => setSelectedStatus('in-progress')}
            >
                <h2>In-Progress ({requestsQty[1]})</h2>
            </HeaderItem>
            <HeaderItem
                active={selectedStatus === 'live'}
                onClick={() => setSelectedStatus('live')}
            >
                <h2>Live ({requestsQty[2]})</h2>
            </HeaderItem>
        </MainHeader>
    );
};

export default RoadmapMainHeader;
