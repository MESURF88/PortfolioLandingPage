import React, { Component } from 'react'

export default class webprojects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Open-Source</span>
                <h2 className="colorlib-heading animate-box">Projects</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-8 text-center animate-box">
                <div className="timeline-centered">
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-4">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>Test Taking Website</h2>
                          <p>Info: .</p>
                          <p>Check it out: <a href="https://putmeinabox.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="icon-libreoffice" /></a></p>
                        </div>
                      </div>
                    </article>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <img src='./images/putmeinabox_snippet.jpg' style={{width: '100%' }} class="img-fluid" alt="First Project"/> 
              </div>
            </div>
            <div className="row row-md">
              <div className="col-md-12 text-center">
              <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-label">
                        <p>Tools used:</p>
                        <p><img  style={{width: '3%', height: '3%'}} src="../images/javascript.svg" alt="js_icon"/>Javascript,  <img  style={{width: '3%', height: '3%'}} src="../images/json.svg" alt="js_icon"/> JSON, <img  style={{width: '3%', height: '3%'}} src="../images/big-moustache.svg" alt="js_icon"/> Handlebars, <i className="icon-css3" /> CSS</p>
                        </div>
                      </div>
                    </article>
                  </div>
              </div>
            </div>
            </div>
            
        </section>
      </div>
    )
  }
}
