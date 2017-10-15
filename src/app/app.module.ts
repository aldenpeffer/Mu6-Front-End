import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { viewReducer } from './view/view.reducer';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuSectionComponent } from './menu/menu-section/menu-section.component';
import { FormsModule } from '@angular/forms';
import { SocialComponent } from './social/social.component';
import { UserInfoComponent } from './social/user-info/user-info.component';
import { ContentComponent } from './content/content.component';
import { SongViewComponent } from './content/song-view/song-view.component';
import { AlbumViewComponent } from './content/album-view/album-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuSectionComponent,
    SocialComponent,
    UserInfoComponent,
    ContentComponent,
    SongViewComponent,
    AlbumViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.provideStore({ view: viewReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
