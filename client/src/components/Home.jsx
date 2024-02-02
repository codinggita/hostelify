
import React from 'react';
import './css/Home.css'; // Import the corresponding CSS file
import {ActionAreaCard1, ActionAreaCard2, ActionAreaCard3, ActionAreaCard4, ActionAreaCard5, ActionAreaCard6} from './cards';


const Home = () => {
  const imageURL='https://scontent.fixc4-3.fna.fbcdn.net/v/t1.6435-9/93272843_101394028216928_5292488658975195136_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=7V1Zgxn4OAwAX9VO8cq&_nc_ht=scontent.fixc4-3.fna&oh=00_AfB4-b8_s_fGd-zQybMgArShOKwhHOfJSRCDDQ_fmPlZGw&oe=65E28221';
  return (
    <div className="home-container">
      <div className='home-image'>
        <img src={imageURL} alt="Hostel Image" className="home-image" />
        <div className='overlay-text'>
          <h1>Comfort, Community, Connection: The Hostel Trinity.t</h1> 
        </div>
      </div>
      <div className='site-images'>
        <div className='site-text'>
          Our hostels ~
        </div>
        <div className='image-grid'>
          <ActionAreaCard1/>
          <ActionAreaCard2/>
          <ActionAreaCard3/>
          <ActionAreaCard4/>
          <ActionAreaCard5/>
          <ActionAreaCard6/>
        </div>
      </div>
    </div>
  );
};

export default Home;
