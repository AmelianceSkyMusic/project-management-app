import {
	IUser,
} from '~/App/types/api';

import { postCommon } from './common/postCommon';

const signIn = (body: IUser) => postCommon(body, '/auth/signin');
const signUp = (body: IUser) => postCommon(body, '/auth/signup');

export const auth = {
	signIn,
	signUp,
};
