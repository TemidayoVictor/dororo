'use client'
import Image from 'next/image'
import React, {useState} from "react";

export default function Home() {
  const [active, setActive] = useState(false);

  const toggleDropdown = () => {
    setActive((prev) => !prev)
  }

  const removeDropdown = () => {
    setActive(false);
  }

  return (
    <div>
      <header className='flex-desktop'>
        <div className="logo">DORORO</div>
        
        <div className='desktop'>
          <div className="navlinks flex around">
            <a href="#" className="link">Home</a>
            <a href="#" className="link">About</a>
            <a href="#" className="link">Our App</a>
            <a href="#" className="link">Pages</a>
            <a href="#" className="link">Roadmap</a>
          </div>
        </div>
        
        { active &&
          <div className="navlinks flex around mobile">
            <a href="#" className="link">Home</a>
            <a href="#" className="link">About</a>
            <a href="#" className="link">Our App</a>
            <a href="#" className="link">Pages</a>
            <a href="#" className="link">Roadmap</a>
          </div>
        }

        <div className="download flex">
          <a href="#" className="btn">Download App</a>
        </div>
        <div className="mobile">
          <i className="bx bx-menu" onClick={toggleDropdown}></i>
        </div>
      </header>

      <main>
        <section className='home-section'>
          <div className='home flex'>
            <div className="left">
              <h1>Best place buy and sell <span>crypto currency</span> assets</h1>
              <p className='home-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum 
                nulla aliquid accusamus at reprehenderit dolores, eaque magnam voluptate
                excepturi dignissimos quod ullam, pariatur explicabo quasi?
              </p>
              <div className="btns">
                <a href="#" className="btn m-r--1">Get Started</a>
                <a href="#" className="btn btn-2"> <img className='btn-img' src="Vector.png" alt="" /> Watch Tutorials</a>
              </div>
            </div>
            <div className="right">
              <img src="bitcoin-gold-coin-with-BTC-logo-removebg-preview 1.png" alt="" />
            </div>
          </div>
        </section>

        <section>
          <div className="about flex">
            <div className="left">
              <img src="Big-Bitcoin-price-move-on-the-horizon-anticipated-heading-into-October 1.png" alt="" />
            </div>
            <div className="right">
              
              <p className='top'>About us</p>
              
              <h2>Accelerate the world's transition</h2>
              
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
                Excepturi animi accusantium aspernatur inventore repellendus exercitationem, 
                fugiat modi deserunt maxime id. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Delectus unde in is!
              </p>

              <div className="more">
                <a href="#" className="btn btn-block">More about us</a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="heading">
            <p className="top">Why Choose Us</p>
            <h2>Safe, guaranteed and easy to use</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Earum rem reprehenderit laboriosam sunt, quidem culpa
              amet eius! Reprehenderit minima sunt esse laudantium voluptate rerum aliquid!
            </p>
          </div>

          <div className="box-container">
            <div className="box">
              <div className="image">
                <img src="unlock.png" alt="" />
              </div>
              <div className="content">
                <h3>Safe and secure</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi fugiat deleniti id perferendis quibusdam similique eveniet nobis impedit ea ipsam.</p>
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src="unlock.png" alt="" />
              </div>
              <div className="content">
                <h3>Good investment</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi fugiat deleniti id perferendis quibusdam similique eveniet nobis impedit ea ipsam.</p>
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src="unlock.png" alt="" />
              </div>
              <div className="content">
                <h3>Integrated app</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi fugiat deleniti id perferendis quibusdam similique eveniet nobis impedit ea ipsam.</p>
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src="unlock.png" alt="" />
              </div>
              <div className="content">
                <h3>Multi Currency Support</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi fugiat deleniti id perferendis quibusdam similique eveniet nobis impedit ea ipsam.</p>
              </div>
            </div>
          </div>
        </section>

        <section>

          <div className="heading">
            <p className="top">Step by step guide</p>
            <h2>Easy Steps to success</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Earum rem reprehenderit laboriosam sunt, quidem culpa
              amet eius! Reprehenderit minima sunt esse laudantium voluptate rerum aliquid!
            </p>
          </div>

          <div className="box-container container-2">
            <div className="box">
              <div className="image">
                <img src="unlock.png" alt="" />
              </div>
              <div className="content">
                <h3>Create Wallet</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi fugiat deleniti id perferendis quibusdam similique eveniet nobis impedit ea ipsam.</p>
              </div>
              <div className="learn">
                  <a href="#" className="btn">Learn More</a>
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src="unlock.png" alt="" />
              </div>
              <div className="content">
                <h3>Make Payment</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi fugiat deleniti id perferendis quibusdam similique eveniet nobis impedit ea ipsam.</p>
              </div>
              <div className="learn">
                  <a href="#" className="btn">Learn More</a>
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src="unlock.png" alt="" />
              </div>
              <div className="content">
                <h3>Buy or Sell</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi fugiat deleniti id perferendis quibusdam similique eveniet nobis impedit ea ipsam.</p>
              </div>
              <div className="learn">
                  <a href="#" className="btn">Learn More</a>
              </div>
            </div>
          </div>

        </section>

        <section>
          <div className="vision flex">
            <div className="left">
              <p className="top">Our Vision</p>
              <h2>Users from all over the world</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia,
                et asperiores explicabo laudantium unde facere perferendis hic. Quos, dolores.
              </p>
              <div className="stat-container flex">
                <div className="stat">
                  <h3>32k+</h3>
                  <p>People joined</p>
                </div>
                <div className="stat">
                  <h3>32k+</h3>
                  <p>People joined</p>
                </div>
                <div className="stat">
                  <h3>32k+</h3>
                  <p>People joined</p>
                </div>
              </div>
            </div>
            <div className="right">
              <img src="v875-katie-35 [Converted] 1.png" alt="" />
            </div>
          </div>
        </section>

        <section>
          
          <div className="heading">
            <p className="top">Our Features</p>
            <h2>All you need is here</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Earum rem reprehenderit laboriosam sunt, quidem culpa
              amet eius! Reprehenderit minima sunt esse laudantium voluptate rerum aliquid!
            </p>
          </div>

          <div className="features">
            <div className="features-container flex">
              <div className="left">
                <div className="features-box flex">
                  <img src="profile.png" alt="" />
                  <h3>Free trial Account</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sed voluptates qui molestiae. Officiis voluptatem hic aliquam quas
                    placeat dolorum nemo?</p>
                </div>
                <div className="features-box flex">
                  <img src="profile.png" alt="" />
                  <h3>Free trial Account</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sed voluptates qui molestiae. Officiis voluptatem hic aliquam quas
                    placeat dolorum nemo?</p>
                </div>
              </div>
              <div className="middle">
                <img src="bitcoin-3d-illustration-transformed 1 (1).png" alt="" />
              </div>
              <div className="right">
                <div className="features-box flex">
                  <img src="profile.png" alt="" />
                  <h3>Free trial Account</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sed voluptates qui molestiae. Officiis voluptatem hic aliquam quas
                    placeat dolorum nemo?</p>
                </div>
                <div className="features-box flex">
                  <img src="profile.png" alt="" />
                  <h3>Free trial Account</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sed voluptates qui molestiae. Officiis voluptatem hic aliquam quas
                    placeat dolorum nemo?</p>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section>

          <div className="heading">
            <p className="top">Our Roadmap</p>
            <h2>Launchpad Lists</h2>
          </div>

        </section>

        <section>
          <div className="banner flex">
            <div className="left">
              <p className="banner-top">
                Crypto Exchange
              </p>
              <h2>Low Fees and deep liquidity</h2>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Cumque incidunt veritatis volup tatibus voluptates quaerat eius, 
                cum ratione quo ab officiis? 
              </p>
              <div className="banner-btn"> 
                <a href="#" className="btn">Go To Exchange</a>
              </div>
            </div>
            <div className="right">
              <img src="Group 869.png" alt="" />
            </div>
          </div>
        </section>

        <section className='container-2'>
          <div className="subscribe flex">
            <div className="left">
              <img src="Design (1).png" alt="" />
            </div>
            <div className="right">
              <p>Start Now</p>
              <h2>Sign up to learn more</h2>
              <p className='sub-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsa, vel! Consectetur, voluptates. Nesciunt corporis quam cum dolor qui nemo,
              </p>
              <div className="subscribe-content">
                <form className='flex'>
                  <input type="text" className='sub-input' placeholder='Enter your email' />
                  <input type="submit" className='sub-btn' value="subscribe" />
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
          <div className="footer-box-1">
            <h3>DORORO</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              voluptate quas. Alias dolores sint, dolore perferendis eius natus 
              speriores aspernatur.
            </p>
            <div className="box-links">
              <a href=""><i className="bx bxl-facebook"></i></a>
              <a href=""><i className="bx bxl-twitter"></i></a>
              <a href=""><i className="bx bxl-youtube"></i></a>
            </div>
          </div>

          <div className="footer-box-container">
            <div className="footer-box">
              <h3>Our Products</h3>
              <div className="footer-links">
                <a href='#'>Crypto Earn</a>
                <a href='#'>Exchanges</a>
                <a href='#'>Defi Wallet</a>
                <a href='#'>Converter</a>
              </div>
            </div>

            <div className="footer-box">
              <h3>Pages</h3>
              <div className="footer-links">
                <a href='#'>About us</a>
                <a href='#'>Our App</a>
                <a href='#'>Careers</a>
                <a href='#'>Token Safe</a>
              </div>
            </div>

            <div className="footer-box">
              <h3>Contact</h3>
              <div className="footer-links">
                <a href=""><i className="bx bx-phone"></i>(205) 555-01000</a>
                <a href=""><i className="bx bx-time"></i>Mon - Fri: 9am - 11px</a>
                <a href=""><i className="bx bx-envelope"></i>real.com</a>
              </div>
            </div>
          </div>


        </footer>
    </div>
  )
}
