interface UserApiProps {
  USER_CREATE: string;
  USER_AUTH: string;
}

export const UserURLS: UserApiProps = {
  USER_CREATE: '/api/user/create',
  USER_AUTH: '/api/user/auth',
};
