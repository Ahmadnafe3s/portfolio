import { Component, OnInit } from '@angular/core';
import { ScrollRevealService } from 'src/app/scroll-reveal.service';

@Component({
  selector: 'app-contac-me',
  templateUrl: './contac-me.component.html',
  styleUrls: ['./contac-me.component.css']
})
export class ContacMeComponent implements OnInit{

  constructor(private scrollReveal : ScrollRevealService){}

  ngOnInit(): void {
    this.scrollReveal.list_reveal('.list_reveal')
  }

}
