import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import { GlobalContext } from "../context/context";
function Search() {
  const [user, setUser] = useState("");
  const { requests, error, searchGithubUser, isLoading } =
    React.useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user) {
      searchGithubUser(user);
      setUser("");
    }
  };
  return (
    <section className="container">
      <Wrapper>
        {error.show && (
          <Error>
            <p>{error.message}</p>
          </Error>
        )}
        <form onSubmit={handleSubmit}>
          <div className="search">
            <MdSearch />
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Search User"
            />
            {requests > 0 && !isLoading && (
              <button className="button">Search</button>
            )}
          </div>
        </form>
        <div className="requests">
          <h3>Requests : {requests}/60</h3>
        </div>
      </Wrapper>
    </section>
  );
}

const Wrapper = styled.div`
  display: flex;
  grid-template-columns: 4fr 1fr;
  grid-gap: 1rem;
  align-items: center;
  margin-bottom: 5rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }

  svg {
    font-size: 1.2rem;
    margin: auto 10px;
  }
  @media screen and (max-width: 480px) {
    form {
      width: 90vw;
      margin: auto 5vw;
    }
  }

  form {
    flex: 1;
  }

  .search {
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
    background: white;

    input {
      border: transparent;
      outline: transparent;
      background: white;
      padding: 3px;
      font-size: 1.3rem;
      color: rgba(0, 0, 0, 0.7);

      input::placeholder {
        font-size: 1.3rem;
        color: rgba(0, 0, 0, 0.3);
      }
    }
    @media screen and (max-width: 480px) {
      input {
        width: 10rem;
      }
    }

    button {
      color: whitesmoke;
      font-size: 1rem;
      padding: 10px;
      font-weight: lighter;
      border: transparent;
      outline: transparent;
      margin: 0;
    }
  }

  .requests {
    text-align: center;

    h3 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 1.5rem;
    }
  }
`;

const Error = styled.div`
  color: crimson;
  p {
    text-transform: capitalize;
    font-size: 1.1rem;
    text-align: center;
    margin: 10px auto;
  }
`;

export default Search;
