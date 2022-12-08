import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { store } from '~store/store';

export type TRootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;
