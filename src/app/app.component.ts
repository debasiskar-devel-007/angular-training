import { Component } from '@angular/core';
import { environment } from './../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-training';
  configuration: any = "";

  constructor(public router: Router) {
    console.log(environment.environment_title); // Logs  for  environment file
    this.configuration = environment;
  }
  changeroute() {

    this.router.navigate(['/lazymodule2/lazy2c1'])
  }
}
