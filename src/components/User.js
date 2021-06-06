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
  @media screen and (max-width: 960px) {
    display: flex;
    margin-top: 3rem;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: stretch;
    justify-content: space-between;
    align-items: stretch;
  }
`;

export default User;
