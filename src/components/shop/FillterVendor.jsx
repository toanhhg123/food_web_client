import React from 'react';

const FillterVendor = () => {
    return (
        <div className="vendor-filter">
            <h4 className="filter-title">Filter by vendor</h4>
            <a href="#vendor" data-bs-toggle="collapse" className="filter-link">
                <span>Filter by vendor</span>
                <i className="fa fa-angle-down"></i>
            </a>
            <ul className="all-vendor collapse" id="vendor">
                <li className="f-vendor">
                    <input type="checkbox" />
                    <label>Fargglad</label>
                </li>
                <li className="f-vendor">
                    <input type="checkbox" />
                    <label>Flisat</label>
                </li>
                <li className="f-vendor">
                    <input type="checkbox" />
                    <label>Kyrre</label>
                </li>
                <li className="f-vendor">
                    <input type="checkbox" />
                    <label>Lustigt</label>
                </li>
                <li className="f-vendor">
                    <input type="checkbox" />
                    <label>Sundvik</label>
                </li>
            </ul>
        </div>
    );
};

export default FillterVendor;
