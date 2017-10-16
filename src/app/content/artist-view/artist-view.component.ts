import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { View } from '../../view/view.model';
import * as viewIds from '../../view/view.ids';

interface AppState{
  view: View
}

@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.css']
})
export class ArtistViewComponent implements OnInit {
  view: Observable<View>
  viewIds = viewIds

  constructor(private store: Store<AppState>){
    this.view = store.select('view');
	}

  ngOnInit() {
  }
}
