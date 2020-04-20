import { Jobs } from 'models/Jobs';

export const RECEIVE_JOBS = 'RECEIVE_JOBS';

export function receiveJobs(jobs: Jobs) {
  return {
    type: RECEIVE_JOBS,
    jobs,
  };
}
