import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <Wrapper>
      <div className="container">
        <h2>Welcome, User</h2>
        <h3>Logout</h3>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: white;
  padding: 15px 30px;
  margin-bottom: 5rem;
  .container {
    display: flex;
    justify-content: space-between;

    h3 {
      text-decoration: underline;
      font-weight: lighter;
    }
  }
`;

export default Navbar;
