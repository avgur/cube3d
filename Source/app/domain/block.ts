import { Cube } from './cube'
import { Coord } from './coord'
import { Side } from './side'
import { BlockType, SideType, SideKind, findDefaultSideType } from './enums'
import { Shape } from './shape'
 

export class Block {
    public type: BlockType;
    public sides: Side[];
    public parentShape: Shape;
    public visible: boolean = true;
    
    constructor(public blockType:BlockType, public coord?: Coord, public parentCube?:Cube){
        this.sides = []
        for(let sideKind = SideKind.Front; sideKind <= SideKind.Bottom; sideKind++){
            let side = new Side(sideKind, findDefaultSideType(blockType), this);
            this.sides.push(side);
        }
    }
    
    get front() {
        return this.sides[SideKind.Front];
    }
    get right() {
        return this.sides[SideKind.Right];
    }
    get left() {
        return this.sides[SideKind.Left];
    }
    get top() {
        return this.sides[SideKind.Top];
    }
    get back() {
        return this.sides[SideKind.Back];
    }
    get bottom() {
        return this.sides[SideKind.Bottom];
    }
    
    with(sideKind: SideKind, sideType: SideType) : Block{
        this.sides[sideKind].sideType = sideType;
        return this;
    }
    
    hideTextures(hide){
        this.sides.forEach(s => s.showTextures = !hide);
    }
}