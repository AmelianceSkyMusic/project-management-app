import { ICreateBoard } from '~types/api/boards/createBoard';
import { IUpdateBoardById } from '~types/api/boards/updateBoardById';

import { deleteCommon } from './common/deleteCommon';
import { getCommon } from './common/getCommon';
import { postCommon } from './common/postCommon';
import { putCommon } from './common/putCommon';
import { arrToStr } from './helpers/arrToStr';

export const getAllBoards = () => getCommon('/boards');
export const createBoard = (body: ICreateBoard) => postCommon(body, '/boards');
export const getBoardById = (boardId: string) => getCommon(`/boards/${boardId}`);
export const updateBoardById = ({ body, boardId }: IUpdateBoardById) => putCommon(body, `/boards/${boardId}`);
export const deleteBoardById = (boardId: string) => deleteCommon(`/boards/${boardId}`);
export const getBoardsByIdsList = (boardId: string[]) => getCommon(`/boardsSet?ids=${arrToStr(boardId)}`);
export const getBoardsByUserId = (userId: string) => getCommon(`/boardsSet/${(userId)}`);

export const boards = {
	getAllBoards,
	createBoard,
	getBoardById,
	updateBoardById,
	deleteBoardById,
	getBoardsByIdsList,
	getBoardsByUserId,
};
