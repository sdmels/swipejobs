export const RECEIVE_JOBS = 'RECEIVE_JOBS';

export function receiveJobs(jobs: any) {
  return {
    type: RECEIVE_JOBS,
    jobs,
  };
}
