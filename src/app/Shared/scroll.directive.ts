import { Directive, HostBinding, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[blockscroll]'
})

export class BlockScrollDirective implements OnInit {
    @Input() blockscroll: boolean = false;

    ngOnInit(): void {
        // window.addEventListener('scroll', this.handleScroll())

    }

    @HostListener('window:scroll', ['$event'])

    onScroll(event: Event) {
        if (this.blockscroll) {
            event.preventDefault();
            // event.stopPropagation();

            event.stopImmediatePropagation()
        }
    }
}