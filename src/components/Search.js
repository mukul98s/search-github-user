import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
function Search() {
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="container">
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <div className="search">
            <MdSearch />
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Search Github User"
            />
            <button className="button">Search</button>
          </div>
        </form>
        <div className="requests">
          <h3>Requests : 60/60</h3>
        </div>
      </Wrapper>
    </section>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 1rem;
  align-items: center;

  svg {
    font-size: 1.2rem;
    margin: auto 10px;
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

export default Search;
