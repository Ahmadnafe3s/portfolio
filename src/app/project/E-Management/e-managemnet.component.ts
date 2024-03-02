import { Component, OnInit } from "@angular/core";
import { projectService } from "../project.service";


@Component({
    selector: 'app-e-management',
    templateUrl: 'e-managemnet.component.html',
    styleUrls: ['e-managemnet.component.css']
})


export class eManagementComponent implements OnInit {

    constructor(private projecService: projectService) {
    }


    
    ngOnInit(): void { }

    keyFeatures = [
        { Name: "User Authentication", featureDescription: "Users can sign up and log in, with different access levels based on user type (new or existing user)." },

        { Name: "Password Recovery", featureDescription: "The system provides a forget password option, allowing users to reset their passwords through a multi-step process. This includes email validation, OTP submission, and setting a new password." },

        { Name: "Employee Data Management", featureDescription: "Users can store comprehensive employee data in the database, including name, email, password and more info." },

        { Name: "CRUD Operations", featureDescription: "The system supports Create, Read, Update, and Delete operations, offering flexibility in managing employee information." },

        { Name: "Idle User", featureDescription: "If user is Idle (Inactive) he will be auto logged out with in 2hr this feature i am handling by a library named bn-ng-idle" }
    ]

    technologies = ["Bootstrap", "MongoDB", "Express.js", "Angular", "Node.js"]

    references = ["https://github.com/Ahmadnafe3s/Angular-Crud-Application?tab=readme-ov-file"]

}