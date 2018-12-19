export default {

  demo(){
    // if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
    //     //移动端
    //     console.log('移动端');
    //     var u = navigator.userAgent;
    //     var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    //     var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    //     if(isAndroid){
    //       console.log("android");
    //     }else if(isiOS){
    //       console.log("ios");
    //     }else{
    //     }
    //     var ua = window.navigator.userAgent.toLowerCase();
    //     if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    //       console.log("微信");
    //     } else {
    //       console.log("非微信");
    //     }
    // }else{
    //     //pc端
    //     console.log('pc端');
    // }
  },

  //是否是ios端
  isIOS(){
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if(isiOS){
      return true;
    }
    return false;
  },

  //是否是android端
  isAndroid(){
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;; //Android终端
    if(isAndroid){
      return true;
    }
    return false;
  },

  //非微信非pc端
  isApp(){

      var u = navigator.userAgent;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;; //Android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if(isAndroid || isiOS){
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
          // console.log('微信端');
          return false;
        }else{
          // console.log('app端');
          return true;
        }
      }
      return false;

  },

  //是否是android / ios端
  androidOrIos(){
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;; //Android终端
    if(isAndroid){
      return 'ANDROID';
    }else if(isiOS){
      return 'IOS';
    }
    return '';
  },

  isWechat(){
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true;
    } else {
      return false
    }
  }


}
