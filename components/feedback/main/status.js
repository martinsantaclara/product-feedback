import {
    ArrowBtn,
    ArrowDown,
    ArrowUp,
    CheckIcon,
    Dropdown,
    Item,
    ItemsList,
} from '@/components/suggestions/styles';
import {useState, useRef} from 'react';
import {
    Selection,
    SelectionContainer,
    ControlLabelWrapper,
    FeedbackCategory,
    FeedbackControlContainer,
} from '../styles';
import {useOutsideAlerter} from '@/components/suggestions/header';
const FeedbackStatusComponent = ({selectedStatus, setSelectedStatus}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const status = ['Suggestion', 'Planned', 'In-Progress', 'Live'];
    const handleCheckOption = (status) => {
        setSelectedStatus(status);
        // setShowDropdown(false);
    };

    const statusRef = useRef(null);
    useOutsideAlerter(statusRef, setShowDropdown);

    return (
        <FeedbackControlContainer>
            <ControlLabelWrapper>
                <h2>Update Status</h2>
                <h3>Change feature state</h3>
            </ControlLabelWrapper>
            <SelectionContainer
                id="statusSelection"
                onClick={() => setShowDropdown((prev) => !prev)}
            >
                <Selection id="statusSelection">{selectedStatus}</Selection>
                <ArrowBtn id="statusSelection">
                    {showDropdown ? (
                        <ArrowUp feedback id="statusSelection" />
                    ) : (
                        <ArrowDown feedback id="statusSelection" />
                    )}
                </ArrowBtn>
                {showDropdown && (
                    <Dropdown
                        bgOptions={showDropdown}
                        feedback
                        ref={statusRef}
                        id="statusDropdown"
                    >
                        {status.map((st, index) => {
                            return (
                                <ItemsList
                                    key={index}
                                    onClick={() => handleCheckOption(st)}
                                >
                                    <Item>{st}</Item>
                                    {st === selectedStatus && <CheckIcon />}
                                </ItemsList>
                            );
                        })}
                    </Dropdown>
                )}
            </SelectionContainer>
        </FeedbackControlContainer>
    );
};

export default FeedbackStatusComponent;
