import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})

export class AppComponent {
   title = 'Rushil';

   months = ["January", "February", "March", "April",
            "May", "June", "July", "August", "September",
            "October", "November", "December"];
   
   isavailable = true;
   myClickFunction(event) { 

      alert("Button is clicked");
      console.log(event);
   }
   changemonths(event) {
      alert("Changed month from the Dropdown");
   }
}

console.log(alert"hello");