import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { API_LANGUAGES_URL, API_LOGIN_URL  } from '../shared/constants/constants';
import { LanguagesListComponent } from './languages-list/languages-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguagesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: 'API_Languages_URL', useValue: API_LANGUAGES_URL },
    { provide: 'API_Login_URL', useValue: API_LOGIN_URL },
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
