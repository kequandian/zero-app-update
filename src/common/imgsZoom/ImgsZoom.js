import React from 'react';
import 'react-photoswipe/lib/photoswipe.css';
// import {PhotoSwipe} from 'react-photoswipe';
import {PhotoSwipeGallery} from 'react-photoswipe';
import styles from './ImgsZoom.css';

class ImgsZoom extends React.Component {

  state = {
    isOpen: false,
    galleryItems: [],
    options: {},
  };

  componentDidMount(){
    const { list } = this.props;
    // this.getImgSize(list);
    this.setImageData(list);
  }

  componentWillReceiveProps(newProps){
    const { list } = newProps;
    // this.getImgSize(list);
    this.setImageData(list);
  }

  getImgSize(list){

    if(list && list.length > 0){
      // console.log('list', JSON.stringify(list));
      let img = new Image();
      list.map((item, index) => {
        img.src = item.url;
        item.width = img.width;
        item.height = img.height;
        return item;
      })

      this.setImageData(list);
    }

  }

  setImageData(list){

    let { galleryItems } = this.state;
    galleryItems=[];
    if(list && list.length > 0){
      list.map((item, index) => {

        let galleryItemData = {
          src: item.url,
          thumbnail: item.url,
          w: item.width ? item.width : 1200,
          h: item.height ? item.height : 900,
          // title: `Image ${index}`
        }
        galleryItems.push(galleryItemData);
      })

      this.setState({
        galleryItems
      })
    }

  }

  openPhotoSwipe = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: true,
      // options: {
      //   closeOnScroll: false
      // }
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false
    });
  };

  getThumbnailContent = (item) => {
    return (
      <div className={styles.slidePicture}>
        <img style={{backgroundImage:`url(${item.thumbnail})`}} className={styles.itemImg}/>
      </div>
    );
  };

  render(){

    const { galleryItems } = this.state;

    // console.log('galleryItems',galleryItems);

    const options = {
      index: 0, //开始幻灯片索引值
      escKey: false,
      captionEl: false,

      // ui option
      closeEl:true, //显示/关闭按钮
      timeToIdle: 4000,
      fullscreenEl:false, //全屏按钮
      tapToClose: true, //点击滑动区关闭
      shareEl:false,//显示/关闭菜单选项
      shareButtons:[ //菜单选项
        {id:'download', label:'download', url:'{{raw_image_url}}', download:true}
      ],
      addCaptionHTMLFn: function(item, captionEl, isFake) {
        console.log('点击列表图片');
        if(!item.title) {
            captionEl.children[0].innerHTML = '';
            return false;
        }
        captionEl.children[0].innerHTML = item.title;
        return true;
      }
    };

    return(
      <div className={styles.slidePictureBody}>
        {this.state.galleryItems.length > 0 ? (
          <PhotoSwipeGallery
            items={this.state.galleryItems}
            thumbnailContent={this.getThumbnailContent}
            options={options}
          />
        ):''}
      </div>
    )
  }

}

export default ImgsZoom;
