import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-training';
  configuration: any = "";

  constructor() {
    console.log(environment.environment_title); // Logs  for  environment file
    this.configuration = environment;
  }
}
