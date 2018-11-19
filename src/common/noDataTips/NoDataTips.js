import styles from './NoDataTips.css';

const NoDataTip = ({
  noDataIcon='',
  noDataText='',
}) => {

  return(
    <div className={styles.container}>

      <div className={styles.tipBody}>
        <img src={noDataIcon} alt=""/>
        <span>{noDataText}</span>
      </div>

    </div>
  )
}

export default NoDataTip;
