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
<<<<<<< HEAD
import { MatToolbarModule, MatButtonModule, MatSidenavModule,
 MatIconModule, MatListModule, MatCardModule, MatDatepickerModule,
MatNativeDateModule, MatRadioModule, MatSelectModule, MatOptionModule,
MatSlideToggleModule, MatTooltipModule, MatSnackBarModule } from '@angular/material';
=======
>>>>>>> a1d5c5099bc13b93dc71ec15e055967864578328
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { FormDemandeComponent } from './form-demande/form-demande.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarService } from './services/navbar/navbar.service';
<<<<<<< HEAD
import { FromCollaborateurComponent } from './from-collaborateur/from-collaborateur.component';
import { CollaborateurService } from './services/collaborateur.service';
import { FlexLayoutModule } from '@angular/flex-layout';
=======
import { Routes } from '@angular/router';
import { MatButtonModule,MatIconModule,MatToolbarModule,MatListModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule, MatTooltipModule } from '@angular/material';


const appRoutes: Routes = [
  { path: 'listdemandes', component: DemandeComponent },
  { path: 'accueil', component: HomeComponent },
  { path: 'login', component: SignInComponent },
  { path: 'listvals', component: ValidateurComponent },
  { path: 'listcollabs', component: CollaborateurComponent },
];

>>>>>>> a1d5c5099bc13b93dc71ec15e055967864578328
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
    FormDemandeComponent,
    FromCollaborateurComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
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
    MatSnackBarModule,
    MatTooltipModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    MatTooltipModule,
    FlexLayoutModule
=======
    ReactiveFormsModule

>>>>>>> a1d5c5099bc13b93dc71ec15e055967864578328
  ],
  providers: [
    DemandeService,
    NavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
