import React from "react";
import { Link, useParams } from "react-router-dom";

const Header = () => {
  const { userName, repositoryName } = useParams();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 text-white font-bald">
      <div id="repository-name">{repositoryName || userName || "Welcome"}</div>
      {userName && (
        <Link to="/" id="go-back">
          Go Home
        </Link>
      )}
      {repositoryName && (
        <Link to={`/${userName}`} id="go-repository-list">
          Go Back
        </Link>
      )}
    </nav>
  );
};

Header.propTypes = {};

export default React.memo(Header);
