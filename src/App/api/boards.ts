import { IBoard } from '../types/api';
import { deleteCommon } from './common/deleteCommon';
import { getCommon } from './common/getCommon';
import { postCommon } from './common/postCommon';
import { putCommon } from './common/putCommon';
import { arrToStr } from './helpers/arrToStr';

const getAllBoards = () => getCommon('/boards');
const createBoard = (body: IBoard) => postCommon(body, '/boards');
const getBoardById = (boardId: string) => getCommon(`/boards/${boardId}`);
const updateBoardById = (body: IBoard, boardId: string) => putCommon(body, `/boards/${boardId}`);
const deleteBoardById = (boardId: string) => deleteCommon(`/boards/${boardId}`);
const getBoardsByIdsList = (boardId: string[]) => getCommon(`/boardsSet?ids=${arrToStr(boardId)}`);
const getBoardsByUserId = (userId: string) => getCommon(`/boardsSet/${(userId)}`);

export const boards = {
	getAllBoards,
	createBoard,
	getBoardById,
	updateBoardById,
	deleteBoardById,
	getBoardsByIdsList,
	getBoardsByUserId,
};
