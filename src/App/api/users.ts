import { IUser } from '~/App/types/api';

import { deleteCommon } from './common/deleteCommon';
import { getCommon } from './common/getCommon';
import { putCommon } from './common/putCommon';

export const getAllUsers = () => getCommon('/users');
export const getUserById = (userId: string) => getCommon(`/users/${userId}`);
export const updateUserById = (userId: string, body: IUser) => putCommon(body, `/users/${userId}`);
export const deleteUserById = (userId: string) => deleteCommon(`/users/${userId}`);

export const users = {
	getAllUsers,
	getUserById,
	updateUserById,
	deleteUserById,
};
