import React from 'react'

function ContactBody() {

    const date = new Date().getFullYear()


    const socialLinks = [
        {
            name: 'GitHub',
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
        <section id="contactSection" className="section">
            <div className="container-fluid-small">
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 contact-left">
                        <h2 className="big-title anim-bot">Say hello!</h2>
                        <div className="row">

                            <div className="col-12 col-sm-6 anim-bot">
                                <h5 className="sub-title">Get in touch</h5>
                                <ul>
                                    <li>John@kearneyjohn.com</li>
                                </ul>
                                <h5 className="sub-title">Secure</h5>
                                <ul>
                                    <li>kearneyjohn@protonmail.com</li>
                                </ul>
                            </div>
        
                            <div className="col-12 col-sm-6 anim-bot">
                                <h5 className="sub-title">PGP Key</h5>
                                <ul>
                                    <li><a href="/archive-2">My Public Key</a></li>
                                </ul>
                            </div>

                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 copyright">
                                <p>Copyright © {date} John Kearney 2021. <br /> Built with ReactJS.</p>
                                <div className="footer-menu">
                                    <ul>
                                        {socialLinks.map((item, i) => <li key={i}><a href={item.url}>{item.name}</a></li>)}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
                </div>
            </div>
        </section>
    )

}

export default ContactBody