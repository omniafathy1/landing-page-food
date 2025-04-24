import React, { Fragment, useEffect, useState } from "react";
import Header from "./Header";
import "./Home.css"
import bImage from "../../imgs/5.jpg";
import Data from "../Data";
import {Carousel} from "react-bootstrap"


const Home = () =>{
    const blogitem = Data.map((item) =>{
        return(
            <div className="col-md-4">
                <div className="box">
                <img src={item.img} alt="photo"/>
                <h2> {item.title}</h2>
                <span>{item.time}</span>
                <h6>{item.price}</h6>
                </div>
                <button><a href="#">order now</a></button>
            </div>
        )
    })
    const [count , setCount] = useState(0)
    const [count1 , setCount1] = useState(0)
    const [count2 , setCount2] = useState(0)
    const [count3 , setCount3] = useState(0)


    
    function clicked(target , setter){
        let current = 0;
     let interval = setInterval(() =>{
       current +=1
       setter(current);
       if(current >= target){
        clearInterval(interval)
        
       } 
     }, 10)

    }

    useEffect(() =>{
        clicked(300 , setCount);
        clicked(400 ,setCount1);
        clicked(357 , setCount2);
        clicked(343 ,setCount3)
    } , [])
    return(
        <Fragment>
        <Header/>
        <section className="numbers">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2  >{count}+</h2>
                        <h6>Savings</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>{count1}+</h2>
                        <h6>Photos</h6>
                    </div>
                    <div className="col-md-3">
                        <h2 >{count2}+</h2>
                        <h6>Rockets</h6>
                    </div>
                    <div className="col-md-3">
                        <h2 >{count3}+</h2>
                        <h6>Globes</h6>
                    </div>
                </div>
            </div>
        </section>
        <section className="pride">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/1.png" title="prideimg" />
                    </div>
                    <div className="col-md-6">
                        <h2>We pride ourselves on making real food from the best ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <button><a href="#">Learn more</a></button>
                        </div>
                </div>
            </div>

        </section>
        <section className="ingredients">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <h2>We make everything by hand with the best possible ingredients.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <ul>
                        <li>Etiam sed dolor ac diam volutpat.</li>
                        <li>Erat volutpat aliquet imperdiet.</li>
                        <li>purus a odio finibus bibendum.</li>
                    </ul>
                    <button><a href="#"> learn more</a></button>
                </div>
                <div className="col-md-6">
                    <img src="2.png" alt="ingredients" />
                </div>
                </div>
            </div>
        </section>
        <section className="paralex" style={{ backgroundImage: `url(${bImage})` }}>
            <div className="container">
                <div className="row">
                <div className="col-lg -12 col-lg-12">
                    <h2>When a man's stomach is full it makes no<br/>
                    difference whether he is rich or poor.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>
                    finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    <a href="#" >Watch our story</a>
                </div>
                </div>
            </div>
        </section>
        <section className="blogs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <h2>Explore Our Foods </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                    </div>
                </div>
                <div className="row">
                    {blogitem}
                </div>
            </div>
        </section>
        <section className="slider">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-lg-12">
                        <h2 style={{color:"white"}}>Testimonals</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                    <Carousel>
    <Carousel.Item>
    <img src="1.jpg"/>
    <br/>
    <Carousel.Caption >
     
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <span>front end developer</span>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img src="2.jpg"/>


    <Carousel.Caption>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <span>Web designer</span>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                    </div>
                </div>
            </div>
       
        </section>
        <section className="footer">
            <div className="foot">
                
            © 2025. Foodera. All rights reserved.
</div>
        </section>
        </Fragment>
    )
}

export default Home;