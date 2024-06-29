import {BurgerMenu, BurgerMenuWrapper} from '../styles';

const HeaderBurgerMenu = ({bgFeatures, setBgFeatures}) => {
    return (
        <BurgerMenuWrapper
            onClick={() => setBgFeatures((prev) => !prev)}
            id="BurgerMenuWrapper"
        >
            <BurgerMenu bgFeatures={bgFeatures} id="burgerMenu" />
        </BurgerMenuWrapper>
    );
};

export default HeaderBurgerMenu;
