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
  selector: 'app-song-lib-view',
  templateUrl: './song-lib-view.component.html',
  styleUrls: ['./song-lib-view.component.css']
})
export class SongLibViewComponent implements OnInit {
  view: Observable<View>
  viewIds = viewIds

  constructor(private store: Store<AppState>){
    this.view = store.select('view');
	}

  ngOnInit() {
  }

  loadAlbum(albumId){
    this.store.dispatch(ActionGenerator.genLoadAlbum(albumId));
  }

  loadArtist(artistId){
    this.store.dispatch(ActionGenerator.genLoadArtist(artistId));
  }

  setSong(songId) {
    this.store.dispatch(ActionGenerator.playSong(songId));
  }
}
