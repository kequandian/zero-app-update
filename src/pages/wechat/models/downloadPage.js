import * as services from '../services/downloadPage';
import logoImg from '../../../assets/logo.jpg';


export default {

  namespace: 'downloadPage',

  state: {
    data: {},
    islinkOfNull:false
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if(location.pathname === '/wechat') {

          console.log('1111');
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
      const { status_code, data, message } = yield call( services.getDownloadInfoService, {});
      if(status_code === 0){
        const newData = {
          ...data,
          iconUrl:data.iconUrl?data.iconUrl:logoImg,
          downloadBtnText: '立即下载',
        }
        console.log('newData', JSON.stringify(newData));
        yield put({
          type: 'querySuccess',
          payload: {
            data,
          }
        })
      }else{
        console.log('获取下载详情信息失败', message);
      }
    },

  },

  reducers: {
    querySuccess(state, action) {
      return { ...state, ...action.payload };
    },
  }

};
