import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
import { FooterComponent } from './footer/footer.component';
import { ArtistViewComponent } from './content/artist-view/artist-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuSectionComponent,
    SocialComponent,
    UserInfoComponent,
    ContentComponent,
    SongViewComponent,
    AlbumViewComponent,
    FooterComponent,
    ArtistViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ view: viewReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
