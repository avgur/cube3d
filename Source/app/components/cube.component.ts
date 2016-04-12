import { Component, OnInit } from 'angular2/core';
import { Coord } from '../domain/coord';
import { Block } from '../domain/block';
import { Cube } from '../domain/cube';
import { Shape } from '../domain/shape';
import { BlockLibrary } from '../domain/block_library';
import { ShapeLibrary } from '../domain/shape_library';

import { BlockComponent } from './block.component';

declare var activateCubeRun: () => {};

@Component({
    selector: 'app-cube',
    templateUrl: './app/components/cube.component.html',
    directives: [
        BlockComponent
    ]
})
export class CubeComponent implements OnInit {
    
    cube: Cube;
    
    axisX: boolean[] = [ true, true, true ];
    axisY: boolean[] = [ true, true, true ];
    axisZ: boolean[] = [ true, true, true ];
    texturesVisible: boolean = true;
    trimmedVisible: boolean = false;
    
    constructor() {
        this.cube = new Cube();
        this.cube.fillRegion(BlockLibrary.getRegionV1());
        this.cube.applyShapes(ShapeLibrary.getShapeCollectionV1());
    }
    
    ngOnInit(){
        activateCubeRun();
    }
    
    canToggleAxis(axis: boolean[], current: number){
        return axis.filter(v => v).length > 1 || !axis[current];
    }
    
    toggleAxisVisibility(axis: boolean[], current: number){
        axis[current] = !axis[current]; 
        
        this.cube.hideAxes(
            {
                x: this.axisX.map(v => !v),
                y: this.axisY.map(v => !v),
                z: this.axisZ.map(v => !v)
            });
    }
    
    toggleShapeVisibility(shape: Shape) {
        shape.toggleVisibility();
    }
    
    toggleTextures(){
        //this.cube.hideTextures(!this.textures);
    }
    
    reset(){
        this.texturesVisible = true;
        this.trimmedVisible = false;
        this.axisX = [true, true, true];
        this.axisY = [true, true, true];
        this.axisZ = [true, true, true];
        this.cube.shapes.forEach(s => s.visible = true);
    }
}