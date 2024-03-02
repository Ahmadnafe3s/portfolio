import { Component } from "@angular/core";
import { projectService } from "./project.service";

@Component({
    selector: 'app-project',
    templateUrl: 'project.component.html',
    styleUrls: ['project.component.css'],

})


export class ProjectComponent {
    currentView = 'e-management'

    constructor(private projectService: projectService) { }

    onNavigate() {
        this.projectService.navLinkeVisible.next(false)
    }
}