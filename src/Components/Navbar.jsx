import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { FaSearch, FaPowerOff } from "react-icons/fa";
import { firebaseAuth } from "../Utils/Firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar({ isScrolled }) {
  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) {
      navigate("/login");
    }
  });

  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  return (
    <Container>
      <nav
        className={`flex a-center j-between ${isScrolled ? "scrolled" : ""}`}
      >
        <div className="left-part flex a-center">
          <div className="logo flex">
            <img src={logo} alt="netflix-logo" />
          </div>
          <div className="lists">
            <ul className="flex a-center j-center">
              {links.map(({ name, link }) => {
                return (
                  <li key={name}>
                    <Link to={link}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="right-part flex a-center j-center">
          <div className={`search flex ${showSearch ? "show-search" : ""}`}>
            <button
              onFocus={() => {
                setShowSearch(true);
              }}
              onBlur={() => {
                if (inputHover === false) setShowSearch(false);
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>
          <div className="sign-out">
            <button onClick={() => signOut(firebaseAuth)}>
              <FaPowerOff />
            </button>
          </div>
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  .scrolled {
    background-color: black;
  }

  nav {
    position: sticky;
    top: 0;
    height: 6.5rem;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 2;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
  }

  .left-part {
    gap: 2rem;
  }

  .logo {
    img {
      height: 5rem;
      margin-left:-1rem;
    }
  }

  .lists {
    ul {
      list-style-type: none;
      gap: 2rem;
      margin: 0;

      li {
        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }

  .right-part {
    gap: 1rem;
  }

  .search {
    gap: 1rem;
    input {
      width: 0;
      opacity: 0;
      visibility: hidden;
      transition: 0.3s ease-in-out;
      background-color: transparent;
      border: none;
      color: white;
      &:focus {
        outline: none;
      }
    }
  }
  svg {
    color: #f34242;
    font-size: 1.2rem;
  }
  button {
    border: none;
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }

  .show-search {
    padding-left: 0.5rem;
    border: 1px solid white;
    border-radius: 0.3rem;
    background-color: rgba(0, 0, 0, 0.6);
    input {
      width: 100%;
      opacity: 1;
      visibility: visible;
      padding: 0.3rem;
    }
  }
`;
