import {ComponentFixture, TestBed, getTestBed, inject} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA}    from '@angular/core';
import {async} from '@angular/core/testing';
import { AppInitService } from './app.component';


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';


describe('AppInitService', () => {
  let authnLogin:  jasmine.Spy, getObject: jasmine.Spy, currentTenant: jasmine.Spy;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
       schemas: [ NO_ERRORS_SCHEMA ],
       providers: [
       ]
    })
    .compileComponents();  // compile template and css
  }));

  it('should do this!!!', () => {

    const testbed = getTestBed();
    //TODO
  });
});
