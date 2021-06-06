import React from "react";
import error from "../images/error.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Wrapper>
      <div>
        <img src={error} alt="Error 404" />
      </div>
      <Link to="/" className="button">
        Back To Home
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  flex-direction: column;
  div {
    width: 50vw;
    text-align: center;
  }
  @media screen and (max-width: 720px) {
    div {
      width: 80vw;
    }
  }
  img {
    width: 100%;
    height: 100%;
    margin-bottom: 40px;
  }
`;

export default Error;
