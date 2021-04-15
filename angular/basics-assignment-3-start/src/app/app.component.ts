import { Component } from "@angular/core";
import { timestamp } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  displayDetails = false;
  buttonClicks = [];
  toggleDetails() {
    this.buttonClicks.push(Date.now());
    this.displayDetails = !this.displayDetails;
  }
}
