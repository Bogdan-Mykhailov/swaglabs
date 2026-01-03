export interface IUserData {
  username: string;
  password: string;
}

export const LOGIN_PAGE_DATA = {
  lockedUserErrorMessage: 'Epic sadface: Sorry, this user has been locked out.',
  emptyUserCredentialErrorMessage: 'Epic sadface: Username is required',
  credentialsTitle: 'Accepted usernames are:',
  passwordTitle: 'Password for all users:'
};

export const USER_CREDENTIALS = {
  standard: 'standard_user',
  locked_out: 'locked_out_user',
  problem: 'problem_user',
  performance_glitch: 'performance_glitch_user',
  error: 'error_user',
  visual: 'visual_user',
  password: process.env.TEST_USER_PASSWORD,
};
