import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements  OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;
  constructor(private authService: AuthService ) { }

  ngOnInit() {
  this.authSubscription = this.authService.authChange.subscribe(status => {
this.isAuth = status;
    });
  }
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
  ngOnDestroy() {
this.authSubscription.unsubscribe();
  }
  onLogout() {
     this.authService.logout();
  }
  }


