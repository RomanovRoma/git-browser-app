import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import axios from 'axios'

import RepoList from "./Repo-list";
import RepoExact from "./Repo-exact";
import Head from "./Head"
import Header from "./Header"
import Main from "./Main"


const Home = () => {
  const { userName, repositoryName } = useParams()

  const [repoList, setRepoList] = useState([])
  const url = `https://api.github.com/users/${userName}/repos`

  useEffect(() => {
    if (typeof userName != 'undefined') {
      axios.get(url).then((it) => {
        setRepoList(it.data.map((item) => item.name))
      })
    }
  }, [url, userName])

  const [readme, setReadme] = useState('')
  const urlReadme = `https://api.github.com/repos/${userName}/${repositoryName}/readme`

  useEffect(() => {
    if (typeof userName !== 'undefined' && repositoryName !== 'undefined') {
      axios.get(urlReadme).then(({ data }) => {
        axios.get(data.download_url).then(({ data: text }) => {
          setReadme(text)
        })
      })
    }
  }, [urlReadme, userName, repositoryName])

  return (
    <div>
      <Head title="Home" />
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/:userName" component={() => <RepoList repoList={repoList} />} />
        <Route exact path="/:userName/:repositoryName" component={() => <RepoExact readme={readme} />} />
      </Switch>
    </div>
  );
};

Home.propTypes = {};

export default Home
