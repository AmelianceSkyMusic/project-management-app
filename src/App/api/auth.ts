import {
	IUser,
} from '~/App/types/api';

import { postCommon } from './common/post';

type TUser = Promise<{
   data: IUser ;
   status: number;
} | {
   data: null;
   status: number | null;
}>

export const createUser = (body: IUser) => postCommon(body, '/auth/signup') as TUser;
export const loginUser = (body: IUser) => postCommon(body, '/auth/signin') as TUser;
