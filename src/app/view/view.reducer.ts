import { ActionReducer } from '@ngrx/store';
import * as viewIds from './view.ids';
import { View } from './view.model';
import * as ActionTypes from './view.actions.types';

const defaultState: View  = {
	viewId: viewIds.SONG,
	viewData: { test: "Hello world!" }
}

const newState = (state, newData) => {
	return Object.assign({}, state, newData)
}

export function viewReducer(state: View = defaultState, action) {
	const data = action.payload;
	switch (action.type) {
		case ActionTypes.UPDATE:
			return newState(state, { viewId: data.viewId, viewData: data.viewData })

		case ActionTypes.DO_NOTHING:
			console.log("Do nothing!")
			return state;

		default:
			return state;
	}
}