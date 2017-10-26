import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
    selector: 'sand-header',
    template: require('./header.template.html')
})
export class HeaderComponent {
    constructor(
        private _router: Router,
        protected _route: ActivatedRoute,
    ){

    }
    ngOnInit() {
    }

    onLogout(){
    }

    get logo() {
        return "/assets/images/profile.jpg";
    }
}
