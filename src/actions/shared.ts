import { getInitialData } from 'Api';

import { receiveUsers } from './users';
import { receiveJobs } from './jobs';
import { setAuthedUser } from './authedUser';

const AUTHED_USER_ID = '7f90df6e-b832-44e2-b624-3143d428001f';

export const handleInitialData = () => {
  return (dispatch: any) => {
    dispatch(setAuthedUser(AUTHED_USER_ID));
    getInitialData().then(({ users, jobs }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveJobs(jobs));
    });
  };
};
