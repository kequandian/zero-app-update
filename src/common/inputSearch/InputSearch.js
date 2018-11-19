import React from 'react';
import { SearchInput } from 'kqd-list-search';
import { query } from 'kqd-utils/lib/services';

class InputSearch extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchData: ''
    }
  }

  //输入文字触发
  onChange = (data) => {
    this.setState({
      searchData: data
    })
    this.props.onChange(data)
  }


  getSearchResult = () => {
    if( this.props.apiUrl ){
      query(this.props.apiUrl,{search: this.state.searchData}).then(({ code,status_code, data }) => {
        if(code == 200 || status_code == 0){
          // this.setState({
          //   searchData: ''
          // })
          const resultData = {
            ...data,
            searchData: this.state.searchData
          }
          this.props.onGetResultData(resultData)
        }
      })
    }
  }


  //点击搜索或者按键盘回车调用api。
  onSearch = () => {
    this.getSearchResult()
  }

  onCancel = () => {
    this.setState({
      searchData: ''
    })
    this.props.onChange(this.state.searchData)
    this.getSearchResult()
  }

  render(){

    const SearchInputProps = {
      style: {
        width: '75%',
        marginLeft: '1.4em',
      },
      icon: 'search',
      placeholder: "搜索区域或者店铺名",
      searchButton: null,
      inputText: this.state.searchData,
      ...this.props.inputProps, //传入inputProps，覆盖输入宽的配置或样式
      onSearch:this.onSearch,
      onChange:this.onChange,
    }

    const outStyle = {
      height:'44px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems:'center',
      backgroundColor:'#fff',
      padding:'1em 0',
      ...this.props.outStyle
    }

    const searchStyle = {
      position: 'relative',
      right: '1.5em',
      color: 'rgba(194, 131, 36, 1)',
      ...this.props.searchStyle
    }

    return (
      <div style={outStyle}>
        <SearchInput { ...SearchInputProps } />
        {
          this.state.searchData ?
          <div style={searchStyle} onClick={() => this.onCancel()}>取消</div>
          :
          <div style={searchStyle} onClick={() => this.onSearch()}>搜索</div>
        }
      </div>
    )
  }

}

export default InputSearch;
