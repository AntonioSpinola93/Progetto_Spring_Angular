import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponentComponent } from './contact-list-component/contact-list.component';
import { LoginComponent } from './login/login.component';
import { NomeComponenteComponent } from './nome-componente/nome-componente.component';
import { LogOutComponent } from './log-out/log-out.component';
import { TextGenerationComponent } from './text-generation/text-generation.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    ContactFormComponent,
    ContactListComponentComponent,
    LoginComponent,
    NomeComponenteComponent,
    LogOutComponent,
    TextGenerationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
