import React, { Component } from 'react';
import { ListView } from 'antd-mobile';
import styles from './ListView.css';
import './editAntCss.css';

const ListViews = ({
  loading,
  list=[],
  onPagination = () => {},
  pageNum=0,
  pages=0,
  noMoreText='无更多信息',
  itemHeight=10,
  ...props
}) => {

  // console.log('kkkk onPagination = ',onPagination);

  const dataSource = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2,
  });

  const separator = (sectionID, rowID) => (
    <div key={`${sectionID}-${rowID}`} className={styles.separator} />
  );

  const loadView = () => {
    if(loading){
      return (
        <div style={{ padding: 17, paddingTop:6, paddingBottom: 0, textAlign: 'center' }}>
          加载中...
        </div>
      )
    }else{

      if(list && JSON.stringify(list) !== '{}' && JSON.stringify(list) !== '[]'){
        //加载完成
        if (parseInt(pageNum) >= parseInt(pages)) {
          if(noMoreText){
            return (
              <div style={{ padding: 17, paddingTop:6, paddingBottom: 0, textAlign: 'center', fontSize:'1em' }}>
                {noMoreText}
              </div>
            )
          }
        }else{
          return '';
        }

      }else{
        return (
          <div style={{ padding: 17, paddingTop:6, paddingBottom: 0, textAlign: 'center' }}>
            暂无信息
          </div>
        )
      }

    }
  }

  const row = (item) => {
    const child = props.children
    return React.cloneElement(child,{
      itemData:item,
    })
  };


  //滚动的高度
  function getScrollTop(){
    var scrollTop = 0,
        bodyScrollTop = 0,
        documentScrollTop = 0;
    if(document.body){
        bodyScrollTop = document.body.scrollTop;
    }
    if(document.documentElement){
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
 }
//文档的总高度
function getScrollHeight(){
    var scrollHeight = 0,
        bodyScrollHeight = 0,
        documentScrollHeight = 0;
    if(document.body){
        bodyScrollHeight = document.body.scrollHeight;
    }
    if(document.documentElement){
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}

//窗口高度
function getWindowHeight(){
    var windowHeight = 0;
    if(document.compatMode == "root"){
        windowHeight = document.documentElement.clientHeight;
    }else{
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}

  if(onPagination) {
    //滚动到离底部一定位置的时候，分页处理
    window.onscroll = () => {
      if(getScrollTop() == 0){
          console.log('顶部')
      }
      if(getScrollTop() + getWindowHeight() > (getScrollHeight()-100)){
          console.log("已经到底部了！!");
          onPagination()
      }
    }
  } else {
    return;
  }

  return (
    <div className={styles.normal}>
      <ListView
        key={'ListView'}
        dataSource={dataSource.cloneWithRows(list)}
        renderFooter={() => loadView()}
        renderRow={row}
        renderSeparator={separator}
        pageSize={4}
        scrollRenderAheadDistance={500}
        scrollEventThrottle={200}
        onEndReachedThreshold={100}
        initialListSize={list.length}
        // onScroll = {() => onScroll()}
        // onEndReached={() => onPagination()}
        // style={{
        //   height: (list.length * itemHeight) +'rem',
        //   // minHeight: (2 * 9.375) +'em',
        //   overflow: 'auto',
        // }}
        useBodyScroll={true}
      />
    </div>
  )

}

export default ListViews;
