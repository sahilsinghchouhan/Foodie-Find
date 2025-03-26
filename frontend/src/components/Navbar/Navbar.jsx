// import React, { useContext, useState } from "react";
// import "./Navbar.css"; // Import the CSS of this component
// import { CiSearch } from "react-icons/ci";
// import { IoCartOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";
// import { StoreContext } from "../../Contex/StoreContex";

// const Navbar = ({setshowLogin}) => {
  
//   const [menu, setMenu] = useState("home");
//   const [toggleMenu, setToggleMenu] = useState(false);
// const [dropdownOpen, setDropdownOpen] = useState(false)
//   const {getTotalCartAmount, token,setToken} = useContext(StoreContext)

//   const handleMenuClick = () => {
//     setToggleMenu(!toggleMenu);
//   };

//   const closeMenu = () => {
//     setToggleMenu(false);
//   };

//   const handleLogOut = ()=>{
//     // logic for clear token
//     setToken(null)
//     setDropdownOpen(false)
//     alert("You have been logged out")
//   }

//   return (
//     <div>
//       <div className="navbar">
//         <Link to="/"><h2 className="heading-logo">Foodie Finds</h2></Link>
//         <ul className={`navbar-menu ${toggleMenu ? "active" : ""}`}>
//           <Link
//             to="/"
//             onClick={() => {
//               setMenu("home");
//               closeMenu();
//             }}
//             className={menu === "home" ? "active" : ""}
//           >
//             Home
//           </Link>
//           <a href="#explore-menu"
//             onClick={() => {
//               setMenu("dishes");
//               closeMenu();
//             }}
//             className={menu === "dishes" ? "active" : ""}
//           >
//             Dishes
//           </a>
//           <a href="#app-download"
//             onClick={() => {
//               setMenu("mobile-app");
//               closeMenu();
//             }}
//             className={menu === "mobile-app" ? "active" : ""}
//           >
//             Mobile-app
//           </a>
//           <a href="#footer"
//             onClick={() => {
//               setMenu("contact us");
//               closeMenu();
//             }}
//             className={menu === "contact us" ? "active" : ""}
//           >
//             Contact us
//           </a>
//         </ul>
//         <div className="navbar-right">
//           <CiSearch className="search-bar text-3xl font-extrabold" id="search" />
//          {/** if token exist show profile icon with dropdown  */}
//                 {
//                   token ? (
//                     <div className="relative">
//                       <FaUserCircle
//                        className="text-3xl cursor-pointer"
//                        onClick={() => setDropdownOpen(!dropdownOpen)}
//                        />
//                        {
//                         dropdownOpen && (
//                           <div className="dropdown-menu">
//                              <Link to="/orders" onClick={() => setDropdownOpen(false)}>
//                              <div className="dropdown-item">
//                       <IoCartOutline className="dropdown-icon" />
//                       Orders
//                     </div>
//                              </Link>
//                         )
//                        }
//                   )
//                 }

         
//             <Link to="/cart"><IoCartOutline className="text-3xl" id="add-to-cart" /></Link>
//             <span className="absolute top-0 right-0 w-2 h-2 bg-[#fe5005] rounded-full"></span>
//           </div>

//           /* list after login */
          


//           <button onClick={()=>setshowLogin(true)}>Sign In</button>
//           <div className="hamburger-icon" onClick={handleMenuClick}>
//             {toggleMenu ? "✖" : "☰"}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useContext, useState } from "react";
import "./Navbar.css"; // Import the CSS of this component
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa"; // Profile icon
import { Link, Navigate } from "react-router-dom";
import { StoreContext } from "../../Contex/StoreContex";

const Navbar = ({ setshowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [toggleMenu, setToggleMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // For dropdown menu

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const handleMenuClick = () => {
    setToggleMenu(!toggleMenu);
  };

  const closeMenu = () => {
    setToggleMenu(false);
  };

  const handleLogout = () => {
    // Logout logic: Clear token and close dropdown
    localStorage.removeItem("token")
    setToken(null);
    setDropdownOpen(false);
    alert("You have been logged out.");
    Navigate("/")
  };

  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <h2 className="heading-logo">Foodie Finds</h2>
        </Link>
        <ul className={`navbar-menu ${toggleMenu ? "active" : ""}`}>
          <Link
            to="/"
            onClick={() => {
              setMenu("home");
              closeMenu();
            }}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => {
              setMenu("dishes");
              closeMenu();
            }}
            className={menu === "dishes" ? "active" : ""}
          >
            Dishes
          </a>
          <a
            href="#app-download"
            onClick={() => {
              setMenu("mobile-app");
              closeMenu();
            }}
            className={menu === "mobile-app" ? "active" : ""}
          >
            Mobile-app
          </a>
          <a
            href="#footer"
            onClick={() => {
              setMenu("contact us");
              closeMenu();
            }}
            className={menu === "contact us" ? "active" : ""}
          >
            Contact us
          </a>
        </ul>
        <div className="navbar-right">
          <CiSearch className="search-bar text-3xl font-extrabold" id="search" />
          <div className="relative">
            <Link to="/cart">
              <IoCartOutline className="text-3xl" id="add-to-cart" />
            </Link>
            <span className="absolute top-0 right-0 w-2 h-2 bg-[#fe5005] rounded-full"></span>
          </div>

          {/* If token exists, show Profile Icon with dropdown */}
          {token ? (
            <div className="relative">
              <FaUserCircle
                className="text-3xl cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link  to="/orders" onClick={() => setDropdownOpen(false)}>
                    <div className="dropdown-item">
                      <IoCartOutline onClick={()=>Navigate("/my-orders")} className="dropdown-icon" />
                      Orders
                    </div>
                  </Link>
                  <div
                    className="dropdown-item"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          ) : (
            // If no token, show Sign In button
            <button onClick={() => setshowLogin(true)}>Sign In</button>
          )}

          <div className="hamburger-icon" onClick={handleMenuClick}>
            {toggleMenu ? "✖" : "☰"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
