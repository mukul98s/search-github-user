import React from "react";
import styled from "styled-components";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { GlobalContext } from "../context/context";

function Info() {
  const { user } = React.useContext(GlobalContext);
  const { followers, following, public_gists, public_repos } = user;

  const user_items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "Repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "Followers",
      value: followers,
      color: "yellow",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "Following",
      value: following,
      color: "green",
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      label: "Gists",
      value: public_gists,
      color: "purple",
    },
  ];
  return (
    <div className="container">
      <Wrapper>
        {user_items.map((item) => {
          const { color, icon, value, label, id } = item;
          return (
            <div className="item" key={id}>
              <span className={color}>{icon}</span>
              <div>
                <h3>{value}</h3>
                <p>{label}</p>
              </div>
            </div>
          );
        })}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: 5px;
    padding: 1rem 2rem;
    background: white;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #fffbea;
      color: #da4a91;
    }
    .green {
      background: #fffbea;
      color: var(--clr-primary-5);
    }
    .purple {
      background: #fffbea;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default Info;
