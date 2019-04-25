import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
item:any ; //"https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png?w=70";
  data = undefined;
  constructor(private http: HttpClient,
    private sanitizer: DomSanitizer) {
  }

  mainContacts = [{name: 'Pavan', role: 'manager', id: 1},{name: 'Pavan', role: 'manager', id:2}]
}
