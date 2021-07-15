import React from 'react'

const LandingPage = () => {
  //fetch the featured items

  //display those items (simply at first)

  return (
  <div className=" grid-y grid-padding-y">
    <div className="landing-image ">
      <h1 className="landing-text">
        <span className="red"> Open Wide </span>
        <span className="green">Deli </span>
      </h1>

      <div className="featured-food">
        <h1>Featured Food</h1>
        //featured food carousel
      </div>
      <div className="grid-x grid-padding-x" >
        <div className="about-us cell small-12 large-6">
            <h1 >About Us</h1>
            <img className="image" src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/34121324_103495260547748_6042988899226091520_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=6wu7V6SzaZEAX9Kladc&_nc_ht=scontent-sea1-1.xx&oh=42002d9f081de18e3925707c116a7740&oe=60F4F109" alt="chef Joe Shirley" width="300" height="200"  align="left"/>
            <> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur augue ac purus convallis, ultricies pellentesque nisi tristique. Ut ullamcorper nulla mauris, molestie iaculis sapien interdum vitae. Praesent in ex nisl. Etiam a finibus mauris. Phasellus rutrum sit amet mauris non elementum. Nunc in ligula a arcu auctor ultrices at eget elit. Pellentesque egestas ac velit at pellentesque. Mauris non consequat mauris. Donec vel odio mi. Aenean dictum, odio et cursus ornare, mauris lectus pretium risunsequat ultrices. Aliqua.</>
        </div>

        <div className="location-map small-12 large-5">
          <h1>Location</h1>
          <img className="image" src="https://oobrien.com/wordpress/wp-content/uploads/2016/07/googlemaps_july2016.jpg" alt="fake map"  align="center"/>
        </div>
      </div>
    </div>
  </div>
  )

}

export default LandingPage