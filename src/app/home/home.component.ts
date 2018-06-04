import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;                  // {1}

  constructor() { }

  ngOnInit() {
    
  }

  onLogout(){
   
  }

}
