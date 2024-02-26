import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class AppHeader implements OnInit {
    open = false;

    ngOnInit(): void {
    }

    close() {
        this.open = false;
    }
}