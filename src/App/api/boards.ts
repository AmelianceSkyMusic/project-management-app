import { IBoard } from '../types/api';
import { deleteCommon } from './common/delete';
import { getCommon } from './common/get';
import { arrToStr } from './common/helpers';
import { postCommon } from './common/post';

export const getAllBoards = () => getCommon('/boards');
export const createBoard = (body: IBoard) => postCommon(body, '/boards');
export const getBoardById = (boardId: string) => getCommon(`/boards/${boardId}`);
export const deleteBoardById = (boardId: string) => deleteCommon(`/boards/${boardId}`);
export const getBoardByIdList = (boardId: string[]) => getCommon(`/boardsSet?ids=${arrToStr(boardId)}`);
