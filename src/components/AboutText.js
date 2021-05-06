import React from 'react'
import {Link} from 'react-router-dom'

function AboutText(){

    return(
        <section id="aboutStory" className="section">
            <div className="container-fluid-small">
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 story-left anim-bot">
                        <h2 className="big-title anim-bot">Financial equity, <br /> explored in code.</h2>
                        <Link to='/'>View projects</Link>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 story-right anim-right">
                        <div className="story">
                            <p className="big-p">I've long had a fascination with computers and their ability to very rapidly connect unassociated people. In 2015 I began experimenting with penetration testing and operational security tools and have continued to develop freelance since. <br />
                             <br />My progression with development has led me towards creating and contributing to financially oriented projects. Specifically; using the capibilities of (and opportunities presented by) decentralized networks to provide high quality quantitative and fundamental analysis tools like PassivBot Futures.</p>
                        </div>
                    </div>

                    <div className="col-xl-3"></div>

                    <div className="col-xl-3"></div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 story-bottom anim-bot">
                        <ul>
                            <li>5 Years of Hobbyist Experience</li>
                            <li>3rd Year CS Student</li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 story-bottom anim-bot">
                        <ul>
                            <li>Arctic Code Vault Contributor</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
        
    )
    
}

export default AboutText