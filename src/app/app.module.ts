import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {PrivacyComponent} from "./privacy/privacy.component";
import { HomePageComponent } from './home-page/home-page.component';
import { TermsComponent } from './terms/terms.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},

  {path: 'privacy', component: PrivacyComponent},
  {path: 'termsofuse', component: TermsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PrivacyComponent,
    HomePageComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
