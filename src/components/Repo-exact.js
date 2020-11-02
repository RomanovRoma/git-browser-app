import React from "react";

import ReactMarkdown from 'react-markdown'
import Head from './Head'

const RepoExact = ({ readme }) => {
  return (
    <div>
      <Head title="README" />
      <div id="description">
        <ReactMarkdown source={readme} />
      </div>
    </div>
  );
};

RepoExact.propTypes = {};

export default RepoExact