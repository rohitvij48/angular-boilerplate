
import {
    Directive, ElementRef, AfterViewChecked,
    Input
} from '@angular/core';

@Directive({
    selector: '[dynamicMatchWidth]'
})
export class DynamicMatchWidthDirective implements AfterViewChecked {
    // class name to match width
    @Input('dynamicMatchWidth')
    dynamicMatchWidthObject: string;

    constructor(private el: ElementRef) {
    }

    ngAfterViewChecked() {
        // call our matchHeight function here
        this.matchWidth(this.el.nativeElement, this.dynamicMatchWidthObject);
    }

    matchWidth(parent: HTMLElement, className: string) {
        // step 1: find all the child elements with the selected class name
        const children = parent.getElementsByClassName(className);

        if (!children) { return; }

        // step 1b: reset all children width
        Array.from(children).forEach((x: HTMLElement) => {
            x.style.width = 'initial';
        });

        // step 2a: get all the child elements widths
        const itemWidth = Array.from(children)
            .map(x => x.getBoundingClientRect().width);

        // step 2b: find out the tallest
        const maxWidth = itemWidth.reduce((prev, curr) => {
            return curr > prev ? curr : prev;
        }, 0);

        // step 3: update all the child elements to the tallest width
        Array.from(children)
            .forEach((x: HTMLElement) => x.style.width = `${maxWidth}px`);
    }
}
