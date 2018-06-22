import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidateurComponent } from './Validateur/validateur.component';
import { HomeComponent } from './home/home.component';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { AdminComponent } from './admin/admin.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { DemandeComponent } from './demande/demande.component';
import { FormDemandeComponent } from './form-demande/form-demande.component';
import { FromCollaborateurComponent } from './from-collaborateur/from-collaborateur.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: 'listdemandes', component: DemandeComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent },
  { path: 'login', component: SignInComponent },
  { path: 'listvals', component: ValidateurComponent, canActivate: [AuthGuard] },
  { path: 'listcollabs', component: CollaborateurComponent, canActivate: [AuthGuard]  },
  { path: 'frmCollaborateur', component: FromCollaborateurComponent, canActivate: [AuthGuard] },
  { path: 'newdemande', component: FormDemandeComponent, canActivate: [AuthGuard]},
  { path: 'login' , component: SignInComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
