import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { View } from '../../view/view.model';
import * as viewIds from '../../view/view.ids';
import * as ActionGenerator from '../../view/view.actions';

interface AppState{
  view: View
}

@Component({
  selector: 'app-artist-lib-view',
  templateUrl: './artist-lib-view.component.html',
  styleUrls: ['./artist-lib-view.component.css']
})
export class ArtistLibViewComponent implements OnInit {
  view: Observable<View>
  viewIds = viewIds

  constructor(private store: Store<AppState>){
    this.view = store.select('view');
	}

  ngOnInit() {
  }

  loadArtist(artistId){
    this.store.dispatch(ActionGenerator.genLoadArtist(artistId));
  }

}
