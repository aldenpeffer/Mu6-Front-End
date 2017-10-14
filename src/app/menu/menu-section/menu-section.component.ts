import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.css']
})
export class MenuSectionComponent implements OnInit {
  listHeader = 'test';
  listItems = [["item1", "link1"], ["item2", "link2"], ["item3", "link3"], ["item4", "link4"]];
  selected = 1;

  selectListItem(index){
    console.log(index);
  }

  constructor() { }

  ngOnInit() {
  }

}
