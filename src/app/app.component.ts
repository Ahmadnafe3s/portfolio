import { Component, OnInit} from '@angular/core';
import AOS from "aos"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      once: true,
      duration: 1000,
      offset: 200,
      delay: 100
    });
  }
}
