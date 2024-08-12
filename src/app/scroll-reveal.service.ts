import { Injectable } from '@angular/core';
import ScrollReveal from 'scrollreveal';



@Injectable({
  providedIn: 'root'
})


export class ScrollRevealService {

  list_reveal(selector: string) {
    ScrollReveal().reveal(selector ,
      {
        delay: 300,
        duration: 500,
        interval: 200,
        scale: 0.8,
        origin: 'bottom'
      }
    );
  }



  single_reveal(selector: string) {
    ScrollReveal().reveal(selector ,
      {
        delay: 200,
        duration: 500,
        scale: 0.8,
      }
    );
  }

}
