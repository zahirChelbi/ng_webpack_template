import { Component } from '@angular/core';

@Component({
    selector: 'navmenu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent {
    public name:string ;
    constructor() {
           this.name ="navmenu"
    }
}