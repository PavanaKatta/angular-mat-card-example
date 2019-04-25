import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'hello',
  template: ` <img [src]="item1"
       alt="Place image title">`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit   {
  @Input() item: number;
item1: any;
   constructor(private http: HttpClient,
    private sanitizer: DomSanitizer) {
    
  }
    ngOnInit() {
  this.load(this.item);
    }

   load(id:number) {
     if(id == 1){
      this.http
            .get(`https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png?w=70`, { responseType: 'blob' })
            .subscribe(response => {
              this.item1  = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(new Blob([response], { type: 'image/png' })))
              //alert(this.item);
            });
     }
    else {
      this.http
            .get(`https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png?w=200`, { responseType: 'blob' })
            .subscribe(response => {
              this.item1  = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(new Blob([response], { type: 'image/png' })))
              //alert(this.item);
            });
    }
    
}
}
