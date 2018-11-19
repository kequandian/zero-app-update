import router from 'umi/router';
import styles from './TabBar.css';

const cosmeticsOn = require('../../icons/tabBar/cosmetics-on.png');
const cosmeticsOff = require('../../icons/tabBar/cosmetics-off.png');
const skinHousekeeperOn = require('../../icons/tabBar/skinHousekeeper-on.png');
const skinHousekeeperOff = require('../../icons/tabBar/skinHousekeeper-off.png');
const exploreOn = require('../../icons/tabBar/explore-on.png');
const exploreOff = require('../../icons/tabBar/explore-off.png');


function TabBarList({ location, children }) {

  const tabBarList = [
    {id:1, name:"tab1", icon:cosmeticsOff, selectIcon:cosmeticsOn, url:"/cosmetics"},
    {id:2, name:"tab2", icon:skinHousekeeperOff, selectIcon:skinHousekeeperOn, url:"/skinHousekeeper"},
    {id:3, name:"tab3", icon:exploreOff, selectIcon:exploreOn, url:"/explore"}
  ];

  const clickTabItem = (url) => {
    router.push(url);
  }
  const path = location.pathname;
  return (
    <>
      <div className={ styles.content }>
        { children }
      </div>
      <div className={ styles.tabber }>
        { tabBarList.map( (v,i) => {
          return (
            <span key={i}
              className={ path === v.url ? styles.action : ''}
              onClick={ () => clickTabItem(v.url) } >
              <div><img src={  path === v.url ?  v.selectIcon : v.icon } alt="" /></div>
              <div className={styles.itemText}>{ v.name }</div>
            </span>
          );
        } )}
      </div>
    </>
  );
}

export default TabBarList;
