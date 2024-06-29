import {useRequestContext} from '@/context/StateContext';
import {Category, CategoryContent, CategoryItem} from '../styles';

const HeaderCategories = ({bgFeatures}) => {
    const categories = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
    const {selectedCategory, setSelectedCategory} = useRequestContext();
    return (
        <Category bgFeatures={bgFeatures}>
            <CategoryContent>
                {categories.map((category, index) => {
                    return (
                        <CategoryItem
                            key={index}
                            selected={selectedCategory === category}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </CategoryItem>
                    );
                })}
            </CategoryContent>
        </Category>
    );
};

export default HeaderCategories;
