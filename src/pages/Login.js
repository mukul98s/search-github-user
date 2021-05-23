import React from "react";
import { Link } from "react-router-dom";
import login from "../images/login.svg";
import styled from "styled-components";

function Login() {
  return (
    <div className="container">
      <Wrapper>
        <div>
          <img src={login} alt="Error 404" />
        </div>
        <Link to="" className="button">
          Login
        </Link>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  flex-direction: column;
  div {
    width: 40vw;
    text-align: center;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Login;
