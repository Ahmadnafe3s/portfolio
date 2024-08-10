import { Component } from '@angular/core';
import { projectService } from '../project.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent {

  constructor(private projectService: projectService){
    this.projectService.navLinkeVisible.next(false)
  }

  
  keyFeatures = [
    { Name: "User Authentication", featureDescription: "Users can sign up and log in, with different access levels based on user type (new or existing user)." },

    { Name: "Recipe Management", featureDescription: "Users can add, read, update, and delete recipes with ingredients they can store data like recipe name , description and details. One-click transfer of recipe ingredients to the shopping list section." },

    { Name: "Shopping List", featureDescription: "Users can view ingredients that is transferred from recipe book and also they can create , Read , update and delete ingredients independly. All the data of shopping list is managed in localStorage" },
    { Name: "Lazy Loading", featureDescription: "Application supports Lazy loading" },

    { Name: "CRUD Operations", featureDescription: "The system supports Create, Read, Update, and Delete operations, offering flexibility in managing recipes list and shopping list." }
  ]

  technologies = ["Bootstrap", "Angular", "Firebase"]

  references = [
    "https://github.com/Ahmadnafe3s/Recipe-Book-",
    "https://recipe-book-431a4.web.app"
  ]

}
