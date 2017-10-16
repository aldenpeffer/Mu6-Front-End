import { ActionReducer } from '@ngrx/store';
import * as viewIds from './view.ids';
import { View } from './view.model';
import * as ActionTypes from './view.actions.types';

/*FAKE LIBRARY -- DELETE LATER*/
const fakeLibrary = [
	{ id: 1, name: "Song A", artist: {id: 1, name: "Artist A"},
	album: {id: 1, name: "Album A"}, runtime: "1:49"},

	{ id: 2, name: "Hips Don't Lie", artist: {id: 3, name: "Shakira"},
	album: {id: 7, name: "Cool Album Bro"}, runtime: "2:21"},

	{ id: 3, name: "Bleed It Out", artist: {id: 14, name: "Creepy Dudes"},
	album: {id: 19, name: "Test Album"}, runtime: "6:37"},

	{ id: 4, name: "Prayer of the Refugee", artist: {id: 6, name: "Rise Against"},
	album: {id: 3, name: "Generic Album Name"}, runtime: "5:43"},
]

const defaultState: View  = {
	viewId: viewIds.ARTIST_LIB,
	viewData: { test: "Hello world!" },
}

const newState = (state, newData) => {
	return Object.assign({}, state, newData)
}

export function viewReducer(state: View = defaultState, action) {
	console.log(action.type)
	console.log(action.payload)
	
	let payload = action.payload;
	switch (action.type) {
		case ActionTypes.UPDATE:
			return newState(state, payload)

		case ActionTypes.LOAD_LIBRARY:
			//Get library data
			payload.library = fakeLibrary;
			return newState(state, payload)
			
		case ActionTypes.LOAD_ALBUM:
			return newState(state, payload)

		case ActionTypes.LOAD_ARTIST:
			return newState(state, payload)

		case ActionTypes.DO_NOTHING:
			console.log("Do nothing!")
			return state;

		default:
			return state;
	}
}