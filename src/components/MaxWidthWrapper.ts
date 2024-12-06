import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "MaxWidthWrapper",
    template: `
    <div [ngClass]="className" class="px-2.5 md:px-20 h-full w-full mx-auto max-w-screen-xl">
    <ng-content></ng-content>
    </div>
    `
})

export class MaxWidthWrapper {
    @Input('className') className: String;
}