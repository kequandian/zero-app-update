import { connect } from 'dva';
import router from 'umi/router';
import styles from './index.css';
import ParseHtmlJson from '../../common/parseHtmlJson/ParseHtmlJson';
import checkUserAgent from '../../utils/checkUserAgent';

function Index ({ dispatch, loading = false, downloadPage }){

  const { data, islinkOfNull } = downloadPage;
  const p = checkUserAgent.androidOrIos();
  const downloadBtnText = p == 'ANDROID' ? '立即下载' : p == 'IOS' ? '去 App Store下载' : '未知机型';

  const parseHtmlJsonProps = {
    htmlJson:data.description
  }

  function downloadClick (value){
    if(p == 'ANDROID'){
      if(value && value.downloadUrl && value.downloadUrl.length > 0){

        dispatch({
          type:'downloadPage/downloadMetod',
          payload:{
            platformType: p,
            downloadUrl:value.downloadUrl[0].url
          }
        })
      }else{
        console.log('下载链接异常');
      }
    }else if(p == 'IOS'){
      if(value && value.appleStoreLink){
        dispatch({
          type:'downloadPage/downloadMetod',
          payload:{
            platformType: p,
            downloadUrl:value.appleStoreLink
          }
        })
      }else{
        console.log('下载链接异常');
      }
    }

  }

  const logoImg = (value) => {
    if(value && value.iconUrl && value.iconUrl.length > 0){
      return (<img src={value.iconUrl[0].url} alt="logo" />);
    }
    return ''
  }

  const showAppSize = (value) =>{
    if(value && value.downloadUrl && value.downloadUrl.length > 0){
      const size = Math.floor(value.downloadUrl[0].size / 1024 / 1024 * 100) / 100;
      return (
        <span style={{marginLeft:'12px'}}>
          {size}MB
        </span>
      )
    }else{
      console.log('下载链接异常');
    }
  }

  return (
    <>
      {!islinkOfNull?(
        <div style={{ display: 'flex', flexDirection:'column', height:'100%', backgroundColor:'#FFFFFF'}}>
    		  <div className={styles.header}>
            {logoImg(data)}
    		  </div>

    		  <div style={{color:'#000000',fontSize:'18px', textAlign: 'center', padding:'7px 0', marginTop:'13px'}}>
            {data.name}
          </div>

    		  <div style={{
            fontSize:'14px',
            textAlign:'center',
            padding:'7px 0',
            color:'#505050',
            marginBottom: '10px'
          }}>
      			<span>{data.downloads}次下载</span>
            {showAppSize(data)}
    		  </div>

    		  <div className={styles.auiTabBar}>
      			<div className={styles.auiTabBarBtn}
              onClick={() => downloadBtnText != '未知机型' ? downloadClick(data) : {}}>
      			  {downloadBtnText}
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
