import { breakfastThumbnail, dessertThumbnail, pastaThumbnail, sideDishThumbnail, startersThumbnail, veganThumbnail, vegeterianThumbnail } from '../../helpers/images/categoryImages';

import classes from './CategorySlider.module.css';

const CategorySlider = () => {
    const categories=[
        {
            name: 'Starter',
            image: startersThumbnail
        },
        {
            name: 'Breakfast',
            image: breakfastThumbnail
        },
        {
            name: 'Vegan',
            image: veganThumbnail
        },
        {
            name: 'Vegetarian',
            image: vegeterianThumbnail
        },
        {
            name: 'Side',
            image: sideDishThumbnail
        },
        {
            name: 'Pasta',
            image: pastaThumbnail
        },
        {
            name: 'Dessert',
            image: dessertThumbnail
        },
    ]
    const animatedTextHeading='Choose Category...';
  return (
    <div className={classes.categorySlider}>
        <div className={classes.sectionHeading} data-text={animatedTextHeading}>{animatedTextHeading}</div>
        <ul className={classes.categoryList}>
        {
            categories.map((category,id)=>(
                <li key={id}>
                    <img src={category.image} alt={category.name} className={classes.categoryImage}/>
                    <div className={classes.categoryName}>{category.name}</div>
                </li>

            ))
        }
        </ul>
    </div>
  )
}

export default CategorySlider