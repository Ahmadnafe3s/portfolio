import { Component } from "@angular/core";
import { projectService } from "../project.service";

@Component({
    selector: 'app-nextjs-homeneeds',
    templateUrl: './nextjs-homeneeds.component.html',
    styleUrls: ['./nextjs-homeneeds.component.css']
})


export class NextjsHomeNeedsComponent {

    constructor(private projectService: projectService) {
        this.projectService.navLinkeVisible.next(false)
    }


    keyFeatures = [
        { Name: "User Authentication", featureDescription: "Users can sign up and log in, with different access levels based on user type (new or existing user)." },

        { Name: 'Email verification', featureDescription: 'Appication has feture for Email verification while during SignUp process . Application sents an OTP to that email which user try to sign up.' },

        { Name: 'Pagination', featureDescription: 'Application supports pagination feature as well (Display a number of contents)' },

        { Name: 'Category', featureDescription: 'User can see recipes based upon their preference category.' },

        { Name: 'Search', featureDescription: 'User can search recipes as well' },

        {Name : 'Dynamic Form' , featureDescription : 'Application has a dynamic form fot posting recipes which has lots of options.'},

        { Name: 'Forget Password', featureDescription: 'In case if user gets forget their password he has option to reset their password by following simple steps.' },

        { Name: "Recipe Management", featureDescription: "Users can add, read, update, and delete recipes with ingredients they can store data like recipe name , description and details. One-click transfer of recipe ingredients to the shopping list section." },

        { Name: "Shopping List", featureDescription: "Users can view ingredients that is transferred from recipe book and also they can create , Read , update and delete ingredients independly. All the data of shopping list is managed in localStorage" },

        { Name: 'Profile', featureDescription: 'Authenticated user can see their own and other users profile and their posts . In the profile section authenticated user can manage their own post like Can perform CRUD operations , Alos user can Deactivate their account and can change their  Account password.' },

        { Name: "CRUD Operations", featureDescription: "The system supports Create, Read, Update, and Delete operations, offering flexibility in managing recipes and shopping list." }
    ]

    technologies = ["Bootstrap", "nextJS", "mongoDB Atlas"]

    references = [
        "https://github.com/Ahmadnafe3s/nextJs-HomeNeeds",
        "https://homeneeds.vercel.app"
    ]


}