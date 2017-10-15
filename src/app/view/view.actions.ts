import { Action } from '@ngrx/store';

export const UPDATE = '[View] Update';
export const DO_NOTHING = '[View] DummyAction';

export class Update implements Action{
    readonly type = UPDATE;

    constructor(public payload: Object){}
}

export class DoNothing implements Action{
    readonly type = DO_NOTHING;
}

export type All = Update | DoNothing;