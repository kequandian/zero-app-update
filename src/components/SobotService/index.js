import React from 'react';

/**
 * 接入 智齿客服 系统。
 * 点击被 SobotService 包裹的任意 children 组件即可唤出客服界面。
 *
 * @param {boolen} robot 机器人优先模式。默认 true
 * @param {string} title 聊天界面标题
 * @param {string} color 主题颜色。如：C28324
 * @param {object} userInfo 用户信息对象。下面列出几个常用的 key：
 * - partnerId 用户 ID
 * - uname 昵称
 * - realname 真实姓名
 * - face 头像 url
 * - 其它字段可参考 https://shimo.im/doc/B0T9Wdbzv3ESsfEH  进去搜索 userinfo 即可
 * @param {object} productInfo 商品信息对象。
 * - title_info 标题，必须
 * - url_info 商品所在 url，必须
 * - abstract_info 描述信息
 * - label_info 价格
 * - thumbnail_info 商品缩略图 url
 */
export default class SobotService extends React.Component {
  componentDidMount(){
    
    if(document.querySelector('#zhichiScript')){
      removeDOM(this.initService.bind(this));
    }else{
      this.initService();
    }
  }
  componentWillUnmount(){
    removeDOM();
  }

  /**
   * 提供一个静态的打开客服界面的方法
   * @param {Object} data 
   */
  static init(data){
    removeDOM();
    renderDOM(true);

    let timer = setInterval( _=> {
      let rst = setting(data);
      if(rst){
        console.error(timer,rst);
        clearInterval(timer);
      }
      if( window.zhiManager && typeof  window.zhiManager.set === 'function' ){
        console.log('智齿客服服务 初始化成功！');
        window.zhiManager.expand();
        clearInterval(timer);
      }
    }, 500);
  }

  initService = () => {
    renderDOM();

    this.timer = setInterval( _=> {
      let rst = this.initSetting();
      if(rst){
        console.error(this.timer,rst);
        clearInterval(this.timer);
      }
      if( window.zhiManager && typeof  window.zhiManager.set === 'function' ){
        console.log('智齿客服服务 初始化成功！');
        clearInterval(this.timer);
      }
    }, 500);
    
  }
  initSetting(){
    /* 初始化配置 */
    const rst = setting(this.props);
    if(window.zhiManager){
      // 设置其它信息
      this.setProductInfo();
    }
    return rst;
  }
  
  setProductInfo = () => {
    const { productInfo } = this.props;
    if( productInfo ){
      window.zhiManager.set('title_info',productInfo.title_info);
      window.zhiManager.set('url_info',productInfo.url_info);
      window.zhiManager.set('abstract_info',productInfo.abstract_info);
      window.zhiManager.set('label_info',productInfo.label_info);
      window.zhiManager.set('thumbnail_info',productInfo.thumbnail_info);
    }
  };

  render(){
    const { children } = this.props;

    return React.cloneElement(children,{
      className: `zhiCustomBtn ${ children.props.className }`,
    });
  }
}

/**
 * 
 * @param {boolean} type 渲染一个额外的元素，以避免出现智齿自带的悬浮窗
 */
function renderDOM(type) {
  const SOBOT = window.MC && window.MC.SOBOT;
  if(!SOBOT){
    console.error('未能找到 sobot 的 key，智齿客服服务 无法启动！');
    return false;
  }
  /* 渲染 DOM */
  let script = document.createElement('script');
  script.src = `https://www.sobot.com/chat/frame/js/entrance.js?sysNum=${SOBOT}`;
  script.id = 'zhichiScript';
  script.setAttribute('class','zhiCustomBtn');
  script.setAttribute('data-args','manual=true&customBtn=true');
  
  document.body.appendChild(script);
  if(type){
    let div = document.createElement('div');
    div.id = 'extraZhiCustomBtn';
    div.setAttribute('class','zhiCustomBtn');
    document.body.appendChild(div);
  }
}

function setting(data = {}) {
  const { title, color, robot, userInfo = {} } = data;
    if( !window.getzhiSDKInstance || typeof window.getzhiSDKInstance !== 'function') {
      return false;
    }
    var zhiManager = window.getzhiSDKInstance();
    if( Object.keys(userInfo).length === 0 || !userInfo.partnerId ){
      return '调用 智齿客服服务 必须要传入 userInfo，且至少含有 partnerId 字段！';
    }

    zhiManager.set('customBtn', 'true');

    if( title ){
      zhiManager.set('titleFlag',2);
      zhiManager.set('customTtile',title);
    }else{
      zhiManager.set('titleFlag',3);
    }

    if(color){
      zhiManager.set('color', color);
    }

    if( robot !== undefined ){
      if(robot){
        zhiManager.set('moduleType',3); // 机器人优先
      }else{
        zhiManager.set('moduleType',4); // 人工优先
      }
    }

    if(userInfo){
      zhiManager.set('userinfo',userInfo);
    }

    zhiManager.on("load", function() {
        zhiManager.initBtnDOM();
    });

    window.zhiManager = zhiManager;
}

function removeDOM(reset) {
  const removeList = [ '#zhichiScript', '#zhichiBtnBox', '#ZCPanel', '#extraZhiCustomBtn' ];
  const removeDOMList = removeList.map( id => document.querySelector(id) ).filter( item => item !== null );
  if( removeDOMList.length > 0 ){
    console.log('卸载 客服服务',removeDOMList);
    removeDOMList.forEach( dom => document.body.removeChild(dom) );
  }
  if(reset){
    console.log(1111);
    setTimeout( _=> {
      console.log(22222,reset);
      reset();
    }, 300);
  }
}