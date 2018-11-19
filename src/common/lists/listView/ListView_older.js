import React, { Component } from 'react';
import { ListView } from 'antd-mobile';
import styles from './ListView.css';
import './editAntCss.css';

const CustomList = ({
  loading,
  list=[],
  onPagination = () => {},
  pageNum=0,
  pages=0,
  noMoreText='无更多信息',
  itemHeight=10,
  ...props
}) => {

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

  const onScroll = (value) => {
    console.log('kkkvalue = ',value);
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
        onScroll = { e => onScroll(e)}
        scrollRenderAheadDistance={500}
        scrollEventThrottle={200}
        onEndReachedThreshold={100}
        onEndReached={() => onPagination()}
        style={{
          height: (list.length * itemHeight) +'rem',
          // minHeight: (2 * 9.375) +'em',
          overflow: 'auto',
        }}
        useBodyScroll={false}
        onScroll={(e) => { console.log('scroll',e); }}
      />
    </div>
  )

}

export default CustomList;
