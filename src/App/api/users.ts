import { IUser } from '~/App/types/api';

import { deleteCommon } from './common/deleteCommon';
import { getCommon } from './common/getCommon';
import { putCommon } from './common/putCommon';

const getAllUsers = () => getCommon('/users');
const getUserById = (userId: string) => getCommon(`/users/${userId}`);
const updateUserById = (userId: string, body: IUser) => putCommon(body, `/users/${userId}`);
const deleteUserById = (userId: string) => deleteCommon(`/users/${userId}`);

export const users = {
	getAllUsers,
	getUserById,
	updateUserById,
	deleteUserById,
};
