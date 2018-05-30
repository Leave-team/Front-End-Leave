import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidateurComponent } from './Validateur/validateur.component';
import { HomeComponent } from './home/home.component';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { AdminComponent } from './admin/admin.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { DemandeComponent } from './demande/demande.component';
const routes: Routes = [
  { path: 'listdemandes', component: DemandeComponent },
  { path: 'accueil', component: HomeComponent },
  { path: 'login', component: SignInComponent },
  { path: 'listvals', component: ValidateurComponent },
  { path: 'listcollabs', component: CollaborateurComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
