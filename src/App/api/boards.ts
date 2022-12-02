import { IBoard, IPostBoard } from '../types/api';
import { deleteCommon } from './common/delete';
import { getCommon } from './common/get';
import { arrToStr } from './common/helpers';
import { postCommon } from './common/post';
import { putCommon } from './common/put';

type TAllBoards = Promise<{
   data: IBoard[];
   status: number;
} | {
   data: null;
   status: number | null;
}>

type TBoard = Promise<{
   data: IPostBoard;
   status: number;
} | {
   data: null;
   status: number | null;
}>

export const getAllBoards = () => getCommon('/boards') as TAllBoards;
export const createBoard = (body: IPostBoard) => postCommon(body, '/boards') as TBoard;
export const getBoardById = (boardId: string) => getCommon(`/boards/${boardId}`) as TBoard;
export const updateBoardById = (body: IPostBoard, boardId: string) => putCommon(body, `/boards/${boardId}`) as TBoard;
export const deleteBoardById = (boardId: string) => deleteCommon(`/boards/${boardId}`) as TBoard;
export const getBoardsByIdList = (boardId: string[]) => getCommon(`/boardsSet?ids=${arrToStr(boardId)}`) as TAllBoards;
export const getBoardsByUserId = (userId: string[]) => getCommon(`/boardsSet/${(userId)}`) as TAllBoards;
