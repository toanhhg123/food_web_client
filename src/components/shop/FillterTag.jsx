import React from 'react';

const FillterTag = () => {
    return (
        <div className="filter-tag">
            <h4 className="filter-title">Filter by tags</h4>
            <a
                href="#tags-filter"
                data-bs-toggle="collapse"
                className="filter-link"
            >
                <span>Filter by tags</span>
                <i className="fa fa-angle-down"></i>
            </a>
            <ul className="all-tag collapse" id="tags-filter">
                <li className="tag">
                    <a href="product.html">Almond</a>
                </li>
                <li className="tag">
                    <a href="product.html">Banana</a>
                </li>
                <li className="tag">
                    <a href="product.html">Bitrrot</a>
                </li>
                <li className="tag">
                    <a href="product.html">Blackberry</a>
                </li>
                <li className="tag">
                    <a href="product.html">Chikoo</a>
                </li>
                <li className="tag">
                    <a href="product.html">Coconet</a>
                </li>
                <li className="tag">
                    <a href="product.html">Guava</a>
                </li>
                <li className="tag">
                    <a href="product.html">juice</a>
                </li>
                <li className="tag">
                    <a href="product.html">Ladiesfinger</a>
                </li>
                <li className="tag">
                    <a href="product.html">Litchi</a>
                </li>
                <li className="tag">
                    <a href="product.html">Minirrot</a>
                </li>
                <li className="tag">
                    <a href="product.html">Mussel</a>
                </li>
                <li className="tag">
                    <a href="product.html">Onion</a>
                </li>
                <li className="tag">
                    <a href="product.html">Organic-food</a>
                </li>
                <li className="tag">
                    <a href="product.html">Potato</a>
                </li>
                <li className="tag">
                    <a href="product.html">Shrimp</a>
                </li>
                <li className="tag">
                    <a href="product.html">Tomato</a>
                </li>
            </ul>
        </div>
    );
};

export default FillterTag;
