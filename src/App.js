import React from 'react';
import './styles/css/bootstrap.min.css';
import './styles/css/plugins.css';
import './styles/css/style.css';
import './styles/css/custom.css';

function App() {
  return (
    <div className="wrapper" id="wrapper">
      {/* Header */}
      <header id="wn__header" className="header__area header__absolute sticky__header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-6 col-lg-2">
              <div className="logo">
                <a href="index.html">
                  <img src="images/logo/logo.png" alt="logo images" />
                </a>
              </div>
            </div>
            <div className="col-lg-8 d-none d-lg-block">
              <nav className="mainmenu__nav">
                <ul className="meninmenu d-flex justify-content-start">
                  <li className="drop with--one--item"><a href="index.html">Home</a></li>
                  <li className="drop with--one--item"><a href="#">Shop</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div className="col-md-6 col-sm-6 col-6 col-lg-2">
              <ul className="header__sidebar__right d-flex justify-content-end align-items-center">
                <li className="shop_search"><a className="search__active" href="#" /></li>
                <li className="wishlist"><a href="#" /></li>
                <li className="shopcart"><a className="cartbox_active" href="#"><span className="product_qun">3</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>		
      </header>
      {/* //Header */}
      {/* Start Search Popup */}
      <div className="brown--color box-search-content search_active block-bg close__top">
        <form id="search_mini_form" className="minisearch" action="#">
          <div className="field__search">
            <input type="text" placeholder="Search entire store here..." />
            <div className="action">
              <a href="#"><i className="zmdi zmdi-search" /></a>
            </div>
          </div>
        </form>
        <div className="close__wrap">
          <span>close</span>
        </div>
      </div>
      {/* End Search Popup */}
      {/* Start Slider area */}
      <div className="slider-area brown__nav slider--15 slide__activation slide__arrow01 owl-carousel owl-theme">
        {/* Start Single Slide */}
        <div className="slide animation__style10 bg-image--1 fullscreen align__center--left">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="slider__content">
                  <div className="contentbox">
                    <h2>Buy <span>your </span></h2>
                    <h2>favourite <span>Book </span></h2>
                    <h2>from <span>Here </span></h2>
                    <a className="shopbtn" href="#">shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Slide */}
      </div>
      {/* End Slider area */}
      {/* Start BEst Seller Area */}
      <section className="wn__product__area brown--color pt--80  pb--30">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__title text-center">
                <h2 className="title__be--2">New <span className="color--theme">Products</span></h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
              </div>
            </div>
          </div>
          {/* Start Single Tab Content */}
          <div className="furniture--4 border--round arrows_style owl-carousel owl-theme row mt--50">
            {/* Start Single Product */}
            <div className="product product__style--3">
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="product__thumb">
                  <a className="first__img" href="single-product.html"><img src="images/books/1.jpg" alt="product image" /></a>
                  <a className="second__img animation1" href="single-product.html"><img src="images/books/2.jpg" alt="product image" /></a>
                  <div className="hot__box">
                    <span className="hot-label">BEST SALLER</span>
                  </div>
                </div>
                <div className="product__content content--center">
                  <h4><a href="single-product.html">robin parrish</a></h4>
                  <ul className="prize d-flex">
                    <li>$35.00</li>
                    <li className="old_prize">$35.00</li>
                  </ul>
                  <div className="action">
                    <div className="actions_inner">
                      <ul className="add_to_links">
                        <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4" /></a></li>
                        <li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full" /></a></li>
                        <li><a className="compare" href="#"><i className="bi bi-heart-beat" /></a></li>
                        <li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__hover--content">
                    <ul className="rating d-flex">
                      <li className="on"><i className="fa fa-star-o" /></li>
                      <li className="on"><i className="fa fa-star-o" /></li>
                      <li className="on"><i className="fa fa-star-o" /></li>
                      <li><i className="fa fa-star-o" /></li>
                      <li><i className="fa fa-star-o" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Start Single Product */}
            {/* Start Single Product */}
            <div className="product product__style--3">
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="product__thumb">
                  <a className="first__img" href="single-product.html"><img src="images/books/3.jpg" alt="product image" /></a>
                  <a className="second__img animation1" href="single-product.html"><img src="images/books/4.jpg" alt="product image" /></a>
                  <div className="hot__box color--2">
                    <span className="hot-label">HOT</span>
                  </div>
                </div>
                <div className="product__content content--center">
                  <h4><a href="single-product.html">The Remainng</a></h4>
                  <ul className="prize d-flex">
                    <li>$35.00</li>
                    <li className="old_prize">$35.00</li>
                  </ul>
                  <div className="action">
                    <div className="actions_inner">
                      <ul className="add_to_links">
                        <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4" /></a></li>
                        <li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full" /></a></li>
                        <li><a className="compare" href="#"><i className="bi bi-heart-beat" /></a></li>
                        <li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__hover--content">
                    <ul className="rating d-flex">
                      <li className="on"><i className="fa fa-star-o" /></li>
                      <li className="on"><i className="fa fa-star-o" /></li>
                      <li className="on"><i className="fa fa-star-o" /></li>
                      <li><i className="fa fa-star-o" /></li>
                      <li><i className="fa fa-star-o" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Start Single Product */}
            {/* Start Single Product */}
            <div className="product product__style--3">
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="product__thumb">
                  <a className="first__img" href="single-product.html"><img src="images/books/5.jpg" alt="product image" /></a>
                  <a className="second__img animation1" href="single-product.html"><img src="images/books/6.jpg" alt="product image" /></a>
                  <div className="hot__box">
                    <span className="hot-label">BEST SALLER</span>
                  </div>
                </div>
                <div className="product__content content--center">
                  <h4><a href="single-product.html">Bowen Greenwood</a></h4>
                  <ul className="prize d-flex">
                    <li>$40.00</li>
                    <li className="old_prize">$35.00</li>
                  </ul>
                  <div className="action">
                    <div className="actions_inner">
                      <ul className="add_to_links">
                        <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4" /></a></li>
                        <li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full" /></a></li>
                        <li><a className="compare" href="#"><i className="bi bi-heart-beat" /></a></li>
                        <li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__hover--content">
                    <ul className="rating d-flex">
                      <li className="on"><i className="fa fa-star-o" /></li>
                      <li className="on"><i className="fa fa-star-o" /></li>
                      <li className="on"><i className="fa fa-star-o" /></li>
                      <li><i className="fa fa-star-o" /></li>
                      <li><i className="fa fa-star-o" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Start Single Product */}
            {/* Start Single Product */}
            <div className="product product__style--3">
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="product__thumb">
                  <a className="first__img" href="single-product.html"><img src="images/books/7.jpg" alt="product image" /></a>
                  <a className="second__img animation1" href="single-product.html"><img src="images/books/8.jpg" alt="product image" /></a>
                  <div className="hot__box">
                    <span className="hot-label">HOT</span>
                  </div>
                </div>
                <div className="product__content content--center">
                  <h4><a href="single-product.html">Lando</a></h4>
                  <ul className="prize d-flex">
                    <li>$35.00</li>
                    <li className="old_prize">$50.00</li>
                  </ul>
                  <div className="action">
                    <div className="actions_inner">
                      <ul className="add_to_links">
                        <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4" /></a></li>
                        <li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full" /></a></li>
                        <li><a className="compare" href="#"><i className="bi bi-heart-beat" /></a></li>
                        <li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__hover--content">
                    <ul className="rating d-flex">
                      <li className="on"><i className="fa fa-star-o" /></li>
                      <li className="on"><i className="fa fa-star-o" /></li>
                      <li className="on"><i className="fa fa-star-o" /></li>
                      <li><i className="fa fa-star-o" /></li>
                      <li><i className="fa fa-star-o" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Start Single Product */}
            {/* Start Single Product */}
            <div className="product product__style--3">
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="product__thumb">
                  <a className="first__img" href="single-product.html"><img src="images/books/9.jpg" alt="product image" /></a>
                  <a className="second__img animation1" href="single-product.html"><img src="images/books/10.jpg" alt="product image" /></a>
                  <div className="hot__box">
                    <span className="hot-label">HOT</span>
                  </div>
                </div>
                <div className="product__content content--center">
                  <h4><a href="single-product.html">Doctor Wldo</a></h4>
                  <ul className="prize d-flex">
                    <li>$35.00</li>
                    <li className="old_prize">$35.00</li>
                  </ul>
                  <div className="action">
                    <div className="actions_inner">
                      <ul className="add_to_links">
                        <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4" /></a></li>
                        <li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full" /></a></li>
                        <li><a className="compare" href="#"><i className="bi bi-heart-beat" /></a></li>
                        <li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__hover--content">
                    <ul className="rating d-flex">
                      <li className="on"><i className="fa fa-star-o" /></li>
                      <li className="on"><i className="fa fa-star-o" /></li>
                      <li className="on"><i className="fa fa-star-o" /></li>
                      <li><i className="fa fa-star-o" /></li>
                      <li><i className="fa fa-star-o" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Start Single Product */}
            {/* Start Single Product */}
            <div className="product product__style--3">
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="product__thumb">
                  <a className="first__img" href="single-product.html"><img src="images/books/11.jpg" alt="product image" /></a>
                  <a className="second__img animation1" href="single-product.html"><img src="images/books/2.jpg" alt="product image" /></a>
                  <div className="hot__box">
                    <span className="hot-label">BEST SALER</span>
                  </div>
                </div>
                <div className="product__content content--center content--center">
                  <h4><a href="single-product.html">Ghost</a></h4>
                  <ul className="prize d-flex">
                    <li>$50.00</li>
                    <li className="old_prize">$35.00</li>
                  </ul>
                  <div className="action">
                    <div className="actions_inner">
                      <ul className="add_to_links">
                        <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4" /></a></li>
                        <li><a className="wishlist" href="wishlist.html"><i className="bi bi-shopping-cart-full" /></a></li>
                        <li><a className="compare" href="#"><i className="bi bi-heart-beat" /></a></li>
                        <li><a data-toggle="modal" title="Quick View" className="quickview modal-view detail-link" href="#productmodal"><i className="bi bi-search" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__hover--content">
                    <ul className="rating d-flex">
                      <li className="on"><i className="fa fa-star-o" /></li>
                      <li className="on"><i className="fa fa-star-o" /></li>
                      <li className="on"><i className="fa fa-star-o" /></li>
                      <li><i className="fa fa-star-o" /></li>
                      <li><i className="fa fa-star-o" /></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Start Single Product */}
            </div>
          </div>
          {/* End Single Tab Content */}
        </div>
      </section>
      {/* Start BEst Seller Area */}
      {/* Best Sale Area Area */}
      {/* Footer Area */}
      <footer id="wn__footer" className="footer__area bg__cat--8 brown--color">
        <div className="copyright__wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="copyright">
                  <div className="copy__right__inner text-left">
                    <p>Copyright <i className="fa fa-copyright" /> <a href="https://freethemescloud.com/">Free themes Cloud.</a> All Rights Reserved</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="payment text-right">
                  <img src="images/icons/payment.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* //Footer Area */}
    </div>
  );
}

export default App;
