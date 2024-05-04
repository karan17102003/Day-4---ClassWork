import React from 'react'

import './Navbar.css'
const Navbar = () => {
  return (
    <div className='Nav'>
        <div className=' right-Nav'>
            <h3>Hootsuite</h3>
            <p>Platform</p>
            <p>Plans</p>
            <p>Enterprise</p>
            <p>Resources</p>
            <p>Education</p>
        </div>
        <div className='left-Nav'>
            <p>contact</p>
            <p>Log in</p>
            <button>Sign Up</button>

        </div>

      
    </div>
  )
}

export default Navbar
