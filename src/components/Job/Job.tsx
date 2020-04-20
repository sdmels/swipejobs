import React, { useState } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useParams } from 'react-router-dom';

import './Job.scss';

import { acceptJob, rejectJob } from 'Api';

import Notification from './Notification';
import Details from './Details';
import Rate from './Rate';
import ShiftInfo from './ShiftInfo';
import LocationInfo from './LocationInfo';
import RequirementInfo from './RequirementInfo';
import ReporteeInfo from './ReporteeInfo';

const Job = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { jobId } = useParams();

  const jobs = useSelector(({ jobs }: RootStateOrAny) =>
    Object.keys(jobs)
      .map((key) => jobs[key])
      .filter((job) => job.jobId === jobId),
  );

  const handleClick = (accept: boolean) => {
    const apiEndPoint = accept ? acceptJob : rejectJob;

    apiEndPoint()
      .then((result) => {
        if (result.success) {
          setSuccess(true);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  };

  return (
    <div className="job bg-light d-flex container flex-column pt-3 pb-3">
      {error && <Notification color="bg-danger" message="Please try again or" />}
      {success && <Notification color="bg-primary" message="Action accepeted. Pick a new job" />}
      {jobs.map((job) => (
        <div className="bg-white" key={job.jobId}>
          <img src={job.jobTitle.imageUrl} alt={`${job.jobTitle.name}`} />
          <Details jobTitle={job.jobTitle.name} companyName={job.company.name} />
          <Rate distance={job.milesToTravel} wage={job.wagePerHourInCents} />

          <ul className="job__details">
            <ShiftInfo shifts={job.shifts} />
            <LocationInfo
              distance={job.milesToTravel}
              address={job.company.address.formattedAddress}
            />
            {job.requirements && <RequirementInfo requirements={job.requirements} />}
            <ReporteeInfo name={job.company.reportTo.name} phoneNumber={job.branchPhoneNumber} />
          </ul>

          <div className="p-3 d-flex justify-content-around">
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                handleClick(false);
              }}
            >
              No Thanks
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                handleClick(true);
              }}
            >
              I'll Take it
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Job;
