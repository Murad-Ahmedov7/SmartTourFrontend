import React from "react";
import "./header.css";
import { FiMessageCircle } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineBook } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";
import { RiChatSmileAiLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="left">
          <div className="logo">
            <img src="../../src/assets/logo.png" alt="" />
          </div>
          <div className="findInput">
            <FaSearch size={17} color="#154784" />
            <input
              style={{ width: "100%", border: "0px", outline: "0" }}
              type="text"
              placeholder="Find places and things to do"
            />
          </div>
        </div>
        <div className="right">
          <div className="icon">
            <RiChatSmileAiLine size={30} />
            <p>Ask AI</p>
          </div>
          <div className="icon">
            <CiHeart size={30} style={{ strokeWidth: 1 }} />
            <p>Wishlist</p>
          </div>

          <Link to="/cart" className="icon">
            <IoCartOutline size={30} />
            <p>Cart</p>
          </Link>

          <Link to="/payment" className="icon">
            <MdOutlineBook size={30} />
            <p>Bookings</p>
          </Link>
          <div className="icon">
            <TbWorld size={30} />
            <p>EN/USD</p>
          </div>
          <Link to="/profil" className="icon">
            <IoPersonSharp size={30} />
            <p>Profile</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
