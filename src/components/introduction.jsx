import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
            {/*
              <li className="list-class" style={{backgroundImage: 'url(images/bgimg2_tess.jpg)'}}>
            */}
              <li className="list-class">
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi! I'm Kevin</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1LtyrA1nZ9Z-SjYp2DDK2qFNSMR0_xW2LPBpe3d290xU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume Link<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-class">
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>See my <br></br> Projects</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/MESURF88" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-class">
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Check <br></br> out my <br></br>Presentation </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://oregonstate.box.com/s/2bgasnz2pjfvpizs9f1n74tmqexsi9w3" target="_blank" rel="noopener noreferrer">View CyberSecurity Video <i className="icon-video" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
