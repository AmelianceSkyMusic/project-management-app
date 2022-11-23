import { IUser } from '~/App/types/api';

import { postCommon } from './common/post';

export const createUser = (body: IUser) => postCommon(body, '/auth/signup');
export const loginUser = (body: IUser) => postCommon(body, '/auth/signin');
