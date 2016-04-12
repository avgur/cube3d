export class Coord{
    constructor(public x: number, public y: number, public z: number){
    }
    
    equals(coord: Coord) {
        return this.x === coord.x && this.y === coord.y && this.z === coord.z;
    }
    
    get id(){
        return `${this.x}${this.y}${this.z}`;
    }
}