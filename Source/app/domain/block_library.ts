import { Block } from './block'
import { BlockType, SideType, SideKind } from './enums'

class BlockBuilder
{
    private _map : any
    
    constructor(){
        this._map = {};
        this._map[BlockType.Grass] = () => this.buildCore(BlockType.Grass, [SideType.GroundWithGrass, SideType.GroundWithGrass, SideType.GroundWithGrass, SideType.Grass, SideType.GroundWithGrass, SideType.Ground]);
        this._map[BlockType.Tree] = () => this.buildCore(BlockType.Tree, [SideType.Tree, SideType.Tree, SideType.Tree, SideType.ShearTree, SideType.Tree, SideType.ShearTree]);
    }
    
    get Coal() : Block{
        return this.build(BlockType.Coal);
    }
    
    get Diamand() : Block{
        return this.build(BlockType.Diamand);
    }
    
    get Gold() : Block{
        return this.build(BlockType.Gold);
    }

    get Grass() : Block{
        return this.build(BlockType.Grass);
    }
    
    get Ground() : Block{
        return this.build(BlockType.Ground);
    }
    
    get Sand() : Block{
        return this.build(BlockType.Sand);
    }
    
    get Stone() : Block{
        return this.build(BlockType.Stone);
    }
    
    get Tree() : Block{
        return this.build(BlockType.Tree);
    }
    
    get Undefined() : Block{
        return this.build(BlockType.Undefined);
    }
    
    public build(type: BlockType){
        var method = this._map[type];
        return method ? method() : this.buildCore(type);
    }
    
    private buildCore(type: BlockType, sideTypes?: SideType[]){
        var block = new Block(type);
        if(sideTypes){
            for (let index = 0; index < sideTypes.length; index++) {
                let type = sideTypes[index];
                block.sides[index].sideType = type;
            }
        }
        return block;
    }  
    
    public getEmptyRegion() : Map<number, Map<number, Block[]>>{
        let zyxRegion = new Map<number, Map<number, Block[]>>()        
        for(let z = 0; z < 3; z++)
        {
            let yxRegion = new Map<number, Block[]>();
            zyxRegion.set(z, yxRegion);
            for(let y = 0; y < 3; y++)
            {
                let list: Block[] = []; 
                yxRegion.set(y, list)
                for(let x = 0; x < 3; x++)
                {
                    list.push(BlockLibrary.Undefined);
                }
            }
        }
        
        return zyxRegion;
    }  
    
    public getRegionV1() : Map<number, Map<number, Block[]>>{
        let zyxRegion = new Map<number, Map<number, Block[]>>()
        let yxRegion1 = new Map<number, Block[]>();
        let yxRegion2 = new Map<number, Block[]>();
        let yxRegion3 = new Map<number, Block[]>();
        
        // projection 1
        yxRegion1.set(0, [this.Grass.with(SideKind.Top, SideType.GrassWithHStairs), this.Grass.with(SideKind.Top, SideType.GrassWithCStairs), this.Grass.with(SideKind.Right, SideType.GroundWithGrassAndFlowerHead)]);
        yxRegion1.set(1, [this.Stone, this.Stone, this.Ground.with(SideKind.Right, SideType.GroundWithFlowerStick)]);
        yxRegion1.set(2, [this.Stone.with(SideKind.Front, SideType.StoneWithGrass).with(SideKind.Left, SideType.StoneWithGrass).with(SideKind.Bottom, SideType.StoneOnGrass), this.Stone.with(SideKind.Front, SideType.StoneWithFlower).with(SideKind.Bottom, SideType.StoneOnGrass), this.Ground.with(SideKind.Front, SideType.GroundWithBottomGrass).with(SideKind.Right, SideType.GroundWithFlowerStickAndGrass)]);
        
        // projection 2
        yxRegion2.set(0, [this.Grass, this.Grass.with(SideKind.Top, SideType.GrassWithVStairs), this.Tree]);
        yxRegion2.set(1, [this.Gold, this.Diamand, this.Tree]);
        yxRegion2.set(2, [this.Gold.with(SideKind.Left, SideType.GoldWithFlower), this.Coal, this.Tree.with(SideKind.Right, SideType.TreeWithGrass)]);
        
        // projection 3
        yxRegion3.set(0, [this.Grass.with(SideKind.Back, SideType.GroundWithGrassAndStairs), this.Grass.with(SideKind.Top, SideType.GrassWithVStairs), this.Grass].reverse());
        yxRegion3.set(1, [this.Sand.with(SideKind.Back, SideType.SandWithStairs), this.Sand, this.Gold].reverse());
        yxRegion3.set(2, [this.Sand.with(SideKind.Right, SideType.SandWithGrass).with(SideKind.Back, SideType.SandWithStairsAndGrass), this.Sand.with(SideKind.Back, SideType.SandWithFlower), this.Gold.with(SideKind.Back, SideType.GoldWithGrass)].reverse());
        
                
        zyxRegion.set(0, yxRegion3);
        zyxRegion.set(1, yxRegion2);
        zyxRegion.set(2, yxRegion1);
        
        return zyxRegion;
    }  
}

export var BlockLibrary = new BlockBuilder();