
import React, { Component } from 'react';
import Identicon from 'identicon.js';
import chain from '../photo.png'
import './Navbar.css';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark  p-0 text-monospace">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://www.dappuniversity.com/bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={chain} width="30" height="30" className="align-top navbar__icon" alt="" />
          Block$t0r3
        </a>
        <ul className="navbar-nav px-3">
          <li>
            <small id="account">
              <a target="_blank"
                 alt=""
                 className="text-white"
                 rel="noopener noreferrer"
                 href={"https://etherscan.io/address/" + this.props.account}>
                {this.props.account ? this.props.account.substring(0,6): '0x0'}...{this.props.account ? this.props.account.substring(38,42) : '0x0'}
              </a>
            </small>
            { this.props.account
              ? <img
                  alt=""
                  className='ml-2'
                  width='30'
                  height='30'
                  src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                />
              : <span></span>
            }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;