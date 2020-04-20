import React from 'react';

interface Props {
  jobTitle: string;
  companyName: string;
}

const Details = ({ jobTitle, companyName }: Props) => {
  return (
    <div className="container mt-3">
      <h3>{jobTitle}</h3>
      <strong>{companyName}</strong>
    </div>
  );
};

export default Details;
