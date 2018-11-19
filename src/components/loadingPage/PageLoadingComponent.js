import styles from './loadingPage.css';

export default () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999999
    }}>
      <div className={styles.container}>
        <div className={styles.loader}>
        </div>
      </div>
    </div>
  )
};
