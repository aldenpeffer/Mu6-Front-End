import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as actionTypes from '../view/view.actions';
import * as viewIds from '../view/view.ids';

interface AppState{
  view: Object
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  view: Observable<Object>
  viewIds = viewIds

  constructor(private store: Store<AppState>){
    this.view = store.select('view');
	}

  ngOnInit() {
  }

}
