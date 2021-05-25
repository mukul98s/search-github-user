import React from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/context";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

function Card() {
  const { user } = React.useContext(GlobalContext);
  const {
    name,
    company,
    blog,
    location,
    bio,
    twitter_username,
    html_url,
    avatar_url,
  } = user;

  return (
    <Wrapper>
      <div className="card">
        <header>
          <div>
            <img src={avatar_url} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>
                @{twitter_username === null ? "john doe" : twitter_username}
              </p>
            </div>
          </div>
          <a href={html_url} className="button">
            Follow
          </a>
        </header>
        <section>
          <h2>{bio}</h2>
          <div>
            <h3>
              <MdBusiness /> {company}
            </h3>
            <h3>
              <MdLocationOn />
              {location}
            </h3>
            <h3>
              <MdLink />
              <a href={blog}>{blog}</a>
            </h3>
          </div>
        </section>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: relative;

  .card {
    height: 300px;
    background: white;
    padding: 1rem 2rem;
    @media screen and (max-width: 600px) {
      height: 330px;
    }

    ::before {
      content: " User";
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

    header {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      margin: 15px auto;

      .button {
        margin: 0;
      }

      > div {
        display: flex;
        align-items: center;
      }

      h3 {
        color: rgba(0, 0, 0, 0.8);
        font-weight: bolder;
      }

      p {
        color: rgba(0, 0, 0, 0, 0.5);
      }

      img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        margin-right: 20px;
      }
    }

    section h2 {
      color: rgba(0, 0, 0, 0, 0.5);
      font-size: 1rem;
      margin: 30px auto;
    }

    section h3 {
      margin: 10px auto;
      font-size: 1rem;
      color: rgba(0, 0, 0, 0, 0.5);
      text-decoration: none;
      display: flex;
      align-items: center;

      > a {
        color: gray;
        text-decoration: none;
      }

      svg {
        margin: auto 10px;
        font-size: 1.2rem;
      }
    }
  }
`;

export default Card;
