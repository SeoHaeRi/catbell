import React from 'react'
import './section1.css'

export default function Section1() {
  return (
    <div className='section1'>
      <section>
        <div className='txt1'>Cras vitae in bibendum, <span>elit</span> in massa?</div>
        <div className='txt2'>
          <div className='group1'>
            <div>Non nulla faucibus <br /> <span className='pen1'>egestas</span></div>
            <div>Tincidunt porttitor pulvinar <br /> proin nibh <span className='pen2'>ultricies</span> non</div>
          </div>
          <div className='group2'>
            <div>metus non tortor male at tortor <br /> nunce <span className='pen3'>faucibus</span>  metus</div>
            <div>Cras vitae in bibendum <br /> elit in massa <span className='pen4'>sceleri</span></div>
          </div>
        </div>
        <div className='txt3'>
          <div><span>Nunc,</span> in ut scelerisque massa .</div>
          <img src="img/sect1Icon.png" alt="그래픽 이미지" />
        </div>
      </section>
    </div>
  )
}
