import API from '../../helper/axios-instance';
import {UserAuthBodyProps, UserCreateBodyProps} from './User-Interface';
import {UserURLS} from './user-urls';

const createUser = async (body: UserCreateBodyProps) => {
  return API.post(UserURLS.USER_CREATE, body);
};

const authUser = async (body: UserAuthBodyProps) => {
  return API.post(UserURLS.USER_AUTH, body);
};

export const UserAPI = {
  createUser,
  authUser,
};
