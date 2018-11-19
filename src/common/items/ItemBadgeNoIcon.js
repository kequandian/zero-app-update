import { Icon } from 'antd-mobile';
import styles from './ItemBadgeNoIcon.css';

const ItemBadgeNoIcon = ({
  textName='',
  onOk=()=>{},
  overflowText='',
  overflowTextColor=''
}) => {


  return(
      <div className={styles.listItem} onClick={() => onOk()}>
        <div className={styles.itemText}>
          <span>{textName}</span>
        </div>
        <div className={styles.itemCount} style={{color:overflowTextColor}}>
          {overflowText}
        </div>
        <div className={styles.itemArrow}>
          <Icon type='right' color='#C7C7C7' style={{width:'27px', height:'35px'}} />
        </div>
      </div>
  )
}

export default ItemBadgeNoIcon;
