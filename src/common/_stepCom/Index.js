import styles from './Index.css';

const Index = ({
  children,
  activityKey
}) => {

  return (
    <div className={styles.content}>
      {
        children.map((item, i) => {
            if (item.props.step === activityKey) {
                return <div key={i}>{item}</div>;
            }
        })
      }
    </div>
  );
}

export default Index;
