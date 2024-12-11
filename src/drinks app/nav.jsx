// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/nav.css";

// const Navbar = () => {
//   return (
    
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <Link to="/">Drinks App</Link>
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/HomePage">Home</Link></li>
//       </ul>
//       <div className="navbar-login">
//         <Link to="/" className="login-button">Login</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css"; // Ensure this file contains your styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/HomePage">Drinks App</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/HomePage">Home</Link></li>
      </ul>
      <div className="navbar-actions">
        <Link to="/cart" className="cart-button">
          <i className="fas fa-shopping-cart"></i> {/* Font Awesome cart icon */}
        </Link>
        <Link to="/" className="login-button">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;

