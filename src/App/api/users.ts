/* eslint-disable simple-import-sort/imports */
import { IUser } from '~/App/types/api';
import { deleteCommon } from './common/delete';
import { getCommon } from './common/get';
import { putCommon } from './common/put';

export const getAllUsers = () => getCommon('/users');
export const getUserById = (userId: string) => getCommon(`/users/${userId}`);
export const updateUserById = (userId: string, body: IUser) => putCommon(body, `/users/${userId}`);
export const deleteUserById = (userId: string) => deleteCommon(`/users/${userId}`);
