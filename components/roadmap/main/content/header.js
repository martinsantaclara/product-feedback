import {Status} from '../../styles';

const ContentHeader = ({statusTitle, statusSubTitle}) => {
    return (
        <Status>
            <h2>{statusTitle}</h2>
            <p>{statusSubTitle}</p>
        </Status>
    );
};

export default ContentHeader;
