import React from 'react';




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

    return (
      <div>
        <h1>You gotta do the things no one else wants to do.</h1>
        <nav className="navbar navbar-expand-lg navbar-dark shadow" style={navBarStyle}>
         <a class="navbar-brand" href="#">Cody Mac Neil Photography</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
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

  </div>
      </div>
    );
  }
}

export default Home;


















