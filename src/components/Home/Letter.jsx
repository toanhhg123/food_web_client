import React from 'react';

const Letter = () => {
    return (
        <section className="news-letter1">
            <div
                className="section-tb-padding news-img"
                style={{ backgroundImage: 'url(image/banner3.jpg)' }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="home-news">
                                <h2>Get the latest deals</h2>
                                <p>
                                    And receive 20% off coupon for first
                                    shopping
                                </p>
                                <form>
                                    <input
                                        type="text"
                                        name="search"
                                        placeholder="Enter your email address"
                                    />
                                    <button className="btn btn-style3">
                                        Subscribe
                                    </button>
                                    <button className="btn btn-style1 news-sub">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Letter;
