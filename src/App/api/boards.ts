import { IBoard } from '../types/api';
import { getCommon } from './common/get';
import { postCommon } from './common/post';

export const getAllBoards = () => getCommon('/boards');
export const createBoard = (body: IBoard) => postCommon(body, '/boards');
export const getBoardById = (boardId: string) => getCommon(`/boards/${boardId}`);
