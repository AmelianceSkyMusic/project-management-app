/* eslint-disable simple-import-sort/imports */
import { getCommon } from './common/get';

export const getAllUsers = () => getCommon('/users');
export const getUserById = (userId: string) => getCommon(`/users/${userId}`);
