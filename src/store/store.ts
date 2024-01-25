import { configureStore } from '@reduxjs/toolkit';
import { upcomingSessionsSlice } from './upcoming-sessions-slice';

export const store = configureStore({
	reducer: {
		upcomingSessions: upcomingSessionsSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
