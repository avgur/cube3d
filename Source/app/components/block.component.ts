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
                let k = `trimmed-${side.sideKindName}`;
                str += k + ' ';
            }
            if(side.selected){
                let k = `block-selected`;
                str += k + ' ';
            }
        });
        
        return str;
    }
    
    setSideClass(side: Side){
        let className = `sideType-${side.sideTypeName}`;
        if(side.selected) {
            className += ' side-selected';
        }    
        return className;
    }
    
    select(side:Side){
        
        var oldSelected = this.block.parentCube.selectedSide;
        if(oldSelected)
        {
            oldSelected.selected = false;
        }
        
        side.selected = (side !== oldSelected);
        this.block.parentCube.selectedSide = side.selected ? side : null;
    }
}