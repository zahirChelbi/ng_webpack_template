import { Component } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {
    public name:string ;
    constructor() {
           this.name ="about"
    }
}