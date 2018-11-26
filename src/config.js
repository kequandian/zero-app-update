import checkUserAgent from './utils/checkUserAgent';

if(!window.MC){
  window.MC = {};
}
// window.MC = { ...window.MC };
// window.MC.HOST = 'http://112.74.26.228:10080';
window.MC.HOST = 'http://120.79.77.207:8080';
window.MC.PLATFORM_TYPE = checkUserAgent.androidOrIos();
console.log(window.MC);
