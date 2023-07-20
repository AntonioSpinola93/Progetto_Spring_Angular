
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponentComponent } from './contact-list-component/contact-list.component';
import { LoginComponent } from './login/login.component';
import { FatturaComponent } from './fattura/fattura.component';
import { LogOutComponent } from './log-out/log-out.component';
import { TextGenerationComponent } from './text-generation/text-generation.component';
const routes: Routes = [
{ path: '', redirectTo: 'tutorials', pathMatch: 'full' },
{ path: 'tutorials', component: TutorialsListComponent },
{ path: 'tutorials/:id', component: TutorialDetailsComponent },
{ path: 'add', component: AddTutorialComponent },
{ path: 'contact', component: ContactFormComponent },
{ path: 'requests', component: ContactListComponentComponent },
{ path: 'login', component: LoginComponent }, // Aggiunto percorso per LoginComponent
{ path: 'fattura', component: FatturaComponent }, // Aggiunto percorso per LoginComponent

{ path: 'logout', component: LogOutComponent },
{ path: 'ChatGpt', component: TextGenerationComponent },
];

@NgModule({
imports: [RouterModule.forRoot(routes), FormsModule], // Aggiunto FormsModule
exports: [RouterModule]
})
export class AppRoutingModule { }