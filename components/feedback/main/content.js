import {useState, useEffect} from 'react';
import {useDeviceContext, useRequestContext} from '@/context/StateContext';
import {
    FeedbackIcon,
    FeedbackHead,
    FeedbackBody,
    FeedbackContainer,
    FeedbackControlContainer,
    FeedbackTitle,
    FeedbackDetailsContainer,
    BtnWrapper,
    FeedbackDescription,
    ControlLabelWrapper,
    CommonsBtn,
} from '../styles';
import {FeedbackBtn} from '@/components/suggestions/styles';
import {useRouter} from 'next/router';
import FeedbackCategoryComponent from './category';
import FeedbackStatusComponent from './status';
import {ErrorText, PostCommentText} from '@/components/details/styles';

const FeedbackContent = ({requestId}) => {
    const {requests, maxRequestId, setMaxRequestId} = useRequestContext();
    const {mobile} = useDeviceContext();
    const router = useRouter();

    const [originalTitle, setOriginalTitle] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Feature');
    const [selectedStatus, setSelectedStatus] = useState('');

    const [errorText, setErrorText] = useState('');
    const [showErrorTitle, setShowErrorTitle] = useState(false);
    const [showErrorDescription, setShowErrorDescription] = useState(false);

    const [feedbackId, setFeedbackId] = useState(requestId);
    const newFeedback = requestId === 0;

    useEffect(() => {
        setFeedbackId(requestId);
        if (!isNaN(requestId) & (requestId !== 0)) {
            const request = requests.filter((req) => req.id === requestId);
            setTitle(request[0].title);
            setOriginalTitle(request[0].title);
            const category =
                request[0].category.length === 2
                    ? request[0].category.toUpperCase()
                    : request[0].category.charAt(0).toUpperCase() +
                      request[0].category.slice(1);
            setSelectedCategory(category);
            const status =
                request[0].status === 'in-progress'
                    ? 'In-Progress'
                    : request[0].status.charAt(0).toUpperCase() +
                      request[0].status.slice(1);
            setSelectedStatus(status);
            setDescription(request[0].description);
        }
    }, [requestId]);

    const addFeedback = () => {
        if (title === '' || description === '') {
            setShowErrorTitle(title === '');
            setShowErrorDescription(description === '');
        } else {
            if (newFeedback) {
                const feedback = {
                    id: maxRequestId + 1,
                    title: title,
                    category: selectedCategory.toLowerCase(),
                    status: 'suggestion',
                    description: description,
                    upvotes: 0,
                    qtyComments: 0,
                    active: false,
                };
                requests.push(feedback);
                setMaxRequestId(maxRequestId + 1);
            } else {
                const reqIndex = requests.findIndex(
                    (req) => req.id === requestId
                );
                requests[reqIndex].title = title;
                requests[reqIndex].category = selectedCategory.toLowerCase();
                requests[reqIndex].status =
                    selectedStatus === 'In-Progress'
                        ? 'in-progress'
                        : selectedStatus.toLowerCase();
                requests[reqIndex].description = description;
            }
            localStorage.setItem('requests', JSON.stringify(requests));
            router.push('/');
        }
    };

    const deleteFeedback = () => {
        const reqIndex = requests.findIndex((req) => req.id === requestId);
        const deletedId = requests[reqIndex].id;
        requests.splice(reqIndex, 1);
        setMaxRequestId(
            maxRequestId === deletedId ? maxRequestId - 1 : maxRequestId
        );
        localStorage.setItem('requests', JSON.stringify(requests));
        router.push('/');
    };

    return (
        <>
            {!isNaN(requestId) && (
                <FeedbackContainer newFeedback={newFeedback}>
                    <FeedbackIcon newFeedback={newFeedback} mobile={mobile} />
                    <FeedbackHead>
                        {newFeedback
                            ? 'Create New Feedback'
                            : `Editing '${originalTitle}'`}
                    </FeedbackHead>
                    <FeedbackBody>
                        <FeedbackControlContainer newFeedback={newFeedback}>
                            <ControlLabelWrapper>
                                <h2>Feedback Title</h2>
                                <h3>Add a short, descriptive headline</h3>
                            </ControlLabelWrapper>
                            <FeedbackTitle
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                autoFocus={true}
                                onFocus={() => setShowErrorTitle(false)}
                                showError={showErrorTitle}
                            />
                            {showErrorTitle && (
                                <ErrorText>Can´t be empty</ErrorText>
                            )}
                        </FeedbackControlContainer>
                        <FeedbackCategoryComponent
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                        {!newFeedback && (
                            <FeedbackStatusComponent
                                selectedStatus={selectedStatus}
                                setSelectedStatus={setSelectedStatus}
                            />
                        )}
                        <FeedbackControlContainer>
                            <ControlLabelWrapper>
                                <h2>Feedback Detail</h2>
                                <h3>
                                    Include any specific comments on what should
                                    be improved, added, etc.
                                </h3>
                            </ControlLabelWrapper>
                            <FeedbackDescription
                                name="textarea"
                                // rows="3"
                                maxLength={250}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                onFocus={() => setShowErrorDescription(false)}
                                showError={showErrorDescription}
                            ></FeedbackDescription>
                            {showErrorDescription && (
                                <ErrorText>Can´t be empty</ErrorText>
                            )}
                        </FeedbackControlContainer>
                    </FeedbackBody>
                    <BtnWrapper>
                        <CommonsBtn>
                            <FeedbackBtn onClick={addFeedback}>
                                {newFeedback ? 'Add Feedback' : 'Save Changes'}
                            </FeedbackBtn>
                            <FeedbackBtn
                                onClick={() => router.push('/')}
                                feedCancel
                            >
                                Cancel
                            </FeedbackBtn>
                        </CommonsBtn>
                        {!newFeedback && (
                            <FeedbackBtn onClick={deleteFeedback} feedDelete>
                                Delete
                            </FeedbackBtn>
                        )}
                    </BtnWrapper>
                </FeedbackContainer>
            )}
        </>
    );
};

export default FeedbackContent;
