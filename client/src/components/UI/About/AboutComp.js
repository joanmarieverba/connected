import React, { Component } from 'react';
import { Grid, GridCell } from 'rmwc/Grid';

class AboutComp extends React.Component {
    render() {
        return(
            <div className="about-page">
                <h1 className="about">About</h1>
                <h2>Our Motto: Stay Connected, Stay Alive</h2>
                <h3>Thanks for visiting our website. In addition to helping people stay connected with their friends and family, 
                    we help people establish and build new relationships. Our innovative authentication, check-in, newsfeed, 
                    and private messaging features have helped many people stay connected.</h3>
                <ul>
                    Here are some of the technologies we leveraged to build this website: 
                    <li>React</li> 
                    <li>MongoDB</li> 
                    <li>Express</li>
                    <li>React-Router-DOM</li>
                    <li>Axios</li>
                    <li>Node</li>
                    <li>React Bootstrap</li>
                </ul>
            </div>
        )
    }
}

export default AboutComp;