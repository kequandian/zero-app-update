import React from 'react';
import styles from './PageHead.css';
import router from 'umi/router';
import { getToken } from 'kqd-utils/lib/token';

import defaultAvatar from '../../assets/logo.jpg';
import vipIcon from '../../icons/personal/vip-icon.png';
import selectedIcon from '../../icons/personal/selected-icon.png';
import shoppingCarIcon from '../../icons/personal/shoppingCar-icon.png';

const pageHead = ({
  profile={},
  children,
  titleName='',
  showBtn='',
  scProdcutCount=0,
  onViewPersonalCenter=()=>{},
  onShoppingCarClick=()=>{},
  onLogin=()=>{},
  onSearchClick,
  style={}
}) => {

  // console.log('profile', JSON.stringify(profile));

  const showProfileInfo = (profile) => {

    if(profile && JSON.stringify(profile) != '{}'){
      const isPhoneNumber = /^1\d{10}$/;
      let name = profile.name;
      if(isPhoneNumber.test(name)){
        name = name.substr(0,3)+"****"+name.substr(7);
      }
      return (
        <>
          <span>{name}</span>
          <div className={styles.vip}>
            { profile.grade.logo ? <img src={JSON.parse(profile.grade.logo)[0].url} alt=""/> : null }
            <span>{profile.gradeName}会员</span>
          </div>
        </>
      )
    }
  }

  function isLogin () {
    if(getToken()){
      return (
        <div className={styles.titleLeft} onClick={() => onViewPersonalCenter()}>
          <img src={profile.avatar ? profile.avatar : defaultAvatar} alt="" style={{border:'1px solid #e4e4e4'}}/>
          {showProfileInfo(profile)}
        </div>
      )
    }else{
      return (
        <div className={styles.titleLeft} onClick={() => onLogin()}>
          <img src={defaultAvatar} alt="" style={{border:'1px solid #e4e4e4'}}/>
          <span style={{marginLeft:'15px', color:'#808080'}}>未登录</span>
        </div>
      )
    }

  }

  function onSearch(){
    if(onSearchClick){
      onSearchClick()
    }
    router.push({pathname: '/skinHousekeeper/search'});

  }

  return(
    <>
      <div className={styles.title} style={style}>
        {isLogin()}

        {showBtn === 'skin' ? (
          <div className={styles.titleRight}>
            <img alt=""/>
          </div>
        ):(
          <div className={styles.titleRight}>
            <div className={styles.selectedIcon}>
              <img src={selectedIcon} alt="搜索" style={{marginRight:'15px'}} onClick={onSearch}/>
            </div>
            <div className={styles.shoppingCarIcon} onClick={() => onShoppingCarClick()}>
              <img src={shoppingCarIcon} alt="购物车"/>
              {scProdcutCount ? (
                <div className={styles.badge}>
                  {scProdcutCount}
                </div>
              ):''}
            </div>
          </div>
        )}
      </div>
      <div className={ styles.clear }>
        { children }
      </div>
    </>
  )
}

export default pageHead;
