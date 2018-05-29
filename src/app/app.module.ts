import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidateurComponent } from './Validateur/validateur.component';
import { HomeComponent } from './home/home.component';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { AdminComponent } from './admin/admin.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { DemandeComponent } from './demande/demande.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ValidateurComponent,
    HomeComponent,
    CollaborateurComponent,
    AdminComponent,
    LogInComponent,
    SignInComponent,
    DemandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
