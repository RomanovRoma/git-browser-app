import React from "react";
import { Link, useParams } from 'react-router-dom'
import Head from "./Head";


const RepoList = ({ repoList }) => {
  const { userName } = useParams()

  return (
    <div>
      <Head title="LIST" />
      <div>
        {repoList.map((repo) => (
          <div key={repo}>
            <Link to={`/${userName}/${repo}`} >{repo}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

RepoList.propTypes = {};

export default RepoList