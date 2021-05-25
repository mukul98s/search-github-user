import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import Loader from "../components/Loader";
function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }
  return <React.Fragment>{children}</React.Fragment>;
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;

export default AuthWrapper;
