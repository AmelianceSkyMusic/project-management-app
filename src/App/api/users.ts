import { IUser } from '~/App/types/api';

import { deleteCommon } from './common/delete';
import { getCommon } from './common/get';
import { putCommon } from './common/put';

type TAllIUsers = Promise<{
   data: IUser[] ;
   status: number;
} | {
   data: null;
   status: number | null;
}>

type TIUser = Promise<{
   data: IUser ;
   status: number;
} | {
   data: null;
   status: number | null;
}>

export const getAllUsers = () => getCommon('/users') as TAllIUsers;
export const getUserById = (userId: string) => getCommon(`/users/${userId}`) as TIUser;
export const updateUserById = (userId: string, body: IUser) => putCommon(body, `/users/${userId}`)as TIUser;
export const deleteUserById = (userId: string) => deleteCommon(`/users/${userId}`)as TIUser;
