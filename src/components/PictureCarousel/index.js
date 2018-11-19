import React from 'react';
import { Carousel } from 'antd-mobile';

import styles from './index.css';

export default class PictureCarousel extends React.Component {

  state = {
    data: [],
    initialHeight: 'auto',
  }

  componentDidMount() {
      this.setState({
        data: this.props.list,
      });
  }

  componentWillReceiveProps(newProps){
    this.setState({
      data: newProps.list,
    });
  }

  clickADImg(targetUrl){
    console.log(targetUrl);
  }
  getHeight = () => {
    return document.documentElement.clientWidth;
  }

  render() {
    const { data } = this.state;
    const aStyle = {
      width: '100%',
      height: `${this.getHeight()}px`,
      display: 'inline-block',
    };
    return (

      <div>
        {data.length > 0 ? (
          <Carousel
            autoplay={ data.length > 1 }
            infinite
            selectedIndex={0}
            swipeSpeed={35}
            beforeChange={(from, to) => {}}
            afterChange={index => {}}
            autoplayInterval={1500}
          >
            {data.map((ii, index) => (
              <a
                key={index}
                style={ aStyle }
                // className={styles.myCarouselCss}
                onClick={() => this.clickADImg(ii.targetUrl)}
                >
                  <div
                    // src={ii.url}
                    // alt="icon"
                    // style={this.props.imgStyle ? this.props.imgStyle : {width: '100%'}}
                    className={styles.myCarouselImg}
                    style={{backgroundImage:`url(${ii.url})`}}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({
                        initialHeight: 'auto',
                      });
                    }}
                  ></div>

              </a>
            ))}
          </Carousel>
        ):''}
      </div>

    );
  }
}