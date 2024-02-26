import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent {

  keyFeatures = [
    { Name: "User Authentication", featureDescription: "Users can sign up and log in, with different access levels based on user type (new or existing user)." },

    { Name: "Password Recovery", featureDescription: "The system provides a forget password option, allowing users to reset their passwords through a multi-step process. This includes email validation, OTP submission, and setting a new password." },

    { Name: "Employee Data Management", featureDescription: "Users can store comprehensive employee data in the database, including name, email, password and more info." },

    { Name: "CRUD Operations", featureDescription: "The system supports Create, Read, Update, and Delete operations, offering flexibility in managing employee information." }
]

technologies = ["Bootstrap", "MongoDB", "Express.js", "Node.js"]

references = ["https://github.com/Ahmadnafe3s/Angular-Crud-Application?tab=readme-ov-file"]

}
