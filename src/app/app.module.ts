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
import { SongLibViewComponent } from './content/song-lib-view/song-lib-view.component';
import { AlbumLibViewComponent } from './content/album-lib-view/album-lib-view.component';
import { FooterComponent } from './footer/footer.component';
import { ArtistLibViewComponent } from './content/artist-lib-view/artist-lib-view.component';
import { ArtistViewComponent } from './content/artist-view/artist-view.component';
import { AlbumViewComponent } from './content/album-view/album-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuSectionComponent,
    SocialComponent,
    UserInfoComponent,
    ContentComponent,
    SongLibViewComponent,
    AlbumLibViewComponent,
    FooterComponent,
    ArtistLibViewComponent,
    ArtistViewComponent,
    AlbumViewComponent
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
