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

    </>
}
