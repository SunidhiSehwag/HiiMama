import { floatingSpices, chocolateSouffle, matarPanner, veganLasagna } from '../../helpers/images';

import classes from './MostLovedSection.module.css';

const MostLovedSection = () => {
    const lovedFoods=[
        {
            name: 'Chocolate Souffle',
            image: chocolateSouffle
        },
        {
            name: 'Matar Paneer',
            image: matarPanner
        }, 
        {
            name: 'Vegan Lasagna',
            image: veganLasagna
        }
    ]
  return (
    <div className={classes.mostLovedDiv} style={{ backgroundImage: `url(${floatingSpices})`, backgroundRepeat: 'no-repeat', backgroundSize:'contain'}}>
        <div className={classes.sectionHeading}>Try our most Loved Recipes</div>
        <ul className={classes.foodCards}>
            {lovedFoods.map((item,id)=>(
                <li key={id}>
                <img src={item.image} alt={item.name} className={classes.foodImage}/>
                <div className={classes.itemName}>{item.name}</div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default MostLovedSection