import * as ActionTypes from './view.actions.types';

function createAction(type, payload){
    return { type, payload }
}

export function genUpdate(viewId, viewData){
    return createAction(ActionTypes.UPDATE, {viewId, viewData});
}

export function genDoNothing(){
    return createAction(ActionTypes.DO_NOTHING, {});
}