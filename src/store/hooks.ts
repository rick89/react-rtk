import {
	useDispatch,
	useSelector,
	type TypedUseSelectorHook,
} from 'react-redux';
import { type AppDispatch, RootState } from './store.ts';

type DispatchFunction = () => AppDispatch;

export const useUpcomingSessionsDispatch: DispatchFunction = useDispatch;
export const useUpcomingSessionsSelector: TypedUseSelectorHook<RootState> =
	useSelector;
