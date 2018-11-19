import { connect } from 'dva';
import router from 'umi/router';
import styles from './index.css';
import checkUserAgent from '../../utils/checkUserAgent';
import ParseHtmlJson from '../../common/parseHtmlJson/ParseHtmlJson';

function Index ({ dispatch, loading = false, downloadPage }){

  const { data, islinkOfNull } = downloadPage;

  const platformValue = checkUserAgent.androidOrIos() === 'ANDROID' ? '立即下载': '去 App Store下载';

  const parseHtmlJsonProps = {
    htmlJson:data.description
  }

  return (
    <>
      {!islinkOfNull?(
        <div style={{ display: 'flex', flexDirection:'column', height:'100%', backgroundColor:'#FFFFFF'}}>
    		  <div className={styles.header}>
    			   <img src={data.iconUrl} alt="logo" />
    		  </div>

    		  <div style={{color:'#000000',fontSize:'18px', textAlign: 'center', padding:'7px 0', marginTop:'13px'}}>
            {data.name}
          </div>

    		  <div style={{fontSize:'14px', textAlign:'center', padding:'7px 0', color:'#505050'}}>
      			<span>{data.downloads}次下载</span>
      			<span style={{marginLeft:'12px'}}>{data.size}MB</span>
    		  </div>

    		  <div className={styles.auiTabBar}>
      			<div className={styles.auiTabBarBtn}>
      			  {data.downloadBtnText}
      			</div>
    		  </div>

    		  <div className={styles.versionText} style={{ padding:'15px 0 3px 0' }}>
            版本：{data.versionCode}
          </div>
    		  <div className={styles.versionText} style={{ padding:'3px 0 10px 0' }}>
            更新时间：{data.updateTime }
          </div>

    		  <div className={styles.parseHtmlJsonBody}>
            <div className={styles.parseHtmlJson} >
              <ParseHtmlJson {...parseHtmlJsonProps}/>
            </div>
    		  </div>
    		</div>
      ):(
        <div className={styles.isNull}>即将上线，敬请期待</div>
      )}
    </>

  );
}

const mapStateToProps = (state) => {
    return {
        downloadPage:state.downloadPage,
    };
}
export default connect(mapStateToProps)(Index);
