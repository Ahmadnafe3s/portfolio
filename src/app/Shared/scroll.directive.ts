import { Directive, HostBinding, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[blockscroll]'
})

export class BlockScrollDirective {

    blockscroll = false;

    @HostListener('click') scroll() {

        this.blockscroll = !this.blockscroll

        if (this.blockscroll) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        console.log('Scroll Blocked...');

    }
}