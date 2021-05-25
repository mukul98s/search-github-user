import React, { useState, useEffect } from "react";
import mockUser from "./mockData/mockUser";
import mockRepos from "./mockData/mockRepos";
import mockFollowers from "./mockData/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(mockUser);
  const [followers, setFollowers] = useState(mockFollowers);
  const [repos, setRepos] = useState(mockRepos);

  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, message: "" });

  //Check Remaining Requests
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, "sorry, you have exceeded your hourly rate limit!");
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(checkRequests, []);

  // Toggle Error
  const toggleError = (show = false, message = "") => {
    setError({ show, message });
  };

  // Search Function
  const searchGithubUser = async (user) => {
    toggleError();
    setIsLoading(true);
    const response = await axios
      .get(`${rootUrl}/users/${user}`)
      .catch((error) => {
        toggleError(true, error.message);
      });

    if (response) {
      setUser(response.data);
      const { login, followers_url } = response.data;

      await Promise.allSettled([
        axios(`${rootUrl}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ])
        .then((result) => {
          const [repos, followers] = result;

          const status = "fulfilled";
          if (repos.status === status) setRepos(repos.value.data);
          if (followers.status === status) setFollowers(followers.value.data);
        })
        .catch((error) => {
          toggleError(true, error.message);
        });
    } else {
      toggleError(true, "There is no user with that username");
    }

    checkRequests();
    setIsLoading(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        user,
        followers,
        repos,
        isLoading,
        error,
        requests,
        searchGithubUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
