import React from "react";
import { Column3D, Pie2D, Doughnut, Bar3D } from "./charts";
import styled from "styled-components";
import { GlobalContext } from "../context/context";

function Repos() {
  const { repos } = React.useContext(GlobalContext);

  const mostFroked = repos
    .map((repo) => {
      const { name, forks_count } = repo;
      return { label: name, value: forks_count };
    })
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }

    return total;
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 5);

  const mostPopular = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  const mostStared = repos
    .map((repo) => {
      const { name, stargazers_count } = repo;
      return { label: name, value: stargazers_count };
    })
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  return (
    <div className="container">
      <Wrapper>
        <Doughnut data={mostUsed} />
        <Column3D data={mostFroked} />
        <Pie2D data={mostPopular} />
        <Bar3D data={mostStared} />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 3rem auto;
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
