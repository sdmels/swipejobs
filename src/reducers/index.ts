import { combineReducers } from 'redux';

import jobs from './jobs';
import authedUser from './authedUser';
import users from './users';

export default combineReducers({ jobs, authedUser, users });
