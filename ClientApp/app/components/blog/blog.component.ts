import { Component } from '@angular/core';

@Component({
    selector: 'blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent {
    public name:string ;
    constructor() {
           this.name ="blog"
    }
}