import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppHeader } from './header/header.component';
import { InformationComponent } from './wrapper/information/information.component';
import { AboutComponent } from './wrapper/About/about.component';
import { ProjectComponent } from './project/project.component';
import { eManagementComponent } from './project/E-Management/e-managemnet.component';
import { ContacMeComponent } from './wrapper/contac-me/contac-me.component';
import { RecipeBookComponent } from './project/recipe-book/recipe-book.component';
import { TechnologiesComponent } from './wrapper/technologies/technologies.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { routerModule} from './router.module';

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
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    routerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
