import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

/* import bliss_cover_1 from "../../src/assets/bliss_cover_1.png";
import bliss_cover_2 from "../../src/assets/bliss_cover_2.png";
import bliss_cover_3 from "../../src/assets/bliss_cover_3.png"; */
import bliss_cover_4 from "../../src/assets/bliss_cover_4.png";

const Nav = styled.nav`
  background-color: #aaaaaa;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;

  a {
    font-size: 1.05em;
    margin: 2.5vw;
    padding: 0.5em 2em;
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    padding: 0.5em 2em;
    border-radius: 10px;
    background-color: #4953ff;
    color:#ffffff;
  }

  a:focus {
    color: #494949;
  }

  img {
    height: 8vh;
    width: auto;
    position: absolute;
    left: 5%;
  }
`;

function NavBar() {
  return (
    <Nav>
      <img src={bliss_cover_4} alt="cover" />

      <NavLink className="navlink" to="/">
        Home
      </NavLink>
      <NavLink className="navlink" to="/questions">
        Questions
      </NavLink>
    </Nav>
  );
}

export default NavBar;
