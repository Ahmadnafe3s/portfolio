import { Component, OnInit, Renderer2 } from "@angular/core";
import { projectService } from "../project/project.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class AppHeader implements OnInit {

    open = false;

    Visible;;

    constructor(private renderer: Renderer2, private projectService: projectService , private router : Router) { }

    ngOnInit(): void {
        this.projectService.navLinkeVisible.subscribe(data => {
            this.Visible = data;
        })
    }

    onHomeClick() {
        this.projectService.navLinkeVisible.next(true)
        this.router.navigate(["/"])
    }

    //screen will be re scrollable cause always will be emit false

    close() {
        this.open = false;
        const body = document.body
        this.renderer.setStyle(body, "overflow", "auto")
    }


    // toggle value will be emit

    toggleOpenNav() {
        this.open = !this.open
        // this.blockScrollevent.emit(this.open)

        const body = document.body

        if (this.open) {
            this.renderer.setStyle(body, "overflow", "hidden")
        } else {
            this.renderer.setStyle(body, "overflow", "auto")
        }

    }

}