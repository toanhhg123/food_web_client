import React from 'react';

const Slider = () => {
    return (
        <section className="slider">
            <div className="home-slider owl-carousel owl-theme">
                <div className="items">
                    <div
                        className="img-back"
                        style={{ background: 'url(image/slider1.jpg)' }}
                    >
                        <div className="h-s-content slide-c-l">
                            <span>Summer vage sale</span>
                            <h1>
                                Fresh fruits
                                <br />
                                &vegetable
                            </h1>
                            <a href="grid-list.html" className="btn btn-style1">
                                Shop now
                            </a>
                        </div>
                    </div>
                </div>
                <div className="items">
                    <div
                        className="img-back"
                        style={{
                            backgroundImage: 'url(image/slider2.jpg)',
                        }}
                    >
                        <div className="h-s-content slide-c-r">
                            <span>Organic indian masala</span>
                            <h1>
                                Prod of indian
                                <br />
                                100% pacaging
                            </h1>
                            <a href="grid-list.html" className="btn btn-style1">
                                Shop now
                            </a>
                        </div>
                    </div>
                </div>
                <div className="items">
                    <div
                        className="img-back"
                        style={{
                            backgroundImage: 'url(image/slider3.jpg)',
                        }}
                    >
                        <div className="h-s-content slide-c-c">
                            <span>Top selling!</span>
                            <h1>Fresh for your health</h1>
                            <a href="grid-list.html" className="btn btn-style1">
                                Shop now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;
