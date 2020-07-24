import { combineReducers } from 'redux';
import UsersReducers from './users';
import UserActive from './user-active';
import SearchFlags from './searchFlags';

const allReducers = combineReducers({
  users: UsersReducers,
  userActive: UserActive,
  searchFlags: SearchFlags,
});

export default allReducers;
