import { RECEIVE_USERS } from '../actions/users';
import { User } from 'models/User';

export interface UserAction {
  type: typeof RECEIVE_USERS;
  users: User;
}

const users = (state = {}, action: UserAction) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
};

export default users;
