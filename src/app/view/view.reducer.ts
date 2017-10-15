import { ActionReducer, Action } from '@ngrx/store';
import * as viewIds from './view.ids';
import * as actionTypes from './view.actions';

const defaultState = {
	viewId: viewIds.SONG,
	viewData: { test: "Hello world!" }
}

const newState = (state, newData) => {
	return Object.assign({}, state, newData)
}

export function viewReducer(state: Object = defaultState, action: Action) {
	const data = action.payload;
	switch (action.type) {
		case actionTypes.UPDATE_VIEW:
			return newState(state, { viewId: data.viewId, viewData: data.viewData })

		case actionTypes.DO_NOTHING:
			console.log("Do nothing!")
			return state;

		default:
			return state;
	}
}