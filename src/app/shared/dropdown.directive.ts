import { Directive, HostListener, HostBinding } from '@angular/core';
import { isDirectiveInstance } from '@angular/core/src/render3/context_discovery';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}