import React from "react";
import Burger from "../Navbar/burger";
import styled from "styled-components";

const Nav = styled.div`
  height: 45px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  color: #a19e9e;
  background: #df7e5f;
  @media only screen 
and (min-device-width : 320px) 
and (max-device-width : 568px) { 
  height: 60px !important;
}
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
};

export default Navbar;
