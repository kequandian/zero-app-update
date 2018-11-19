import React, { Component } from 'react';
import { ListView } from 'antd-mobile';
import styles from './ListView.css';

 class listView extends Component {

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource:dataSource,
      list: props.list || [],
    }
  }

  componentDidMount() {
    this.getScollHeight()
  }

  //消除调用api
  componentWillUnmount(){
    window.onscroll = () =>{
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    const { list = [] } = nextProps;
    this.setState({
      list: nextProps.list || []
    });
  }

  //分页处理
  onPagination = () => {
    if(this.props.onPagination){
      this.props.onPagination()
    }
  }

  //监听浏览器滚动的高度
  getScollHeight = () => {
    //滚动的高度
    function getScrollTop(){
      var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
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
      var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
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
    //滚动到离底部一定位置的时候，分页处理
    window.onscroll = () => {
      if(getScrollTop() == 0){
        // console.log('顶部')
      }
      if(getScrollTop() + getWindowHeight() > (getScrollHeight()-100)){
        // console.log("已经到底部了！!");
        this.onPagination()
      }
    }
  }

  row = (rowData) => {
    const child = this.props.children
    return React.cloneElement(child,{
      itemData:rowData,
    })
  };


  render(){

    const { loading, pageNum=0, pages=0, noMoreText='无更多信息'} = this.props;
    const { dataSource,list } = this.state;

    const loadView = () => {
      if(loading) {
        return <div className={styles.loadingStyle}>加载中...</div>
      } else {
        if(list && list.length && JSON.stringify(list) !== '{}' && JSON.stringify(list) !== '[]'){
          //加载完成
          if(parseInt(pageNum) >= parseInt(pages)) {
            if(noMoreText) {
              return <div className={styles.noMoreTextStyle}>{noMoreText}</div>
            }
          } else {
            return '';
          }
        } else {
          return <div className={styles.loadingStyle}>暂无信息</div>
        }
      }
    }

    const separator = (sectionID, rowID) => (
      <div key={`${sectionID}-${rowID}`} className={styles.separator} />
    );

    return(
      <div className={styles.normal}>
        <ListView
            key={'ListView'}
            dataSource={dataSource.cloneWithRows(list)}
            renderFooter={() => loadView()}
            renderRow={(rowData) =>this.row(rowData)}
            renderSeparator={separator}
            pageSize={10}
            scrollRenderAheadDistance={500}
            scrollEventThrottle={50}
            onEndReachedThreshold={100}
            initialListSize={list.length}
            useBodyScroll={ true }
          />
      </div>
    )
  }
}

export default listView
