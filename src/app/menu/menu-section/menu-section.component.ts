import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as viewIds from '../../view/view.ids';
import * as ActionGenerator from '../../view/view.actions';
import { View } from '../../view/view.model';

interface AppState{
  view: View
}

//Helper function to create action payload
const createAction = (type, payload) => {
    return {type, payload}
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

  view: Observable<View>
  viewIds = viewIds

  updateView(id){
    this.store.dispatch(ActionGenerator.genUpdate(id, {}))
  }

  constructor(private store: Store<AppState>){
    this.view = store.select('view');
  }

  ngOnInit() {
  }

}
