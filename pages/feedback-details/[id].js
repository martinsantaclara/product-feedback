import {useState, useEffect} from 'react';
import Details from '@/components/details';
import {useRequestContext} from '@/context/StateContext';
import {useRouter} from 'next/router';

export const DetailsPage = () => {
    const router = useRouter();
    const requestId = parseInt(router.query.id);
    const {requests} = useRequestContext();
    const [request, setRequest] = useState([]);

    useEffect(() => {
        const request = requests.filter((req) => req.id === requestId);
        setRequest(request);
    }, [requestId]);

    return (
        <>{request.length > 0 && <Details request={request[0]}></Details>}</>
    );
};

export default DetailsPage;
