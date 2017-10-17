import * as ActionTypes from './view.actions.types';
import * as viewIds from './view.ids';

function createAction(type, payload){
    return { type, payload }
}

export function genUpdate(viewId, viewData){
    return createAction(ActionTypes.UPDATE, {viewId, viewData});
}

export function genDoNothing(){
    return createAction(ActionTypes.DO_NOTHING, {});
}

export function genLoadLibrary(viewId){
    return createAction(ActionTypes.LOAD_LIBRARY, {viewId});
}

export function genLoadAlbum(albumId){
    const viewId = viewIds.ALBUM;
    return createAction(ActionTypes.LOAD_ALBUM, {albumId, viewId});
}

export function genLoadArtist(artistId){
    const viewId = viewIds.ARTIST;
    return createAction(ActionTypes.LOAD_ARTIST, {artistId, viewId});
}

export function playSong(songId) {
    return createAction(ActionTypes.PLAY_SONG, {currSongId: songId});
}