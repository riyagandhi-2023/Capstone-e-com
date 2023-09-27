/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
//importing link
import { Link } from "react-router-dom";
import {LiaShippingFastSolid} from 'react-icons/lia'


const Home =() => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('');
    const handleFilter = (category) => {
        
        setFilter(category);
        console.log(category)
      };

    return (
        <>
        <section>
        <div className='img-heros'>
            <div>
        <img src='/src/images/banner.jpg' className='img-hero'/>
        </div>
        </div>
        </section>
            <section className="home">
                <div className='buynow-btn'>
                    <button><Link to={'/products'}> BUY NOW </Link></button>
                </div>
                </section>
                <section>
                    <div className='services'>
                        <LiaShippingFastSolid className='icon-ship'/> 
                    </div>
                    <p className='shipping-text'>Free Shipping From all orders over $500</p>
                </section>
                
                <section>

                <div className="Main-banner">
                 
                    <img className="banner-img" src="/src/images/iphone.jpeg" alt="main banner" onClick={( ) => handleFilter('mobile')}/>
                    <img className="banner-img" src="/src/images/desktop.jpeg" alt="main banner" onClick={() => handleFilter("computer")} />
                    <img className="banner-img" src="/src/images/watch.jpeg" alt="main banner" onClick={() => handleFilter("watch")}/>
       
    

                    
                </div>
                
            </section>
            

        </>
    );
}

export default Home;