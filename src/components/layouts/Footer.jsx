import React from 'react';

const Footer = () => {
    return (
        <>
            <section className="footer-one section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="footer-service section-b-padding">
                                <ul className="service-ul">
                                    <li className="service-li">
                                        <a href='#/'>
                                            <i className="fa fa-truck"></i>
                                        </a>
                                        <span>Free delivery</span>
                                    </li>
                                    <li className="service-li">
                                        <a href='#/'>
                                            <i className="fa fa-rupee"></i>
                                        </a>
                                        <span>Cash on delivery</span>
                                    </li>
                                    <li className="service-li">
                                        <a href='#/'>
                                            <i className="fa fa-refresh"></i>
                                        </a>
                                        <span>30 Days returns</span>
                                    </li>
                                    <li className="service-li">
                                        <a href='#/'>
                                            <i className="fa fa-headphones"></i>
                                        </a>
                                        <span>Online support</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="f-logo">
                                <ul className="footer-ul">
                                    <li className="footer-li footer-logo">
                                        <a href="index.html">
                                            <img
                                                className="img-fluid"
                                                src="image/logo1.png"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li className="footer-li footer-address">
                                        <ul className="f-ul-li-ul">
                                            <li className="footer-icon">
                                                <i className="ion-ios-location"></i>
                                            </li>
                                            <li className="footer-info">
                                                <h6>Address</h6>
                                                <span>
                                                    6th floor, RITM Building
                                                </span>
                                                <span>
                                                    25, Vũ Ngọc Phan, Láng Hạ,
                                                    Đống Đa, Hà Nội
                                                </span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer-li footer-contact">
                                        <ul className="f-ul-li-ul">
                                            <li className="footer-icon">
                                                <i className="ion-ios-telephone"></i>
                                            </li>
                                            <li className="footer-info">
                                                <h6>Contact</h6>
                                                <a href="tel:1-800-222-000">
                                                    Phone: 0969 609 003
                                                </a>
                                                <a href="mailto:demo@demo.com">
                                                    Email:
                                                    devmaster.contact@gmail.com
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer-li footer-address">
                                        <ul className="f-ul-li-ul">
                                            <li className="footer-icon">
                                                <i className="ion-ios-help"></i>
                                            </li>
                                            <li className="footer-info">
                                                <h6>Help</h6>
                                                <span>
                                                    Lorem ipsum is simply
                                                </span>
                                                <span>Dummy the printing</span>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-bottom section-t-padding">
                                <div className="footer-link" id="footer-accordian">
                                    <div className="f-link">
                                        <h2 className="h-footer">Top categories</h2>
                                        <a
                                            href="#t-cate"
                                            data-bs-toggle="collapse"
                                            className="h-footer"
                                        >
                                            <span>Top categories</span>
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                        <ul
                                            className="f-link-ul collapse"
                                            id="t-cate"
                                            data-bs-parent="#footer-accordian"
                                        >
                                            <li className="f-link-ul-li">
                                                <a href="grid-list.html">
                                                    Fruits
                                                </a>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <a href="grid-list.html">
                                                    Fast foods
                                                </a>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <a href="grid-list.html">
                                                    Vegetable
                                                </a>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <a href="grid-list.html">
                                                    Salads
                                                </a>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <a href="grid-list.html">
                                                    Bestseller
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="f-link">
                                        <h2 className="h-footer">Services</h2>
                                        <a
                                            href="#services"
                                            data-bs-toggle="collapse"
                                            className="h-footer"
                                        >
                                            <span>Services</span>
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                        <ul
                                            className="f-link-ul collapse"
                                            id="services"
                                            data-bs-parent="#footer-accordian"
                                        >
                                            <li className="f-link-ul-li">
                                                <a href="about-us.html">
                                                    About vegist
                                                </a>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <a href="faq%27s.html">Faq's</a>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <a href="contact.html">
                                                    Contact us
                                                </a>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <a href="blog-style-1-3-grid.html">
                                                    News
                                                </a>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <a href="sitemap.html">
                                                    Sitemap
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="f-link">
                                        <h2 className="h-footer">
                                            Privacy & terms
                                        </h2>
                                        <a
                                            href="#privacy"
                                            data-bs-toggle="collapse"
                                            className="h-footer"
                                        >
                                            <span>Privacy & terms</span>
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                        <ul
                                            className="f-link-ul collapse"
                                            id="privacy"
                                            data-bs-parent="#footer-accordian"
                                        >
                                            <li className="f-link-ul-li">
                                                <a href="payment-policy.html">
                                                    Payment policy
                                                </a>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <a href="privacy-policy.html">
                                                    Privacy policy
                                                </a>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <a href="return-policy.html">
                                                    Return policy
                                                </a>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <a href="shipping-policy.html">
                                                    Shipping policy
                                                </a>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <a href="terms-conditions.html">
                                                    Terms & conditions
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="f-link">
                                        <h2 className="h-footer">My account</h2>
                                        <a
                                            href="#account"
                                            data-bs-toggle="collapse"
                                            className="h-footer"
                                        >
                                            <span>My account</span>
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                        <ul
                                            className="f-link-ul collapse"
                                            id="account"
                                            data-bs-parent="#footer-accordian"
                                        >
                                            <li className="f-link-ul-li">
                                                <a href="account.html">
                                                    My account
                                                </a>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <a href="cart.html">My cart</a>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <a href="tracking.html">
                                                    Order history
                                                </a>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <a href="wishlist.html">
                                                    My wishlist
                                                </a>
                                            </li>
                                            <li className="f-link-ul-li">
                                                <a href="addresses.html">
                                                    My address
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ul className="f-bottom">
                                <li className="f-c f-copyright">
                                    <p>
                                        Copyright{' '}
                                        <i className="fa fa-copyright"></i>{' '}
                                        Devmaster Academy
                                    </p>
                                </li>
                                <li className="f-c f-social">
                                    <a
                                        href="https://www.whatsapp.com/"
                                        className="f-icn-link"
                                    >
                                        <i className="fa fa-whatsapp"></i>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/"
                                        className="f-icn-link"
                                    >
                                        <i className="fa fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="https://twitter.com/"
                                        className="f-icn-link"
                                    >
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        className="f-icn-link"
                                    >
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                    <a
                                        href="https://www.pinterest.com/"
                                        className="f-icn-link"
                                    >
                                        <i className="fa fa-pinterest-p"></i>
                                    </a>
                                    <a
                                        href="https://www.youtube.com/"
                                        className="f-icn-link"
                                    >
                                        <i className="fa fa-youtube"></i>
                                    </a>
                                </li>
                                <li className="f-c f-payment">
                                    <a href="checkout.html">
                                        <img
                                            src="image/payment.png"
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
