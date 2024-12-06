import { Component, OnInit } from "@angular/core";
import { ScrollRevealService } from "../scroll-reveal.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})


export class DashboardComponent implements OnInit {

    iconArrayOfobject = [
        { Url: "<div class='py-3 px-[18px] inline-block mt-0 lg:py-5 lg:px-[26px] rounded-full bg-zinc-200'>N</div>", Name: "Next JS" },
        { Url: "<i class='bx bxl-angular p-3 lg:p-5 bg-zinc-200 rounded-full'></i>", Name: "Angular" },
        { Url: "<i class='bx bxl-mongodb p-3 lg:p-5 bg-zinc-200 rounded-full' ></i>", Name: "mongoDB" },
        { Url: "<i class='bx bxl-nodejs p-3 lg:p-5 bg-zinc-200 rounded-full' ></i>", Name: "Node Js" },
        { Url: "<p class='p-3 inline-block mt-0 lg:p-5 rounded-full bg-zinc-200'>ex</p>", Name: "Express Js" },
        { Url: "<i class='bx bxl-javascript p-3 lg:p-5 rounded-full bg-zinc-200' ></i>", Name: "JavaScript" },
        { Url: "<i class='bx bxl-typescript p-3 lg:p-5 rounded-full bg-zinc-200' ></i>", Name: "TypeScript" },
        { Url: "<i class='bx bxl-github p-3 lg:p-5 rounded-full bg-zinc-200'></i>", Name: "Git Hub" },
        { Url: "<i class='bx bxl-git p-3 lg:p-5 rounded-full bg-zinc-200'></i>", Name: "Git" },
        { Url: "<i class='bx bxl-html5 p-3 lg:p-5 rounded-full bg-zinc-200' ></i>", Name: "HTML" },
        { Url: "<i class='bx bxl-css3 p-3 lg:p-5 rounded-full bg-zinc-200' ></i>", Name: "CSS" },
        { Url: "<i class='bx bxl-bootstrap p-3 lg:p-5 rounded-full bg-zinc-200' ></i>", Name: "Bootstrap" },
        { Url: "<i class='bx bxl-tailwind-css p-3 lg:p-5 rounded-full bg-zinc-200' ></i>", Name: "Tailwind Css" },
    ]

    constructor(private scrollReveal: ScrollRevealService) { }

    ngOnInit(): void {
        this.scrollReveal.list_reveal('.list_reveal');
        this.scrollReveal.single_reveal('.single_reveal')
    }

}