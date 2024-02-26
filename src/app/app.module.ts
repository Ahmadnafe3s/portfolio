import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppHeader } from './header/header.component';
import { InformationComponent } from './information/information.component';
import { AboutComponent } from './About/about.component';
import { ProjectComponent } from './project/project.component';
import { eManagementComponent } from './project/E-Management/e-managemnet.component';
import { ContacMeComponent } from './contac-me/contac-me.component';
import { RecipeBookComponent } from './project/recipe-book/recipe-book.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BlockScrollDirective } from './Shared/scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    InformationComponent,
    AboutComponent,
    ProjectComponent,
    eManagementComponent,
    ContacMeComponent,
    RecipeBookComponent,
    TechnologiesComponent,
    BlockScrollDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
