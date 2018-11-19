import React from 'react';
import { ListView, Icon, Badge } from 'antd-mobile';
import date from '../../framework/utils/date';
import avatar from '../../framework/utils/avatar';
import defaultImg from '../../assets/avatar.jpg';
import styles from './CustomList.css';

import CustimListItem from '../../common/items/CustomListItem';

import check from '../../icons/personal/checked-icon.png';
import bao from '../../icons/personal/bao-icon.png';
const horn = require('../../icons/horn.svg');

const CustomList = ({ loading, list, onViewMember, onPagination = () => {}, showLimit }) => {

  // console.log('list',JSON.stringify(list[1]));

  const dataSource = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2,
  });

  const separator = (sectionID, rowID) => (
      <div key={`${sectionID}-${rowID}`} className={styles.separator} />
    );

  const row = (item) => {
    const itemPros = {
      item,
      onViewMember,
      onPagination,
      showLimit,
    }
    return <CustimListItem {...itemPros}/>
  };

  const loadView = () => {
    return (
      <div style={{ padding: 6, textAlign: 'center' }}>
        {loading ? '加载中...' : loaded()}
      </div>
    )
  }

  const loaded = () =>{
    // console.log('list',JSON.stringify(list));
    if(list && JSON.stringify(list) != '{}' && JSON.stringify(list) != '[]'){
      return '加载完成';
    }else{
      return '暂无信息';
    }
  }


  return (
    <div className={styles.normal}>
      <ListView
        dataSource={dataSource.cloneWithRows(list)}
        renderFooter={() => loadView()}
        renderRow={row}
        renderSeparator={separator}
        pageSize={4}
        useBodyScroll
        onScroll={() => { }}
        scrollRenderAheadDistance={500}
        scrollEventThrottle={200}
        onEndReachedThreshold={10}
        onEndReached={() => onPagination()}
      />
    </div>
  );
};

CustomList.propTypes = {
};

export default CustomList;
