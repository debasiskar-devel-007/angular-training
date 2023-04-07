import { Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from './../environments/environment';
// import { Router } from '@angular/router';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-training';
  configuration: any = "";
  @ViewChild('mainoutlet')
  input!: ElementRef;

  constructor(public router: Router) {
    console.log(environment.environment_title); // Logs  for  environment file
    this.configuration = environment;




    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator


        try {
          // const mainoutlet = this.renderer.selectRootElement('#mainoutlet');
          let mainoutlet = this.input.nativeElement;
          console.log('in try block NavigationEnd ')
          mainoutlet.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });
          // {
          //   behavior: "smooth",
          //   block: "start",
          //   inline: "nearest"
          // }
        } catch (err) {
          console.log('error', err)

        }
        console.log('nav end !!! ');

      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });





  }
  changeroute() {

    this.router.navigate(['/lazymodule2/lazy2c1'])
  }
}
