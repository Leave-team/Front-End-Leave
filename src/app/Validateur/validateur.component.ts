import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validateur',
  templateUrl: './validateur.component.html',
  styleUrls: ['./validateur.component.css']
})
export class ValidateurComponent implements OnInit {

  test: string;
  test2: Number;

  constructor() {
    this.test = 'test from salah branch';
   }

  ngOnInit() {
  }

}
