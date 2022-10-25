import React from 'react';

const QuickView = () => {
    return (
        <section className="quick-view">
            <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Product quickview
                            </h5>
                            <a
                                href="#/"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ion-close-round"></i>
                            </a>
                        </div>
                        <div className="quick-veiw-area">
                            <div className="quick-image">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="image-1"
                                    >
                                        <a href="#/" className="long-img">
                                            <img
                                                src="image/pro-page-image/pro-page-image.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div
                                        className="tab-pane fade show"
                                        id="image-2"
                                    >
                                        <a href="#/" className="long-img">
                                            <img
                                                src="image/pro-page-image/prro-page-image01.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div
                                        className="tab-pane fade show"
                                        id="image-3"
                                    >
                                        <a href="#/" className="long-img">
                                            <img
                                                src="image/pro-page-image/pro-page-image1-1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div
                                        className="tab-pane fade show"
                                        id="image-4"
                                    >
                                        <a href="#/" className="long-img">
                                            <img
                                                src="image/pro-page-image/pro-page-image1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div
                                        className="tab-pane fade show"
                                        id="image-5"
                                    >
                                        <a href="#/" className="long-img">
                                            <img
                                                src="image/pro-page-image/pro-page-image2.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div
                                        className="tab-pane fade show"
                                        id="image-6"
                                    >
                                        <a href="#/" className="long-img">
                                            <img
                                                src="image/pro-page-image/pro-page-image2-2.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div
                                        className="tab-pane fade show"
                                        id="image-7"
                                    >
                                        <a href="#/" className="long-img">
                                            <img
                                                src="image/pro-page-image/pro-page-image3.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div
                                        className="tab-pane fade show"
                                        id="image-8"
                                    >
                                        <a href="#/" className="long-img">
                                            <img
                                                src="image/pro-page-image/pro-page-image03.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                                <ul className="nav nav-tabs quick-slider owl-carousel owl-theme">
                                    <li className="nav-item items">
                                        <a
                                            className="nav-link active"
                                            data-bs-toggle="tab"
                                            href="#image-1"
                                        >
                                            <img
                                                src="image/pro-page-image/image1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li className="nav-item items">
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href="#image-2"
                                        >
                                            <img
                                                src="image/pro-page-image/image2.jpg"
                                                className="img-fluid"
                                                alt="iamge"
                                            />
                                        </a>
                                    </li>
                                    <li className="nav-item items">
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href="#image-3"
                                        >
                                            <img
                                                src="image/pro-page-image/image3.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li className="nav-item items">
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href="#image-4"
                                        >
                                            <img
                                                src="image/pro-page-image/image4.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li className="nav-item items">
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href="#image-5"
                                        >
                                            <img
                                                src="image/pro-page-image/image5.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li className="nav-item items">
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href="#image-6"
                                        >
                                            <img
                                                src="image/pro-page-image/image6.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li className="nav-item items">
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href="#image-7"
                                        >
                                            <img
                                                src="image/pro-page-image/image8.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li className="nav-item items">
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href="#image-8"
                                        >
                                            <img
                                                src="image/pro-page-image/image7.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="quick-caption">
                                <h4>Fresh organic reachter</h4>
                                <div className="quick-price">
                                    <span className="new-price">
                                        $350.00 USD
                                    </span>
                                    <span className="old-price">
                                        <del>$399.99 USD</del>
                                    </span>
                                </div>
                                <div className="quick-rating">
                                    <i className="fa fa-star c-star"></i>
                                    <i className="fa fa-star c-star"></i>
                                    <i className="fa fa-star c-star"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                </div>
                                <div className="pro-description">
                                    <p>
                                        Lorem ipsum is simply dummy text of the
                                        printing and typesetting industry. lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and
                                    </p>
                                </div>
                                <div className="pro-size">
                                    <label>Size: </label>
                                    <select>
                                        <option>1 ltr</option>
                                        <option>3 ltr</option>
                                        <option>5 ltr</option>
                                    </select>
                                </div>
                                <div className="plus-minus">
                                    <span>
                                        <a
                                            href="#/"
                                            className="minus-btn text-black"
                                        >
                                            -
                                        </a>
                                        <input
                                            type="text"
                                            name="name"
                                            value="1"
                                        />
                                        <a
                                            href="#/"
                                            className="plus-btn text-black"
                                        >
                                            +
                                        </a>
                                    </span>
                                    <a href="cart.html" className="quick-cart">
                                        <i className="fa fa-shopping-bag"></i>
                                    </a>
                                    <a
                                        href="wishlist.html"
                                        className="quick-wishlist"
                                    >
                                        <i className="fa fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuickView;
