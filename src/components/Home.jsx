import React from 'react';
import pdf from '../pdf/Manish_Resume.docx.pdf';
import hero from './data/hero.json';


const Home = () => {
  return (
    <>
      <div className="container home">
        <div className="left">
            <h1>I am a Fullstack Developer</h1>

            <a href={pdf} download="Resume.pdf" className='btn btn-outline-warning'>Download Resume</a>
        </div>
        <div className="right">
            <div className="img">
              <img src={`/assets/${hero.imgSrc}`} alt="Hero" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
