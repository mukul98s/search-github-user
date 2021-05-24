import React from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/context";

function Followers() {
  const { followers } = React.useContext(GlobalContext);
  return (
    <Wrapper>
      <div className="followers">
        {followers.map((follower, index) => {
          const { avatar_url, html_url, login } = follower;
          return (
            <article key={index}>
              <img src={avatar_url} alt={login} />
              <div>
                <h3>{login}</h3>
                <a href={html_url}>{html_url}</a>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: relative;

  .followers {
    height: 300px;
    overflow-y: scroll;
    background: white;
    padding: 1rem;

    ::before {
      content: " followers";
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-100%);
      background: white;
      color: rgba(0, 0, 0, 0, 0.7);
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      text-transform: capitalize;
      padding: 0.5rem 1rem 0 1rem;
      letter-spacing: 2px;
      font-size: 1rem;
    }

    article {
      display: grid;
      align-items: center;
      grid-template-columns: auto 1fr;
      padding: 0.75rem;

      img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        margin: auto 20px;
      }

      h3 {
        color: rgba(0, 0, 0, 0.7);
      }

      a {
        color: rgba(0, 0, 0, 0.4);
        text-decoration: none;
      }
    }
  }
`;
export default Followers;
