import { mainpageImage } from '../../helpers/images';

import classes from './MainImageSection.module.css';

const MainImageSection = () => {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.content}>
        <div className={classes.homePageHeading}>Explore recipes in 10 categories</div>
        <button className={classes.homePageButton}>Cook Now</button>
      </div>
      <img src={mainpageImage} alt='italian pasta with ingredients' className={classes.mainImage} />
    </div>
  );
}

export default MainImageSection;
