import React from "react";
import login from "../images/login.svg";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="container">
      <Wrapper>
        <div>
          <img src={login} alt="Login" />
        </div>
        <button className="button" onClick={loginWithRedirect}>
          Login
        </button>
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
  @media screen and (max-width: 720px) {
    div {
      width: 80vw;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export default Login;
