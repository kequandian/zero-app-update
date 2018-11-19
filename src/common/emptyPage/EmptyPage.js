import React from 'react';

class EmptyPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){

    const { url,content } = this.props;

    const style = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      height: '90vh',
      ...this.props.style
    }

    const sectionStyle = {
      display: 'flex',
      flexDirection: 'column',
    }

    const urlStyle = {
      width: '128px',
      height: '128px',
      ...this.props.urlStyle
    }

    const contentStyle = {
      color: 'rgba(136, 136, 136, 1)',
    	fontSize:' 18px',
      ...this.props.contentStyle
    }

    return (
      <div style={style}>
        <div style={sectionStyle}>
          { url ? <img src={url} style={urlStyle}/> : null }
          { content ? <div style={contentStyle}>{content}</div> : null }
        </div>
      </div>
    )
  }
}

export default EmptyPage
