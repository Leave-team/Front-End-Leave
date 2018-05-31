import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidateurComponent } from './Validateur/validateur.component';
import { HomeComponent } from './home/home.component';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { AdminComponent } from './admin/admin.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { DemandeService } from './services/demande/demande.service';
import { DemandeComponent } from './demande/demande.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatOptionModule, MatSlideToggleModule } from '@angular/material';
import { RouterModule , Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { FormDemandeComponent } from './form-demande/form-demande.component';



const appRoutes: Routes = [
  { path: 'listdemandes', component: DemandeComponent },
  { path: 'accueil', component: HomeComponent },
  { path: 'login', component: SignInComponent },
  { path: 'listvals', component: ValidateurComponent },
  { path: 'listcollabs', component: CollaborateurComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ValidateurComponent,
    HomeComponent,
    CollaborateurComponent,
    AdminComponent,
    SignInComponent,
    DemandeComponent,
    SignUpComponent,
    NavbarComponent,
    FormDemandeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule
  ],
  providers: [DemandeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
