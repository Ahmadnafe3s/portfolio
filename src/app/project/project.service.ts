import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
    providedIn: 'root'
})

export class projectService {

navLinkeVisible = new BehaviorSubject<boolean>(true)

}