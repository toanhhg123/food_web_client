import React from 'react';

const Banner = () => {
    return (
        <section className="t-banner1 section-tb-padding">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="home-offer-banner">
                            <div className="o-t-banner">
                                <a href="product.html" className="image-b">
                                    <img
                                        className="img-fluid"
                                        src="image/banner-1.jpg"
                                        alt=""
                                    />
                                </a>
                                <div className="o-t-content">
                                    <h6>
                                        Fresh fruits, vagetable on our product
                                    </h6>
                                    <a
                                        href="product.html"
                                        className="btn btn-style1"
                                    >
                                        Shop now
                                    </a>
                                </div>
                            </div>
                            <div className="o-t-banner">
                                <a href="product.html" className="image-b">
                                    <img
                                        className="img-fluid"
                                        src="image/banner-2.jpg"
                                        alt=""
                                    />
                                </a>
                                <div className="o-t-content banner-color">
                                    <h6>Vagetable eggplant 100% fresh food</h6>
                                    <a
                                        href="product.html"
                                        className="btn btn-style1"
                                    >
                                        Shop now
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

export default Banner;
