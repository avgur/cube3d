import { Component } from 'angular2/core';
import { CubeComponent } from './cube.component';

@Component({
    selector: 'app-shell',
    templateUrl: './app/components/app.component.html',
    directives: [
        CubeComponent
    ]
})
export class AppComponent { 
}