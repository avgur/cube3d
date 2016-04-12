import { Component, Input } from 'angular2/core';
import { Coord } from '../domain/coord';
import { Block } from '../domain/block';
import { Cube } from '../domain/cube';
import { Shape } from '../domain/shape';
import { Side } from '../domain/side';
import { SideType, SideKind } from '../domain/enums';

const BlockSize = 150; 

@Component({
    selector: 'app-cube-block',
    templateUrl: './app/components/block.component.html'
})
export class BlockComponent  {
    @Input() block: Block;
    
    setBlockStyles() {
        let x = BlockSize * (this.block.coord.x - 1);
        let y = BlockSize * (this.block.coord.y - 1);
        let z = BlockSize * (this.block.coord.z - 1);
        let styles = {
            'transform-style': 'preserve-3d',
            'transform': `translate3d(${x}px, ${y}px, ${z}px)`,
            'display': this.block.visible ? 'block' : 'none'
        }
        return styles;
    }
    
    setBlockClass(){
        let str = '';
        this.block.sides.forEach(side => {
            if(side.trimmed){
                let sideKindName = SideKind[side.sideKind];
                let k = `trimmed-${sideKindName}`;
                str += k + ' ';
            }
        });
        
        return str;
    }
    
    setSideClass(side: Side){
        var name = SideType[side.sideType];
        let className = `sideType-${name}`;
        if(side.selected) {
            className += ' side-selected';
        }    
        return className;
    }
    
    selected(side:Side){
        if(this.block.parentCube.selectedSide)
        {
            this.block.parentCube.selectedSide.selected = false;
        }
        side.selected = true;
        this.block.parentCube.selectedSide = side;
    }
}