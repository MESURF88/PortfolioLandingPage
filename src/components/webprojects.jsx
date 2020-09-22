import React, { Component } from 'react'
import JS_Icon from '../svg/javascript.svg';
import JSON_Icon from '../svg/json.svg';
import Hbar_Icon from '../svg/big-moustache.svg';
import Python_Icon from '../svg/python.svg';

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
                          <p>Info: A tool to help classify yourself as a DnD (Dungeons and Dragons) class, using personality tests. The tests development was automated with Python.</p>
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
                        <p><img  style={{width: '3%', height: '3%'}} src={JS_Icon} alt="js_icon"/>Javascript,  <img  style={{width: '3%', height: '3%'}} src={JSON_Icon} alt="json_icon"/> JSON, <img  style={{width: '3%', height: '3%'}} src={Python_Icon} alt="python_icon"/> Python, <img  style={{width: '3%', height: '3%'}} src={Hbar_Icon} alt="handlebars_icon"/> Handlebars, <i className="icon-css3" /> CSS</p>
                        </div>
                      </div>
                    </article>
                  </div>
              </div>
            </div>

            <div className="row row-pt-md">
            <div className="col-md-3 text-center animate-box">
                <img src='./images/motivational2020_snippet.jpg' style={{width: '100%' }} class="img-fluid" alt="Second Project"/> 
              </div>
              <div className="col-md-8 text-center animate-box">
                <div className="timeline-centered">
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                      <div className="timeline-entry-inner">
                        <div className="timeline-label">
                          <h2>Motivational Website</h2>
                          <p>Info: Generates a random motivational quote from a JSON index. The 300+ quotes were scraped from the web using a Python script.</p>
                          <p>Check it out: <a href="https://motivational2020.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="icon-libreoffice" /></a></p>
                        </div>
                      </div>
                    </article>
                </div>
              </div>
              <div className="col-md-1 text-center animate-box">
                <div className="timeline-centered">
                  <article className="timeline-entry">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                          <i className="icon-message" />
                      </div>
                    </div>
                  </article> 
                </div>
              </div>
            </div>
            <div className="row row-md">
              <div className="col-md-12 text-center">
              <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-label">
                        <p>Tools used:</p>
                        <p><img  style={{width: '3%', height: '3%'}} src={JS_Icon} alt="js_icon"/>Javascript,  <img  style={{width: '3%', height: '3%'}} src={JSON_Icon} alt="json_icon"/> JSON, <img  style={{width: '3%', height: '3%'}} src={Python_Icon} alt="python_icon"/> Python, <i className="icon-html-five" /> HTML5, <i className="icon-css3" /> CSS</p>
                        </div>
                      </div>
                    </article>
                  </div>
              </div>
            </div>

            <div className="row row-pt-md">
              <div className="col-md-8 text-center animate-box">
                <div className="timeline-centered">
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-2">
                          <i className="icon-ello" />
                        </div>
                        <div className="timeline-label">
                          <h2>Meditation Webapp</h2>
                          <p>Info: A timing based web app that guides a 4-7-8 meditation breathing. Once Begin is clicked... Breathe in 4 seconds, hold for 7 seconds, breathe out for 8 seconds.</p>
                          <p>Check it out: <a href="https://meditation478.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="icon-libreoffice" /></a></p>
                        </div>
                      </div>
                    </article>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <img src='/images/meditation478_snippet.jpg' style={{width: '100%' }} class="img-fluid" alt="Third Project"/> 
              </div>
            </div>
            <div className="row row-md">
              <div className="col-md-12 text-center">
              <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-label">
                        <p>Tools used:</p>
                        <p><img  style={{width: '3%', height: '3%'}} src={JS_Icon} alt="js_icon"/>Javascript,  <i className="icon-power2" /> Socket.io, <i className="icon-html-five" /> HTML5, <i className="icon-css3" /> CSS</p>
                        </div>
                      </div>
                    </article>
                  </div>
              </div>
            </div>

            <div className="row row-pt-md">
            <div className="col-md-3 text-center animate-box">
                <img src='./images/TBD_snippet.jpg' style={{width: '100%' }} class="img-fluid" alt="Fourth Project"/> 
              </div>
              <div className="col-md-8 text-center animate-box">
                <div className="timeline-centered">
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                      <div className="timeline-entry-inner">
                        <div className="timeline-label">
                          <h2>Capstone Project</h2>
                          <p>Info: TBD.</p>
                          <p>Check it out: TBD<i className="icon-libreoffice" /></p>
                        </div>
                      </div>
                    </article>
                </div>
              </div>
              <div className="col-md-1 text-center animate-box">
                <div className="timeline-centered">
                  <article className="timeline-entry">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                          <i className="icon-box" />
                      </div>
                    </div>
                  </article> 
                </div>
              </div>
            </div>
            <div className="row row-md">
              <div className="col-md-12 text-center">
              <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-label">
                        <p>Tools used:</p>
                        <p>TBD</p>
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
