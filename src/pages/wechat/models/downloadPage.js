import * as services from '../services/downloadPage';
import { routerRedux } from 'dva/router';
import logoImg from '../../../assets/logo.jpg';


export default {

  namespace: 'downloadPage',

  state: {
    data: {
      logoImgUrl:logoImg,
      title:'Muaskin智慧美妆',
      downloadCount: 26598,
      programSize: 49.8,
      downloadBtnText: '立即下载',
      version:'1.0.0',
      modifyTime:'2018年11月14日',
      richText:'<div>muaskin智慧美妆是一款基于检测为基础，根据用户的皮肤状况进行“量身定做”的专业护肤</div>'
    },
    islinkOfNull:false
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if(location.pathname === '/downloadPage') {
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
      // const { locatUrl } = payload;
      // const { status_code, data, message } = yield call( services.getAddressList, {});
      // if(status_code === 0){
        // console.log('data', JSON.stringify(data));
        // yield put({
        //   type: 'querySuccess',
        //   payload: {
        //     data,
        //   }
        // })
        // if(locatUrl === '/cosmetics/settlementPage'){
        //   yield put({
        //     type: 'settlementPage/getProductsFreight',
        //     payload: {
        //     }
        //   })
        // }
      // }else{
      //   console.log('获取地址列表信息失败', message);
      // }
    },

  },

  reducers: {
    querySuccess(state, action) {
      return { ...state, ...action.payload };
    },
  }

};
