import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BackgroundSlider from 'react-background-slider';
import BackgroundSlideshow from 'react-background-slideshow';
import bannerImage from '../images/TS4_ASpot.jpg';
import bannerImage1 from '../images/TS4_ASpot.jpg';
import bannerImage2 from '../images/TS4_ASpot.jpg';
export default class Header extends React.Component {
        constructor(){
        super();
        this.state = {
            locationData : []
        }
        
}

componentDidMount() {
    
    fetch('https://intellisuggest.fareportal.com/api/IntelliSuggest/2.0/json/AutoSuggest/AIR/ALL/nyc')
    .then(response => response.json())
    .then(data => {
        this.setState({ locationData: data })
            console.log( this.state.locationData.Location[0] )
    });
}
render(){
        return(
            <div className="main-banner text-white">
           <h2 className="col-3 float-right p-4 mt-3 d-none">Give your kids high quality toys on rent</h2>
           <BackgroundSlider images={[bannerImage, bannerImage1, bannerImage2]}  duration={10} transition={2} />
            {/* <div className="wave2"></div> */}
         </div>
        )
    }
}