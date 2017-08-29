import React, {Component} from 'react';
import '../styles/App.css';

export default class BaseLayout extends Component {

  render(){

    return (
      <div className="container-fluid nav">
        <nav className="row">
          <div className="col-md-11 nav-bar-col">
            <a href="#"><div className="facebook"></div></a>
            <ul className="nav nav-tabs">
              <li role="presentation" className="active"><a href="#">Home</a></li>
              <li role="presentation"><a href="#">Events</a></li>
              <li role="presentation"><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-12 header">
            <div className="headerStyle">
              <h1 className="titleStyle">Majestic Thai</h1>
              <h3 className="subtitleStyle">East Meets West</h3>
            </div>
          </div>
        </nav>
          {this.props.children}
        <footer>
          <span className="footer-title">Majestic Thai </span><span>100 Main Street, Spartanburg, SC, 29302 | (864) 898-9999</span>
        </footer>
      </div>
    );
  }
}
