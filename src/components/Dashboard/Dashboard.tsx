import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card/Card';

const Dashboard = () => {
  const jobs = useSelector((state: any) => {
    const { jobs } = state;
    return Object.keys(jobs).map((key) => jobs[key]);
  });

  return (
    <div className="dashboard container">
      <div className="d-flex flex-wrap">
        {jobs.map((job) => (
          <div className="m-3 align-self-stretch d-flex" key={job.jobId}>
            <Card
              title={job.jobTitle.name}
              id={job.jobId}
              imageUrl={job.jobTitle.imageUrl}
              info={job.company.name}
              address={job.company.address.formattedAddress}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
