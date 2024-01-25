import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type Session } from '../components/session-item';

type UpcomingSession = {
	id: string;
	title: string;
	summary: string;
	image: string;
	date: string;
};

type SessionState = {
	upcomingSessions: UpcomingSession[];
};

const initialState: SessionState = {
	upcomingSessions: [],
};

export const upcomingSessionsSlice = createSlice({
	name: 'upcomingSessions',
	initialState,
	reducers: {
		addUpcomingSession: (state, action: PayloadAction<Session>) => {
			const index = state.upcomingSessions.findIndex((session) => {
				return session.id === action.payload.id;
			});

			if (index === 0) {
				return;
			}

			state.upcomingSessions.push({
				...state.upcomingSessions,
				...action.payload,
			});
		},
		removeUpcomingSession: (state, action: PayloadAction<string>) => {
			const index = state.upcomingSessions.findIndex((session) => {
				return session.id === action.payload;
			});

			if (index === 0) {
				state.upcomingSessions.splice(index, 1);
			}
		},
	},
});

export const { addUpcomingSession, removeUpcomingSession } =
	upcomingSessionsSlice.actions;

export default upcomingSessionsSlice.reducer;
