import {useState, useEffect, useRef} from 'react';
import {
    BgFeatures,
    HeaderContainer,
    MobileHeader,
    MobileHeaderWrapper,
    FeaturesWrapper,
} from '../styles';
import HeaderBrand from './brand';
import HeaderBurgerMenu from './burgerMenu';
import HeaderCategories from './categories';
import HeaderRoadmap from './roadmap';

export function useOutsideAlerter(ref, setBgFeatures) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (
                ref.current &&
                !ref.current.contains(event.target) &&
                event.target.id !== 'BurgerMenuWrapper' &&
                event.target.id !== 'burgerMenu' &&
                (ref.current?.id === 'categoryDropdown'
                    ? event.target.id !== 'categorySelection'
                    : true) &&
                (ref.current?.id === 'statusDropdown'
                    ? event.target.id !== 'statusSelection'
                    : true)
            ) {
                setBgFeatures(false);
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
}

const SuggestionsHeader = () => {
    const [bgFeatures, setBgFeatures] = useState(false);

    const featuresRef = useRef(null);
    useOutsideAlerter(featuresRef, setBgFeatures);

    return (
        <HeaderContainer suggestions className="suggestions">
            <MobileHeader>
                <MobileHeaderWrapper>
                    <HeaderBrand />
                    <HeaderBurgerMenu
                        bgFeatures={bgFeatures}
                        setBgFeatures={setBgFeatures}
                    />
                </MobileHeaderWrapper>
            </MobileHeader>
            <BgFeatures bgFeatures={bgFeatures} />
            <FeaturesWrapper bgFeatures={bgFeatures} ref={featuresRef}>
                <HeaderCategories bgFeatures={bgFeatures} />
                <HeaderRoadmap bgFeatures={bgFeatures} />
            </FeaturesWrapper>
        </HeaderContainer>
    );
};

export default SuggestionsHeader;
