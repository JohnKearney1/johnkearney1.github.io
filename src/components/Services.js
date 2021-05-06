import React from 'react'

import ServiceItem from '../elements/ServiceItem'

function Services(props) {

    const services = [
        {
            icon: 'eye-alt',
            name: 'UI/UX Design',
            list: ['Web Design', 'Interaction Design', 'E-Commerce', 'Photoshop', 'Figma']
        },
        {
            icon: 'code-alt',
            name: 'Development',
            list: ['Java', 'Python', 'Solidity', 'JavaScript', 'CSS', 'HTML']
        },
        {
            icon: 'music',
            name: 'Music',
            list: ['15+ Years Piano', '7+ Years Percussion', '5+ Years DAW Production', 'Sound Design & Engineering']
        },
        {
            icon: 'bitcoin',
            name: 'DeFi',
            list: ['Order Book Analysis', 'Algorithmic Trading', 'Transaction Tracking & Obfuscation']
        }
    ]
    const displayServices = services.map((item, index) => <ServiceItem key={index} icon={item.icon} title={item.name} list={item.list} />)

    return(
        <section id="aboutServices" name="aboutServices">
            <div className="container-fluid-small">
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 services-top services-left anim-bot">
                        {props.children}
                    </div>

                    <div className="col-lg-1 col-xl-1"></div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                        <div className="row">
                            {displayServices}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default Services