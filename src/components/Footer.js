import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {

    const date = new Date().getFullYear()

    const socialLinks = [
        {
            name: 'Github',
            url: 'https://github.com/JohnKearney1'
        },
        {
            name: 'Twitter',
            url: 'https://www.twitter.com/joh5'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/jmkearney7/'
        }
    ]

    return(
        <footer id="footerSection">
            <div className="container-fluid-small">

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-9 footer-title anim-bot">
                        <h2 className="big-title">Let's work together.</h2>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 footer-project anim-bot">
                        <Link to='/contact'>Contact Me</Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-11 col-xl-4 copyright">
                        <p>Copyright © {date} John Kearney.<br />Built in ReactJS.</p>
                        <div className="footer-menu">
                            <ul>
                                {socialLinks.map((item, i) => <li key={i}><a href={item.url}>{item.name}</a></li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="col-1 footer-offset"></div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 contact-box contact-mail">
                        <h5 className="sub-title">Email</h5>
                        <ul>
                            <li>john@kearneyjohn.com</li>
                            <li>kearneyjohn@protonmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer