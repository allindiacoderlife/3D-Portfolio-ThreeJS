import React from 'react'
import {Link} from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className="cta-text">Have a project in mind?
            <br className="sm:block hidden" />
            Let's build something great together!
        </p>
        <Link to='/Portfolio/contant' className='btn'>
            Cantant
        </Link>
    </section>
  )
}

export default CTA