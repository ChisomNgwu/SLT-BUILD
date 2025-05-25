import { useState, } from 'react';
import { useGetProductsQuery } from '../../features/products/productsApi';
import { FaChevronDown, FaStar} from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa6';
import Button from  "../../components/Button";

import Logo from "../../../public/logo.svg";
import Telephone from "../../assets/header/telephone.png";

import './HomePage.css';
import './MediaQuery.css'; 

export default function HomePage () {

    // Mobile navigation state
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleClick = (): void => {
        console.log('Button clicked');
    };

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close mobile menu when clicking outside or on a link
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    //RTK Query hook
    const [productLimit, setProductLimit] = useState(5);
    const { 
        data: productsResponse, 
        isLoading: loading, 
        error 
    } = useGetProductsQuery(productLimit);

    const products = productsResponse?.products || [];
    const handleLoadMore = () => {
        setProductLimit(prevLimit => prevLimit + 5);
    };

    return (
        // homepage container
        // This is the main container for the homepage
        <section className="parent-container">
            <header className="header">
                        {/* utility bar */}
            <div className="utility-bar">
                <div className="utility-content ">
                    <div className="content-box">
                        <img src={Telephone} alt="telephone" />
                        <h6> (225) 555-0118</h6>
                    </div>

                    <div className="content-box">
                        <img src="/src/assets/icons/mail .png" alt="email" />
                        <h6>michelle.rivera@example.com</h6>
                    </div>
                </div>
                <div className="utility-content">
                    <h6>Follow Us  and get a chance to win 80% off</h6>
                </div>
                <div className="utility-content ">
                    <h6> Follow Us  :</h6>
                    <img src="/src/assets/icons/instagram .png" alt="instagram" />
                    <img src="/src/assets/icons/youtube.png" alt="youtube" />
                    <img src="/src/assets/icons/facebook.png" alt="facebook" />
                    <img src="/src/assets/icons/twitter.png" alt="twitter" />
                </div>
            </div>

            {/* navigation bar */}
            <nav className="navbar">
                <span className="logo">
                    <img src={Logo} alt="logo" />
                </span>
                
                <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li className="desktop-nav"><a href="" onClick={closeMobileMenu}>Home</a></li>
                    <li className="desktop-nav"><a href="" onClick={closeMobileMenu}>Shop <FaChevronDown /> </a></li>
                    <li className="desktop-nav"><a href="" onClick={closeMobileMenu}>About</a></li>
                    <li className="desktop-nav"><a href="" onClick={closeMobileMenu}>Blog</a></li>
                    <li className="desktop-nav"><a href="" onClick={closeMobileMenu}>Contact</a></li>
                    <li className="desktop-nav"><a href="" onClick={closeMobileMenu}>Pages</a></li>
                    

                     {/* Mobile-only navigation */}
                    <li className="mobile-nav"><a href="" onClick={closeMobileMenu}>Home</a></li>
                    <li className="mobile-nav"><a href="" onClick={closeMobileMenu}>Product</a></li>
                    <li className="mobile-nav"><a href="" onClick={closeMobileMenu}>Pricing</a></li>
                    <li className="mobile-nav"><a href="" onClick={closeMobileMenu}>Contact</a></li>
                </ul>
                <div className="nav-items">
                    <div className="login">
                        <img src="/src/assets/icons/user avatar.svg" alt="user-profile" />
                        <a href="/">Login / Register</a>
                    </div>
                    <div className="functions">
                        <div className='first'>
                            <img src="/src/assets/icons/search icon.svg" alt="search" />
                            <img src="/src/assets/icons/mobile search.png" alt="search" />
                        </div>
                        <div className='middle'>
                            <img src="/src/assets/icons/cart.png" alt="cart" /><span className='count'>1</span>
                            <img src="/src/assets/icons/mobile cart.png" alt="cart" />
                        </div>
                        <div className='last'>
                            <img src="/src/assets/icons/like.png" alt="like" /><span className='count'>1</span>
                        </div>
                    </div>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                >
                    <img src="/src/assets/icons/hamburger.png" alt="menu" />
                </div>
            </nav>
            </header> 

            {/* hero section */}
            <main className="hero-section">
                <div className="hero-wrapper">
                    <div className="hero-grid desktop-grid">
                        <img src="/src/assets/images/hero 1.png" alt="furniture1" />
                        <img src="/src/assets/images/hero 2.png" alt="furniture2" />
                        <img src="/src/assets/images/hero 3.png" alt="furniture3" />
                        <img src="/src/assets/images/hero 4.png" alt="furniture4" />
                    </div>
                    <div className=" mobile-grid">
                        <img src="/src/assets/images/hero mobile 1.png" alt="furniture1" />
                        <img src="/src/assets/images/hero mobile 2.png" alt="furniture2" />
                        <img src="/src/assets/images/hero 3.png" alt="furniture3" />
                        <img src="/src/assets/images/hero 4.png" alt="furniture4" />
                    </div>
                </div>
            </main> 

    {/* featured   >  bestselling products */}
    <section className="best-seller-products"> 
        <div className="best-seller-products-header">
            <h4>Featured Products</h4>
            <h3>BESTSELLER PRODUCTS</h3>
            <p>Problems trying to resolve the conflict between </p>
        </div>
        <div className="best-seller-wrapper">
            <div className="best-seller-items"> 
                {loading && <p>Loading products...</p>}
                {error && <p>Error loading products. Please try again.</p>}
                {products && products.map(product => (
                    <div key={product.id} className="product-card">
                        <div className="product-image">
                            <img src={product.thumbnail} alt={product.title} />
                        </div>
                        <div className="product-info">
                            <h5 className="product-category">
                                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                            </h5>
                            <p className="product-department">
                                {product.brand || 'Brand'}
                            </p>
                            <div className="product-price">
                                <span className="original-price">${product.price.toFixed(2)}</span>
                                <span className="sale-price">
                                    ${(product.price * (1 - product.discountPercentage/100)).toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Button
                className="load-more-btn"
                onClick={handleLoadMore}
                text="LOAD MORE PRODUCTS"
                variant="primary"
                size="large"
            />
        </div> 
    </section>

                {/* best services */}
            <section className="best-services"> 
                    <div className="best-services-header">
                        <h4>Featured Products</h4>
                        <h3>THE BEST SERVICES</h3>
                        <p>Problems trying to resolve the conflict between </p>
                    </div>
                <div className="best-services-wrapper">
                    <div className="best-services-item">
                        <img src="/src/assets/icons/book-reader.png" alt="service 1" />
                        <h3>Easy Wins</h3>
                        <p>Get your best looking smile now!</p>
                    </div>
                    <div className="best-services-item">
                        <img src="/src/assets/icons/book.png" alt="service 2" />
                        <h3>Concrete</h3>
                        <p>Defalcate is most focused in helping you discover your most beautiful smile</p>
                    </div>
                    <div className="best-services-item">
                        <img src="/src/assets/icons/signal.png" alt="service 3" />
                        <h3>Hack Growth</h3>
                        <p>Overcame any hurdle or any other problem.</p>
                    </div>
                </div>
            </section> 

            {/* featured posts  */}
            <section className="featured-posts-container">
                <div className="featured-posts-header">
                    <h6>Practice Advice</h6>
                    <h2 className='desktop'>Featured Posts</h2>
                    <h2 className='mobile'>Featured Products</h2>
                </div>
                <div className="featured-posts-wrapper">
                    <div className="featured-posts-card">
                        <img src="/src/assets/images/featured card 1.png" alt="post 1" />
                    </div>
                    <div className="featured-posts-card">
                        <img src="/src/assets/images/featured card 2.png" alt="post 2" />
                    </div>
                    <div className="featured-posts-card">
                        <img src="/src/assets/images/featured card 3.png" alt="post 3" />
                    </div>
                </div>
            </section>

            {/* testimonials */}
            <section className="testimonials-container">
                <div className="testimonials-wrapper">
                    <div className="testimonial-box fluid">
                        <h3>What they say about us</h3>
                        <div className="user-card">
                            <img src="/src/assets/images/user pic.png" alt="user-card" />
                            <div className='ratings'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStar />
                            </div>
                        </div>
                        <h6>
                            Slate helps you see how many more days you need to work to 
                            reach your financial goal.
                        </h6>
                        <a href="#">Regina Miles</a>
                        <h6>Designer</h6>
                    </div>
                    <div className="testimonial-box  card-grid">
                        <img src="/src/assets/images/unsplash 1.png" alt="unsplash" />
                        <img src="/src/assets/images/unsplash 2.png" alt="unsplash" />
                        <img src="/src/assets/images/unsplash 3.png" alt="unsplash" />
                        <img src="/src/assets/images/unsplash 4.png" alt="unsplash" />
                        <img src="/src/assets/images/unsplash 5.png" alt="unsplash" />
                        <img src="/src/assets/images/unsplash 6.png" alt="unsplash" />
                        <img src="/src/assets/images/unsplash 7.png" alt="unsplash" />
                        <img src="/src/assets/images/unsplash 8.png" alt="unsplash" />
                        <img src="/src/assets/images/unsplash 9.png" alt="unsplash" />  
                    </div>
                </div>
            </section>

            {/* cta */}
            <section className="cta-section">
                <div className="cta-container">
                    <div className="cta-wrapper">
                        <h6>Designing Better Experience</h6>
                        <h2>Problems trying to resolve the conflict between </h2>
                        <p>Problems trying to resolve the conflict between the two major realms of Classical physics: </p>
                        <h3>$16.48</h3>

                        <Button
                            text='ADD YOUR CALL TO ACTION'
                            variant='secondary'
                            size='large'
                            className='cta-button'
                            onClick={handleClick} 
                        />
                    </div>
                </div>
            </section>

            {/* footer section */}
            <footer className="footer-section">
                <div className="footer-container">
                    <section className="footer-topbar">
                        <div className="footer-topbar-container">
                            <div className="footer-topbar-wrapper">
                                <div className="footer-topbar-box1">
                                    <img src="/src/assets/icons/logo.svg" alt="logo" />
                                </div>
                                <div className="footer-topbar-box2">
                                    <img src="/src/assets/icons/facebook-filled.png" alt="facebook" />
                                    <img src="/src/assets/icons/instagram filled.png" alt="instagram" />
                                    <img src="/src/assets/icons/twitter filled .png" alt="twitter" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr />
                    <section className="footer-main">
                        <div className="footer-main-wrapper">
                            <div className="main-item item1">
                                <h5>Contact Info</h5>
                                <a href="">About Us</a>
                                <a href="">Carrier</a>
                                <a href="">We are hiring</a>
                                <a href="">Blog</a>
                            </div>
                            <div className="main-item item2">
                                <h5>Legal</h5>
                                <a href="">About Us</a>
                                <a href="">Carrier</a>
                                <a href="">We are hiring</a>
                                <a href="">Blog</a>
                            </div>
                            <div className="main-item item3">
                                <h5>Features</h5>
                                <a href="">Business Marketing</a>
                                <a href="">User Analytic</a>
                                <a href="">Live Chat</a>
                                <a href="">Unlimited Support</a>
                            </div>
                            <div className="main-item item4">
                                <h5>Resources</h5>
                                <a href="">IOS & Android</a>
                                <a href="">Watch a Demo</a>
                                <a href="">Customers</a>
                                <a href="">API</a>
                            </div>
                            <div className="main-item item5">
                                <h5>Get In Touch</h5>
                                <form action="" className="get-in-touch">
                                    <input type="email" placeholder="Your Email" />
                                    <Button
                                        text='Subscribe'
                                        variant='secondary'
                                        size='small'
                                        className='subscribe-btn'
                                        onClick={handleClick} 
                                    />
                                </form>
                                <div className="form-message">Lore imp sum dolor Amit</div>
                            </div>
                        </div>
                    </section>
                    <div className="footer-end">
                        <div className="footer-end-content">
                            <h6>Made With Love By Finland All Right Reserved </h6>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
}