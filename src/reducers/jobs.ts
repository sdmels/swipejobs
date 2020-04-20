import { RECEIVE_JOBS } from '../actions/jobs';
import { Jobs } from 'models/Jobs';

export interface JobAction {
  type: typeof RECEIVE_JOBS;
  jobs: Jobs;
}

const jobs = (state = {}, action: JobAction) => {
  switch (action.type) {
    case RECEIVE_JOBS:
      return {
        ...state,
        ...action.jobs,
      };
    default:
      return state;
  }
};

export default jobs;
