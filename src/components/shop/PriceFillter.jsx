import React from 'react';

const PriceFillter = () => {
    return (
        <div className="price-filter">
            <h4 className="filter-title">Filter by price</h4>
            <a
                href="#price-filter"
                data-bs-toggle="collapse"
                className="filter-link"
            >
                <span>Filter by price</span>
                <i className="fa fa-angle-down"></i>
            </a>
            <ul className="all-price collapse" id="price-filter">
                <li className="f-price">
                    <input type="checkbox" />
                    <label>0-100</label>
                </li>
                <li className="f-price">
                    <input type="checkbox" />
                    <label>100-200</label>
                </li>
                <li className="f-price">
                    <input type="checkbox" />
                    <label>200-300</label>
                </li>
            </ul>
        </div>
    );
};

export default PriceFillter;
