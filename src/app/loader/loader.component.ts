import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
     setTimeout(() => {
       this.call();
     }, 5000);
  }
  
  call(){
    this.router.navigateByUrl("/home");
  }
}
