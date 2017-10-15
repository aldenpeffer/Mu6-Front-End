import { ActionReducer, Action } from '@ngrx/store';
import * as viewIds from './view.ids';
import { View } from './view.model';
import * as ViewActions from './view.actions';

export type Action = ViewActions.All; 

const defaultState: View  = {
	viewId: viewIds.SONG,
	viewData: { test: "Hello world!" }
}

const newState = (state, newData) => {
	return Object.assign({}, state, newData)
}

export function viewReducer(state: View = defaultState, action: Action) {
	const data = action.payload;
	switch (action.type) {
		case ViewActions.UPDATE:
			return newState(state, { viewId: data.viewId, viewData: data.viewData })

		case ViewActions.DO_NOTHING:
			console.log("Do nothing!")
			return state;

		default:
			return state;
	}
}