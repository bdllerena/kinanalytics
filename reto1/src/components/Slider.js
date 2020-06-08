import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Slider extends React.Component {
  render() 
  {
    return(
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.kinanalytics.com/wp-content/uploads/2016/12/share_image_4-edit2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Our Club: Atlético Kin</h3>
            <p>The first soccer team in the world led by data analytics</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.kinanalytics.com/wp-content/uploads/2016/12/q5h19c-vwu-fineas-anton-EXPORT-4.jpg"
            alt="Third slide"
          />
    
          <Carousel.Caption>
            <h3>Analytics that drive innovation</h3>
            <p>Kin Analytics offers analytical consulting services to all types of organizations and companies around the world, helping them to innovate and grow.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.kinanalytics.com/wp-content/uploads/2016/12/machupichu-export-2.jpg"
            alt="Third slide"
          />
    
          <Carousel.Caption>
            <h3>Kin Analytics Perú</h3>
            <p>A crucial step For KIN ANALYTICS to achieve the goal of using analytics to connect different markets, industries and companies globally.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slider;