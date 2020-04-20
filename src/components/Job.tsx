import React from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import { FaCalendarAlt, FaMapMarkerAlt, FaTools, FaRegUserCircle } from 'react-icons/fa';

import './Job.scss';

const Job = ({ match }: any) => {
  const jobId = match.params.id;
  const dispatch = useDispatch();
  const jobs = useSelector((state: RootStateOrAny) => {
    const jobs = state.jobs;
    return Object.keys(jobs)
      .map((key) => jobs[key])
      .filter((job) => job.jobId === jobId);
  });

  return (
    <div className="job bg-light d-flex container flex-column pt-3 pb-3">
      {jobs.map((job) => (
        <div className="bg-white" key={job.jobId}>
          <img src={job.jobTitle.imageUrl} alt={`${job.jobTitle.name}`} />
          <div className="container mt-3">
            <h3>{job.jobTitle.name}</h3>
            <strong>{job.company.name}</strong>
          </div>
          <div className="bg-secondary d-flex mt-3">
            <div className="col-md-6 pt-2 pb-2">
              <small className="text-light">Distance</small>
              <p className="h5 text-white">{Number(job.milesToTravel).toFixed(1)} miles</p>
            </div>
            <div className="col-md-6 text-right  pt-2 pb-2">
              <small className="text-light">Hourly Rate</small>
              <p className="h5 text-white">
                <sup>$</sup>
                {Number(job.wagePerHourInCents / 100).toFixed(2)}
              </p>
            </div>
          </div>
          <ul className="job__details">
            <li className="border-bottom">
              <FaCalendarAlt size="1.75rem" />
              <div className="job__details-info">
                <h5>Shift Dates</h5>
                {job.shifts.map((shift: any) => (
                  <div key={shift.startDate}>
                    <p>{shift.startDate}</p>
                    <p>{shift.endDate}</p>
                  </div>
                ))}
              </div>
            </li>
            <li className="border-bottom">
              <FaMapMarkerAlt size="1.75rem" />
              <div className="job__details-info">
                <h5>Location</h5>
                <p className="mb-0">{job.company.address.formattedAddress}</p>
                <small>{job.milesToTravel} miles from your search location</small>
              </div>
            </li>
            {job.requirements && (
              <li className="border-bottom">
                <FaTools size="1.75rem" />
                <div className="job__details-info">
                  <h5>Requirement</h5>
                  {job.requirements.map((req: any) => (
                    <p>{req}</p>
                  ))}
                </div>
              </li>
            )}
            <li>
              <FaRegUserCircle size="1.75rem" />
              <div className="job__details-info">
                <h5>Report to</h5>
                <p>
                  {job.company.reportTo.name}({job.branchPhoneNumber})
                </p>
              </div>
            </li>
          </ul>
          <div className="p-3 d-flex justify-content-around">
            <button className="btn btn-outline-secondary">No Thanks</button>
            <button className="btn btn-primary">I'll Take it</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Job;
