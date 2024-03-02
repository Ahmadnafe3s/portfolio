import { RouterModule, Routes } from "@angular/router";
import { WrapperComponent } from "./wrapper/wrapper.component";
import { NgModule } from "@angular/core";
import { eManagementComponent } from "./project/E-Management/e-managemnet.component";
import { RecipeBookComponent } from "./project/recipe-book/recipe-book.component";

const routes: Routes = [
    { path: "", component: WrapperComponent },
    { path: "e-management", component: eManagementComponent },
    { path: "home-needs", component: RecipeBookComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class routerModule { }