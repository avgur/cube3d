import { Coord } from './coord';
import { Block } from './block';
import { BlockType } from './enums';
import { BlockLibrary } from './block_library';
import { ShapeLibrary } from './shape_library';
import { ShapeCollection } from './shape';
import { Side } from './side';

export class Cube{
    private _blocks : Block[];
    private _shapeCollection: ShapeCollection
    public selectedSide: Side;
    
    get blocks(): Block[] {
        if(!this._blocks)
        {
            this.fillEmptyRegion();
        }
        
        return this._blocks;
    }
    
    set blocks(value) {
        this._blocks = value;
    }
    
    get shapes(){
        return this._shapeCollection.shapes;
    }
    
    private fillEmptyRegion(){
        let zyxRegion = BlockLibrary.getEmptyRegion();
        this.fillRegion(zyxRegion);
    }
    
    fillRegion(zyxRegion: Map<number, Map<number, Block[]>>){
        this.blocks = [];
        for (var z = 0; z < zyxRegion.size; z++) {
            let yxRegion = zyxRegion.get(z);
            for (var y = 0; y < yxRegion.size; y++) {
                var list = yxRegion.get(y);
                for(var x = 0; x < list.length; x++)
                {
                    let block = list[x];
                    if(!block){
                        block = BlockLibrary.Undefined;
                    }
                    
                    block.coord = new Coord(x, y, z);
                    block.parentCube = this;
                    this.blocks.push(block);
                }
            }
        }
    }
    
    hideAxes(
        options: { x: boolean[], y: boolean[], z:boolean[]}){
            
        this.blocks.forEach(b => {
            var hidden = options.x[b.coord.x] 
            || options.y[b.coord.y] 
            || options.z[b.coord.z]; 
            b.visible = !hidden;
        })
    }
    
    hideTextures(hide){
        this.blocks.forEach(b => b.hideTextures(hide));
    }
    
    applyShapes(shapeCollection){
        this._shapeCollection = shapeCollection;
        this._shapeCollection.span(this._blocks);
    }
}