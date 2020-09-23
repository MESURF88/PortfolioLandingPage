import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about" >
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I have a wide array of software experience and interests, from Python user interfaces to networking a Raspberry Pi. My alma mater is Purdue University with a major in Mechanical Engineering.</p>
                    <p>I am currently pursuing a Post-Bacc degree from Oregon State University in Computer Science. I enjoy making web apps and publishing them on Github, gcloud or Heroku (I have no favorite!). I strongly believe programming is a creative endeavor, see some of my skills below. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Interests</span>
                <h2 className="colorlib-heading">What is my experience?</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Embedded Systems </h3>
                    <p>I have experience with C, C++, 1553 Communication, Linux </p>
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Network Engineering</h3>
                    <ul>Bandwidth testing</ul>
                    <ul>LAN, VLAN and IP switch configuration</ul>
                    <ul>Protocols: OSI and Time Sensitive Networking</ul>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Web Development</h3>
                    <li>Front End</li>
                    <p>Javascript, Apache2, CSS, HTML5, Handlebars, React</p>
                    <li>Back End</li>
                    <p>SQL, MySQL, PHP, Node</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
