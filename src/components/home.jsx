import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    var navBarStyle = {
      'background-color': 'rgba(19, 15, 15, 0.9)'
    }

    let colorStripe = {
      'padding-bottom': '100px'
    }

    let aboutCards = {
      'padding': '0px', 
      'background-color': '#ddd'
    }

    let abouth3Text = {
      'text-align': 'center'
    }

    let serviceIcons = {
      'display': 'inline-block', 
      'width': '100%', 
      'text-align': 'center'
    }

    let reviewStyle = {
      'margin': '0px',
      'max-width': '100%'
    }

    let reviewCard = {
      'padding': '-100px'
    }

    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark shadow" style={navBarStyle}>
         <a class="navbar-brand" href="#">Cody Mac Neil Photography</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to='/'>Home</Link>
              <Link to='/gallery'>Gallery</Link>
              <a class="nav-item nav-link active" href="#">Home<span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="#">About</a>
              <a class="nav-item nav-link" href="#">About</a>
              <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </div>
          </div>
        </nav>
        <div class="jumbotron animated" style={colorStripe}>
        </div>
        <div class="jumbotron bg-transparent">

  <div class="section-heading">
    <h1>About Me</h1>
  </div>


  <div class="card-deck">

    <div class="card">
      <div class="card-body" style={aboutCards}>
       <img src="https://i.ytimg.com/vi/KIYkpwyKEhY/maxresdefault.jpg" class="img-fluid"/>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="display-4">Cody Mac Neil</h5>
        <hr />
        <p class="card-text">Born and raised in Windsor, I graduated top in my class in the Royal Airborne Photography Regiment. I have over 300 confirmed photography deployments and I have been involved in numerous secret operations to take photos of sensitive intel. I am trained in reconnaissance aircraft operation with over 1000 hours of flight time in the USAF SR-71 and over 20,000 images for real-time surveillance missions. I am the top pilot in the entire Canadian and American Airforce with multiple Medals of Honors. After meeting my soulmate I have retired and made my current mission the creation wedding experiences of a lifetime.</p>
      </div>
      <div class="card-footer">
        <h3 style={abouth3Text}>To learn more about me, check me out on my social media or text me!</h3>
        <hr />
        <div class="center">
          <div id="social">
            <ul>
              <li class="facebook">
                <a href="https://www.facebook.com/cody.m.neil" target="_blank" class="icon-link">
                  <i class="fab fa-facebook-square"></i>
                </a>
              </li>
              <li class="instagram">
                <a href="https://www.instagram.com/codymacneil_/?hl=en" target="_blank" class="icon-link">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="sms://+1-226-787-4140?body=Text%20Me." class="icon-link">
                  <i class="fas fa-mobile-alt"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>

  </div>

  </div>

  <div class="jumbotron">
    <div class="section-heading">
      <h1>Gallery</h1>
    </div>

    <div class="text-center">
      <h5 class="card-title">Check Out the Work I Posted to Instagram Below!</h5>
      <p class="card-text">If you would like to see my full porfiolio of selected works, view my gallery!</p>
      <a href="#" class="btn btn-primary">View Full Gallery!</a>
    </div>
    <InstagramEmbed
  url='https://www.instagram.com/p/B1gh_SgHm81/'
  maxWidth={320}
  hideCaption={true}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
<InstagramEmbed
  url='https://www.instagram.com/p/BvMLjkEHVME/'
  maxWidth={320}
  hideCaption={true}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
<InstagramEmbed
  url='https://www.instagram.com/p/Bu2QQcVHTA2/'
  maxWidth={320}
  hideCaption={true}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
  </div>

  <div class="section-heading">
    <h1>Services</h1>
  </div>

  <div class="jumbotron animated">
    <div class="card-deck">
     {/* Card 1 */}
      <div class="card shadow rounded">
        <div class="card-header mb-0 pb-0">
          <div class="icon-container" style={serviceIcons}>
            <i class="far fa-clock"></i>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">24/7 Availability</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"></p>
        </div>
      </div>
      {/*Card 2*/}
      <div class="card shadow rounded">
          <div class="card-header mb-0 pb-0">
            <div class="icon-container" style={serviceIcons}>
              <i class="fas fa-coffee"></i>
            </div>
          </div>
        <div class="card-body">
          <h5 class="card-title">Meet Anywhere On Your Terms</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p class="card-text"></p>
        </div>

      </div>
      {/* Card 3 */}
      <div class="card shadow rounded">
          <div class="card-header mb-0 pb-0">
            <div class="icon-container" style={serviceIcons}>
              <i class="fas fa-camera-retro"></i>
            </div>
          </div>
        <div class="card-body">
          <h5 class="card-title">Extrodinary Quality For Your Budget</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p class="card-text"></p>
        </div>
      </div>
    </div>
  </div>

  {/*Start Review Section*/}
  <div class="section-heading">
    <h1>Reviews</h1>
  </div>
  <div class="container" style={reviewStyle}>
    <div id="carouselContent" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner review-carousel" role="listbox" >
        {/* Review 1 */}
        <div class="carousel-item active text-center p-0" >
          <div class="card text-center bg-dark text-light" style={reviewCard}>
            <div class="card-body">
              <p class="card-text">
                "Cody did the photography for our annual Dramatic Art Gala and we couldn’t  have been  happier with
                his work. He was incredibly professional and also very fun, kind, and approachable. The final product
                was absolutely beautiful, we will definitely look into having him back for next year! 5/5 stars!"
              </p>
              <h5 class="card-title">Kennedy Ann Holmes</h5>
            </div>
          </div>
        </div>
        {/* Review 2 */}
        <div class="carousel-item text-center p-0">
          <div class="card text-center bg-dark text-light">
            <div class="card-body">
              <p class="card-text">
                "Thanks to our friend Cody Mac Neil who did an excellent job capturing this special time in our lives!
                He did so much research to prepare for a great maternity shoot, and made us feel comfortable. Thank you Cody!"
              </p>
              <h5 class="card-title">Eileen Ella Nora & Andrew Charron</h5>
            </div>
          </div>
        </div>
        {/* Review 3 */}
        <div class="carousel-item text-center p-0">
            <div class="card text-center bg-dark text-light">
              <div class="card-body">
                <p class="card-text">
                  "Absolutely loved having our photos done by Cody. He’s super laid back, super chill and most importantly makes you feel super comfortable! Would definitely recommend him as a photographer."
                </p>
                <h5 class="card-title">Alyssa Fenech</h5>
              </div>
            </div>
          </div>
      </div>
      <a class="carousel-control-prev" href="#carouselContent" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselContent" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
      </div>
    );
  }
}

export default Home;

{/*1485160525.1677ed0.7c2432dda7d24ea4a297bca0903627cf*/}
















