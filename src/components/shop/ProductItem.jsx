import React from 'react';

const ProductItem = () => {
    return (
        <li className="grid-items">
            <div className="tred-pro">
                <div className="tr-pro-img">
                    <a href="product.html">
                        <img
                            className="img-fluid"
                            src="image/pro/pro-img-1.jpg"
                            alt=""
                        />
                        <img
                            className="img-fluid additional-image"
                            src="image/pro/pro-img-01.jpg"
                            alt=""
                        />
                    </a>
                </div>
                <div className="Pro-lable">
                    <span className="p-text">New</span>
                </div>
                <div className="pro-icn">
                    <a href="wishlist.html" className="w-c-q-icn">
                        <i className="fa fa-heart"></i>
                    </a>
                    <a href="cart.html" className="w-c-q-icn">
                        <i className="fa fa-shopping-bag"></i>
                    </a>
                    <a
                        href="#/"
                        className="w-c-q-icn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        <i className="fa fa-eye"></i>
                    </a>
                </div>
            </div>
            <div className="caption">
                <h3>
                    <a href="product.html">Fresh organic fruit (50gm)</a>
                </h3>
                <div className="rating">
                    <i className="fa fa-star c-star"></i>
                    <i className="fa fa-star c-star"></i>
                    <i className="fa fa-star c-star"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <div className="pro-price">
                    <span className="new-price">$130.00 USD</span>
                </div>
            </div>
        </li>
    );
};

export default ProductItem;
