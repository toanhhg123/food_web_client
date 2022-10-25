import React from 'react';
import { Link } from 'react-router-dom';
import MiniCart from './MiniCart';

const Header = () => {
    return (
        <header className="header-area">
            <div className="header-main-area">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="header-main">
                                <div className="header-element logo">
                                    <a href="index.html">
                                        <img
                                            src="image/logo1.png"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </a>
                                </div>
                                <div className="header-element search-wrap">
                                    <input
                                        type="text"
                                        name="search"
                                        placeholder="Search product."
                                    />
                                    <a
                                        href="search.html"
                                        className="search-btn"
                                    >
                                        <i className="fa fa-search"></i>
                                    </a>
                                </div>
                                <div className="header-element right-block-box">
                                    <ul className="shop-element">
                                        <li className="side-wrap nav-toggler">
                                            <button
                                                className="navbar-toggler"
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#navbarContent"
                                            >
                                                <span className="line"></span>
                                            </button>
                                        </li>
                                        <li className="side-wrap user-wrap">
                                            <div className="acc-desk">
                                                <div className="user-icon">
                                                    <a
                                                        href="account.html"
                                                        className="user-icon-desk"
                                                    >
                                                        <span>
                                                            <i className="icon-user"></i>
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="user-info">
                                                    <span className="acc-title">
                                                        Account
                                                    </span>
                                                    <div className="account-login">
                                                        <a href="register.html">
                                                            Register
                                                        </a>
                                                        <a href="login.html">
                                                            Log in
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="acc-mob">
                                                <a
                                                    href="account.html"
                                                    className="user-icon"
                                                >
                                                    <span>
                                                        <i className="icon-user"></i>
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="side-wrap wishlist-wrap">
                                            <a
                                                href="wishlist.html"
                                                className="header-wishlist"
                                            >
                                                <span className="wishlist-icon">
                                                    <i className="icon-heart"></i>
                                                </span>
                                                <span className="wishlist-counter">
                                                    0
                                                </span>
                                            </a>
                                        </li>
                                        <li className="side-wrap cart-wrap">
                                            <div className="shopping-widget">
                                                <div className="shopping-cart">
                                                    <a
                                                        href="#/"
                                                        className="cart-count"
                                                    >
                                                        <span className="cart-icon-wrap">
                                                            <span className="cart-icon">
                                                                <i className="icon-handbag"></i>
                                                            </span>
                                                            <span
                                                                id="cart-total"
                                                                className="bigcounter"
                                                            >
                                                                5
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom-area">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="main-menu-area">
                                    <div className="main-navigation navbar-expand-xl">
                                        <div className="box-header menu-close">
                                            <button
                                                className="close-box"
                                                type="button"
                                            >
                                                <i className="ion-close-round"></i>
                                            </button>
                                        </div>
                                        <div
                                            className="navbar-collapse"
                                            id="navbarContent"
                                        >
                                            <div className="megamenu-content">
                                                <div className="mainwrap">
                                                    <ul className="main-menu">
                                                        <li className="menu-link parent">
                                                            <Link
                                                                to="/"
                                                                className="link-title"
                                                            >
                                                                <span className="sp-link-title">
                                                                    Home
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className="menu-link parent">
                                                            <Link
                                                                to={'/shop'}
                                                                className="link-title"
                                                            >
                                                                <span className="sp-link-title">
                                                                    Shop
                                                                </span>
                                                                <i className="fa fa-angle-down"></i>
                                                            </Link>
                                                            <a
                                                                href="#collapse-mega-menu"
                                                                data-bs-toggle="collapse"
                                                                className="link-title link-title-lg"
                                                            >
                                                                <span className="sp-link-title">
                                                                    Shop
                                                                </span>
                                                                <i className="fa fa-angle-down"></i>
                                                            </a>
                                                            <ul
                                                                className="dropdown-submenu mega-menu collapse"
                                                                id="collapse-mega-menu"
                                                            >
                                                                <li className="megamenu-li parent">
                                                                    <h2 className="sublink-title">
                                                                        Fresh
                                                                        food
                                                                    </h2>
                                                                    <a
                                                                        href="#collapse-sub-mega-menu"
                                                                        data-bs-toggle="collapse"
                                                                        className="sublink-title sublink-title-lg"
                                                                    >
                                                                        <span>
                                                                            Fresh
                                                                            food
                                                                        </span>
                                                                        <i className="fa fa-angle-down"></i>
                                                                    </a>
                                                                    <ul
                                                                        className="dropdown-supmenu collapse"
                                                                        id="collapse-sub-mega-menu"
                                                                    >
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Fruit
                                                                                &
                                                                                nut
                                                                            </a>
                                                                        </li>
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Snack
                                                                                food
                                                                            </a>
                                                                        </li>
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Organics
                                                                                nut
                                                                                gifts
                                                                            </a>
                                                                        </li>
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Non-dairy
                                                                            </a>
                                                                        </li>
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Mayonnaise
                                                                            </a>
                                                                        </li>
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Milk
                                                                                almond
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li className="megamenu-li parent">
                                                                    <h2 className="sublink-title">
                                                                        Mixedfruits
                                                                    </h2>
                                                                    <a
                                                                        href="#collapse-fruits-menu"
                                                                        data-bs-toggle="collapse"
                                                                        className="sublink-title sublink-title-lg"
                                                                    >
                                                                        <span>
                                                                            Mixedfruits
                                                                        </span>
                                                                        <i className="fa fa-angle-down"></i>
                                                                    </a>
                                                                    <ul
                                                                        className="dropdown-supmenu collapse"
                                                                        id="collapse-fruits-menu"
                                                                    >
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Oranges
                                                                            </a>
                                                                        </li>
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Coffee
                                                                                creamers
                                                                            </a>
                                                                        </li>
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Ghee
                                                                                beverages
                                                                            </a>
                                                                        </li>
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Ranch
                                                                                salad
                                                                            </a>
                                                                        </li>
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Hemp
                                                                                milk
                                                                            </a>
                                                                        </li>
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Nuts
                                                                                &
                                                                                seeds
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li className="megamenu-li parent">
                                                                    <h2 className="sublink-title">
                                                                        Bananas
                                                                        &
                                                                        plantains
                                                                    </h2>
                                                                    <a
                                                                        href="#collapse-banana-menu"
                                                                        data-bs-toggle="collapse"
                                                                        className="sublink-title sublink-title-lg"
                                                                    >
                                                                        <span>
                                                                            Bananas
                                                                            &
                                                                            plantains
                                                                        </span>
                                                                        <i className="fa fa-angle-down"></i>
                                                                    </a>
                                                                    <ul
                                                                        className="dropdown-supmenu collapse"
                                                                        id="collapse-banana-menu"
                                                                    >
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Fresh
                                                                                gala
                                                                            </a>
                                                                        </li>
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Fresh
                                                                                berries
                                                                            </a>
                                                                        </li>
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Fruit
                                                                                &
                                                                                nut
                                                                            </a>
                                                                        </li>
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Fifts
                                                                                mixed
                                                                                fruits
                                                                            </a>
                                                                        </li>
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Oranges
                                                                            </a>
                                                                        </li>
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Oranges
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li className="megamenu-li parent">
                                                                    <h2 className="sublink-title">
                                                                        Apples
                                                                        berries
                                                                    </h2>
                                                                    <a
                                                                        href="#collapse-apple-menu"
                                                                        data-bs-toggle="collapse"
                                                                        className="sublink-title sublink-title-lg"
                                                                    >
                                                                        <span>
                                                                            Apples
                                                                            berries
                                                                        </span>
                                                                        <i className="fa fa-angle-down"></i>
                                                                    </a>
                                                                    <ul
                                                                        className="dropdown-supmenu collapse"
                                                                        id="collapse-apple-menu"
                                                                    >
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Pears
                                                                                produce
                                                                            </a>
                                                                        </li>
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Bananas
                                                                            </a>
                                                                        </li>
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Natural
                                                                                grassbeab
                                                                            </a>
                                                                        </li>
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Fresh
                                                                                green
                                                                                orange
                                                                            </a>
                                                                        </li>
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Fresh
                                                                                organic
                                                                                reachter
                                                                            </a>
                                                                        </li>
                                                                        <li className="supmenu-li">
                                                                            <a href="product.html">
                                                                                Balckberry
                                                                                100%organic
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-link parent">
                                                            <a
                                                                href="grid-list.html"
                                                                className="link-title"
                                                            >
                                                                <span className="sp-link-title">
                                                                    Collection
                                                                </span>
                                                                <i className="fa fa-angle-down"></i>
                                                            </a>
                                                            <a
                                                                href="#collapse-banner-menu"
                                                                data-bs-toggle="collapse"
                                                                className="link-title link-title-lg"
                                                            >
                                                                <span className="sp-link-title">
                                                                    Collection
                                                                </span>
                                                                <i className="fa fa-angle-down"></i>
                                                            </a>
                                                            <ul
                                                                className="dropdown-submenu banner-menu collapse"
                                                                id="collapse-banner-menu"
                                                            >
                                                                <li className="menu-banner">
                                                                    <a
                                                                        href="grid-list.html"
                                                                        className="menu-banner-img"
                                                                    >
                                                                        <img
                                                                            src="image/menu-banner01.jpg"
                                                                            alt=""
                                                                            className="img-fluid"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        href="grid-list.html"
                                                                        className="menu-banner-title"
                                                                    >
                                                                        <span>
                                                                            Bestseller
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="menu-banner">
                                                                    <a
                                                                        href="grid-list.html"
                                                                        className="menu-banner-img"
                                                                    >
                                                                        <img
                                                                            src="image/menu-banner02.jpg"
                                                                            alt=""
                                                                            className="img-fluid"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        href="grid-list.html"
                                                                        className="menu-banner-title"
                                                                    >
                                                                        <span>
                                                                            Special
                                                                            product
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li className="menu-banner">
                                                                    <a
                                                                        href="grid-list.html"
                                                                        className="menu-banner-img"
                                                                    >
                                                                        <img
                                                                            src="image/menu-banner03.jpg"
                                                                            alt=""
                                                                            className="img-fluid"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        href="grid-list.html"
                                                                        className="menu-banner-title"
                                                                    >
                                                                        <span>
                                                                            Featured
                                                                            product
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-link parent">
                                                            <a
                                                                href="/#"
                                                                className="link-title"
                                                            >
                                                                <span className="sp-link-title">
                                                                    Pages
                                                                </span>
                                                                <i className="fa fa-angle-down"></i>
                                                            </a>
                                                            <a
                                                                href="#collapse-page-menu"
                                                                data-bs-toggle="collapse"
                                                                className="link-title link-title-lg"
                                                            >
                                                                <span className="sp-link-title">
                                                                    Pages
                                                                </span>
                                                                <i className="fa fa-angle-down"></i>
                                                            </a>
                                                            <ul
                                                                className="dropdown-submenu sub-menu collapse"
                                                                id="collapse-page-menu"
                                                            >
                                                                <li className="submenu-li">
                                                                    <a
                                                                        href="about-us.html"
                                                                        className="submenu-link"
                                                                    >
                                                                        About us
                                                                    </a>
                                                                </li>
                                                                <li className="submenu-li">
                                                                    <a
                                                                        href="#/"
                                                                        className="g-l-link"
                                                                    >
                                                                        <span>
                                                                            Account
                                                                        </span>{' '}
                                                                        <i className="fa fa-angle-right"></i>
                                                                    </a>
                                                                    <a
                                                                        href="#account-menu"
                                                                        data-bs-toggle="collapse"
                                                                        className="sub-link"
                                                                    >
                                                                        <span>
                                                                            Account
                                                                        </span>{' '}
                                                                        <i className="fa fa-angle-down"></i>
                                                                    </a>
                                                                    <ul
                                                                        className="collapse blog-style-1"
                                                                        id="account-menu"
                                                                    >
                                                                        <li>
                                                                            <a
                                                                                href="order-history.html"
                                                                                className="sub-style"
                                                                            >
                                                                                <span>
                                                                                    Order
                                                                                </span>
                                                                            </a>
                                                                            <a
                                                                                href="order-history.html"
                                                                                className="blog-sub-style"
                                                                            >
                                                                                <span>
                                                                                    Order
                                                                                </span>
                                                                            </a>
                                                                            <a
                                                                                href="profile.html"
                                                                                className="sub-style"
                                                                            >
                                                                                <span>
                                                                                    Profile
                                                                                </span>
                                                                            </a>
                                                                            <a
                                                                                href="profile.html"
                                                                                className="blog-sub-style"
                                                                            >
                                                                                <span>
                                                                                    Profile
                                                                                </span>
                                                                            </a>
                                                                            <a
                                                                                href="pro-wishlist.html"
                                                                                className="sub-style"
                                                                            >
                                                                                <span>
                                                                                    Wishlist
                                                                                </span>
                                                                            </a>
                                                                            <a
                                                                                href="pro-wishlist.html"
                                                                                className="blog-sub-style"
                                                                            >
                                                                                <span>
                                                                                    Wishlist
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li className="submenu-li">
                                                                    <a
                                                                        href="billing-info.html"
                                                                        className="submenu-link"
                                                                    >
                                                                        Billing
                                                                        info
                                                                    </a>
                                                                </li>
                                                                <li className="submenu-li">
                                                                    <a
                                                                        href="faq%27s.html"
                                                                        className="submenu-link"
                                                                    >
                                                                        Faq's
                                                                    </a>
                                                                </li>
                                                                <li className="submenu-li">
                                                                    <a
                                                                        href="contact.html"
                                                                        className="submenu-link"
                                                                    >
                                                                        Contact
                                                                        us
                                                                    </a>
                                                                </li>
                                                                <li className="submenu-li">
                                                                    <a
                                                                        href="terms-conditions.html"
                                                                        className="submenu-link"
                                                                    >
                                                                        Terms &
                                                                        conditions
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-link parent">
                                                            <a
                                                                href="blog.html"
                                                                className="link-title"
                                                            >
                                                                <span className="sp-link-title">
                                                                    Blogs
                                                                </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="img-hotline">
                                            <div className="image-line">
                                                <a href="#/">
                                                    <img
                                                        src="image/icon_contact.png"
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                            <div className="image-content">
                                                <span className="hot-l">
                                                    Hotline:
                                                </span>
                                                <span>0969 609 003</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MiniCart/>
        </header>
    );
};

export default Header;
