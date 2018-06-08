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
import { MatToolbarModule, MatButtonModule, MatSidenavModule,
 MatIconModule, MatListModule, MatCardModule, MatDatepickerModule,
MatNativeDateModule, MatRadioModule, MatSelectModule, MatOptionModule,
MatSlideToggleModule, MatTooltipModule, MatSnackBarModule, } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { FormDemandeComponent } from './form-demande/form-demande.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarService } from './services/navbar/navbar.service';
import { FromCollaborateurComponent } from './from-collaborateur/from-collaborateur.component';
import { CollaborateurService } from './services/collaborateur.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
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
    FromCollaborateurComponent,
    SidenavListComponent
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
    ReactiveFormsModule,
    MatTooltipModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatSidenavModule

  ],
  providers: [
    DemandeService,
    NavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
