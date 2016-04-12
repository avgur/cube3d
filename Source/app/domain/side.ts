import { Block } from './block'
import { Coord } from './coord'
import { SideType, SideKind } from './enums'

export class Side{
    private coordMap = {
        x: [0, 1, 2],
        y: [2, 1, 0],
        z: [0, 1, 2]
    };
    public trimmed: boolean = false;
    public selected: boolean = false;
    
    constructor(public sideKind: SideKind, public sideType: SideType, public parent: Block){
    }
    
    get sideTypeTrimmedName(){
        var name = this.trimmed ? 'Undefined' : this.sideTypeName;
        return name;
    }
    
    get sideTypeName(){
        var name = SideType[this.sideType];
        return name;
    }
    
    get sideKindName(){
        var name = SideKind[this.sideKind];
        return name;
    }
    
    get sideKindIndex(){
        return this.sideKind + 1;
    }
    
    get title() : string {
        let sideTypeTitle = this.sideTypeTrimmedName;
        let kindNumber = this.sideKindIndex;
        let sideKindTitle = this.sideKindName + `(#${kindNumber})`;
        let belongsToMessage = "";
        if(this.parent.parentShape){
            var shapeName = this.parent.parentShape.name || "NoName";
            belongsToMessage = ` belongs to '${shapeName}'`;
        }
        let x = this.parent.displayCoord.x;
        let y = this.parent.displayCoord.y;
        let z = this.parent.displayCoord.z;
        let title = `${sideTypeTitle} (x:${x}, y:${y}, z:${z}, ${sideKindTitle}) ${belongsToMessage}`;
        return title;
    }
}