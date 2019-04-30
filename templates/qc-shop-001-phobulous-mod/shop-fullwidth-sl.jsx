import React, { Component } from 'react'

export default class ShopFullwidthSl extends Component {
  render() {
    return (
      <div>
        {/* Page Preloading */}
        {/* Modernizr */}
        {/* Body */}
        {/* Adding/Removing class ".page-preloading" is enabling/disabling background smooth page transition effect and spinner. Make sure you also added/removed link to page-preloading.js script in the <head> of the document. */}
        {/* Page Pre-Loader */}
        <div className="page-preloader">
          <div className="preloader">
            <img src="img/preloader.gif" alt="Preloader" />
          </div>
        </div>{/* .page-preloader */}
        {/* Page Wrapper */}
        <div className="page-wrapper">
          {/* Navbar */}
          {/* Remove ".navbar-sticky" class to make navigation bar scrollable with the page. */}
          <header className="navbar navbar-sticky">
            {/* Site Logo */}
            <a href="index.html" className="site-logo visible-desktop">
              <span>[</span> M
              <span className="text-gray">/</span>
              STORE <span>]</span>
            </a>{/* site-logo.visible-desktop */}
            <a href="index.html" className="site-logo visible-mobile">
              <span>[</span> M <span>]</span>
            </a>{/* site-logo.visible-mobile */}
            {/* Language Switcher */}
            <div className="lang-switcher">
              <div className="lang-toggle">
                <img src="img/flags/GB.png" alt="English" />
                <i className="material-icons arrow_drop_down" />
                <ul className="lang-dropdown">
                  <li><a href="#"><img src="img/flags/FR.png" alt="French" />FR</a></li>
                  <li><a href="#"><img src="img/flags/DE.png" alt="German" />DE</a></li>
                  <li><a href="#"><img src="img/flags/IT.png" alt="Italian" />IT</a></li>
                </ul>
              </div>
            </div>{/* .lang-switcher */}
            {/* Toolbar */}
            <div className="toolbar">
              <div className="inner">
                <a href="#menu" className="toolbar-toggle"><i className="material-icons menu" /></a>
                <a href="#account" className="toolbar-toggle"><i className="material-icons person" /></a>
                <a href="#cart" className="toolbar-toggle">
                  <i>
                    <span className="material-icons shopping_basket" />
                    <span className="count">2</span>
                  </i>
                </a>
              </div>
            </div>{/* .toolbar */}
            {/* Toolbar Dropdown */}
            <div className="toolbar-dropdown">
              {/* Menu */}
              <div className="toolbar-section" id="menu">
                <div className="inner">
                  <ul className="main-navigation space-bottom">
                    <li className="menu-item-has-children">
                      <a href="#">Home</a>
                      <ul className="sub-menu">
                        <li><a href="index.html">Home Version 1</a></li>
                        <li><a href="home-v2.html">Home Version 2</a></li>
                        <li><a href="home-v3.html">Home Version 3</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children current-menu-item">
                      <a href="#">Shop</a>
                      <ul className="sub-menu">
                        <li className="current-menu-item"><a href="shop-fullwidth-sl.html">Full Width Sidebar Left</a></li>
                        <li><a href="shop-fullwidth-sr.html">Full Width Sidebar Right</a></li>
                        <li><a href="shop-fullwidth-ft.html">Full Width Filters Top</a></li>
                        <li><a href="shop-boxed-sl.html">Boxed Sidebar Left</a></li>
                        <li><a href="shop-boxed-sr.html">Boxed Sidebar Right</a></li>
                        <li><a href="shop-boxed-ft.html">Boxed Filters Top</a></li>
                        <li><a href="shop-single.html">Single Product</a></li>
                      </ul>
                    </li>
                    <li><a href="blog.html">Blog</a></li>
                    <li className="menu-item-has-children">
                      <a href="#">Gallery</a>
                      <ul className="sub-menu">
                        <li><a href="gallery-fullwidth-with-gap.html">Full Width With Gap</a></li>
                        <li><a href="gallery-fullwidth-no-gap.html">Full Width No Gap</a></li>
                        <li><a href="gallery-boxed-with-gap.html">Boxed With Gap</a></li>
                        <li><a href="gallery-boxed-no-gap.html">Boxed No Gap</a></li>
                      </ul>
                    </li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contacts.html">Contacts</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="elements.html">Elements</a></li>
                  </ul>{/* .main-navigation */}
                  <ul className="list-icon text-sm">
                    <li>
                      <i className="material-icons location_on" />
                      45 Park Avenue, Apt. 303<br />New York, NY 10016, USA
                    </li>
                    <li>
                      <i className="material-icons phone" />
                      001 (917) 555-4836
                    </li>
                    <li>
                      <i className="material-icons email" />
                      <a href="mailto:info@m-store.com">info@m-store.com</a>
                    </li>
                    <li>
                      <i className="socicon-skype" />
                      <a href="#">skype_id</a>
                    </li>
                  </ul>{/* .list-icon */}
                  <span className="text-sm display-inline" style={{marginBottom: 6}}>Social accounts: &nbsp;&nbsp;</span>
                  <div className="social-bar display-inline">
                    <a href="#" className="sb-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
                      <i className="socicon-facebook" />
                    </a>
                    <a href="#" className="sb-google-plus" data-toggle="tooltip" data-placement="top" title data-original-title="Google+">
                      <i className="socicon-googleplus" />
                    </a>
                    <a href="#" className="sb-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
                      <i className="socicon-twitter" />
                    </a>
                    <a href="#" className="sb-instagram" data-toggle="tooltip" data-placement="top" title data-original-title="Instagram">
                      <i className="socicon-instagram" />
                    </a>
                  </div>
                </div>{/* .inner */}
              </div>{/* .toolbar-section#menu */}
              {/* Account (Login) */}
              <div className="toolbar-section" id="account">
                <h3 className="toolbar-title space-bottom">You are not logged in.</h3>
                <div className="inner">
                  <form method="post" className="login-form">
                    <input type="text" className="form-control" placeholder="Username" required />
                    <input type="password" className="form-control" placeholder="Password" required />
                    <div className="form-footer">
                      <div className="rememberme">
                        <label className="checkbox">
                          <input type="checkbox" defaultChecked /> Remember me
                        </label>
                      </div>
                      <div className="form-submit">
                        <button type="submit" className="btn btn-primary btn-block waves-effect waves-light">Login</button>
                      </div>
                    </div>
                  </form>{/* .login-form */}
                  <p className="text-sm space-top">Don’t have an account? <a href="#signup" className="toggle-section">Signup here</a> or with social account:</p>
                  <a href="#" className="social-signup-btn ssb-facebook">
                    <i className="socicon-facebook" />
                    <span>Signup with Facebook</span>
                  </a>
                  <a href="#" className="social-signup-btn ssb-google">
                    <i className="socicon-googleplus" />
                    <span>Signup with Google+</span>
                  </a>
                  <a href="#" className="social-signup-btn ssb-twitter">
                    <i className="socicon-twitter" />
                    <span>Signup with Twitter</span>
                  </a>
                </div>{/* .inner */}
              </div>{/* .toolbar-section#account */}
              {/* Account (Sign Up) */}
              <div className="toolbar-section" id="signup">
                <h3 className="toolbar-title space-bottom">Sign up, it's free</h3>
                <div className="inner">
                  <form method="post" className="login-form">
                    <input type="email" className="form-control" placeholder="E-mail" required />
                    <input type="password" className="form-control" placeholder="Password" required />
                    <input type="password" className="form-control" placeholder="Repeat password" required />
                    <div className="form-footer">
                      <div className="rememberme" />
                      <div className="form-submit">
                        <button type="submit" className="btn btn-primary btn-block waves-effect waves-light">Sign up</button>
                      </div>
                    </div>
                  </form>{/* .login-form */}
                  <p className="text-sm space-top">Already have an account? Than <a href="#account" className="toggle-section">Login here</a></p>
                </div>{/* .inner */}
              </div>{/* .toolbar-section#account */}
              {/* Cart */}
              <div className="toolbar-section" id="cart">
                <div className="shopping-cart">
                  {/* Item */}
                  <div className="item">
                    <a href="shop-single.html" className="item-thumb">
                      <img src="img/cart/item01.jpg" alt="Item" />
                    </a>
                    <div className="item-details">
                      <h3 className="item-title"><a href="shop-single.html">Concrete Lamp</a></h3>
                      <h4 className="item-price">$85.90</h4>
                      <div className="count-input">
                        <a className="incr-btn" data-action="decrease" href="#">–</a>
                        <input className="quantity" type="text" defaultValue={1} />
                        <a className="incr-btn" data-action="increase" href="#">+</a>
                      </div>
                    </div>
                    <a href="#" className="item-remove" data-toggle="tooltip" data-placement="top" title="Remove">
                      <i className="material-icons remove_shopping_cart" />
                    </a>
                  </div>{/* .item */}
                  {/* Item */}
                  <div className="item">
                    <a href="shop-single.html" className="item-thumb">
                      <img src="img/cart/item02.jpg" alt="Item" />
                    </a>
                    <div className="item-details">
                      <h3 className="item-title"><a href="shop-single.html">Resin Storage Box</a></h3>
                      <h4 className="item-price">$38.00</h4>
                      <div className="count-input">
                        <a className="incr-btn" data-action="decrease" href="#">–</a>
                        <input className="quantity" type="text" defaultValue={2} />
                        <a className="incr-btn" data-action="increase" href="#">+</a>
                      </div>
                    </div>
                    <a href="#" className="item-remove" data-toggle="tooltip" data-placement="top" title="Remove">
                      <i className="material-icons remove_shopping_cart" />
                    </a>
                  </div>{/* .item */}
                  {/* Subtotal */}
                  <div className="cart-subtotal space-bottom">
                    <div className="column">
                      <h3 className="toolbar-title">Subtotal:</h3>
                    </div>
                    <div className="column">
                      <h3 className="amount">$161.90</h3>
                    </div>
                  </div>{/* .subtotal */}
                  {/* Buttons */}
                  <div className="text-right">
                    <a href="#" className="btn btn-default btn-ghost close-dropdown">Continue Shopping</a>
                    <a href="#checkout" className="btn btn-primary waves-effect waves-light toggle-section">Proceed to Checkout</a>
                  </div>
                </div>{/* .shopping-cart */}
              </div>{/* .toolbar-section#cart */}
              {/* Checkout */}
              <div className="toolbar-section" id="checkout">
                <form method="post" className="checkout-form container">
                  <div className="cart-subtotal space-bottom">
                    <div className="column">
                      <h3 className="toolbar-title">Checkout</h3>
                    </div>
                    <div className="column">
                      <h3 className="amount"><small className="hidden-xs">3 items&nbsp;&nbsp;&nbsp;</small>$161.90</h3>
                    </div>
                  </div>{/* .subtotal */}
                  <div className="row">
                    <div className="col-sm-6">
                      <input type="text" className="form-control" name="co_f_name" placeholder="First name" required />
                      <input type="email" className="form-control" name="co_email" placeholder="Email" required />
                      <input type="text" className="form-control" name="co_address1" placeholder="Address 1" required />
                    </div>
                    <div className="col-sm-6">
                      <input type="text" className="form-control" name="co_l_name" placeholder="Last name" required />
                      <input type="tel" className="form-control" name="co_phone" placeholder="Phone" required />
                      <input type="text" className="form-control" name="co_address2" placeholder="Address 2" />
                    </div>
                  </div>{/* .row */}
                  <input type="text" className="form-control" name="co_company" placeholder="Company" />
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-element form-select">
                        <select className="form-control" name="co_country">
                          <option value>Country</option>
                          <option value="australia">Australia</option>
                          <option value="gb">Great Britain</option>
                          <option value="poland">Poland</option>
                          <option value="switzerland">Switzerland</option>
                          <option value="usa">USA</option>
                        </select>
                      </div>
                      <div className="form-element form-select">
                        <select className="form-control" name="co_city">
                          <option value>City</option>
                          <option value="bern">Bern</option>
                          <option value="london">London</option>
                          <option value="ny">New York</option>
                          <option value="warsaw">Warsaw</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-element form-select">
                        <select className="form-control" name="co_state">
                          <option value>State</option>
                          <option value={1}>State 1</option>
                          <option value={2}>State 2</option>
                          <option value={3}>State 3</option>
                          <option value={4}>State 4</option>
                          <option value={5}>State 5</option>
                        </select>
                      </div>
                      <input type="text" className="form-control" name="co_zip" placeholder="ZIP code" required />
                    </div>
                  </div>{/* .row */}
                  <div className="form-group">
                    <label className="radio radio-inline">
                      <input type="radio" name="co_shipping" defaultChecked /> Ship to this address
                    </label>
                    <label className="radio radio-inline">
                      <input type="radio" name="co_shipping" /> Ship to different address
                    </label>
                  </div>{/* .form-group */}
                  <div className="text-right">
                    <a href="#cart" className="btn btn-default btn-ghost icon-left toggle-section">
                      <i className="material-icons arrow_back" />
                      Back To Cart
                    </a>
                    <button type="submit" className="btn btn-primary waves-effect waves-light">Checkout</button>
                  </div>
                </form>{/* .checkout-form.container */}
              </div>{/* .toolbar-section#checkout */}
            </div>{/* .toolbar-dropdown */}
          </header>{/* .navbar.navbar-sticky */}
          {/* Shop Catalog */}
          <section className="container-fluid padding-top-3x padding-bottom-3x">
            {/* Sidebar Toggle / visible only on mobile */}
            <div className="sidebar-toggle">
              <i className="material-icons filter_list" />
            </div>
            <h1 className="space-top-half">Shop Full Width Sidebar Left</h1>
            <div className="row padding-top">
              {/* Sidebar (Filters) */}
              <div className="col-lg-2 col-md-3 col-sm-4">
                <aside className="sidebar">
                  <span className="sidebar-close"><i className="material-icons close" /></span>
                  <div className="widgets">
                    {/* Categories Widget */}
                    <div className="widget widget-categories">
                      <h3 className="widget-title">Categories</h3>
                      <ul>
                        <li className="active"><a href="#">All 135</a></li>
                        <li><a href="#">Furniture 42</a></li>
                        <li><a href="#">Accessories 56</a></li>
                        <li><a href="#">Lightning 28</a></li>
                        <li><a href="#">Clocks 10</a></li>
                      </ul>
                    </div>{/* .widget.widget-categories */}
                    {/* Sorting Widget */}
                    <div className="widget widget-sorting">
                      <h3 className="widget-title">Sort By</h3>
                      <ul>
                        <li className="active"><a href="#">
                            <i className="material-icons sort" />
                            Default
                          </a></li>
                        <li><a href="#">
                            <i className="material-icons favorite_border" />
                            Popularity
                          </a></li>
                        <li><a href="#">
                            <i className="material-icons vertical_align_top" />
                            Last entries
                          </a></li>
                        <li><a href="#">
                            <i className="material-icons star_border" />
                            Avarage rating
                          </a></li>
                        <li><a href="#">
                            <i className="material-icons sort_by_alpha" />
                            Alphabetically
                          </a></li>
                      </ul>
                    </div>{/* .widget.widget-sorting */}
                    {/* Price Range Widget */}
                    {/* Please note: Only one Range Slider allowed on the page! */}
                    <div className="widget widget-catesgories">
                      <h3 className="widget-title">Price Range</h3>
                      <form method="post" className="price-range-slider" data-start-min={250} data-start-max={650} data-min={0} data-max={1000} data-step={1}>
                        <div className="ui-range-slider" />
                        <footer className="ui-range-slider-footer">
                          <div className="column">
                            <button type="submit" className="btn btn-ghost btn-sm btn-default">Filter</button>
                          </div>
                          <div className="column">
                            <div className="ui-range-values">
                              <div className="ui-range-value-min">
                                $<span />
                                <input type="hidden" />
                              </div> -
                              <div className="ui-range-value-max">
                                $<span />
                                <input type="hidden" />
                              </div>
                            </div>
                          </div>
                        </footer>
                      </form>{/* .price-range-slider */}
                    </div>{/* .widget.widget-categories */}
                    {/* Price Filter Widget */}
                    <div className="widget widget-price">
                      <h3 className="widget-title">Price Filter</h3>
                      <ul>
                        <li className="active"><a href="#">$0 - $100</a></li>
                        <li><a href="#">$100 - $200</a></li>
                        <li><a href="#">$200 - $500</a></li>
                        <li><a href="#">$500 - $1000</a></li>
                        <li><a href="#">$1000 - $10000</a></li>
                      </ul>
                    </div>{/* .widget.widget-price */}
                    {/* Color Filter Widget */}
                    <div className="widget widget-color">
                      <h3 className="widget-title">Color Filter</h3>
                      <ul>
                        <li><a href="#">
                            <span className="color" style={{backgroundColor: '#93c4ef'}} />
                            Blue
                          </a></li>
                        <li><a href="#">
                            <span className="color" style={{backgroundColor: '#a7c04d'}} />
                            Green
                          </a></li>
                        <li><a href="#">
                            <span className="color" style={{backgroundColor: '#ef0568'}} />
                            Red
                          </a></li>
                        <li><a href="#">
                            <span className="color" style={{backgroundColor: '#ffce2b'}} />
                            Yellow
                          </a></li>
                      </ul>
                    </div>{/* .widget.widget-color */}
                    {/* Tags Widget */}
                    <div className="widget widget-tags">
                      <h3 className="widget-title">Popular Tags</h3>
                      <a href="#">Interior</a>
                      <a href="#">Electro</a>
                      <a href="#">Bags</a>
                      <a href="#">Cuttlery</a>
                      <a href="#">Downloadable</a>
                      <a href="#">Digital goods</a>
                      <a href="#">HiFi</a>
                    </div>{/* .widget.widget-price */}
                  </div>{/* .widgets */}
                </aside>{/* .sidebar */}
              </div>{/* .col-md-3.col-sm-4 */}
              {/* Products Grid */}
              <div className="col-lg-10 col-md-9 col-sm-8">
                {/* Shop Bar */}
                <div className="shop-bar">
                  <div className="column">
                    <p className="text-sm space-bottom-none">
                      <span className="text-gray">Showing</span> 1-16 items
                    </p>
                  </div>{/* .column */}
                  <div className="column">
                    <form method="get" className="search-box">
                      <input type="text" className="form-control" placeholder="Search shop" />
                      <button type="submit">
                        <i className="material-icons search" />
                      </button>
                    </form>{/* form.search-box */}
                  </div>{/* .column */}
                </div>{/* .shop-bar */}
                <div className="row">
                  {/* Item */}
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="shop-label text-danger">Sale</span>
                        <a href="shop-single.html" className="item-link" />
                        <img src="img/shop/th01.jpg" alt="Shop item" />
                        <div className="shop-item-tools">
                          <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                            <i className="material-icons favorite_border" />
                          </a>
                          <a href="#" className="add-to-cart">
                            <em>Add to Cart</em>
                            <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                              <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="shop-item-details">
                        <h3 className="shop-item-title"><a href="shop-single.html">Storage Box</a></h3>
                        <span className="shop-item-price">
                          <span className="old-price">$49.00</span>
                          $38.00
                        </span>
                      </div>
                    </div>{/* .shop-item */}
                  </div>{/* .col-md-4.col-sm-6 */}
                  {/* Item */}
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <a href="shop-single.html" className="item-link" />
                        <img src="img/shop/th02.jpg" alt="Shop item" />
                        <div className="shop-item-tools">
                          <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                            <i className="material-icons favorite_border" />
                          </a>
                          <a href="#" className="add-to-cart">
                            <em>Add to Cart</em>
                            <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                              <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="shop-item-details">
                        <h3 className="shop-item-title"><a href="shop-single.html">Shoulder Bag</a></h3>
                        <span className="shop-item-price">
                          $125.00
                        </span>
                      </div>
                    </div>{/* .shop-item */}
                  </div>{/* .col-md-4.col-sm-6 */}
                  {/* Item */}
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <a href="shop-single.html" className="item-link" />
                        <img src="img/shop/th03.jpg" alt="Shop item" />
                        <div className="shop-item-tools">
                          <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                            <i className="material-icons favorite_border" />
                          </a>
                          <a href="#" className="add-to-cart">
                            <em>Add to Cart</em>
                            <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                              <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="shop-item-details">
                        <h3 className="shop-item-title"><a href="shop-single.html">Glass Vase</a></h3>
                        <span className="shop-item-price">
                          $62.50
                        </span>
                      </div>
                    </div>{/* .shop-item */}
                  </div>{/* .col-md-4.col-sm-6 */}
                  {/* Item */}
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="item-rating text-warning">
                          <i className="material-icons star" />
                          <i className="material-icons star" />
                          <i className="material-icons star" />
                          <i className="material-icons star_half" />
                          <i className="material-icons star_border" />
                        </span>
                        <a href="shop-single.html" className="item-link" />
                        <img src="img/shop/th04.jpg" alt="Shop item" />
                        <div className="shop-item-tools">
                          <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                            <i className="material-icons favorite_border" />
                          </a>
                          <a href="#" className="add-to-cart">
                            <em>Add to Cart</em>
                            <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                              <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="shop-item-details">
                        <h3 className="shop-item-title"><a href="shop-single.html">Alarm Clock</a></h3>
                        <span className="shop-item-price">
                          $178.00
                        </span>
                      </div>
                    </div>{/* .shop-item */}
                  </div>{/* .col-md-4.col-sm-6 */}
                  {/* Item */}
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <a href="shop-single.html" className="item-link" />
                        <img src="img/shop/th05.jpg" alt="Shop item" />
                        <div className="shop-item-tools">
                          <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                            <i className="material-icons favorite_border" />
                          </a>
                          <a href="#" className="add-to-cart">
                            <em>Add to Cart</em>
                            <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                              <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="shop-item-details">
                        <h3 className="shop-item-title"><a href="shop-single.html">Wall Clock</a></h3>
                        <span className="shop-item-price">
                          $69.00
                        </span>
                      </div>
                    </div>{/* .shop-item */}
                  </div>{/* .col-md-4.col-sm-6 */}
                  {/* Item */}
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <a href="shop-single.html" className="item-link" />
                        <img src="img/shop/th06.jpg" alt="Shop item" />
                        <div className="shop-item-tools">
                          <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                            <i className="material-icons favorite_border" />
                          </a>
                          <a href="#" className="add-to-cart">
                            <em>Add to Cart</em>
                            <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                              <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="shop-item-details">
                        <h3 className="shop-item-title"><a href="shop-single.html">LED Lighting</a></h3>
                        <span className="shop-item-price">
                          $130.00
                        </span>
                      </div>
                    </div>{/* .shop-item */}
                  </div>{/* .col-md-4.col-sm-6 */}
                  {/* Item */}
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="shop-label text-warning">Popular</span>
                        <a href="shop-single.html" className="item-link" />
                        <img src="img/shop/th07.jpg" alt="Shop item" />
                        <div className="shop-item-tools">
                          <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                            <i className="material-icons favorite_border" />
                          </a>
                          <a href="#" className="add-to-cart">
                            <em>Add to Cart</em>
                            <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                              <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="shop-item-details">
                        <h3 className="shop-item-title"><a href="shop-single.html">Sunglasses</a></h3>
                        <span className="shop-item-price">
                          $99.00
                        </span>
                      </div>
                    </div>{/* .shop-item */}
                  </div>{/* .col-md-4.col-sm-6 */}
                  {/* Item */}
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <a href="shop-single.html" className="item-link" />
                        <img src="img/shop/th08.jpg" alt="Shop item" />
                        <div className="shop-item-tools">
                          <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                            <i className="material-icons favorite_border" />
                          </a>
                          <a href="#" className="add-to-cart">
                            <em>Add to Cart</em>
                            <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                              <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="shop-item-details">
                        <h3 className="shop-item-title"><a href="shop-single.html">Hook Basket</a></h3>
                        <span className="shop-item-price">
                          $112.35
                        </span>
                      </div>
                    </div>{/* .shop-item */}
                  </div>{/* .col-md-4.col-sm-6 */}
                  {/* Item */}
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="item-rating text-warning">
                          <i className="material-icons star" />
                          <i className="material-icons star" />
                          <i className="material-icons star" />
                          <i className="material-icons star" />
                          <i className="material-icons star_border" />
                        </span>
                        <a href="shop-single.html" className="item-link" />
                        <img src="img/shop/th09.jpg" alt="Shop item" />
                        <div className="shop-item-tools">
                          <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                            <i className="material-icons favorite_border" />
                          </a>
                          <a href="#" className="add-to-cart">
                            <em>Add to Cart</em>
                            <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                              <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="shop-item-details">
                        <h3 className="shop-item-title"><a href="shop-single.html">Leather Case</a></h3>
                        <span className="shop-item-price">
                          $118.00
                        </span>
                      </div>
                    </div>{/* .shop-item */}
                  </div>{/* .col-md-4.col-sm-6 */}
                  {/* Item */}
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <a href="shop-single.html" className="item-link" />
                        <img src="img/shop/th10.jpg" alt="Shop item" />
                        <div className="shop-item-tools">
                          <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                            <i className="material-icons favorite_border" />
                          </a>
                          <a href="#" className="add-to-cart">
                            <em>Add to Cart</em>
                            <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                              <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="shop-item-details">
                        <h3 className="shop-item-title"><a href="shop-single.html">Concrete Lamp</a></h3>
                        <span className="shop-item-price">
                          $85.90
                        </span>
                      </div>
                    </div>{/* .shop-item */}
                  </div>{/* .col-md-4.col-sm-6 */}
                  {/* Item */}
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <a href="shop-single.html" className="item-link" />
                        <img src="img/shop/th11.jpg" alt="Shop item" />
                        <div className="shop-item-tools">
                          <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                            <i className="material-icons favorite_border" />
                          </a>
                          <a href="#" className="add-to-cart">
                            <em>Add to Cart</em>
                            <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                              <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="shop-item-details">
                        <h3 className="shop-item-title"><a href="shop-single.html">Stylish Chair</a></h3>
                        <span className="shop-item-price">
                          $417.00
                        </span>
                      </div>
                    </div>{/* .shop-item */}
                  </div>{/* .col-md-4.col-sm-6 */}
                  {/* Item */}
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <a href="shop-single.html" className="item-link" />
                        <img src="img/shop/th15.jpg" alt="Shop item" />
                        <div className="shop-item-tools">
                          <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                            <i className="material-icons favorite_border" />
                          </a>
                          <a href="#" className="add-to-cart">
                            <em>Add to Cart</em>
                            <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                              <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="shop-item-details">
                        <h3 className="shop-item-title"><a href="shop-single.html">Tissue Holder</a></h3>
                        <span className="shop-item-price">
                          $76.40
                        </span>
                      </div>
                    </div>{/* .shop-item */}
                  </div>{/* .col-md-4.col-sm-6 */}
                  {/* Item */}
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <a href="shop-single.html" className="item-link" />
                        <img src="img/shop/th12.jpg" alt="Shop item" />
                        <div className="shop-item-tools">
                          <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                            <i className="material-icons favorite_border" />
                          </a>
                          <a href="#" className="add-to-cart">
                            <em>Add to Cart</em>
                            <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                              <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="shop-item-details">
                        <h3 className="shop-item-title"><a href="shop-single.html">Desktop Light</a></h3>
                        <span className="shop-item-price">
                          $245.00
                        </span>
                      </div>
                    </div>{/* .shop-item */}
                  </div>{/* .col-md-4.col-sm-6 */}
                  {/* Item */}
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <a href="shop-single.html" className="item-link" />
                        <img src="img/shop/th13.jpg" alt="Shop item" />
                        <div className="shop-item-tools">
                          <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                            <i className="material-icons favorite_border" />
                          </a>
                          <a href="#" className="add-to-cart">
                            <em>Add to Cart</em>
                            <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                              <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="shop-item-details">
                        <h3 className="shop-item-title"><a href="shop-single.html">Storage Jar</a></h3>
                        <span className="shop-item-price">
                          $19.80
                        </span>
                      </div>
                    </div>{/* .shop-item */}
                  </div>{/* .col-md-4.col-sm-6 */}
                  {/* Item */}
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="item-rating text-warning">
                          <i className="material-icons star" />
                          <i className="material-icons star" />
                          <i className="material-icons star" />
                          <i className="material-icons star_half" />
                          <i className="material-icons star_border" />
                        </span>
                        <a href="shop-single.html" className="item-link" />
                        <img src="img/shop/th14.jpg" alt="Shop item" />
                        <div className="shop-item-tools">
                          <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                            <i className="material-icons favorite_border" />
                          </a>
                          <a href="#" className="add-to-cart">
                            <em>Add to Cart</em>
                            <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                              <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="shop-item-details">
                        <h3 className="shop-item-title"><a href="shop-single.html">Ceramic Watch</a></h3>
                        <span className="shop-item-price">
                          $299.00
                        </span>
                      </div>
                    </div>{/* .shop-item */}
                  </div>{/* .col-md-4.col-sm-6 */}
                  {/* Item */}
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <a href="shop-single.html" className="item-link" />
                        <img src="img/shop/th16.jpg" alt="Shop item" />
                        <div className="shop-item-tools">
                          <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                            <i className="material-icons favorite_border" />
                          </a>
                          <a href="#" className="add-to-cart">
                            <em>Add to Cart</em>
                            <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                              <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="shop-item-details">
                        <h3 className="shop-item-title"><a href="shop-single.html">Pendant Lamp</a></h3>
                        <span className="shop-item-price">
                          $27.00
                        </span>
                      </div>
                    </div>{/* .shop-item */}
                  </div>{/* .col-md-4.col-sm-6 */}
                </div>{/* .row */}
                <hr />
                {/* Pagination */}
                <div className="pagination padding-bottom">
                  <div className="page-numbers">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <span className="active">3</span>
                    <a href="#">4</a>
                    <span>...</span>
                    <a href="#">10</a>
                  </div>
                  <div className="pager">
                    <a href="#">Prev</a>
                    <span>|</span>
                    <a href="#">Next</a>
                  </div>
                </div>
              </div>{/* .col-md-9 col-sm-8 */}
            </div>{/* .row */}
          </section>{/* .container */}
          {/* Footer */}
          <footer className="footer">
            <div className="column">
              <p className="text-sm">Need support? Call <span className="text-primary">001 (917) 555-4836</span></p>
              <div className="social-bar text-center space-bottom">
                <a href="#" className="sb-skype" data-toggle="tooltip" data-placement="top" title="Skype">
                  <i className="socicon-skype" />
                </a>
                <a href="#" className="sb-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
                  <i className="socicon-facebook" />
                </a>
                <a href="#" className="sb-google-plus" data-toggle="tooltip" data-placement="top" title data-original-title="Google+">
                  <i className="socicon-googleplus" />
                </a>
                <a href="#" className="sb-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
                  <i className="socicon-twitter" />
                </a>
                <a href="#" className="sb-instagram" data-toggle="tooltip" data-placement="top" title data-original-title="Instagram">
                  <i className="socicon-instagram" />
                </a>
              </div>{/* .social-bar */}
              <p className="copyright">© 2016. Made with <i className="text-danger material-icons favorite" /> by rokaux.</p>
            </div>{/* .column */}
            <div className="column">
              <h3 className="widget-title">
                Subscription
                <small>To receive latest offers and discounts from the shop.</small>
              </h3>
              <form action="//rokaux.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&id=1194bb7544" method="post" target="_blank" className="subscribe-form" noValidate>
                <input type="email" className="form-control" name="EMAIL" placeholder="Your e-mail" />
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_c7103e2c981361a6639545bd5_1194bb7544" tabIndex={-1} defaultValue /></div>
                <button type="submit"><i className="material-icons send" /></button>
              </form>
            </div>{/* .column */}
            <div className="column">
              <h3 className="widget-title">
                Payment Methods
                <small>We support one of the following payment methods.</small>
              </h3>
              <div className="cards"><img src="img/cards.png" alt="Cards" /></div>
              {/* Scroll To Top Button */}
              <div className="scroll-to-top-btn"><i className="material-icons trending_flat" /></div>
            </div>{/* .column */}
          </footer>{/* .footer */}
        </div>{/* .page-wrapper */}
        {/* JavaScript (jQuery) libraries, plugins and custom scripts */}
        {/* <body> */}
      </div>
    )
  }
}