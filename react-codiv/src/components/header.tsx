import React from "react";
import '../styles/header.scss';
class Header extends React.Component {
    render() {
      return (
        <header>
            <div className="header-content">
              <h1>Codiv Countries</h1>
            </div>
        </header>
      );
    }
}
export default Header; 