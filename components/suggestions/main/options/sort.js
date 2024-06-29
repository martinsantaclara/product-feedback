import {useRequestContext} from '@/context/StateContext';
import {useState, useEffect} from 'react';
import {
    SortDropdown,
    SortLabel,
    SortContainer,
    ArrowDown,
    ArrowUp,
    ArrowBtn,
    Dropdown,
    ItemsList,
    Item,
    CheckIcon,
} from '../../styles';

const OptionsSort = () => {
    const {selectedOrder, setSelectedOrder} = useRequestContext();
    const [bgOptions, setBgOptions] = useState(false);
    const optionsSort = [
        'Most Upvotes',
        'Least Upvotes',
        'Most Comments',
        'Least Comments',
    ];
    const handleCheckOption = (option) => {
        setSelectedOrder(option);
        setBgOptions(false);
    };
    return (
        <SortContainer>
            <SortLabel bgOptions={bgOptions}>Sort by :</SortLabel>
            <SortDropdown bgOptions={bgOptions}>{selectedOrder}</SortDropdown>
            <ArrowBtn onClick={() => setBgOptions((prev) => !prev)}>
                {!bgOptions && <ArrowDown />}
                {bgOptions && <ArrowUp />}
            </ArrowBtn>
            <Dropdown bgOptions={bgOptions}>
                {optionsSort.map((option, index) => {
                    return (
                        <ItemsList
                            key={index}
                            onClick={() => handleCheckOption(option)}
                        >
                            <Item>{option}</Item>
                            {option === selectedOrder && <CheckIcon />}
                        </ItemsList>
                    );
                })}
            </Dropdown>
        </SortContainer>
    );
};

export default OptionsSort;
