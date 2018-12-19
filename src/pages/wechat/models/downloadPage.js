import * as services from '../services/downloadPage';
import logoImg from '../../../assets/logo.jpg';


export default {

  namespace: 'downloadPage',

  state: {
    data: {},
    islinkOfNull:false,
    showDownloadTipsModal:false
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if(location.pathname === '/wechat') {

          dispatch({
            type: 'query',
            payload:{
            }
          })
        }
      })
    },
  },

  effects: {
    *query({ payload }, { call, put }) {
      const response = yield call( services.getDownloadInfoService, {});

      console.log('response',response);
      if(response.code === 200){
        const newData = {
          ...response.data,
          iconUrl:response.data.iconUrl?response.data.iconUrl:logoImg,
          downloadBtnText: '立即下载',
        }
        yield put({
          type: 'querySuccess',
          payload: {
            data:newData,
          }
        })
      }else{
        console.log('获取下载详情信息失败');
      }
    },

    //下载方法
    *downloadMetod({ payload }, { call, put }) {
      const { platformType, downloadUrl } = payload;
      if(platformType == 'ANDROID'){
        if(downloadUrl){
          window.location.href = downloadUrl
        }else{
          yield put({
            type:'querySuccess',
            payload:{
              islinkOfNull:true
            }
          })
        }
      }
      if(platformType == 'IOS'){
        if(downloadUrl){
          window.location.href = downloadUrl
        }else{
          yield put({
            type:'querySuccess',
            payload:{
              islinkOfNull:true
            }
          })
        }
      }
    },

  },

  reducers: {
    querySuccess(state, action) {
      return { ...state, ...action.payload };
    },
  }

};
