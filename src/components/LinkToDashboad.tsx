import React from 'react';
import { Link } from 'react-router-dom';

const LinkToDashboad = () => {
  return (
    <Link to="/" className="text-light bg-dark">
      Go to Dashboard
    </Link>
  );
};

export default LinkToDashboad;
