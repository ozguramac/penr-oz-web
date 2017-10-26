
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'sand-app',
    template: require('./app.template.html')
})
export class AppComponent {
    constructor( private _router: Router) {
    }
}

@Injectable()
export class AppInitService {
    constructor(
    ) {}

    init(){
    }
}
