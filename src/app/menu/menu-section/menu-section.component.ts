import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as viewIds from '../../view/view.ids';
import * as actionTypes from '../../view/view.actions';

interface AppState{
  view: Object
}

//Helper function to create action payload
const createPayload = (viewId, viewData) => {
    return {viewId, viewData}
}

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.css']
})
export class MenuSectionComponent implements OnInit {
  listHeader = 'Library';
  listItems = [{display:"Playlists", id: viewIds.PLAYLISTS},
    {display:"Artists", id: viewIds.ARTIST}, 
    {display:"Songs", id: viewIds.SONG}, 
    {display:"Albums", id: viewIds.ALBUM}];
  selectedId = viewIds.SONG;

  selectListItem(id){
    this.store.dispatch({ type: actionTypes.UPDATE_VIEW, { viewId: id, } });
    this.selectedId = id;
  }

  view: Observable<Object>
  viewIds = viewIds

  constructor(private store: Store<AppState>){
    this.view = store.select('view');
	}

  ngOnInit() {
  }

}
