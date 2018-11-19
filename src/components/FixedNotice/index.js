import React from 'react';
import { LRLayout } from 'kqd-layout-flex';
import { Carousel } from 'antd-mobile';
import router from 'umi/router';

import styles from './style.css';

export default (props) => {
  const { prefix = '公告：', data } = props;
  if( !data || data.length === 0 ){
    return '';
  }

  function clickHandle(url) {
    if(!url) return false;
    if(url.indexOf('http') < 0){
      router.push(url);
    }else{
      window.open(url);
    }
  }
  return (
    <>
      <div  style={{ position: 'fixed', left: 0, right: 0, zIndex: 9}}>
        <div className={styles.noticeContainer}>
          <LRLayout span={[4,20]} style={{width: '100%'}}>
            <div>{ prefix }</div>
            <Carousel className="my-carousel"
              vertical={true}
              dots={false}
              dragging={false}
              swiping={false}
              autoplay={true}
              infinite={true}
            >
              { data.map( (v,i) => (
                <div key={i} onClick={ clickHandle.bind(null, v.url ) }>{ v.title }</div>
              ) )}
            </Carousel>
          </LRLayout>
        </div>
      </div>
      <div style={{ height: '2em'}}></div>
    </>
  );
}