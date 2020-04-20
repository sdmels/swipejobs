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
      <div className="row pt-3">
        {jobs.map((job) => (
          <div className="col-md-6 mb-3" key={job.jobId}>
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
