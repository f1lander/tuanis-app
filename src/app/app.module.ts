import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { SocialProfileListComponent } from './components/social-profile-list/social-profile-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileHeaderComponent,
    ArticleListComponent,
    PropertyListComponent,
    SocialProfileListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
