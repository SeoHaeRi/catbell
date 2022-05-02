import React from 'react'
import './mainview.css'

export default function Mainview() {
  return (
    <div className='mainview'>
      <img className='background' src="img/Mainview1.png" alt="" />
      <main>
        <div className='txt1'>Sed consec, elementu!</div>
        <div className='txt2'>Cras vitae in bibendum.<br />
          Fermentum ultricies felis
        </div>
        <div className='main-icon'>
          <ul>
            <li><img src="img/mainIcon1.png" alt="27" /><span>metus non tortor malesuada</span></li>
            <li><img src="img/mainIcon2.png" alt="네이버 법률" /><span>Non nulla 
              faucibus</span>
            </li>
            <li><img src="img/mainIcon3.png" alt="법-저울" /><span>Et amet
              hac egestas</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
