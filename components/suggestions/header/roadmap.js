import {useState} from 'react';
import Link from 'next/link';
import {
    Dot,
    RoadmapItem,
    Roadmap,
    RoadmapHeader,
    RoadmapWrapper,
} from '../styles';
import {useRequestContext} from '@/context/StateContext';

const HeaderRoadmap = ({bgFeatures}) => {
    const {requestsQty} = useRequestContext();
    const statusRoadmap = ['Planned', 'In-Progress', 'Live'];

    return (
        <Roadmap bgFeatures={bgFeatures}>
            <RoadmapWrapper>
                <RoadmapHeader>
                    <h2>Roadmap</h2>
                    <Link href="/roadmap">View</Link>
                </RoadmapHeader>
                {statusRoadmap.map((status, index) => {
                    return (
                        <RoadmapItem key={index}>
                            <div>
                                <Dot status={status} />
                                <p>{status}</p>
                            </div>
                            {/* <span>
                                {status === 'Planned'
                                    ? planned.length
                                    : status === 'In-Progress'
                                    ? inProgress.length
                                    : live.length}
                            </span> */}
                            <span>
                                {status === 'Planned'
                                    ? requestsQty[0]
                                    : status === 'In-Progress'
                                    ? requestsQty[1]
                                    : requestsQty[2]}
                            </span>
                        </RoadmapItem>
                    );
                })}
            </RoadmapWrapper>
        </Roadmap>
    );
};

export default HeaderRoadmap;
