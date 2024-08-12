import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppHeader } from './header/header.component';
import { InformationComponent } from './wrapper/information/information.component';
import { AboutComponent } from './wrapper/About/about.component';
import { ProjectComponent } from './project/project.component';
import { eManagementComponent } from './project/E-Management/e-managemnet.component';
import { ContacMeComponent } from './wrapper/contac-me/contac-me.component';
import { HomeNeedsComponent } from './project/homeneeds/homeneeds.component';
import { TechnologiesComponent } from './wrapper/technologies/technologies.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { routerModule} from './router.module';
import { NgOptimizedImage } from '@angular/common';
import { NextjsHomeNeedsComponent } from './project/nextjs-homeneeds/nextjs-homeneeds.component';

@NgModule({

  declarations: [
    AppComponent,
    AppHeader,
    InformationComponent,
    AboutComponent,
    ProjectComponent,
    eManagementComponent,
    ContacMeComponent,
    HomeNeedsComponent,
    TechnologiesComponent,
    WrapperComponent,
    NextjsHomeNeedsComponent
  ],

  imports: [
    BrowserModule,
    routerModule,
    NgOptimizedImage
  ],

  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
