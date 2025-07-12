import { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-content">
          <h1 className="app-title">Music Explorer</h1>
        </div>
      </header>
    );
  }
}

export default Header;
