import React from 'react'
import './About.scss'
import Card from '../card/card'

export default function About() {
    return <>
        <section className='About text-center container mt-5'>
            <h1>About us</h1>
            <article className="About_Desc pt-3 d-flex flex-column align-items-center">
                <span className='fw-bold'>GET TO KNOW US</span>
                <p className='fs-1'>Honesty, Integrity & Experience</p>
                <p>At AKZEE CONTRACTOR, we pride ourselves on a foundation of honesty, integrity,
                    and extensive experience. Our commitment to transparent communication and ethical
                    practices ensures that every project is handled with the utmost professionalism.
                    With years of industry expertise, we deliver top-quality construction services
                    tailored to meet the unique needs of our clients, building lasting relationships
                    and structures that stand the test of time.
                </p>
            </article>
            <div className="About_Image w-100 mt-5 d-flex align-items-center justify-content-evenly flex-wrap">
                <p>100%</p>
                <p>“We received the best services we could hope for!”</p>
            </div>
        </section>
        <div className="About_Titles d-flex flex-wrap align-items-start justify-content-between container">
            <Card Title='Demolitions' Desc="Our demolition services are with precision, safety, and efficiency. We 
            utilize advanced techniques and equipment to ensure the seamless removal of structures, preparing sites
            for new developments. Our experienced team prioritizes environmental responsibility and regulatory compliance,
             delivering results that pave the way for future construction projects." />

            <Card Title='Renovations' Desc='our renovation services blend creativity, craftsmanship,
              and attention to detail. We specialize in transforming spaces to meet the evolving needs
              and tastes of our clients, whether it’s a modern update or a complete overhaul. Our experienced
              team works closely with clients to deliver high-quality renovations that enhance both functionality
              and aesthetic appeal, ensuring each project exceeds expectations.'/>

            <Card Title='Maintenance' Desc="We offer comprehensive maintenance services designed to
              keep your properties in optimal condition. Our skilled team provides regular inspections,
              timely repairs, and preventative care to ensure the longevity and safety of your buildings.
              With a commitment to reliability and excellence, we help clients maintain their investments
              and minimize the need for costly future renovations."/>
        </div>

    </>
}
