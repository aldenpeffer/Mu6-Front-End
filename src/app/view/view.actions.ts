import { Action } from '@ngrx/store';
import { View } from './view.model';

export const UPDATE = '[View] Update';
export const DO_NOTHING = '[View] DummyAction';

function createAction(type, payload){
    return { type, payload }
}

export function genUpdate(viewId, viewData){
    return { type }
}

export function genDoNothing(){

}

export type All = Update | DoNothing;