import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.css']
})
export class MenuSectionComponent implements OnInit {
  listHeader = 'Library';
  listItems = [{display:"Playlists", id:"PLAYLIST_PAGE"},
    {display:"Artists", id:"ARTIST_PAGE"}, 
    {display:"Songs", id:"SONGS_PAGE"}, 
    {display:"Albums", id:"ALBUMS_PAGE"}];
  selectedId = 'SONGS_PAGE';

  selectListItem(id){
    this.selectedId = id;
  }

  constructor() { }

  ngOnInit() {
  }

}
