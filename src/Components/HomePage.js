import React from 'react'
import './HomePage.css'
import firstpageimg from '../Assests/firstPageShooe.png';
import Shop from './Shop';
import ContactPage from './ContactPage';
import AboutUsPage from './AboutUsPage';


function Firstpage() {
  return (
   <>
    <div className='firstpage d-flex flex-lg-row flex-md-column flex-sm-column align-items-center justify-content-evenly  gap-3'>
        <div className='text ms-5'>
            <h1>Nike New <br />Collection</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo laborum repudiandae quidem neque tempora sunt nisi minus quaerat. Quasi vitae similique aut magnam a? Exercitationem deleniti error modi eveniet porro.</p>
            <div className='add'><button className='button '>+</button><p>Add to Blog</p></div>
        </div>
      <div className='imggg'>
      <img src={firstpageimg} alt="" />
      </div>
    </div>
    <AboutUsPage />
    <Shop />
    <ContactPage />
    </>
  )
}

export default Firstpage