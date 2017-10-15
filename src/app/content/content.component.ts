import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as ViewActions from '../view/view.actions';
import { View } from '../view/view.model';
import * as viewIds from '../view/view.ids';

interface AppState{
  view: View
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  view: Observable<View>
  viewIds = viewIds

  constructor(private store: Store<AppState>){
    this.view = store.select('view');
	}

  ngOnInit() {
  }

}
