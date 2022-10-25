import React from 'react';

const CountDown = () => {
    return (
        <section className="home-countdown1">
            <div
                className="back-img"
                style={{ 'backgroundImage': 'url(image/dealbanner.jpg)' }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="deal-content">
                                <h2>Deal Of The Day!</h2>
                                <span className="deal-c">
                                    We offer a hot deal offer every festival
                                </span>
                                <ul className="contdown_row">
                                    <li className="countdown_section">
                                        <span id="days" className="countdown_timer">
                                            254
                                        </span>
                                        <span className="countdown_title">
                                            Days
                                        </span>
                                    </li>
                                    <li className="countdown_section">
                                        <span
                                            id="hours"
                                            className="countdown_timer"
                                        >
                                            11
                                        </span>
                                        <span className="countdown_title">
                                            Hours
                                        </span>
                                    </li>
                                    <li className="countdown_section">
                                        <span
                                            id="minutes"
                                            className="countdown_timer"
                                        >
                                            33
                                        </span>
                                        <span className="countdown_title">
                                            Minutes
                                        </span>
                                    </li>
                                    <li className="countdown_section">
                                        <span
                                            id="seconds"
                                            className="countdown_timer"
                                        >
                                            36
                                        </span>
                                        <span className="countdown_title">
                                            Seconds
                                        </span>
                                    </li>
                                </ul>
                                <a href="grid-list.html" className="btn btn-style1">
                                    Shop collection
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CountDown;
