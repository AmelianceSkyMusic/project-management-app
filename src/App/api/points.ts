import { deleteCommon } from './common/delete';
import { getCommon } from './common/get';
import { queryGenerator } from './common/helpers';
import { patchCommon } from './common/patch';
import { postCommon } from './common/post';
import { putCommon } from './common/put';

export const getPointsByIdsListOrUserId = (listId: string[], userId: string) => getCommon(`/points?${queryGenerator(listId, userId)}`);
