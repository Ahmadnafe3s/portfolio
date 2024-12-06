import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppHeader } from './header/header.component';
import { routerModule } from './router.module';
import { NgOptimizedImage } from '@angular/common';
import { NextjsHomeNeedsComponent } from './project/nextjs-homeneeds/nextjs-homeneeds.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaxWidthWrapper } from 'src/components/MaxWidthWrapper';
import { FooterComponent } from './footer/footer.component';
import { ProjectComponent } from './project/project.component';
import { eManagementComponent } from './project/E-Management/e-managemnet.component';
import { HomeNeedsComponent } from './project/homeneeds/homeneeds.component';


@NgModule({

  declarations: [
    AppComponent,
    AppHeader,
    ProjectComponent,
    eManagementComponent,
    HomeNeedsComponent,
    NextjsHomeNeedsComponent,
    DashboardComponent,
    MaxWidthWrapper,
    FooterComponent
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
