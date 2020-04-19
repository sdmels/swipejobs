import { RECEIVE_JOBS } from '../actions/jobs';

const jobs = (state = {}, action: any) => {
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
