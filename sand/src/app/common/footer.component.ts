import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
    selector: 'sand-footer',
    template: require('./footer.template.html')

})
export class FooterComponent {

    constructor( private _router: Router, protected _route: ActivatedRoute){
    }

    protected copyright:string = "@ 2017 Derin Works LLC";
}
