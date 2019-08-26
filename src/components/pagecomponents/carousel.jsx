import React from 'react';
import SlideShow from 'react-image-show';

class Carousel extends React.Component {

  resize = () => this.forceUpdate()

  componentDidMount() {
    window.addEventListener('reize', this.resize);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  render() {
    let urlArray = [
      'https://scontent-yyz1-1.cdninstagram.com/vp/74a83c77126ce2e4b220b04d703bd838/5DDB064F/t51.2885-15/e35/51309053_862015367498447_8190352574005580372_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com',
      'https://scontent-yyz1-1.cdninstagram.com/vp/500843c26ddd7e1c1845d1c2eab7006d/5DFBA33D/t51.2885-15/e35/54247875_261677801438003_6445013974716872852_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com',
      'https://picsum.photos/id/1019/1000/600/'
    ];

    return (
      <div>
        <SlideShow
          images={urlArray}
          width="920px"
          imagesWidth="800px"
          imagesHeight="450px"
          imagesHeightMobile="56vw"
          thumbnailsWidth="920px"
          thumbnailsHeight="12vw"
          indicators={true}
          thumbnails
          fixedImagesHeight
          infinite
        />
      </div>
    );
  }
}

export default Carousel;
