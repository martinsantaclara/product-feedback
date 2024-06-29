import {useState, useEffect} from 'react';
import {useDeviceContext, useRequestContext} from '@/context/StateContext';
import {MainContent, MainContentWrapper} from '../../styles';
import ContentBody from './body';
import ContentHeader from './header';

const RoadmapMainContent = () => {
    const {mobile} = useDeviceContext();
    const {requestsQty, selectedStatus} = useRequestContext();
    const [statusTitle, setStatusTitle] = useState([]);
    const [statusSubTitle, setStatusSubTitle] = useState([]);

    useEffect(() => {
        let title = [];
        let subTitle = [];
        title[0] = `Planned (${requestsQty[0]})`;
        subTitle[0] = 'Ideas prioritized for research';
        title[1] = `In-Progress (${requestsQty[1]})`;
        subTitle[1] = 'Features currently being developed';
        subTitle[2] = 'Currently being developed';
        title[2] = `Live (${requestsQty[2]})`;
        subTitle[3] = 'Released features';
        setStatusTitle(title);
        setStatusSubTitle(subTitle);
    }, [selectedStatus]);

    return (
        <MainContentWrapper>
            {mobile ? (
                <MainContent>
                    <ContentHeader
                        statusTitle={
                            selectedStatus === 'planned'
                                ? statusTitle[0]
                                : selectedStatus === 'in-progress'
                                ? statusTitle[1]
                                : statusTitle[2]
                        }
                        statusSubTitle={
                            selectedStatus === 'planned'
                                ? statusSubTitle[0]
                                : selectedStatus === 'in-progress'
                                ? statusSubTitle[1]
                                : statusSubTitle[3]
                        }
                    />
                    <ContentBody
                        status={selectedStatus}
                        requestQty={
                            selectedStatus === 'planned'
                                ? requestsQty[0]
                                : selectedStatus === 'in-progress'
                                ? requestsQty[1]
                                : requestsQty[2]
                        }
                    />
                </MainContent>
            ) : (
                <>
                    <MainContent>
                        <ContentHeader
                            statusTitle={statusTitle[0]}
                            statusSubTitle={statusSubTitle[0]}
                        />
                        <ContentBody
                            status={'planned'}
                            requestQty={requestsQty[0]}
                        />
                    </MainContent>
                    <MainContent>
                        <ContentHeader
                            statusTitle={statusTitle[1]}
                            statusSubTitle={statusSubTitle[2]}
                        />
                        <ContentBody
                            status={'in-progress'}
                            requestQty={requestsQty[1]}
                        />
                    </MainContent>
                    <MainContent>
                        <ContentHeader
                            statusTitle={statusTitle[2]}
                            statusSubTitle={statusSubTitle[3]}
                        />
                        <ContentBody
                            status={'live'}
                            requestQty={requestsQty[2]}
                        />
                    </MainContent>
                </>
            )}
        </MainContentWrapper>
    );
};

export default RoadmapMainContent;
