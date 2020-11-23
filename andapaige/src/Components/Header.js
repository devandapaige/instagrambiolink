import React from "react";
import styled from "styled-components";

const HeaderBar = styled.div`
  background-color: black;
  width: 100%;
`;
const Name = styled.h1`
  color: white;
  text-align: center;
  margin: 0;
  font-family: "Marcellus SC", serif;
`;
function Header() {
  return (
    <>
      <HeaderBar>
        <Name>Amanda Nelson</Name>
      </HeaderBar>
    </>
  );
}

export default Header;
