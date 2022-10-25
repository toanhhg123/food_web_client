import React from 'react';
import Category from '../components/Home/Category';
import FillterSize from '../components/shop/FillterSize';
import FillterTag from '../components/shop/FillterTag';
import FilterBanner from '../components/shop/FilterBanner';
import PriceFillter from '../components/shop/PriceFillter';
import ProductItem from '../components/shop/ProductItem';
import Layout from './../components/layouts/Layout';

const Shop = () => {
    return (
        <Layout>
            <section className="section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-12">
                            <div className="all-filter">
                                <Category />
                                <PriceFillter />
                                <FillterSize />
                                <FillterTag />

                                <FilterBanner />
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-12">
                            <div
                                className="grid-list-banner"
                                style={{
                                    backgroundImage: 'url(image/slider17.jpg)',
                                }}
                            >
                                <div className="grid-banner-content">
                                    <h4>Bestseller</h4>
                                    <p>
                                        Praesent dapibus, neque id cursus
                                        Ucibus, tortor neque egestas augue, eu
                                        vulputate magna eros eu erat. Aliquam
                                        erat volutpat. Nam dui mi, tincidunt
                                        quis, facilisis luc...
                                    </p>
                                </div>
                            </div>
                            <div className="grid-list-area">
                                <div className="grid-list-select">
                                    <ul className="grid-list">
                                        <li className="colloction-icn">
                                            <a href="grid-list-2.html">
                                                <i className="ti-layout-list-thumb"></i>
                                            </a>
                                        </li>
                                        <li className="colloction-icn">
                                            <a href="grid-list-3.html">
                                                <i className="ti-layout-grid2"></i>
                                            </a>
                                        </li>
                                        <li className="colloction-icn three-grid">
                                            <a
                                                href="grid-list.html"
                                                className="active"
                                            >
                                                <i className="ti-layout-grid3"></i>
                                            </a>
                                        </li>
                                        <li className="colloction-icn four-grid">
                                            <a href="grid-list-4.html">
                                                <i className="ti-layout-grid4"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="grid-list-selector">
                                        <li>
                                            <label>Sort by</label>
                                            <select>
                                                <option>Featured</option>
                                                <option>Best selling</option>
                                                <option>
                                                    Alphabetically,A-Z
                                                </option>
                                                <option>
                                                    Alphabetically,Z-A
                                                </option>
                                                <option>
                                                    Price, low to high
                                                </option>
                                                <option>
                                                    Price, high to low
                                                </option>
                                                <option>Date new to old</option>
                                                <option>Date old to new</option>
                                            </select>
                                        </li>
                                    </ul>
                                </div>
                                <div className="grid-pro">
                                    <ul className="grid-product">
                                       
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />

                                    </ul>
                                </div>
                            </div>
                            <div className="list-all-page">
                                <span className="page-title">
                                    Showing 1 - 17 of 17 result
                                </span>
                                <div className="page-number">
                                    <a href="grid-list.html" className="active">
                                        1
                                    </a>
                                    <a href="grid-list-2.html">2</a>
                                    <a href="grid-list-3.html">3</a>
                                    <a href="grid-list-4.html">4</a>
                                    <a href="#/">
                                        <i className="fa fa-angle-double-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Shop;
