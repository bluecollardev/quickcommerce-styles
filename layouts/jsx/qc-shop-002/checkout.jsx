React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>M-Store | Checkout</title>
        {/*SEO Meta Tags*/}
        <meta name="description" content="M-Store - Modern E-Commerce Template" />
        <meta name="keywords" content="shop, e-commerce, modern, minimalist style, responsive, online store, business, mobile, blog, bootstrap, html5, css3, jquery, js, gallery, slider, touch, creative, clean" />
        <meta name="author" content="Rokaux" />
        {/*Mobile Specific Meta Tag*/}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        {/*Favicon*/}
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        {/* Google Material Icons */}
        <link href="css/vendor/material-icons.min.css" rel="stylesheet" media="screen" />
        {/* Brand Icons */}
        <link href="css/vendor/socicon.min.css" rel="stylesheet" media="screen" />
        {/* Bootstrap */}
        <link href="css/vendor/bootstrap.min.css" rel="stylesheet" media="screen" />
        {/* Theme Styles */}
        <link href="css/theme.min.css" rel="stylesheet" media="screen" />
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
            {/* Main Navigation */}
            {/* Control the position of navigation via modifier classes: "text-left, text-center, text-right" */}
            <nav className="main-navigation text-center">
              <ul className="menu">
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
                    <li><a href="shop-fullwidth-sl.html">Full Width Sidebar Left</a></li>
                    <li><a href="shop-fullwidth-sr.html">Full Width Sidebar Right</a></li>
                    <li><a href="shop-fullwidth-ft.html">Full Width Filters Top</a></li>
                    <li><a href="shop-boxed-sl.html">Boxed Sidebar Left</a></li>
                    <li><a href="shop-boxed-sr.html">Boxed Sidebar Right</a></li>
                    <li><a href="shop-boxed-ft.html">Boxed Filters Top</a></li>
                    <li><a href="shop-single.html">Single Product</a></li>
                    <li><a href="shopping-cart.html">Shopping Cart</a></li>
                    <li className="current-menu-item"><a href="checkout.html">Checkout</a></li>
                    <li><a href="login.html">Login / Register Page</a></li>
                    <li><a href="account.html">User Account Page</a></li>
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
                <li className="menu-item-has-children">
                  <a href="#">Multilevel</a>
                  <ul className="sub-menu">
                    <li className="submenu-item-has-children">
                      <a href="#">Submenu Item 1</a>
                      <ul className="sub-menu">
                        <li><a href="#">Submenu Item 1</a></li>
                        <li><a href="#">Submenu Item 2</a></li>
                        <li><a href="#">Submenu Item 3</a></li>
                      </ul>
                    </li>
                    <li className="submenu-item-has-children">
                      <a href="#">Submenu Item 2</a>
                      <ul className="sub-menu">
                        <li><a href="#">Submenu Item 1</a></li>
                        <li><a href="#">Submenu Item 2</a></li>
                        <li><a href="#">Submenu Item 3</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Submenu Item 3</a></li>
                    <li><a href="#">Submenu Item 4</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li><a href="about.html">About</a></li>
                    <li><a href="contacts.html">Contacts</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                  </ul>
                </li>
                <li className="hidden-md"><a href="elements.html">Elements</a></li>
              </ul>{/* .menu */}
            </nav>{/* .main-navigation */}
            {/* Toolbar */}
            <div className="toolbar">
              <div className="inner">
                <a href="#" className="mobile-menu-toggle"><i className="material-icons menu" /></a>
                <a href="account.html"><i className="material-icons person" /></a>
                <div className="cart-btn">
                  <a href="shopping-cart.html">
                    <i>
                      <span className="material-icons shopping_basket" />
                      <span className="count">2</span>
                    </i>
                  </a>
                  {/* Cart Dropdown */}
                  <div className="cart-dropdown">
                    <div className="cart-item">
                      <a href="shop-single.html" className="item-thumb">
                        <img src="img/cart/item01.jpg" alt="Item" />
                      </a>
                      <div className="item-details">
                        <h3 className="item-title"><a href="shop-single.html">Concrete Lamp</a></h3>
                        <h4 className="item-price">1 x $85.90</h4>
                      </div>
                      <a href="#" className="close-btn">
                        <i className="material-icons close" />
                      </a>
                    </div>{/* .cart-item */}
                    <div className="cart-item">
                      <a href="shop-single.html" className="item-thumb">
                        <img src="img/cart/item02.jpg" alt="Item" />
                      </a>
                      <div className="item-details">
                        <h3 className="item-title"><a href="shop-single.html">Storage Box</a></h3>
                        <h4 className="item-price">2 x $38.00</h4>
                      </div>
                      <a href="#" className="close-btn">
                        <i className="material-icons close" />
                      </a>
                    </div>{/* .cart-item */}
                    <div className="cart-subtotal">
                      <div className="column">
                        <span>Subtotal:</span>
                      </div>
                      <div className="column">
                        <span className="amount">$161.90</span>
                      </div>
                    </div>
                  </div>{/* .cart-dropdown */}
                </div>{/* .cart-btn */}
              </div>{/* .inner */}
            </div>{/* .toolbar */}
          </header>{/* .navbar.navbar-sticky */}
          {/* Container */}
          <form method="post" className="container padding-top-3x padding-bottom-2x">
            <h1 className="space-top-half">Checkout</h1>
            <div className="row padding-top">
              {/* Checkout Form */}
              <div className="col-sm-8 padding-bottom">
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
              </div>{/* .col-sm-8 */}
              {/* Sidebar */}
              <div className="col-md-3 col-md-offset-1 col-sm-4 padding-bottom">
                <aside>
                  <h3>Cart total:</h3>
                  <h4>$460.90</h4>
                  <p className="text-sm text-gray">* Note: This amount includes costs for shipping to address you provided.</p>
                  <a href="shopping-cart.html" className="btn btn-default btn-ghost icon-left btn-block">
                    <i className="material-icons arrow_back" />
                    Back To Cart
                  </a>
                  <button type="submit" className="btn btn-primary btn-block waves-effect waves-light space-top-none">Checkout</button>
                </aside>
              </div>{/* .col-md-3.col-sm-4 */}
            </div>{/* .row */}
          </form>{/* .container */}
          {/* Footer */}
          <footer className="footer space-top">
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
    );
  }
});