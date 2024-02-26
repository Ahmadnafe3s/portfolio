import { Component } from '@angular/core';

@Component({
  selector: 'app-technoloies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {
  iconArrayOfobject = [
    { Url: "<i class='bx bxl-html5' ></i>", Name: "HTML" },
    { Url: "<i class='bx bxl-css3' ></i>", Name: "CSS" },
    { Url: "<i class='bx bxl-bootstrap' ></i>", Name: "Bootstrap" },
    { Url: "<i class='bx bxl-tailwind-css' ></i>", Name: "Tailwind Css" },
    { Url: "<i class='bx bxl-github'></i>", Name: "Git Hub" },
    { Url: "<i class='bx bxl-git'></i>", Name: "Git" },
    { Url: "<i class='bx bxl-javascript' ></i>", Name: "JavaScript" },
    { Url: "<i class='bx bxl-typescript' ></i>", Name: "TypeScript" },
    { Url: "<i class='bx bxl-angular'></i>", Name: "Angular" },
    { Url: "<i class='bx bxl-nodejs' ></i>", Name: "Node Js" },
    // { Url: "assets/logo/ex.png", Name: "Express Js" },
    { Url: "<i class='bx bxl-mongodb' ></i>", Name: "mongoDB" },
]
}
