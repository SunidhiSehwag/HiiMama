import { Hiimama_yellow_logo, searchIcon, wishlistIcon } from '../../helpers/images';

import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <img src={Hiimama_yellow_logo} alt='Hiimama Logo' className={classes.hiimamaLogo}/>

      <ul className={classes.headerList}>
        <li>Recipes</li>
        <li>Popular</li>
        <li>Indian</li>
        <li>Vegan</li>
        <li>Dessert</li>
      </ul>

      <div className={classes.headerIcons}>
      <img src={wishlistIcon} alt='wishlist Icon' className={classes.icon}/>
      <img src={searchIcon} alt='search icon' className={classes.icon}/>
      </div>
    </div>
  )
}

export default Header;