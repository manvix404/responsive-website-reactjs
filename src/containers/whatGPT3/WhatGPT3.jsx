import React from 'react'
import Feature from '../feature/Feature'
import './whatGPT3.css'
function WhatGPT3() {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The Possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature/>
        <Feature/>
        <Feature/>
      </div>
    </div>
  )
}

export default WhatGPT3