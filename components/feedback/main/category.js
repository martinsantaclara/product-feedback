import {useState, useRef} from 'react';
import {
    ArrowBtn,
    ArrowDown,
    ArrowUp,
    CheckIcon,
    Dropdown,
    Item,
    ItemsList,
    SortContainer,
    SortDropdown,
} from '@/components/suggestions/styles';
import {
    Selection,
    SelectionContainer,
    ControlLabelWrapper,
    FeedbackCategory,
    FeedbackControlContainer,
} from '../styles';
import {useOutsideAlerter} from '@/components/suggestions/header';

const FeedbackCategoryComponent = ({selectedCategory, setSelectedCategory}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const categories = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];
    const handleCheckOption = (category) => {
        setSelectedCategory(category);

        console.log(category.toLowerCase());
        const inProgress = 'In-Progress';
        console.log(inProgress.toLowerCase());

        // setShowDropdown(false);
    };

    // document.addEventListener();

    const categoryRef = useRef(null);
    useOutsideAlerter(categoryRef, setShowDropdown);
    return (
        <FeedbackControlContainer>
            <ControlLabelWrapper>
                <h2>Category</h2>
                <h3>Choose a category for your feedback</h3>
            </ControlLabelWrapper>
            <SelectionContainer
                id="categorySelection"
                onClick={() => setShowDropdown((prev) => !prev)}
            >
                <Selection id="categorySelection">{selectedCategory}</Selection>
                <ArrowBtn id="categorySelection">
                    {showDropdown ? (
                        <ArrowUp feedback id="categorySelection" />
                    ) : (
                        <ArrowDown feedback id="categorySelection" />
                    )}
                </ArrowBtn>
                {showDropdown && (
                    <Dropdown
                        bgOptions={showDropdown}
                        feedback
                        ref={categoryRef}
                        id="categoryDropdown"
                    >
                        {categories.map((category, index) => {
                            return (
                                <ItemsList
                                    key={index}
                                    onClick={() => handleCheckOption(category)}
                                >
                                    <Item>{category}</Item>
                                    {category === selectedCategory && (
                                        <CheckIcon />
                                    )}
                                </ItemsList>
                            );
                        })}
                    </Dropdown>
                )}
            </SelectionContainer>
        </FeedbackControlContainer>
    );
};

export default FeedbackCategoryComponent;
