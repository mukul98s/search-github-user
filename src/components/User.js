import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Followers from "./Followers";

function User() {
  return (
    <div className="container">
      <Wrapper>
        <Card />
        <Followers />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 2rem;
  margin-top: 3rem;
`;

export default User;
