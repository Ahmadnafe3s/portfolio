import { Component, OnInit } from "@angular/core";
import ScrollReveal from "scrollreveal";



@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})



export class AboutComponent implements OnInit {

    ngOnInit(): void {


        // ScrollReveal().reveal('.list_reveal',
        //     {
        //         delay: 300,
        //         duration: 500,
        //         interval: 200,
        //         scale: 0.9,
        //         origin: 'bottom'
        //     }
        // );

        // ScrollReveal().reveal('.single_reveal',
        //     {
        //         delay: 200,
        //         duration: 500,
        //         scale: 0.9,
        //     }
        // );

    }
}
