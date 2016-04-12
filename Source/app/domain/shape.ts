import { Coord } from './coord'
import { Block } from './block'
import { Side } from './side'

export class Shape {
    private _visible : boolean =  true;
    coords: Coord[];
    blocks: Block[] = []; 
    
    constructor(public name? : string, coords?: Coord[]) {
        this.coords = coords || [];
    }
    
    add(x: number, y: number, z:number){
        let coord = new Coord(x, y, z);
        this.coords.push(coord);
    }
    
    get visible(): boolean {
        return this._visible;
    }
    
    set visible(value){
        this.blocks.forEach(b => {
            b.visible = value;
        });
        this._visible = value;
    }
    
    toggleVisibility() {
        this.visible = !this.visible;
    }
    
    canAccept(block:Block): boolean{
        return this.coords.some(c => c.equals(block.coord));
    }
    
    assign(block:Block){
        block.parentShape = this;
        this.blocks.push(block);
    }
    
    trimSides(){
        this.blocks.forEach(a => {
            this.blocks.forEach(b => {
                if( !a.coord.equals(b.coord) && this.hasSamePlane(a.coord, b.coord)){
                    this.trimIntersectedSides(a, b);
                }
            })
        })
    }
    
    hasSamePlane(a: Coord, b: Coord) : boolean {
        let cnt = a.x === b.x ? 1 : 0;
        cnt += a.y === b.y ? 1 : 0;
        cnt += a.z === b.z ? 1 : 0; 
        return cnt === 2;
    }
    
    trimIntersectedSides(a: Block, b: Block) {
         let sa : Side = null;
         let sb : Side = null;
         let diff : number;
         if((diff = a.coord.x - b.coord.x) !== 0)
         {
            sa = diff > 0 ? a.left : a.right;
            sb = diff < 0 ? b.left : b.right;
         }
         else if((diff = a.coord.y - b.coord.y) !== 0)
         {
            sa = diff < 0 ? a.bottom : a.top;
            sb = diff > 0 ? b.bottom : b.top;
         }
         else if((diff = a.coord.z - b.coord.z) !== 0)
         {
            sa = diff < 0 ? a.front : a.back;
            sb = diff > 0 ? b.front : b.back;
         }
         
         if(sa && sb)
         {
            sa.trimmed = true;
            sb.trimmed = true;
         }
    }
}

export class ShapeCollection {
    shapes: Shape[] = [];
    
    create(args: Array<Array<number>>, name: string): Shape{
        var coords = args.map(m => new Coord(m[0], m[1], m[2]));
        var shape = new Shape(name, coords);
        this.shapes.push(shape);
        return shape;
    }
    
    span(blocks: Block[]){
        blocks.forEach(b => {
            let shape = this.shapes.find(s => s.canAccept(b));
            if(shape){
                shape.assign(b);
            }    
        })
        this.shapes.forEach(s => s.trimSides()); 
    }
}