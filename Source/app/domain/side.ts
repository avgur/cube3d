import { Block } from './block'
import { Coord } from './coord'
import { SideType, SideKind } from './enums'

export class Side{
    public showTextures: boolean = true;
    public trimmed: boolean = false;
    public selected: boolean = false;
     
    constructor(public sideKind: SideKind, public sideType: SideType, public parent: Block){
    }
    
    get title() : string {
        let sideTypeTitle = SideType[this.sideType]
        let kindNumber = this.sideKind + 1;
        let sideKindTitle = SideKind[this.sideKind] + `(#${kindNumber})`;
        let belongsToMessage = "";
        if(this.parent.parentShape){
            var shapeName = this.parent.parentShape.name || "NoName";
            belongsToMessage = ` belongs to '${shapeName}'`;
        }
        let coord = this.parent.coord;
        let title = `${sideTypeTitle} (x:${coord.x}, y:${coord.y}, z:${coord.z}, ${sideKindTitle}) ${belongsToMessage}`;
        return title;
    }
}