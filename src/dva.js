import { message } from 'antd';
import router from 'umi/router';

export function config() {
  return {
    onError(err) {
      err.preventDefault();
      console.log('%O', window.location.href);
      console.log('%O', err);
      // || err.message === 'Failed to fetch'
      if(err.message === 'Unauthorized'){
        const name = window.location.href;
      }
      // message.error(err.message);
    },
  };
}
