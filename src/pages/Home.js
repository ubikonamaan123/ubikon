import React from 'react';
import Navbar from '../components/Navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Logo from '../assets/img/logo.png';
import Wsimg from '../assets/img/ws-img.png';
import slides1 from '../assets/img/slides-1.png';
import slides2 from '../assets/img/slides-2.png';
import slidesbg from '../assets/img/slidesbg.png';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const Home = () => {
  const settings = {
    dots: false,              // Show navigation dots
    infinite: true,          // Infinite scrolling
    speed: 500,              // Transition speed in ms
    slidesToShow: 3,         // Number of slides to show
    slidesToScroll: 1,    // Number of slides to scroll
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 3000,     // Delay between transitions
    arrows: false,            // Show next/prev arrows
  };
  const blog = {
    dots: false,              // Show navigation dots
    infinite: true,          // Infinite scrolling
    speed: 500,              // Transition speed in ms
    slidesToShow: 2,         // Number of slides to show
    slidesToScroll: 1,    // Number of slides to scroll
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 3000,     // Delay between transitions
    arrows: false,            // Show next/prev arrows
  };
  return (
    <div className='col-sm-12'>
      <Navbar />

      <div className='main-slides-area bg-bectangle-bottom'>
        <div className='container'>
          <div class="main-slides-shape-1">
              <img src="https://templates.envytheme.com/coze/default/assets/images/home-slides/slides-shape-1.png" alt="image" />
          </div>
          <div className='main-slides-shape-2' >
              <img src='https://templates.envytheme.com/coze/default/assets/images/footer/footer-shape-1.png' />
          </div>
          <div className='main-slides-shape-3' >
              <img src='https://vue.envytheme.com/koze/img/projects-shape-3.03208ab8.png' />
          </div>
          <div className='main-slides-shape-4' >
              <img src='https://vue.envytheme.com/koze/img/projects-shape-2.e4150a75.png' />
          </div>

          <div className='row'>
            <div className='col-md-7'>
              <div className='main-slides-content'>
                <span data-aos="fade-right" data-aos-delay="70" data-aos-duration="700" data-aos-once="true" class="aos-init aos-animate">WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY</span>
                <h1 data-aos="fade-right" data-aos-delay="70" data-aos-duration="700" data-aos-once="true" class="aos-init aos-animate">Best IT Services For Your Business <span class="overlay" ></span></h1>
                <p data-aos="fade-right" data-aos-delay="70" data-aos-duration="700" data-aos-once="true" class="aos-init aos-animate">We are leading technology solutions providing company all over the world doing over 40 years. Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor.</p>
                <a href="contact.html" class="default-btn mt-5">Get Started</a>
              </div>
            </div>
            <div className='col-md-5'>
              <div className='main-slides-bg position-relative'>
                <img width="100%" src={slidesbg} />
                <div className='main-slides-image'>
                  <img className='slides1' src={slides1} />
                  <img className='slides2' src={slides2} />
                 </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='wt-we-do'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='wt-we-do-conten'>
                <span class="">What We Do</span>
                <h1 class="">We offer quality digital services</h1>
                <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.</p>
                <button className='default-btn mt-5'>Discover Now</button>
              </div>
            </div>
            <div className='col-md-6'>
              <img className='w-100' src={Wsimg} />
            </div>
          </div>
        </div>
      </div>
      <div className='services bg-bectangle-top bg-bectangle-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='services-conten'>
                <span class="">SERVICES</span>
                <h1 class="">We Provide the Best Quality <br /> <b> Services </b></h1>
                <p>We are technology solutions providing company all over the world doing over 40 years.</p>
                <button className='default-btn mt-5'>Explore All Services</button>
              </div>
            </div>
            <div className='col-md-8'>

              <Slider {...settings}>
                <div className=''>
                  <div className='services-item'>
                    <div className="services-image">
                      <img width="100%" src='https://templates.envytheme.com/coze/default/assets/images/services/services-4.jpg' />
                    </div>
                    <div class="services-content">
                      <h3>
                        <a href="services-details.html">Analytic Solutions</a>
                      </h3>
                      <p>Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…</p>
                      <a href="services-details.html" class="services-btn">View More</a>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className='services-item'>
                    <div className="services-image">
                      <img width="100%" src='https://templates.envytheme.com/coze/default/assets/images/services/services-1.jpg' />
                    </div>
                    <div class="services-content">
                      <h3>
                        <a href="services-details.html">Analytic Solutions</a>
                      </h3>
                      <p>Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…</p>
                      <a href="services-details.html" class="services-btn">View More</a>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className='services-item'>
                    <div className="services-image">
                      <img width="100%" src='https://templates.envytheme.com/coze/default/assets/images/services/services-3.jpg' />
                    </div>
                    <div class="services-content">
                      <h3>
                        <a href="services-details.html">Analytic Solutions</a>
                      </h3>
                      <p>Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…</p>
                      <a href="services-details.html" class="services-btn">View More</a>
                    </div>
                  </div>
                </div>

              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className='who-we-are'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img className='w-100' src="https://appgeeks.axiomthemes.com/wp-content/uploads/2023/04/img-22-copyright.png" />
            </div>
            <div className='col-md-6'>
              <div className='who-we-are-conten'>
                <span class="">Who We Are
                </span>
                <h1 class="">Web gurus and digital guides</h1>
                <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                {/* <button className='default-btn mt-5'>Discover Now</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='testimonials bg-bectangle-top bg-bectangle-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='testimonials-conten'>
                <span class="">TESTIMONIALS
                </span>
                <h1 class="">Some <b> Sweet Talk </b> Of Our Happy Clients</h1>
                <p>We are leading technology solutions providing company all over the world doing over 40 years lorem ipsum dolor sit amet.</p>
                <p>We are leading technology solutions providing company all over the world doing over 40 years. lorem ipsum dolor sit amet consetetur.</p>
                <button className='default-btn mt-5'>Know More About Us</button>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='testimonials-item'>
                <div className='item-box'>
                  <img src='https://vue.envytheme.com/koze/img/testimonials-1.6896791a.jpg' />
                  <p> Lorem ipsum dolor sit amet consetetur sadips cin go elitr sed diam nonumy eirmod. </p>
                  <h4>Herry Hopper, <span>Solit Team</span></h4>
                </div>
                <div className='item-box'>
                  <img src='https://vue.envytheme.com/koze/img/testimonials-2.06fe6281.jpg' />
                  <p> Lorem ipsum dolor sit amet consetetur sadips cin go elitr sed diam nonumy eirmod. </p>
                  <h4>Herry Hopper, <span>Solit Team</span></h4>
                </div>
                <div className='item-box'>
                  <img src='https://vue.envytheme.com/koze/img/testimonials-3.cba125a4.jpg' />
                  <p> Lorem ipsum dolor sit amet consetetur sadips cin go elitr sed diam nonumy eirmod. </p>
                  <h4>Herry Hopper, <span>Solit Team</span></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='blog-section'>
        <div className='container'>
          <div className='blog-heading'>
            <span>ARTICLE</span>
            <h2>Read Our Blog To Get All Recent Tech <b>News</b></h2>
          </div>
          <div className='blog-slides'>
              <Slider {...blog}>
                  <div class="blog-card">
                    <div class="row align-items-center">
                      <div class="col-lg-6">
                        <div class="blog-image">
                            <a href="/koze/single-blog-1" class="">
                              <img src="https://vue.envytheme.com/koze/img/blog-1.9da8d82d.jpg" alt="image" />
                            </a>
                        </div>
                      </div>
                    <div class="col-lg-6">
                      <div class="blog-content">
                        <div class="date">9th July, 2022</div>
                            <h3><a href="/koze/single-blog-1" class="">How Technology Dominate In The new World In 2022</a></h3>
                            <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                            <a href="/koze/single-blog-1" class="blog-btn">View More</a>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="blog-card">
                    <div class="row align-items-center">
                      <div class="col-lg-6">
                        <div class="blog-image">
                            <a href="/koze/single-blog-1" class="">
                              <img src="https://vue.envytheme.com/koze/img/blog-1.9da8d82d.jpg" alt="image" />
                            </a>
                        </div>
                      </div>
                    <div class="col-lg-6">
                      <div class="blog-content">
                        <div class="date">9th July, 2022</div>
                            <h3><a href="/koze/single-blog-1" class="">How Technology Dominate In The new World In 2022</a></h3>
                            <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                            <a href="/koze/single-blog-1" class="blog-btn">View More</a>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="blog-card">
                    <div class="row align-items-center">
                      <div class="col-lg-6">
                        <div class="blog-image">
                            <a href="/koze/single-blog-1" class="">
                              <img src="https://vue.envytheme.com/koze/img/blog-1.9da8d82d.jpg" alt="image" />
                            </a>
                        </div>
                      </div>
                    <div class="col-lg-6">
                      <div class="blog-content">
                        <div class="date">9th July, 2022</div>
                            <h3><a href="/koze/single-blog-1" class="">How Technology Dominate In The new World In 2022</a></h3>
                            <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                            <a href="/koze/single-blog-1" class="blog-btn">View More</a>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="blog-card">
                    <div class="row align-items-center">
                      <div class="col-lg-6">
                        <div class="blog-image">
                            <a href="/koze/single-blog-1" class="">
                              <img src="https://vue.envytheme.com/koze/img/blog-1.9da8d82d.jpg" alt="image" />
                            </a>
                        </div>
                      </div>
                    <div class="col-lg-6">
                      <div class="blog-content">
                        <div class="date">9th July, 2022</div>
                            <h3><a href="/koze/single-blog-1" class="">How Technology Dominate In The new World In 2022</a></h3>
                            <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                            <a href="/koze/single-blog-1" class="blog-btn">View More</a>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="blog-card">
                    <div class="row align-items-center">
                      <div class="col-lg-6">
                        <div class="blog-image">
                            <a href="/koze/single-blog-1" class="">
                              <img src="https://vue.envytheme.com/koze/img/blog-1.9da8d82d.jpg" alt="image" />
                            </a>
                        </div>
                      </div>
                    <div class="col-lg-6">
                      <div class="blog-content">
                        <div class="date">9th July, 2022</div>
                            <h3><a href="/koze/single-blog-1" class="">How Technology Dominate In The new World In 2022</a></h3>
                            <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                            <a href="/koze/single-blog-1" class="blog-btn">View More</a>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="blog-card">
                    <div class="row align-items-center">
                      <div class="col-lg-6">
                        <div class="blog-image">
                            <a href="/koze/single-blog-1" class="">
                              <img src="https://vue.envytheme.com/koze/img/blog-1.9da8d82d.jpg" alt="image" />
                            </a>
                        </div>
                      </div>
                    <div class="col-lg-6">
                      <div class="blog-content">
                        <div class="date">9th July, 2022</div>
                            <h3><a href="/koze/single-blog-1" class="">How Technology Dominate In The new World In 2022</a></h3>
                            <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                            <a href="/koze/single-blog-1" class="blog-btn">View More</a>
                          </div>
                        </div>
                      </div>
                  </div>
              </Slider>  
          </div>
        </div>
      </div>
      <footer className="bg-black text-white">
        <div className="container">
          <div class="footer-shape-1">
            <img src="https://templates.envytheme.com/coze/default/assets/images/footer/footer-shape-1.png" alt="image" />
          </div>
          <div class="footer-shape-3">
            <img src="https://templates.envytheme.com/coze/default/assets/images/footer/footer-shape-3.png" alt="image" />
          </div>
          <div className="row">
            {/* About Section */}
            <div className="col-md-3">

              <a class="nav-link px-0 my-3" aria-current="page" href="#"><img width={139} src={Logo} /></a>
              <p>Lorem ipsum dolor sit amet consetetur sadi scing elitr sed diam nonumy.</p>
              <div className='d-flex mt-3'>
                <ul class="nav widget-social">
                  <li class="nav-item">
                    <a class="nav-link px-0" aria-current="page" href="#"><i class="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-0" aria-current="page" href="#"><i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-0" aria-current="page" href="#"><i class="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-0" aria-current="page" href="#"><i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 ">
              <h5 className='fw-bold'>Links</h5>
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link px-0" aria-current="page" href="#">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-0" aria-current="page" href="#">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-0" aria-current="page" href="#">News</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-0" aria-current="page" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-0" aria-current="page" href="#">Projects</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 ">
              <h5 className='fw-bold'>Pages</h5>
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link px-0" aria-current="page" href="#">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-0" aria-current="page" href="#">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-0" aria-current="page" href="#">News</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-0" aria-current="page" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link px-0" aria-current="page" href="#">Projects</a>
                </li>
              </ul>
            </div>
            <div className='col-md-3'>
              <h5 className='fw-bold mb-4'>Subscribe Newsletter</h5>
              <form>
                <div className='newsletter-form'>
                  <div className=''>
                    <input className='input-newsletter' placeholder='' type='text' />
                  </div>
                  <button className='default-btn disabled'>Subcribe</button>
                </div>
              </form>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="text-center copyright">
            <p>&copy; 2025 Your Company. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default Home;
