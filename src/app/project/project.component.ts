import { Component, OnInit } from "@angular/core";
import { projectService } from "./project.service";
import { ScrollRevealService } from "../scroll-reveal.service";

@Component({
    selector: 'app-project',
    templateUrl: 'project.component.html',
    styleUrls: ['project.component.css'],

})


export class ProjectComponent implements OnInit{
    currentView = 'e-management'

    constructor(private projectService: projectService , private scrollReveal : ScrollRevealService) { }

    ngOnInit(): void {
        this.scrollReveal.list_reveal('.list_reveal')
    }

    onNavigate() {
        this.projectService.navLinkeVisible.next(false)
    }
}