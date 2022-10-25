import React from 'react';

const Category = () => {
    return (
        <div className="categories-page-filter">
            <h4 className="filter-title">Categories</h4>
            <a
                href="#category-filter"
                data-bs-toggle="collapse"
                className="filter-link"
            >
                <span>Categories</span>
                <i className="fa fa-angle-down"></i>
            </a>
            <ul className="all-option collapse" id="category-filter">
                <li className="grid-list-option">
                    <input type="checkbox" />
                    <a href="#/">
                        Baker's rack <span className="grid-items">(4)</span>
                    </a>
                </li>
                <li className="grid-list-option">
                    <input type="checkbox" />
                    <a href="#/">
                        Bestseller
                        <span className="grid-items">(6)</span>
                    </a>
                </li>
                <li className="grid-list-option">
                    <input type="checkbox" />
                    <a href="#/">
                        Breakfast <span className="grid-items">(8)</span>
                    </a>
                </li>
                <li className="grid-list-option">
                    <input type="checkbox" />
                    <a href="#/">
                        Dairy & chesse <span className="grid-items">(7)</span>
                    </a>
                </li>
                <li className="grid-list-option">
                    <input type="checkbox" />
                    <a href="#/">
                        Dairy & chesse <span className="grid-items">(3)</span>
                    </a>
                </li>
                <li className="grid-list-option">
                    <input type="checkbox" />
                    <a href="#/">
                        Deal collection <span className="grid-items">(10)</span>
                    </a>
                </li>
                <li className="grid-list-option">
                    <input type="checkbox" />
                    <a href="#/">
                        Dinner <span className="grid-items">(12)</span>
                    </a>
                </li>
                <li className="grid-list-option">
                    <input type="checkbox" />
                    <a href="#/">
                        Featured product{' '}
                        <span className="grid-items">(11)</span>
                    </a>
                </li>
                <li className="grid-list-option">
                    <input type="checkbox" />
                    <a href="#/">
                        Fresh fruits <span className="grid-items">(16)</span>
                    </a>
                </li>
                <li className="grid-list-option">
                    <input type="checkbox" />
                    <a href="#/">
                        Fresh meat <span className="grid-items">(18)</span>
                    </a>
                </li>
                <li className="grid-list-option">
                    <input type="checkbox" />
                    <a href="#/">
                        Fresh vegetable <span className="grid-items">(16)</span>
                    </a>
                </li>
                <li className="grid-list-option">
                    <input type="checkbox" />
                    <a href="#/">
                        Green seafood <span className="grid-items">(12)</span>
                    </a>
                </li>
                <li className="grid-list-option">
                    <input type="checkbox" />
                    <a href="#/">
                        Lunch <span className="grid-items">(14)</span>
                    </a>
                </li>
                <li className="grid-list-option">
                    <input type="checkbox" />
                    <a href="#/">
                        New product <span className="grid-items">(20)</span>
                    </a>
                </li>
                <li className="grid-list-option">
                    <input type="checkbox" />
                    <a href="#/">
                        Organic dryfruit{' '}
                        <span className="grid-items">(21)</span>
                    </a>
                </li>
                <li className="grid-list-option">
                    <input type="checkbox" />
                    <a href="#/">
                        Organic juice <span className="grid-items">(23)</span>
                    </a>
                </li>
                <li className="grid-list-option">
                    <input type="checkbox" />
                    <a href="#/">
                        Organic wine <span className="grid-items">(17)</span>
                    </a>
                </li>
                <li className="grid-list-option">
                    <input type="checkbox" />
                    <a href="#/">
                        Sea & fish <span className="grid-items">(1)</span>
                    </a>
                </li>
                <li className="grid-list-option">
                    <input type="checkbox" />
                    <a href="#/">
                        Special product <span className="grid-items">(5)</span>
                    </a>
                </li>
                <li className="grid-list-option">
                    <input type="checkbox" />
                    <a href="#/">
                        Starters <span className="grid-items">(9)</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Category;
