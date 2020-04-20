import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import Card from '../Card/Card';

const Dashboard = () => {
  const jobs = useSelector(({ jobs }: RootStateOrAny) => Object.keys(jobs).map((key) => jobs[key]));

  return (
    <div className="container d-flex flex-wrap">
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
  );
};

export default Dashboard;
