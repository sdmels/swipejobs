import { SET_AUTHED_USER } from '../actions/authedUser';

export interface AuthedUserAction {
  type: typeof SET_AUTHED_USER;
  id: string;
}

const authedUser = (state = null, action: AuthedUserAction) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
};

export default authedUser;
