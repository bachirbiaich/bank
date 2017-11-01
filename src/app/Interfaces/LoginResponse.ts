import { User } from '../Classes/user';

export interface LoginResponse {
    user:User,
    token: string,
    hasErrors: boolean,
    message: string,
  }