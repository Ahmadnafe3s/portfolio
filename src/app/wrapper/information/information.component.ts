import { Component, OnInit } from '@angular/core';
import { ScrollRevealService } from 'src/app/scroll-reveal.service';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})



export class InformationComponent implements OnInit {

  constructor(private scrollReveal : ScrollRevealService){}

  ngOnInit(): void {

   this.scrollReveal.list_reveal('.list_reveal')
   this.scrollReveal.single_reveal('.single_reveal')

  }

}
