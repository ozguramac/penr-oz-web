 import { NgModule, APP_INITIALIZER } from '@angular/core';

 import { BrowserModule } from '@angular/platform-browser';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { HttpModule } from '@angular/http';
 import { PaginationModule, ModalModule, DatepickerModule } from 'ng2-bootstrap'
 import { Ng2TableModule } from 'ng2-table/ng2-table';

 import {routing} from './app.routes';

 import {HomeComponent} from './home/home.component';

 import {HeaderComponent} from './common/header.component';
 import {FooterComponent} from './common/footer.component';

 import {AppComponent, AppInitService }  from './app.component';

@NgModule({
    imports: [// module dependencies
       BrowserModule
      ,FormsModule
      ,ReactiveFormsModule
      ,HttpModule
      ,PaginationModule.forRoot()
      ,Ng2TableModule
      ,DatepickerModule.forRoot()
      ,ModalModule.forRoot()
      ,routing
     ]
    ,declarations: [// components and directives
        AppComponent
       ,HomeComponent
       ,HeaderComponent
       ,FooterComponent
     ]
    ,bootstrap: [ AppComponent ]
    ,providers: [// services
       ,AppInitService
       ,{provide: APP_INITIALIZER, useFactory: (svc: AppInitService) => () => svc.init(),deps: [AppInitService], multi: true }
     ]
})
export class AppModule { }
