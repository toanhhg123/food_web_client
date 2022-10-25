import React from 'react';

const FillterSize = () => {
    return (
        <div className="pro-size">
            <h4 className="filter-title">Filter by size</h4>
            <a
                href="#size-filter"
                data-bs-toggle="collapse"
                className="filter-link"
            >
                <span>Filter by size</span>
                <i className="fa fa-angle-down"></i>
            </a>
            <ul className="all-size collapse" id="size-filter">
                <li className="choice-size">
                    <input type="checkbox" />
                    <label>10kg</label>
                </li>
                <li className="choice-size">
                    <input type="checkbox" />
                    <label>10ltr</label>
                </li>
                <li className="choice-size">
                    <input type="checkbox" />
                    <label>1kg</label>
                </li>
                <li className="choice-size">
                    <input type="checkbox" />
                    <label>1ltr</label>
                </li>
                <li className="choice-size">
                    <input type="checkbox" />
                    <label>2kg</label>
                </li>
                <li className="choice-size">
                    <input type="checkbox" />
                    <label>3kg</label>
                </li>
                <li className="choice-size">
                    <input type="checkbox" />
                    <label>5kg</label>
                </li>
                <li className="choice-size">
                    <input type="checkbox" />
                    <label>5ltr</label>
                </li>
            </ul>
        </div>
    );
};

export default FillterSize;
