import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { NavbarService } from '../services/navbar/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(public nav : NavbarService) { }

  ngOnInit() {
    this.nav.show();
  }

  onLogout(){
   
  }

}
