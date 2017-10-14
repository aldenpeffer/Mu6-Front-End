import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuSectionComponent } from './menu/menu-section/menu-section.component';
import { FormsModule } from '@angular/forms';
import { SocialComponent } from './social/social.component';
import { UserInfoComponent } from './social/user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuSectionComponent,
    SocialComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
